
/**
 * Module dependencies.
 * @api private
 */

var dom = require('stomach');


/**
 * Expose 'attach'
 */

module.exports = attach;


/**
 * Attach stream to a video element.
 *
 * Examples:
 *
 *   attach(media, 'video');
 *   attach(media, node, options);
 *
 * @param {Media | Stream} media
 * @param {Element | String} el
 * @param {Object} options
 * @return {Media}
 * @api public
 * 
 * @see  http://github.com/bredelemedia
 */

function attach(media, el, options) {
  var node = dom(el);
  var success = function(stream, url) {
    node.src = url;
  };
  var video;
  if(typeof media === 'function') {
    video = media(options, success);
  } else {
    video = media;
    video.set(options);
    video.capture(success);
  }
  node.autoplay = video.get('autoplay');
  //NOTE: it should work with stream too instead media
  return video;
}

