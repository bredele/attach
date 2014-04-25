attach
======

Attach user media or stream to a video element

	
## Installation

with [component](http://github.com/component/component):

	$ component install bredele/attach


## Usage
 
  Attach automatically **[media](http://github.com/bredele/media)** stream to a video element and return the media:


```js
var media = require('media');
var attach = require('attach');

attach(media, '.video');
attach(media, '.otherVideo',  {
	autoplay: false
});
```

  Attach works conjunctly with [media](http://github.com/bredele/media) to allow for more flexibility:

```js
var media = media();
media.set('type', 'streaming');
media.disable('audio');
attach(media, node);
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.