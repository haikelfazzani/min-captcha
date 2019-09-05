# 🔒 Easy & Simple Js Captcha ![captcha img](https://i.ibb.co/q7bwGJq/captc1.png)
[![](https://data.jsdelivr.com/v1/package/npm/@haikel/min-captcha/badge)](https://www.jsdelivr.com/package/npm/@haikel/min-captcha)
![snyk-badge](https://snyk.io/test/github/haikelfazzani/min-captcha/badge.svg)
![badgen](https://badgen.net/bundlephobia/min/@haikel/min-captcha)
![badgen](https://badgen.net/bundlephobia/minzip/@haikel/min-captcha@1.3.2)

### [Demo](https://codepen.io/haikelfazzani-the-bold/pen/XWrKjLV)

```js
$ npm i @haikel/min-captcha --save
```

## Usage

```js
import captcha from '@haikel/min-captcha';
// or
const captcha = require('@haikel/min-captcha');  
```
Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@haikel/min-captcha@1.4.0/index.min.js"></script>
```

## Examples
**captcha([object]) : object**
```js
const { canvas, rndStr } = captcha();
console.log(canvas, rndStr)
// <canvas width="130" height="30"></canvas> "c22" 
```

```js
// or you can specify your own config
const config = { nbChars: 3,charPool: 'abcdef123456' };

const { canvas, rndStr } = captcha(config);

console.log(canvas, rndStr)
// <canvas width="130" height="30"></canvas> "c22"   
```

```js
// by default : 
config = {
    nbChars : 5, 
    charPool: 'ABCDEFGHIKLMNOPQRSTVXYZ123456789',
    charsColor, // random rgb color
    cnvsWidth : 130, 
    cnvsHeight : 30,
    textFont : '18px Arial', 
    textPosX : 30, 
    textPosY : 30
};

// textPosX : The x coordinate where to start painting the text (relative to the canvas)    
// textPosY : The y coordinate where to start painting the text (relative to the canvas)
```

## Notes
- Supported in all old and modern browsers.
- All pull requests are welcome, feel free.

## License
MIT
