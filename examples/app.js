import { Captcha } from '../src/api';

window.onload = () => {

    let input = document.getElementById("input") ,
        btn = document.getElementById("btn") ,
        myCanvas = document.getElementById("my-canvas");

    let captcha = new Captcha();        
    let randString = captcha.getRndString({nbChar:3});

    console.log(randString);

    let canvas = captcha.setupCanvas({randString});
    myCanvas.appendChild(canvas);


    btn.onclick = () => {
        if(input.value === randString) {
            console.log("goood!!")
        }else {
            console.log("bad!!")
        }
    }
}