import Captcha from '../src/captcha';

window.onload = () => {

    let input       = document.getElementById("input") ,
        btn         = document.getElementById("btn") ,
        result      = document.getElementById("result") ,
        myCanvas    = document.getElementById("my-canvas");

    // first : get instance from Captcha class
    let captcha = new Captcha(); 

    /* 
        Second : get a random string using getRndString method , 
        you can specify how many character (nbChar : optionnal) it will be displayed into the canvas element
        by default : nbChar = 5
    */
    let randString = captcha.getRndString(3);

    /* 
        third : setup canvas using the setupCanvas method and add the random string generated as parameter
        randString : optionnal
    */
    let canvas = captcha.setupCanvas({randString});

    // last : append canvas to any element you want
    myCanvas.appendChild(canvas);


    result.style.display = "none";
    btn.onclick = () => {
        if(input.value === randString) {
            result.style.display = "block";
            result.textContent = "Good!";
        }else {
            result.textContent = "Bad!"
            result.style.display = "block";
        }
    }
}