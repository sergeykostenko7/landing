var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('styles', function() {
  gulp.src('./dev/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade:true}))
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src('./dev/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('js',function() {
  gulp.src('./dev/js/**/*.js')
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('libs',function() {
  gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dist/libs/jquery'))
  gulp.src('node_modules/slick-carousel/slick/slick.min.js')
    .pipe(gulp.dest('./dist/libs/slick'))
  gulp.src('node_modules/slick-carousel/slick/slick.css')
    .pipe(gulp.dest('./dist/libs/slick'))
  gulp.src('node_modules/slick-carousel/slick/ajax-loader.gif')
    .pipe(gulp.dest('./dist/libs/slick'))
  gulp.src('node_modules/slick-carousel/slick/fonts/**/*')
    .pipe(gulp.dest('./dist/libs/slick/fonts'))
  gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
    .pipe(gulp.dest('./dist/libs/fontawesome/css'))
  gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
    .pipe(gulp.dest('./dist/libs/fontawesome/webfonts'))
});

gulp.task('images',function() {
  gulp.src('./dev/images/**/*')
  .pipe(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/images'));
});

gulp.task('fonts', function() {
  gulp.src('./dev/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
  gulp.watch('./dev/scss/**/*.scss', ['styles']);
  gulp.watch('./dev/js/**/*.js', ['js']);
  gulp.watch('./dev/images/**/*', ['images']);
  gulp.watch('./dev/fonts/**/*', ['fonts']);
  gulp.watch('./dev/**/*.html', ['html']);
});

gulp.task('default', ['styles', 'html', 'js', 'libs', 'images', 'fonts', 'browser-sync']);
