export default class Captcha {

    // nbChars : number of characters to be generated
    // myStr : specify your own string
    getRndString({ nbChars = 5, myStr = "ABCDEFGHIKLMNOPQRSTVXYZ123456789" } = {}) {
        let text = "";
        for (let i = 0; i < nbChars; i++) {
            text += myStr.charAt(Math.floor(Math.random() * myStr.length));
        }
        return text;
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    charColor(ctx, str, x, y) {
        for (let i = 0; i < str.length; i++) {
            let ch = str.charAt(i);
            ctx.fillStyle = this.randomColor();
            ctx.fillText(ch, x, y);
            x += ctx.measureText(ch).width;
        }
    }

    // x : The x coordinate where to start painting the text (relative to the canvas)	
    // y : The y coordinate where to start painting the text (relative to the canvas)    
    setupCanvas({
        randString = this.getRndString(),
        sizeAndFont = "18px Arial",
        canvasWidth = 150,
        canvasHeight = 30,
        x = 20,
        y = 20 } = {}) {

        let canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.font = sizeAndFont;
        this.charColor(ctx, randString, x, y);

        return canvas;
    }

}