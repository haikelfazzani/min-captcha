(function (name, factory) {
    if (typeof module != 'undefined') {
        module.exports = factory();
    }
    else if (typeof define == 'function' && typeof define.amd == 'object') {
        define(factory);
    }
    else {
        this[name] = factory();
    }
}('captcha', function () {

    return {

        getRndStr(nbChars = 5, charPool = "ABCDEFGHIKLMNOPQRSTVXYZ123456789") {
            
            let text = "";
            for (let i = 0; i < nbChars; i++) {
                text += charPool.charAt((Math.random() * charPool.length) | 0);
            }
            return text;

        },
        rndColor(color) {
            let r = Math.floor(Math.random() * 256),
                g = Math.floor(Math.random() * 256),
                b = Math.floor(Math.random() * 256);

            return color || `rgb(${r},${g},${b})`;

        },
        charColor(ctx, str, color, x, y) {

            for (let i = 0; i < str.length; i++) {
                let ch = str.charAt(i);
                ctx.fillStyle = this.rndColor(color);
                ctx.fillText(ch, x, y);
                x += ctx.measureText(ch).width;
            }

        },
        setup({
            nbChars,
            charPool,
            charsColor = "",
            cnvsWidth = 130, cnvsHeight = 30,
            textFont = "18px Arial",
            textPosX = 30,
            textPosY = 30
        } = {}) {

            let rndStr = this.getRndStr(nbChars, charPool);

            const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');

            canvas.width = cnvsWidth;
            canvas.height = cnvsHeight;
            ctx.font = textFont;

            this.charColor(ctx, rndStr, charsColor, textPosX, textPosY);

            return { canvas, rndStr };
        }

    };

}));
