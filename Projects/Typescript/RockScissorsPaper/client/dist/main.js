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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PickingButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PickingButton */ \"./src/PickingButton.ts\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ \"./src/Queue.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar App = /** @class */ (function () {\n    function App(_a) {\n        var $target = _a.$target;\n        var _this = this;\n        this.state = {\n            btnStartElmn: window.Widget.element(\"button\", {\n                id: \"btnStart\",\n                innerText: \"게임 시작\",\n            }).getEl(),\n            divComputerDataElmn: window.Widget.element(\"div\", {\n                id: \"computerData\",\n                innerText: \"시작 버튼을 눌러주세요\",\n            }).getEl(),\n            divPickingBtnsElmn: window.Widget.element(\"div\", {\n                id: \"divPickingBtnsElmn\",\n            }).getEl(),\n            computerCurrentData: undefined,\n            timerId: null,\n            items: new _Queue__WEBPACK_IMPORTED_MODULE_1__.Queue({\n                scissors: new _PickingButton__WEBPACK_IMPORTED_MODULE_0__.PickingButton({\n                    $target: window.Widget.get(\"divPickingBtnsElmn\").getEl(),\n                    name: \"가위\",\n                }),\n                rock: new _PickingButton__WEBPACK_IMPORTED_MODULE_0__.PickingButton({\n                    $target: window.Widget.get(\"divPickingBtnsElmn\").getEl(),\n                    name: \"바위\",\n                }),\n                paper: new _PickingButton__WEBPACK_IMPORTED_MODULE_0__.PickingButton({\n                    $target: window.Widget.get(\"divPickingBtnsElmn\").getEl(),\n                    name: \"보\",\n                }),\n            }),\n        };\n        _Game__WEBPACK_IMPORTED_MODULE_2__.Game.setState({\n            items: this.state.items,\n            btnStartElmn: this.state.btnStartElmn,\n        });\n        _PickingButton__WEBPACK_IMPORTED_MODULE_0__.PickingButton.setState({\n            onClick: _Game__WEBPACK_IMPORTED_MODULE_2__.Game.state.startGame,\n        });\n        this.setState = function (nextState) {\n            _this.state = __assign(__assign({}, _this.state), nextState);\n            _Game__WEBPACK_IMPORTED_MODULE_2__.Game.setState({\n                computerCurrentData: _this.state.computerCurrentData,\n                timerId: _this.state.timerId,\n            });\n        };\n        this.render = function () {\n            window.Widget.element(\"h1\", {\n                innerText: \"가위바위보게임\",\n                parent: $target,\n            });\n            $target.appendChild(_this.state.btnStartElmn);\n            $target.appendChild(_this.state.divComputerDataElmn);\n            $target.appendChild(_this.state.divPickingBtnsElmn);\n            _this.state.items.forEach(function (item) { return item.disabled(true); });\n            _this.state.btnStartElmn.onclick = function () {\n                _this.state.btnStartElmn.setAttribute(\"disabled\", \"true\");\n                _this.state.items.forEach(function (item) { return item.disabled(false); });\n                _this.setState({\n                    computerCurrentData: _this.state.items.getAll()[0],\n                    timerId: setInterval(function () {\n                        _this.setState({\n                            computerCurrentData: _this.state.items.getNext(_this.state.computerCurrentData),\n                        });\n                        _this.state.divComputerDataElmn.textContent =\n                            _this.state.computerCurrentData.state.name;\n                    }, 100),\n                });\n            };\n        };\n        this.render();\n    }\n    return App;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queue */ \"./src/Queue.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar Game = /** @class */ (function () {\n    function Game() {\n    }\n    var _a;\n    _a = Game;\n    Game.state = {\n        items: new _Queue__WEBPACK_IMPORTED_MODULE_0__.QueueObj(),\n        btnStartElmn: window.Widget.get(\"btnStart\").getEl(),\n        computerCurrentData: undefined,\n        timerId: undefined,\n        startGame: function (item) {\n            8;\n            var next = Game.state.items.getNext(item);\n            if (item === Game.state.computerCurrentData) {\n                alert(\"비겼습니다\");\n            }\n            else if (next === Game.state.computerCurrentData) {\n                alert(\"졌습니다\");\n            }\n            else {\n                alert(\"이겼습니다\");\n            }\n            clearInterval(Game.state.timerId);\n            Game.state.btnStartElmn.removeAttribute(\"disabled\");\n            Game.state.items.forEach(function (item) { return item.disabled(true); });\n        },\n    };\n    Game.setState = function (nextState) {\n        Game.state = __assign(__assign({}, _a.state), nextState);\n    };\n    return Game;\n}());\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/PickingButton.ts":
/*!******************************!*\
  !*** ./src/PickingButton.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PickingButton: () => (/* binding */ PickingButton)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar PickingButton = /** @class */ (function () {\n    function PickingButton(_a) {\n        var $target = _a.$target, name = _a.name;\n        var _this = this;\n        this.state = {\n            $element: window.Widget.fragment(\"\", {}),\n            name: name,\n            onClick: function (item) { },\n        };\n        this.setState = function (nextState) {\n            _this.state = __assign(__assign({}, _this.state), nextState);\n        };\n        this.state.$element = window.Widget.element(\"button\", {\n            class: \"PickingButton\",\n            innerText: this.state.name,\n        }).getEl();\n        $target.appendChild(this.state.$element);\n        this.render = function () {\n            var _self = _this;\n            _this.state.$element.onclick = function () {\n                PickingButton.state.onClick(_self);\n            };\n        };\n        this.render();\n    }\n    PickingButton.prototype.disabled = function (value) {\n        value == true\n            ? this.state.$element.setAttribute(\"disabled\", \"true\")\n            : this.state.$element.removeAttribute(\"disabled\");\n    };\n    PickingButton.state = {\n        onClick: function (arg0) { },\n    };\n    PickingButton.setState = function (nextState) {\n        PickingButton.state = __assign(__assign({}, PickingButton.state), nextState);\n    };\n    return PickingButton;\n}());\n\n\n//# sourceURL=webpack:///./src/PickingButton.ts?");

/***/ }),

/***/ "./src/Queue.ts":
/*!**********************!*\
  !*** ./src/Queue.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Queue: () => (/* binding */ Queue),\n/* harmony export */   QueueObj: () => (/* binding */ QueueObj)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar QueueObj = /** @class */ (function () {\n    function QueueObj() {\n    }\n    return QueueObj;\n}());\n\nvar Queue = /** @class */ (function () {\n    function Queue(items) {\n        this.storage = __assign({}, items);\n        this.front = 0;\n        this.rear = Object.keys(items).length;\n    }\n    Queue.prototype.size = function () {\n        return this.storage[this.rear] === undefined\n            ? 0\n            : this.rear - this.front + 1;\n    };\n    Queue.prototype.add = function (value) {\n        this.size() === 0\n            ? (this.storage[\"0\"] = value)\n            : (this.storage[++this.rear] = value);\n    };\n    Queue.prototype.popleft = function () {\n        var temp;\n        temp = this.storage[this.front];\n        delete this.storage[this.front];\n        if (this.front !== this.rear) {\n            this.front++;\n            return temp;\n        }\n        this.front = 0;\n        this.rear = 0;\n        return temp;\n    };\n    Queue.prototype.getAll = function () {\n        return Object.values(this.storage);\n    };\n    Queue.prototype.getNext = function (item) {\n        var keys = Object.keys(this.storage);\n        for (var i = 0; i < keys.length; i++) {\n            var key_1 = keys[i];\n            if (this.storage[key_1] === item)\n                break;\n        }\n        var key = keys[++i % 3];\n        return this.storage[key];\n    };\n    Queue.prototype.forEach = function (Callback) {\n        return Object.values(this.storage).forEach(Callback);\n    };\n    return Queue;\n}());\n\n\n\n//# sourceURL=webpack:///./src/Queue.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n\nnew _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    $target: document.querySelector(\".App\") ||\n        window.Widget.element(\"main\", { class: \"App\" }),\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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