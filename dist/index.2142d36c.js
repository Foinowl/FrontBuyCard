// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _checkoutPage = require('./checkout.page');
const checkoutPage = new _checkoutPage.Checkout("CheckOut");

},{"./checkout.page":"68Ctl"}],"68Ctl":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Checkout", function () {
  return Checkout;
});
var _coreComponent = require('./core/component');
var _viewsShippingComponent = require('./views/shipping.component');
var _viewsBillingComponent = require("./views/billing.component");
var _viewsPaymentComponent = require("./views/payment.component");
var _viewsNavigationComponent = require("./views/navigation.component");
var _viewsCompletedComponent = require("./views/completed.component");
var _controllerShippingController = require("./controller/shipping.controller");
var _controllerBillingController = require("./controller/billing.controller");
var _controllerPaymentController = require("./controller/payment.controller");
class Checkout extends _coreComponent.Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.navigation = new _viewsNavigationComponent.NavigationComponent("navigation");
    this.competedPage = new _viewsCompletedComponent.CompletedComponent("completed", this.navigation);
    this.paymentPage = new _viewsPaymentComponent.PaymentComponent("payment", this.competedPage, this.navigation);
    this.billingPage = new _viewsBillingComponent.BillingComponent("billing", this.paymentPage, this.navigation);
    this.shippingPage = new _viewsShippingComponent.ShippingComponent("shipping", this.billingPage, this.navigation);
    this.navigation.registerTabs([{
      name: "shipping",
      component: this.shippingPage
    }, {
      name: "billing",
      component: this.billingPage
    }, {
      name: "payment",
      component: this.paymentPage
    }]);
    this.shippingPage.nodeEl.addEventListener("submit", _controllerShippingController.submitShippingHandler.bind(this.shippingPage));
    this.billingPage.nodeEl.addEventListener("submit", _controllerBillingController.submitBillingHandler.bind(this.billingPage));
    this.paymentPage.nodeEl.addEventListener("submit", _controllerPaymentController.submitPaymentHandler.bind(this.paymentPage));
  }
}

},{"./core/component":"2lFe5","./views/shipping.component":"5Fui4","./views/billing.component":"4TogT","./views/payment.component":"3dcpI","./views/navigation.component":"46Wi0","./views/completed.component":"4BT49","./controller/shipping.controller":"tOyP5","./controller/billing.controller":"67IAy","./controller/payment.controller":"39EWN","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2lFe5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Component", function () {
  return Component;
});
class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();
  }
  init() {}
  onShow() {}
  onHide() {}
  onDestroy() {}
  hide() {
    this.$el.classList.add("hide");
    this.onHide();
  }
  destroy() {
    this.onDestroy();
  }
  show() {
    this.$el.classList.remove("hide");
    this.onShow();
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"5Fui4":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ShippingComponent", function () {
  return ShippingComponent;
});
var _coreComponent = require("../core/component");
var _coreForm = require("../core/form");
var _coreValidators = require("../core/validators");
var _countries = require("../countries");
class ShippingComponent extends _coreComponent.Component {
  constructor(id, billing, nav) {
    super(id);
    this.billingPage = billing;
    this.nav = nav;
    this.name = 'shipping';
  }
  init() {
    this.onShow();
    this.form = new _coreForm.Form(this.$el, {
      full_name: [[_coreValidators.Validators.required, "Имя обязательно"], [_coreValidators.Validators.minLength(2), "Минимальная длина имени два символа"]],
      phone: [[_coreValidators.Validators.required, "Телефон обязателен"], [_coreValidators.Validators.phoneRequired, "Введите корректный номер телефона"]],
      street: [[_coreValidators.Validators.required, "Улица обязательна"]],
      apt: [[_coreValidators.Validators.required, "Квартира обязательна"]],
      city: [[_coreValidators.Validators.required, "Город обязателен"]],
      zip: [[_coreValidators.Validators.required, "Индекс обязателен"], [_coreValidators.Validators.zipRequired, "Введите корректный индекс"]]
    });
  }
  onShow() {
    const html = this.renderInputs();
    this.$el.insertAdjacentHTML("afterbegin", html);
  }
  onHide() {
    this.$el.innerHTML = "";
  }
  get nodeEl() {
    return this.$el;
  }
  get getForm() {
    return this.form;
  }
  get nodeNav() {
    return this.nav;
  }
  get getName() {
    return this.name;
  }
  renderInputs() {
    const selectValues = _countries.COUNTRIES.map(option => {
      return `<option value=${option}>${option}</option>`;
    }).join(" ");
    return `
			<h2 class="checkout__form-name-form"> Shipping Info</h2>

			<p class="checkout__form-label">Recipient</p>

			<div class="checkout__form-input-wrapper">
				<input
					name="full_name"
				  class="checkout__form-input"
				  placeholder="Full name"
				  value="${this.shippModel ? this.shippModel.name : ""}"
				>
			</div>
			<div class="checkout__form-phone">
				<div class="checkout__form-input-wrapper">
					<input
					  name="phone"
					  class="checkout__form-input checkout__form-phone-input"
						placeholder="Phone number"
						value="${this.shippModel ? this.shippModel.phone : ""}"
					>
				</div>
				<p class="checkout__form-phone-label">
					For delivery <br> questions only
				</p>
			</div>

			<p class="checkout__form-label">Adress</p>

			<div class="checkout__form-adress">
				<div class="checkout__form-input-wrapper">
					<input
						name="street"
						class="checkout__form-input"
						placeholder="Street adress"
						value="${this.shippModel ? this.shippModel.street : ""}"
					>
				</div>
				<div class="checkout__form-input-wrapper">
					<input
						name="apt"
						class="checkout__form-input"
						placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
						value="${this.shippModel ? this.shippModel.apt : ""}"
					>
				</div>
				<div class="checkout__form-input-wrapper">
					<input
					name="city"
					class="checkout__form-input"
					 placeholder="City"
					 value="${this.shippModel ? this.shippModel.city : ""}"
					 >
				</div>

				<div class="checkout__form-input-container">
					
							<div>
							<select class="checkout__form-input checkout__form-country-select" placeholder="Country" name="type">
								<option value="" disabled>Country</option>

								${selectValues}
							</select>
							</div>
							
							<div class="checkout__form-input-wrapper">
							<input
								name="zip"
								class="checkout__form-input checkout__form-zip-input"
								placeholder="Zip code"
								value="${this.shippModel ? this.shippModel.zip : ""}"
							>
							</div>
				</div>

				<button type="submit" class="checkout__form-submit">
					Continue
				</button>
			</div>
		`;
  }
}

},{"../core/component":"2lFe5","../core/form":"4oKeL","../core/validators":"1ZDv5","../countries":"1Cg0X","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4oKeL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Form", function () {
  return Form;
});
class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }
  value() {
    const value = {};
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value;
    });
    return value;
  }
  clear() {
    Object.keys(this.controls).forEach(control => {
      this.form[control].value = "";
    });
  }
  isValid() {
    let isFormValid = true;
    Object.keys(this.controls).forEach(control => {
      const validators = this.controls[control];
      let isValid = true;
      for (let i = 0; i < validators.length; i++) {
        const lst = validators[i];
        const validator = lst[0];
        const messageError = lst[1];
        isValid = validator(this.form[control].value) && isValid;
        if (!isValid) {
          setError(this.form[control], messageError);
          break;
        }
        if (isValid) {
          clearError(this.form[control]);
        }
      }
      isFormValid = isFormValid && isValid;
    });
    return isFormValid;
  }
}
function setError($control, mess) {
  clearError($control);
  const error = `
		<div class="validation-error">${mess}</div>
	`;
  $control.insertAdjacentHTML("beforebegin", error);
}
function clearError($control) {
  const errorNode = $control.nextSibling.parentNode.querySelector(".validation-error");
  if (errorNode) {
    errorNode.remove();
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1ZDv5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Validators", function () {
  return Validators;
});
var phoneRegExp = /^(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
var emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var zipRussiaRegExp = /^\d{6}$/;
var zipAmericanRegExp = /^\d{5}(?:[-\s]\d{4})?$/;
var cardRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
var cardExpDateRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
class Validators {
  static required(value = "") {
    return value && value.trim();
  }
  static minLength(length) {
    return value => {
      return value.length >= length;
    };
  }
  static phoneRequired(value = "") {
    return new RegExp(phoneRegExp).test(value);
  }
  static emailRequired(value = "") {
    return new RegExp(emailRegExp).test(value);
  }
  static zipRequired(value = "") {
    return new RegExp(zipRussiaRegExp).test(value) || new RegExp(zipAmericanRegExp).test(value);
  }
  static cardRequired(value = "") {
    return new RegExp(cardRegExp).test(value);
  }
  static cardDateRequired(value = "") {
    return new RegExp(cardExpDateRegExp).test(value);
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1Cg0X":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "COUNTRIES", function () {
  return COUNTRIES;
});
const COUNTRIES = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
exports.default = COUNTRIES;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4TogT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "BillingComponent", function () {
  return BillingComponent;
});
var _coreComponent = require("../core/component");
var _coreForm = require("../core/form");
var _coreValidators = require("../core/validators");
var _controllerBillingController = require("../controller/billing.controller");
var _countries = require("../countries");
class BillingComponent extends _coreComponent.Component {
  constructor(id, page, nav) {
    super(id);
    this.name = "billing";
    this.paymentPage = page;
    this.nav = nav;
  }
  init() {
    this.form = new _coreForm.Form(this.$el, {
      full_name: [[_coreValidators.Validators.required, "Имя обязательно"], [_coreValidators.Validators.minLength(2), "Минимальная длина имени два символа"]],
      email: [[_coreValidators.Validators.required, "Email обязателен"], [_coreValidators.Validators.emailRequired, "Введите корректный Email"]],
      street: [[_coreValidators.Validators.required, "Улица обязательна"]],
      apt: [[_coreValidators.Validators.required, "Квартира обязательна"]],
      city: [[_coreValidators.Validators.required, "Город обязателен"]],
      zip: [[_coreValidators.Validators.required, "Индекс обязателен"], [_coreValidators.Validators.zipRequired, "Введите корректный индекс"]]
    });
    this.$el.addEventListener("click", _controllerBillingController.clickShippingButton.bind(this));
  }
  onShow() {
    const html = this.renderInputs();
    this.$el.insertAdjacentHTML("afterbegin", html);
  }
  onHide() {
    this.$el.innerHTML = "";
  }
  get nodeEl() {
    return this.$el;
  }
  get nodeNav() {
    return this.nav;
  }
  get getForm() {
    return this.form;
  }
  get getName() {
    return this.name;
  }
  setBillingModel(model) {
    this.billingModel = model;
  }
  renderInputs() {
    const model = this.billingModel;
    const selectValues = _countries.COUNTRIES.map(option => {
      return `<option value=${option}>${option}</option>`;
    }).join(" ");
    return `
		<div class="checkout__first-container">
			<h2 class="checkout__form-name-form">Billing Information</h2>
		
			<button class="checkout__sameas-button" type="button"> Same as shipping</button>
		</div>

			<p class="checkout__form-label">Billing Contact</p>

			<div class="checkout__form-input-wrapper">
				<input name="full_name" class="checkout__form-input" placeholder="Full name" value="${model ? model.name : ""}">
			</div>
			<div class="checkout__form-phone">
				<div class="checkout__form-input-wrapper">
					<input name="email" class="checkout__form-input checkout__form-phone-input" placeholder="E-mail"
					value="${model ? model.email : ""}"
					>
				</div>
				<p class="checkout__form-phone-label">
					For delivery <br> questions only
				</p>
			</div>

			<p class="checkout__form-label">Billing Address</p>

			<div class="checkout__form-adress">
				<div class="checkout__form-input-wrapper">
					<input name="street" class="checkout__form-input" placeholder="Street adress" value="${model ? model.street : ""}">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="apt" class="checkout__form-input" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value="${model ? model.apt : ""}">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="city" class="checkout__form-input" placeholder="City" value="${model ? model.city : ""}">
				</div>

				<div class="checkout__form-input-container">
					
							<div>
							<select class="checkout__form-input checkout__form-country-select" placeholder="Country" name="type">
								<option value="" disabled>Country</option>

								${selectValues}
							</select>
							</div>
							
							<div class="checkout__form-input-wrapper">
							<input name="zip" class="checkout__form-input checkout__form-zip-input" placeholder="Zip code" value="${model ? model.zip : ""}">
							</div>
				</div>

				<button type="submit" class="checkout__form-submit">
					Continue
				</button>
			</div>
		`;
  }
}

},{"../core/component":"2lFe5","../core/form":"4oKeL","../core/validators":"1ZDv5","../controller/billing.controller":"67IAy","../countries":"1Cg0X","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"67IAy":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "submitBillingHandler", function () {
  return submitBillingHandler;
});
_parcelHelpers.export(exports, "clickShippingButton", function () {
  return clickShippingButton;
});
var _modelBillingModel = require("../model/billing.model");
var _navigationController = require("./navigation.controller");
const submitBillingHandler = function (event) {
  event.preventDefault();
  if (this.getForm.isValid()) {
    this.billingModel = _modelBillingModel.createBillingObject({
      type: this.$el.type.value,
      ...this.form.value()
    });
    console.log(this.billingModel);
    _navigationController.nextPageHandler(this, this.paymentPage, this.nodeNav);
  }
};
const clickShippingButton = function (event) {
  if (event.target.className === "checkout__sameas-button") {
    const shippModel = {
      ...{
        email: ""
      },
      ...this.nav.tabs[0].component.shippModel
    };
    console.log(shippModel);
    this.hide();
    this.setBillingModel(shippModel);
    this.show();
  }
};

},{"../model/billing.model":"3e0yV","./navigation.controller":"13MLt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3e0yV":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "createBillingObject", function () {
  return createBillingObject;
});
const createBillingObject = function (data) {
  return {
    id: Math.random() * (100000 - 1) + 1,
    name: data.full_name,
    email: data.email,
    street: data.street,
    apt: data.apt,
    city: data.city,
    county: data.type,
    zip: data.zip
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"13MLt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "tabClickHandler", function () {
  return tabClickHandler;
});
_parcelHelpers.export(exports, "nextPageHandler", function () {
  return nextPageHandler;
});
_parcelHelpers.export(exports, "removeAcriveTab", function () {
  return removeAcriveTab;
});
const elemenCanNextPage = ($nav, nextPage) => {
  const indexNextPage = $nav.getIndexByTabName(nextPage);
  const indexCurrentPage = $nav.getIndexByTabName($nav.getCurrentTab);
  return indexCurrentPage > indexNextPage;
};
const tabClickHandler = function (event) {
  event.preventDefault();
  if (!elemenCanNextPage(this, event.target.dataset.name)) {
    return;
  }
  this.setCurrentTab(event.target.dataset.name);
  if (event.target.classList.contains("checkout__breadcrumbs-item")) {
    Array.from(this.$el.querySelectorAll(".checkout__breadcrumbs-item")).forEach(tab => {
      tab.classList.remove("checkout__breadcrumbs-item--active");
    });
    event.target.classList.add("checkout__breadcrumbs-item--active");
    const activeTab = this.tabs.find(t => t.name === event.target.dataset.name);
    this.tabs.forEach(t => t.component.hide());
    activeTab.component.show();
  }
};
const nextPageHandler = function ($currEl, $nextEl, $nav) {
  $currEl.hide();
  $nextEl.show();
  const nav = $nav.nodeEl;
  Array.from(nav.querySelectorAll(".checkout__breadcrumbs-item")).forEach(tab => {
    tab.classList.remove("checkout__breadcrumbs-item--active");
  });
  const activeTab = Array.from(nav.querySelectorAll(".checkout__breadcrumbs-item")).find(tab => tab.dataset.name === $nextEl.name);
  activeTab.classList.add("checkout__breadcrumbs-item--active");
  $nav.setCurrentTab($nextEl.getName);
};
const removeAcriveTab = function () {
  Array.from(this.$el.querySelectorAll(".checkout__breadcrumbs-item")).forEach(tab => {
    tab.classList.remove("checkout__breadcrumbs-item--active");
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3dcpI":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "PaymentComponent", function () {
  return PaymentComponent;
});
var _coreComponent = require("../core/component");
var _coreForm = require("../core/form");
var _coreValidators = require("../core/validators");
class PaymentComponent extends _coreComponent.Component {
  constructor(id, page, nav) {
    super(id);
    this.nav = nav;
    this.name = "payment";
    this.completPage = page;
  }
  init() {
    this.form = new _coreForm.Form(this.$el, {
      full_name: [[_coreValidators.Validators.required, "Имя обязательно"], [_coreValidators.Validators.minLength(2), "Минимальная длина имени два символа"]],
      card: [[_coreValidators.Validators.required, "Эта поле обязательно"], [_coreValidators.Validators.cardRequired, "Введите корректный номер телефона"]],
      date: [[_coreValidators.Validators.required, "Эта поле обязательно"], [_coreValidators.Validators.cardDateRequired, "Введите корректную дату"]],
      pincod: [[_coreValidators.Validators.required, "Эта поле обязательно"]]
    });
  }
  onShow() {
    const html = this.renderInputs();
    this.$el.insertAdjacentHTML("afterbegin", html);
  }
  onHide() {
    this.$el.innerHTML = "";
  }
  get nodeEl() {
    return this.$el;
  }
  get getForm() {
    return this.form;
  }
  get nodeNav() {
    return this.nav;
  }
  get getName() {
    return this.name;
  }
  renderInputs() {
    return `
								<h2 class="checkout__form-name-form">Payment</h2>

						<div class="checkout__subtitle">
							<svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4006 14.5071V10.1378C14.4006 9.85407 14.171 9.62412 13.8877 9.62412H12.6984V5.50597C12.6984 2.47008 10.2318 0 7.20015 0C4.16852 0 1.70192 2.47008 1.70192 5.50597V9.59601H2.72775V5.50597C2.72775 3.03652 4.73417 1.02727 7.20015 1.02727C9.66614 1.02727 11.6726 3.0362 11.6726 5.50597V9.62412H0.512603C0.229314 9.62412 0 9.85407 0 10.1378V18.5931C0 19.5969 0.811803 20.4099 1.80987 20.4099H8.11179C8.37137 23.183 10.7069 25.361 13.5429 25.361C16.3659 25.361 18.7008 23.2417 18.9741 20.4317C18.9913 20.2549 19 20.0746 19 19.8959C19.0003 18.5568 18.5114 17.2681 17.6235 16.2673C16.7805 15.3176 15.6367 14.7049 14.4006 14.5071ZM1.02583 18.5975V15.3738C1.02583 15.3735 1.02583 15.3735 1.02583 15.3732V10.6514H13.3751V14.4399C10.6158 14.5246 8.36638 16.6651 8.1121 19.3826H1.80987C1.37744 19.3829 1.02583 19.0305 1.02583 18.5975ZM17.9536 20.3324C17.7318 22.6138 15.8358 24.334 13.5433 24.334C11.0997 24.334 9.11173 22.3432 9.11173 19.8962C9.11173 17.4493 11.0997 15.4585 13.5433 15.4585C14.8081 15.4585 16.0158 16.0021 16.8569 16.9497C17.5776 17.762 17.9748 18.8083 17.9748 19.8962C17.9745 20.0418 17.9676 20.1887 17.9536 20.3324Z" fill="#6B6B6B"/>
								<rect x="8" y="14.35" width="11" height="11" rx="5.5" fill="#7ED321"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2687 18.1138C16.469 18.3144 16.469 18.6396 16.2687 18.8402L12.9491 22.1645C12.8489 22.2648 12.7176 22.3151 12.5866 22.3151C12.4555 22.3151 12.3242 22.2648 12.224 22.1645L10.8182 20.7567C10.6179 20.5561 10.6179 20.2308 10.8182 20.0303C11.0185 19.8297 11.3433 19.8297 11.5436 20.0303L12.5866 21.0747L15.5436 18.1135C15.7439 17.9132 16.0684 17.9132 16.2687 18.1138Z" fill="white"/>
							</svg>


							<p>This is a secure 128-bit SSL encrypted payment</p>
						</div>

						<p class="checkout__form-label">Cardholder Name</p>

						<div class="checkout__form-input-wrapper">
							<input name="full_name" class="checkout__form-input" type="text" placeholder="Name as it appears on your card">
						</div>


						<p class="checkout__form-label">Cardholder Number</p>

						<div class="checkout__form-input-wrapper">
							<input name="card" class="checkout__form-input" type="number"placeholder="XXXX XXXX XXXX XXXX XXXX">
						</div>


						<div class="checkout__container-payment">
							<div>
								<p class="checkout__form-label">Expire Date</p>

								<div class="checkout__form-input-wrapper">
									<input name="date" class="checkout__form-input checkout__form-input--mini" type="text"placeholder="MM / YY">
								</div>
							</div>
							<div>
								<p class="checkout__form-label">Security Cod</p>

								<div class="checkout__form-input-wrapper">
									<input name="pincod" class="checkout__form-input checkout__form-input--mini" type="number"placeholder>
								</div>
							</div>
						</div>

							<button type="submit" class="checkout__form-submit">
								Pay Securely
							</button>
		`;
  }
}

},{"../core/component":"2lFe5","../core/form":"4oKeL","../core/validators":"1ZDv5","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"46Wi0":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "NavigationComponent", function () {
  return NavigationComponent;
});
var _coreComponent = require("../core/component");
var _controllerNavigationController = require("../controller/navigation.controller");
class NavigationComponent extends _coreComponent.Component {
  constructor(id) {
    super(id);
    this.tabs = [];
    this.currentTab = "shipping";
  }
  init() {
    this.$el.addEventListener("click", _controllerNavigationController.tabClickHandler.bind(this));
    this.removeAcriveTab = _controllerNavigationController.removeAcriveTab.bind(this);
  }
  onDestroy() {
    this.removeAcriveTab();
    this.$el.removeEventListener("click", _controllerNavigationController.tabClickHandler.bind(this));
    this.tabs = [];
  }
  registerTabs(tabs) {
    this.tabs = tabs;
  }
  setCurrentTab(val) {
    this.currentTab = val;
  }
  getIndexByTabName(name) {
    const newTabs = this.tabs.reduce((acc, curr) => {
      acc.push(curr.name);
      return acc;
    }, []);
    return newTabs.indexOf(name);
  }
  get getCurrentTab() {
    return this.currentTab;
  }
  get nodeEl() {
    return this.$el;
  }
}

},{"../core/component":"2lFe5","../controller/navigation.controller":"13MLt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4BT49":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "CompletedComponent", function () {
  return CompletedComponent;
});
var _coreComponent = require("../core/component");
class CompletedComponent extends _coreComponent.Component {
  constructor(id, nav) {
    super(id);
    this.name = "competed";
    this.nav = nav;
  }
  init() {
    this.$el.addEventListener("click", clickPrintButton.bind(this));
  }
  onShow() {
    const html = this.renderInputs();
    this.$el.insertAdjacentHTML("afterbegin", html);
  }
  onHide() {
    this.$el.innerHTML = "";
  }
  setModel(model) {
    this.model = model;
  }
  CallPrint() {
    var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    var prtCSS = '<link rel="stylesheet" href="/index.1206e35b.css">';
    WinPrint.document.write('');
    WinPrint.document.write(prtCSS);
    WinPrint.document.write(this.renderInputs());
    WinPrint.document.write('');
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  }
  renderInputs() {
    return `
	    <p class="checkout__completed-title">Thank you for your order!</p>

      <p>Your order number is: 188787788</p>	
      
      <p class="checkout__email-title">
        Your will recieve an email confirmation shortly to
        <span class="checkout__email-span">${this.model.email}</span>
      </p>
      
      <p>
        Estimated delivery Day is
        <span class="checkout__email-date">Friday 1st April 2016</span>
      </p>

      <button type="submit" class="checkout__print">Print Recipe</button>
		`;
  }
}
const clickPrintButton = function (e) {
  e.preventDefault();
  console.log(e);
  if (e.target.className === "checkout__print") {
    this.CallPrint();
  }
};

},{"../core/component":"2lFe5","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"tOyP5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "submitShippingHandler", function () {
  return submitShippingHandler;
});
var _modelShippingModel = require("../model/shipping.model");
var _navigationController = require("./navigation.controller");
const submitShippingHandler = function (event) {
  event.preventDefault();
  if (this.getForm.isValid()) {
    this.shippModel = _modelShippingModel.createShippingObject({
      type: this.$el.type.value,
      ...this.form.value()
    });
    _navigationController.nextPageHandler(this, this.billingPage, this.nodeNav);
  }
};

},{"../model/shipping.model":"4GO0I","./navigation.controller":"13MLt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4GO0I":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "createShippingObject", function () {
  return createShippingObject;
});
const createShippingObject = function (data) {
  return {
    id: Math.random() * (100000 - 1) + 1,
    name: data.full_name,
    phone: data.phone,
    street: data.street,
    apt: data.apt,
    city: data.city,
    county: data.type,
    zip: data.zip
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"39EWN":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "submitPaymentHandler", function () {
  return submitPaymentHandler;
});
var _modelPaymentModel = require("../model/payment.model");
const submitPaymentHandler = function (event) {
  event.preventDefault();
  if (this.getForm.isValid()) {
    this.paymentModel = _modelPaymentModel.createPaymentObject({
      ...{
        email: this.nodeNav.tabs[1].component.billingModel.email
      },
      ...this.form.value()
    });
    this.nodeNav.destroy();
    this.hide();
    this.completPage.setModel(this.paymentModel);
    this.completPage.show();
  }
};

},{"../model/payment.model":"3dZhD","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3dZhD":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "createPaymentObject", function () {
  return createPaymentObject;
});
const createPaymentObject = function (data) {
  return {
    ...data
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["21c8X","3L8AI"], "3L8AI", "parcelRequire84da")

//# sourceMappingURL=index.2142d36c.js.map
