'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file
 * @author Ángel González <aglezabad@gmail.com>
 * @version 0.0.1
 */

/**
 * @class Animate
 * @classdesc animate.css handler without jQuery.
 */
var Animate = exports.Animate = function () {
  function Animate() {
    _classCallCheck(this, Animate);
  }

  _createClass(Animate, [{
    key: 'set',
    value: function set(element, animation, loop) {
      element.classList.add('animated');
      if (loop) {
        element.classList.add('infinite');
      }
      element.classList.add(animation);
    }
  }, {
    key: 'unset',
    value: function unset(element, animation) {
      element.classList.remove(animation, 'infinite', 'animated');
    }
  }]);

  return Animate;
}();