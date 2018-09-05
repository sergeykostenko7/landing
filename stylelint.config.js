module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-no-vendor-prefix": true,
        "color-hex-case": "lower",
        "color-named": "never",
        "selector-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
        "selector-max-id": 0,
        "selector-max-class": 3,
        "selector-max-combinators": 2,
        "selector-max-attribute": 1,
        "selector-max-type": 1,
        "selector-max-universal": 1,
        "selector-type-no-unknown": [true, {
            "ignoreTypes": ["/^md-/"],
          }],
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "ignores", "include", "extend", "mixin", "content", "supports", "for", "each", "else"]
        }],
        "indentation": 4,
        "number-leading-zero": null,
        "unit-whitelist": ["em", "rem", "s", "ms", "vh", "vw", "deg", "px", "%", "in", "dpcm", "fr"],
    }
}
