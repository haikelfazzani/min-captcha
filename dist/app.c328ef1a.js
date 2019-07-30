// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../src/captcha.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Captcha =
/*#__PURE__*/
function () {
  function Captcha() {
    _classCallCheck(this, Captcha);
  }

  _createClass(Captcha, [{
    key: "getRndString",
    // nbChars : number of characters to be generated
    // myStr : you can specify your own string
    value: function getRndString() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$nbChars = _ref.nbChars,
          nbChars = _ref$nbChars === void 0 ? 5 : _ref$nbChars,
          _ref$myStr = _ref.myStr,
          myStr = _ref$myStr === void 0 ? "ABCDEFGHIKLMNOPQRSTVXYZ123456789" : _ref$myStr;

      var text = "";

      for (var i = 0; i < nbChars; i++) {
        text += myStr.charAt(Math.floor(Math.random() * myStr.length));
      }

      return text;
    }
  }, {
    key: "randomColor",
    value: function randomColor() {
      var r = Math.floor(Math.random() * 256),
          g = Math.floor(Math.random() * 256),
          b = Math.floor(Math.random() * 256);
      return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    }
  }, {
    key: "charColor",
    value: function charColor(ctx, str, x, y) {
      for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        ctx.fillStyle = this.randomColor();
        ctx.fillText(ch, x, y);
        x += ctx.measureText(ch).width;
      }
    } // x : The x coordinate where to start painting the text (relative to the canvas)	
    // y : The y coordinate where to start painting the text (relative to the canvas)    

  }, {
    key: "setupCanvas",
    value: function setupCanvas() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$randString = _ref2.randString,
          randString = _ref2$randString === void 0 ? this.getRndString() : _ref2$randString,
          _ref2$sizeAndFont = _ref2.sizeAndFont,
          sizeAndFont = _ref2$sizeAndFont === void 0 ? "18px Arial" : _ref2$sizeAndFont,
          _ref2$canvasWidth = _ref2.canvasWidth,
          canvasWidth = _ref2$canvasWidth === void 0 ? 150 : _ref2$canvasWidth,
          _ref2$canvasHeight = _ref2.canvasHeight,
          canvasHeight = _ref2$canvasHeight === void 0 ? 30 : _ref2$canvasHeight,
          _ref2$x = _ref2.x,
          x = _ref2$x === void 0 ? 20 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === void 0 ? 20 : _ref2$y;

      var canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d');
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.font = sizeAndFont;
      this.charColor(ctx, randString, x, y);
      return canvas;
    }
  }]);

  return Captcha;
}();

exports.default = Captcha;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _captcha = _interopRequireDefault(require("../src/captcha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var input = document.getElementById("input"),
      btn = document.getElementById("btn"),
      result = document.getElementById("result"),
      divElement = document.getElementById("my-div"); // first : get instance from Captcha class

  var captcha = new _captcha.default();
  /* 
      Second : get a random string using getRndString method , 
      you can specify how many character (nbChar : optionnal) it will be displayed into the canvas element
      by default : nbChars = 5
  */

  var randString = captcha.getRndString({
    nbChars: 3
  });
  /* 
      third : setup canvas using the setupCanvas method and add the random string generated as parameter
      randString : optionnal
  */

  var canvas = captcha.setupCanvas({
    randString: randString,
    canvasWidth: divElement.offsetWidth,
    sizeAndFont: "28px Arial",
    x: 40,
    y: 25
  }); // last : append canvas to any element you want

  divElement.appendChild(canvas);
  result.style.display = "none";

  btn.onclick = function () {
    if (input.value === randString) {
      result.style.display = "block";
      result.textContent = "Good!";
    } else {
      result.textContent = "Bad!";
      result.style.display = "block";
    }
  };
};
},{"../src/captcha":"../src/captcha.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59309" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.map