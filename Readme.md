<h2>Easy & Simple Capctha</h2>
<a href="#"><img src="https://img.shields.io/badge/build-succes-brightgreen.svg"></a>
<a href="#"><img src="https://img.shields.io/badge/version-1.1.3-blue.svg"></a>
<a href="https://snyk.io/test/github/haikelfazzani/min-captcha">
<img src="https://snyk.io/test/github/haikelfazzani/min-captcha/badge.svg" 
alt="Known Vulnerabilities" 
data-canonical-src="https://snyk.io/test/github/haikelfazzani/min-captcha" 
style="max-width:100%;"></a>

<pre><code>npm i @haikel/min-captcha</code></pre>

<h2>Usage</h2>

<pre><code>import Captcha from './node_modules/@haikel/min-captcha';
or
let captcha = require('./node_modules/@haikel/min-captcha');    
</code></pre>

<pre><code>
<b>Example</b>
// 1 - First :
let captcha = new Captcha();

// 2 - Second : 
let myCanvasElement = captcha.setupCanvas();
// => "\<canvas width="150" height="30"></canvas>\"

// 3 - And last : now you can append the myCanvasElement to any element in the dom
let myDiv = document.getElementById("my-div");
myDiv.appendChild(myCanvasElement);
</code></pre>

<h2>Captcha class methods are : </h2>
<pre><code>getRndString(object) : return string
setupCanvas(object) : return object (canvas : html element)
</code></pre>

<h2>Methods in details</h2>

<pre><code>getRndString(options) : return a random string   

by default : options = {
    nbChars : 5 , // the length of the random string
    myStr : "ABCDEFGHIKLMNOPQRSTVXYZ123456789"
};             
</code></pre>

<pre><code>setupCanvas(options) : return a canvas element          

by default : options = {
    randString : this.getRndString() , 
    sizeAndFont : "18px Arial", 
    canvasWidth : 150 , 
    canvasHeight : 30 ,
    x : 20, 
    y : 20
};

// x : The x coordinate where to start painting the text (relative to the canvas)    
// y : The y coordinate where to start painting the text (relative to the canvas)
</code></pre>

<h2>License</h2>
MIT
