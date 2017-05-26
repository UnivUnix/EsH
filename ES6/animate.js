/**
 * @file
 * @author Ángel González <aglezabad@gmail.com>
 * @version 0.0.1
 */

/**
 * @class Animate
 * @classdesc animate.css handler without jQuery.
 */
export class Animate {
  set (element, animation, loop) {
    element.classList.add('animated');
    if (loop) {
      element.classList.add('infinite');
    }
    element.classList.add(animation);
  }

  unset (element, animation) {
    element.classList.remove(animation, 'infinite', 'animated');
  }
}
