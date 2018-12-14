import { Captcha } from '../src/api';

window.onload = () => {

    let input = document.getElementById("input") ,
        btn = document.getElementById("btn") ,
        result = document.getElementById("result") ,
        myCanvas = document.getElementById("my-canvas");

    let captcha = new Captcha();        
    let randString = captcha.getRndString({nbChar:3});

    console.log(randString);

    let canvas = captcha.setupCanvas({randString});
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