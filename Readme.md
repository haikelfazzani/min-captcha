<h2>Simple Capctha</h2>
<a href="#"><img src="https://img.shields.io/badge/build-succes-brightgreen.svg"></a>
<a href="#"><img src="https://img.shields.io/badge/version-1.0.8-blue.svg"></a>

<pre><code>npm i @haikel/min-captcha</code></pre>

<h2>Usage</h2>

<pre><code>
import { Captcha } from './node_modules/@haikel/min-captcha';
or
let captcha = require('./node_modules/@haikel/min-captcha');    
</code></pre>

<pre><code>
<b>Example</b>
// First : get instance from Captcha class
let captcha = new Captcha();

// last : now you can append the myCanvasElement to any element in the dom
let myDiv = document.getElementById("my-div");
myDiv.appendChild(myCanvasElement);
</code></pre>


<h3>Complete example : <a href="https://min-captcha.netlify.com" target="_blank">Link</a></h3>

<pre><code><b>Captcha class methods are :</b>

getRndString(options = {nbChar, myStr}) : return a random string (Note : options object is optional)
setupCanvas(options = {randString, sizeAndFont, x, y}) : return a canvas element (Note : options object is optional)
</code></pre>

<h2>Methods in details</h2>

<pre><code>
getRndString(options) : return a random string (Note : options object is optional)
or
getRndString() : return a random string
            
options = {
    nbChar ,	// nbChar : the length of the random string
    myStr      	// myStr : specify your own string
};             

// by default : options = {nbChar : 5, myStr : "ABCDEFGHIKLMNOPQRSTVXYZ123456789"};
</code></pre>

<pre><code>
setupCanvas(options) : return a canvas element (Note : options object is optional)
or
setupCanvas() : return a canvas element

options = {
    randString ,   	// randString : random string generated by randomString() method
    sizeAndFont , 	// sizeAndFont : sepcify size of text (exp : 20px) & you can also specify font-family (exp : Arial)     
    canvasWidth	,	// canvasWidth : the width of the canvas element
    canvasHeight,	// canvasHeight : the height of the canvas element
    x ,          	// x : The x coordinate where to start painting the text (relative to the canvas)	    
    y           	// y : The y coordinate where to start painting the text (relative to the canvas)
};                 

// by default : options = {
    randString = this.getRndString() , 
    sizeAndFont = "18px Arial", 
    canvasWidth = 150 , 
    canvasHeight = 30 ,
    x = 20, 
    y = 20
};
</code></pre>

<pre><code><b>Note :</b> if you change the number of characters (nbChar) 
then the "randString" property is required
because it will use getRndString({nbChar : 5}) by default.

<b>example : </b>
let captcha = new Captcha();

let myRandomString = captcha.getRndString({nbChar : 8});
let myCanvasElement = captcha.setupCanvas({randString :myRandomString}):

// now you can append the myCanvasElement to any element in the dom
let myDiv    = document.getElementById("my-div");

myDiv.appendChild(myCanvasElement);    
</code></pre>


<h2>License</h2>
MIT