# Easy & Simple Js Captcha
[![](https://data.jsdelivr.com/v1/package/npm/@haikel/min-captcha/badge)](https://www.jsdelivr.com/package/npm/@haikel/min-captcha)
![captcha img](https://i.ibb.co/q7bwGJq/captc1.png)
![snyk-badge](https://snyk.io/test/github/haikelfazzani/min-captcha/badge.svg)
![badgen](https://badgen.net/bundlephobia/min/@haikel/min-captcha)
![badgen](https://badgen.net/bundlephobia/minzip/@haikel/min-captcha@1.3.2)

### [Demo](https://min-captcha.netlify.com)
```js
$ npm i @haikel/min-captcha --save
```

## Usage

```js
import captcha from '@haikel/min-captcha';
or
const captcha = require('@haikel/min-captcha');  
```
Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@haikel/min-captcha@1.3.2/index.min.js"></script>
```


## Examples
```js
const config = { 
    nbChars: 3,
    charPool: "abcdef123456",
    charsColor: "#000" // or rgb(0, 0, 0)
};

const { canvas, rndStr } = captcha.setup(config);

console.log(canvas, rndStr)
// <canvas width="130" height="30"></canvas> "c22"
```

### setup() method in details
```js
> setup(config) : object // { canvas, rndStr }     

// by default : 
config = {
    nbChars : 5, 
    charPool: "ABCDEFGHIKLMNOPQRSTVXYZ123456789",
    charsColor, // random rgb color
    cnvsWidth : 130, 
    cnvsHeight : 30,
    textFont : "18px Arial", 
    textPosX : 30, 
    textPosY : 30
};

// textPosX : The x coordinate where to start painting the text (relative to the canvas)    
// textPosY : The y coordinate where to start painting the text (relative to the canvas)
```

## License
MIT
