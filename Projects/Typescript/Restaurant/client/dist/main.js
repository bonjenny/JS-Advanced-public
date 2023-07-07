/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/utils */ \"./src/util/utils.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar App = /** @class */ (function () {\n    function App(_a) {\n        var $target = _a.$target;\n        var _this = this;\n        this.state = {};\n        this.setState = function (nextState) {\n            _this.state = __assign(__assign({}, _this.state), nextState);\n        };\n        this.render = function () {\n            var appChild = window.Widget.fragment(\"\", { parent: $target }).getEl();\n            window.Widget.element(\"h1\", {\n                innerText: \"식당 시뮬레이션\",\n                parent: appChild,\n            });\n            window.Widget.element(\"button\", {\n                id: \"sundaeBtn\",\n                innerText: \"순댓국\",\n                onClick: function () { return (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.handleOrderBtnClick)(\"순댓국\", 2000); },\n                parent: appChild,\n            });\n            window.Widget.element(\"button\", {\n                id: \"haejangBtn\",\n                innerText: \"해장국\",\n                onClick: function () { return (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__.handleOrderBtnClick)(\"해장국\", 3000); },\n                parent: appChild,\n            });\n            window.Widget.element(\"h3\", {\n                innerText: \"주문\",\n                parent: appChild,\n            });\n            window.Widget.element(\"ul\", {\n                id: \"orderUl\",\n                parent: appChild,\n            });\n            window.Widget.element(\"h3\", {\n                innerText: \"요리중\",\n                parent: appChild,\n            });\n            window.Widget.element(\"ul\", {\n                id: \"cookingUl\",\n                parent: appChild,\n            });\n            window.Widget.element(\"h3\", {\n                innerText: \"요리완료\",\n                parent: appChild,\n            });\n            window.Widget.element(\"ul\", {\n                id: \"cookedUl\",\n                parent: appChild,\n            });\n            window.Widget.element(\"h3\", {\n                innerText: \"서빙중\",\n                parent: appChild,\n            });\n            window.Widget.element(\"ul\", {\n                id: \"servingUl\",\n                parent: appChild,\n            });\n            $target.appendChild(appChild);\n        };\n        this.render();\n    }\n    return App;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/class/Chef.ts":
/*!***************************!*\
  !*** ./src/class/Chef.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constant_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/const */ \"./src/constant/const.ts\");\n\nvar Chef = /** @class */ (function () {\n    function Chef(name) {\n        var _this = this;\n        this.isAvailable = function () { return _this.status === _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY; };\n        this.finishCooking = function () { return (_this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY); };\n        this.cookAsync = function (order) {\n            _this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.COOKING;\n            return new Promise(function (resolve) {\n                // this?\n                this.resolve = resolve;\n                setTimeout(_completeCook.bind(this), order.time);\n            }.bind(_this));\n        };\n        this.name = name;\n        this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY;\n    }\n    return Chef;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chef);\nfunction _completeCook() {\n    this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY;\n    this.resolve();\n}\n\n\n//# sourceURL=webpack:///./src/class/Chef.ts?");

/***/ }),

