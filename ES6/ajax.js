/**
 * @file
 * @author Ángel González <aglezabad@gmail.com>
 * @version 0.0.1
 */

/**
 * @class Ajax
 * @classdesc XMLHttpRequest object handler.
 */
export class Ajax {
  constructor () {
    /** @access private */
    const UNKNOWN_ERROR = 1;
    const NO_URL_DEFINED = 10;
    const NO_HEADER_DEFINED = 11;
    const NO_DATA = 12;
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
  get (url, success, error, progress, abort) {
    let xhr = new XMLHttpRequest();
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
  post(url, headers, data, error){
    let xhr = new XMLHttpRequest();
    if (url === undefined) {
      return error(this.NO_URL_DEFINED);
    }
    xhr.open('POST', url);
    if (headers === undefined) {
      return error(this.NO_HEADER_DEFINED);
    }
    for(var i = 0; i < headers.length; i++){
      xhr.setRequestHeader(headers[i].name, headers[i].value);
    }
    if (data === undefined) {
      return error(this.NO_DATA);
    }
    xhr.send(data);
  }
}
