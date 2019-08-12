/**
 * 
 * @param {object} config
 * @returns {string}
 */
function getRndStr(nbChars = 5, charPool = "ABCDEFGHIKLMNOPQRSTVXYZ123456789") {
    let text = "";
    for (let i = 0; i < nbChars; i++) {
        text += charPool.charAt((Math.random() * charPool.length) | 0);
    }
    return text;
}

/**
 * 
 * @param {string} color
 * @returns {string}
 */
function rndColor(color) {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return color || `rgb(${r},${g},${b})`;
}

function charColor(ctx, str, color, x, y) {
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        ctx.fillStyle = rndColor(color);
        ctx.fillText(ch, x, y);
        x += ctx.measureText(ch).width;
    }
}

/**
 * 
 * @param {Object} config 
 * @return {Object}
 */
function setupCanvas({
    nbChars,
    charPool,
    charsColor = "",
    cnvsWidth = 130, cnvsHeight = 30,
    textFont = "18px Arial", 
    textPosX = 30, 
    textPosY = 30
}) {

    let rndStr = getRndStr(nbChars, charPool);

    const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = cnvsWidth;
    canvas.height = cnvsHeight;
    ctx.font = textFont;

    charColor(ctx, rndStr, charsColor, textPosX, textPosY);

    return { canvas, rndStr };
}


module.exports = setupCanvas;
