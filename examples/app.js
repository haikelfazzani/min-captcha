import Captcha from '../src/captcha';

window.onload = () => {

    let input = document.getElementById("input"),
        btn = document.getElementById("btn"),
        result = document.getElementById("result"),
        divElement = document.getElementById("my-div");

    // first : get instance from Captcha class
    let captcha = new Captcha();

    /* 
        Second : get a random string using getRndString method , 
        you can specify how many character (nbChar : optionnal) it will be displayed into the canvas element
        by default : nbChars = 5
    */
    let randString = captcha.getRndString({ nbChars: 3 });

    /* 
        third : setup canvas using the setupCanvas method and add the random string generated as parameter
        randString : optionnal
    */
    let canvas = captcha.setupCanvas(
        {
            randString,
            canvasWidth: divElement.offsetWidth ,
            sizeAndFont: "28px Arial",
            x: 40,
            y: 25
        });

    // last : append canvas to any element you want
    divElement.appendChild(canvas);


    result.style.display = "none";
    btn.onclick = () => {
        if (input.value === randString) {
            result.style.display = "block";
            result.textContent = "Good!";
        } else {
            result.textContent = "Bad!"
            result.style.display = "block";
        }
    }
}