/***/ "./src/class/ChefList.ts":
/*!*******************************!*\
  !*** ./src/class/ChefList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ChefList = /** @class */ (function () {\n    function ChefList(list) {\n        var _this = this;\n        this.findChefAsync = function () {\n            return new Promise(function (resolve) {\n                // this?\n                setInterval(_findChef(this.chefs, resolve), 100);\n            }.bind(_this));\n        };\n        this.chefs = list;\n    }\n    return ChefList;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChefList);\nfunction _findChef(chefs, resolve) {\n    return function () {\n        chefs.forEach(function (chef) {\n            if (chef.isAvailable())\n                return resolve(chef);\n        });\n    };\n}\n\n\n//# sourceURL=webpack:///./src/class/ChefList.ts?");

/***/ }),

/***/ "./src/class/Order.ts":
/*!****************************!*\
  !*** ./src/class/Order.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Order = /** @class */ (function () {\n    function Order(id, name, time) {\n        this.id = id;\n        this.name = name;\n        this.time = time;\n    }\n    Order.time = function (arg0, time) {\n        throw new Error(\"Method not implemented.\");\n    };\n    return Order;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n\n\n//# sourceURL=webpack:///./src/class/Order.ts?");

/***/ }),

/***/ "./src/class/Server.ts":
/*!*****************************!*\
  !*** ./src/class/Server.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constant_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/const */ \"./src/constant/const.ts\");\n\nvar Server = /** @class */ (function () {\n    function Server(name, time) {\n        var _this = this;\n        this.isAvailable = function () { return _this.status === _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY; };\n        this.finishServing = function () { return (_this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY); };\n        this.serveAsync = function () {\n            _this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.SERVING;\n            return new Promise(function (resolve) {\n                // this?\n                this.resolve = resolve;\n                setTimeout(_completeServe.bind(this), this.time);\n            }.bind(_this));\n        };\n        this.name = name;\n        this.time = time;\n        this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY;\n    }\n    return Server;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Server);\nfunction _completeServe() {\n    this.status = _constant_const__WEBPACK_IMPORTED_MODULE_0__.READY;\n    this.resolve();\n}\n\n\n//# sourceURL=webpack:///./src/class/Server.ts?");

/***/ }),

/***/ "./src/class/ServerList.ts":
/*!*********************************!*\
  !*** ./src/class/ServerList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ServerList = /** @class */ (function () {\n    function ServerList(list) {\n        var _this = this;\n        this.findServerAsync = function () {\n            return new Promise(function (resolve) {\n                // this?\n                setInterval(_findServer(this.servers, resolve), 100);\n            }.bind(_this));\n        };\n        this.servers = list;\n    }\n    return ServerList;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerList);\nfunction _findServer(servers, resolve) {\n    return function () {\n        servers.forEach(function (server) {\n            if (server.isAvailable())\n                return resolve(server);\n        });\n    };\n}\n\n\n//# sourceURL=webpack:///./src/class/ServerList.ts?");

/***/ }),

/***/ "./src/constant/const.ts":
/*!*******************************!*\
  !*** ./src/constant/const.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COOKING: () => (/* binding */ COOKING),\n/* harmony export */   READY: () => (/* binding */ READY),\n/* harmony export */   SERVING: () => (/* binding */ SERVING)\n/* harmony export */ });\nvar READY = \"READY\";\nvar COOKING = \"COOKING\";\nvar SERVING = \"SERVING\";\n\n\n//# sourceURL=webpack:///./src/constant/const.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n\nnew _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    $target: document.querySelector(\".App\") ||\n        window.Widget.element(\"main\", { class: \"App\" }),\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/util/run.ts":
/*!*************************!*\
  !*** ./src/util/run.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   run: () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _class_Chef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Chef */ \"./src/class/Chef.ts\");\n/* harmony import */ var _class_ChefList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/ChefList */ \"./src/class/ChefList.ts\");\n/* harmony import */ var _class_Server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/Server */ \"./src/class/Server.ts\");\n/* harmony import */ var _class_ServerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/ServerList */ \"./src/class/ServerList.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/util/utils.ts\");\n\n\n\n\n\nvar chefs = new _class_ChefList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([new _class_Chef__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"요리사1\"), new _class_Chef__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"요리사2\")]);\nvar servers = new _class_ServerList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]([\n    new _class_Server__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"직원1\", 1500),\n    new _class_Server__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"직원2\", 3000),\n]);\nfunction run(order) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderOrder)(order);\n    chefs\n        .findChefAsync()\n        .then(function (chef) {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderCooking)(order.id, chef);\n        return chef.cookAsync(order);\n    })\n        .then(function () {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderCooked)(order.id);\n        return servers.findServerAsync();\n    })\n        .then(function (server) {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.renderServing)(order.id, server);\n        return server.serveAsync();\n    })\n        .then(function () {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.removeOrder)(order);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/util/run.ts?");

/***/ }),

/***/ "./src/util/utils.ts":
/*!***************************!*\
  !*** ./src/util/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleOrderBtnClick: () => (/* binding */ handleOrderBtnClick),\n/* harmony export */   removeOrder: () => (/* binding */ removeOrder),\n/* harmony export */   renderCooked: () => (/* binding */ renderCooked),\n/* harmony export */   renderCooking: () => (/* binding */ renderCooking),\n/* harmony export */   renderOrder: () => (/* binding */ renderOrder),\n/* harmony export */   renderServing: () => (/* binding */ renderServing)\n/* harmony export */ });\n/* harmony import */ var _class_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Order */ \"./src/class/Order.ts\");\n/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ \"./src/util/run.ts\");\n\n\nfunction renderOrder(order) {\n    var orderUl = window.Widget.get(\"orderUl\");\n    var orderLi = window.Widget.element(\"li\", {\n        id: order.id,\n        parent: orderUl.getEl(),\n    });\n    window.Widget.element(\"span\", {\n        id: \"\".concat(order.name, \"-\").concat(order.id),\n        innerText: order.name,\n        parent: orderLi.getEl(),\n    });\n}\nfunction renderCooking(orderId, chef) {\n    var cookingUl = window.Widget.get(\"cookingUl\");\n    var cookingLi = window.Widget.get(orderId);\n    window.Widget.element(\"span\", {\n        id: \"info-\".concat(orderId),\n        innerText: \"(\".concat(chef.name, \")\"),\n        parent: cookingLi.getEl(),\n    });\n    cookingUl.append(cookingLi);\n}\nfunction renderCooked(orderId) {\n    var cookedUl = window.Widget.get(\"cookedUl\");\n    var cookedLi = window.Widget.get(orderId);\n    window.Widget.get(\"info-\".concat(orderId)).getEl().innerText = \"(server\\uB97C \\uCC3E\\uB294\\uC911..)\";\n    // updateContent\n    cookedUl.append(cookedLi);\n}\nfunction renderServing(orderId, server) {\n    var servingUl = window.Widget.get(\"servingUl\");\n    var servingLi = window.Widget.get(orderId);\n    window.Widget.get(\"info-\".concat(orderId)).getEl().innerText = \"(\".concat(server.name, \")\");\n    // updateContent\n    servingUl.append(servingLi);\n}\nfunction removeOrder(order) {\n    window.Widget.get(order.id).remove(order.id);\n    window.Widget.get(\"\".concat(order.name, \"-\").concat(order.id)).remove(order.id);\n    window.Widget.get(\"info-\".concat(order.id)).remove(order.id);\n}\nfunction handleOrderBtnClick(menu, second) {\n    return function () {\n        var orderId = crypto.randomUUID();\n        (0,_run__WEBPACK_IMPORTED_MODULE_1__.run)(new _class_Order__WEBPACK_IMPORTED_MODULE_0__[\"default\"](orderId, menu, second));\n    };\n}\n\n\n//# sourceURL=webpack:///./src/util/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;