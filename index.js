
/**
 * Expose 'attach'
 */

module.exports = attach;


/**
 * Render html from string or return
 * query selector.
 * 
 * @param  {String | Element} tmpl 
 * @return {Element}
 */

function domify(tmpl) {
  if(typeof tmpl === 'string') {
     if(tmpl[0] === '<') {
       var div = document.createElement('div');
       div.insertAdjacentHTML('beforeend', tmpl);
       return div.firstChild;
     } 
     return document.querySelector(tmpl);
   }
   return tmpl;
}


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
  var node = domify(el);
  var video;
  if(typeof media === 'function') {
   if(!media.set) {
    video = media(options, function(stream, url) {
      node.src = url;
    });
   } else {
    video = media;
    video.set(options);
    video(function(stream, url) {
      node.src = url;
    });
   }
   node.autoplay = video.get('autoplay');
  }
  return video;
}
