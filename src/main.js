function main (userObj) {

    var obj = userObj;

    var nbChars = obj.nbChars || 5,
        charsPool = obj.charsPool || 'ABCDEFGHIKLMNOPQRSTVXYZ123456789',
        charsColor = obj.charsColor || "",
        cnvsWidth = obj.cnvsWidth || 130,
        cnvsHeight = obj.cnvsHeight || 30,
        textFont = obj.textFont || '18px Arial',
        textPosX = obj.textPosX || 30,
        textPosY = obj.textPosY || 30;

    return {
        getRndStr () {
            var text = '', k = 0;
            for (; k < nbChars; k++) {
                text += charsPool.charAt((Math.random() * charsPool.length) | 0);
            }
            return text
        },
        rndColor () {
            var mf = Math.floor,
                r = mf(Math.random() * 256),
                g = mf(Math.random() * 256),
                b = mf(Math.random() * 256);

            return charsColor || `rgb(${r},${g},${b})`;
        },
        charColor (ctx, rndStr) {

            for (var i = 0, l = rndStr.length; i < l; i++) {
                var ch = rndStr.charAt(i);
                ctx.fillStyle = this.rndColor(charsColor);
                ctx.fillText(ch, textPosX, textPosY);
                textPosX += ctx.measureText(ch).width;
            }
        },
        setup () {
            var rndStr = this.getRndStr(),
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            canvas.width = cnvsWidth;
            canvas.height = cnvsHeight;
            ctx.font = textFont;

            this.charColor(ctx, rndStr)
            return { canvas, rndStr }
        }
    }
}


export default (function (u = {}) {
    return main(u).setup()
});
