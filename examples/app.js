var setupCanvas = require('../src/captcha');

window.onload = () => {

    let input = document.getElementById("input"),
        btn = document.getElementById("btn"),
        result = document.getElementById("result"),
        divElement = document.getElementById("my-div");

    const config = {
        nbChars: 3,
        charsColor:"#000",
        charPool: "abcdef123456",
        textFont: "25px Arial"
    };

    let { canvas, rndStr } = setupCanvas(config);

    divElement.appendChild(canvas);

    btn.onclick = () => {
        result.textContent = input.value === rndStr ? "good" : "bad";        
    }
}