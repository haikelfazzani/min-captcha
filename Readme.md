# Easy & Simple Js Capctha
![captcha img](https://i.ibb.co/q7bwGJq/captc1.png)
![build-succes](https://img.shields.io/badge/build-succes-brightgreen.svg)
![version](https://img.shields.io/badge/version-1.2.0-blue.svg)
![snyk-badge](https://snyk.io/test/github/haikelfazzani/min-captcha/badge.svg)

[Demo](https://min-captcha.netlify.com)
```js
npm i @haikel/min-captcha
```

## Usage

```js
import setupCanvas from '@haikel/min-captcha';
or
const setupCanvas = require('@haikel/min-captcha');  
```

## Examples
```js
const config = { 
    nbChars: 3,
    charPool: "abcdef123456",
    charsColor: "#000" // or rgb(0, 0, 0)
};

let { canvas } = setupCanvas(config);

let myDiv = document.getElementById("my-div");
myDiv.appendChild(canvas);
```

## setupCanvas in details
```js
> setupCanvas(config) :return object
// { canvas, rndStr }     

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
