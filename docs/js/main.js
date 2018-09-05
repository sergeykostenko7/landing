/* Menu Collapse Toggle */
const toggle = $("#btn-toggle");

toggle.on("click", function() {
  $("#header-collapse").toggleClass("show");
});

/* Slick Slider Initialize */
const $slider = $('.slider__main');

$(document).ready(function() {
  $('.slick-slider').on('init', function(slick) {
    $slider.append('<div class="slick-counter"></div>');
  });

  $('.slick-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $slider.find('.slick-counter').html('<span>' + i + '</span>' + ' of ' + slick.slideCount);
  });

  $('.slick-slider').slick({
      appendArrows: '.slick-buttons',
    }
  );
});

/* Jumbotron Timer */
$(document).ready(function() {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const daysLeft = new Date(Date.now() + (13 * 24 * 60 * 60 * 1000));

  let countDown = daysLeft.getTime(),
      x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

          $('#days').text(Math.floor(distance / (day)));
          $('#hours').text(Math.floor((distance % (day)) / (hour)));
          $('#minutes').text(Math.floor((distance % (hour)) / (minute)));
          $('#seconds').text(Math.floor((distance % (minute)) / second));
      }, second);
});
