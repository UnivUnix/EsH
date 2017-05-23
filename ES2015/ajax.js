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
 * @class Ajax
 * @classdesc XMLHttpRequest object handler.
 */
var Ajax = exports.Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);

    /** @access private */
    var UNKNOWN_ERROR = 1;
    var NO_URL_DEFINED = 10;
    var NO_HEADER_DEFINED = 11;
    var NO_DATA = 12;
  }
  /**
   * Function that make an AJAX GET request.
   * @param   {string}   url      URL of the document to get.
   * @param   {function} success  Function returned in case of success (callback).
   * @param   {function} error    Function returned in case of error (callback).
   * @param   {function} progress Function returned in case of progress event (callback).
   * @param   {function} abort    Function returned in case of abort event (callback).
   * @since 0.0.1
   */


  _createClass(Ajax, [{
    key: 'get',
    value: function get(url, success, error, progress, abort) {
      var xhr = new XMLHttpRequest();
      if (url === undefined) {
        return error(this.NO_URL_DEFINED);
      }
      xhr.open('GET', url);
      xhr.addEventListener('load', function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          success(xhr.responseText);
        } else {
          error(xhr.status);
        }
      });
      xhr.addEventListener('error', function () {
        error(this.UNKNOWN_ERROR);
      });
      if (progress !== undefined) {
        xhr.addEventListener('progress', progress);
      }
      if (abort !== undefined) {
        xhr.addEventListener('abort', abort);
      }
      xhr.send();
    }
    /**
     * Function that make an AJAX POST request.
     * @param   {string}   url     URL of the document to send data.
     * @param   {Array}    headers Array of request header objects. Each on contains a name and a value.
     * @param   {string}   data    String of data to send.
     * @param   {function} error   Function returned in case of error.
     * @since 0.0.1
     */

  }, {
    key: 'post',
    value: function post(url, headers, data, error) {
      var xhr = new XMLHttpRequest();
      if (url === undefined) {
        return error(this.NO_URL_DEFINED);
      }
      xhr.open('POST', url);
      if (headers === undefined) {
        return error(this.NO_HEADER_DEFINED);
      }
      for (var i = 0; i < headers.length; i++) {
        xhr.setRequestHeader(headers[i].name, headers[i].value);
      }
      if (data === undefined) {
        return error(this.NO_DATA);
      }
      xhr.send(data);
    }
  }]);

  return Ajax;
}();