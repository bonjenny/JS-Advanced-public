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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar App = /** @class */ (function () {\n    function App(_a) {\n        var $target = _a.$target;\n        var _this = this;\n        this.state = {\n            todolist: [\n                {\n                    id: \"001\",\n                    contents: \"할일\",\n                    done: false,\n                    deleted: false,\n                },\n                {\n                    id: \"002\",\n                    contents: \"완료된 할일\",\n                    done: true,\n                    deleted: false,\n                },\n                {\n                    id: \"003\",\n                    contents: \"할일2\",\n                    done: false,\n                    deleted: false,\n                },\n                {\n                    id: \"004\",\n                    contents: \"완료된 할일2\",\n                    done: true,\n                    deleted: false,\n                },\n            ],\n            todolistControl: window.Widget.todoList(\"todoList\", {\n                id: \"todoList\",\n                datas: [],\n                onchange: function () { return _this.state.renderList(); },\n                onclick: function () { return _this.state.deleteTodoitem(); },\n            }),\n            donelistControl: window.Widget.todoList(\"doneList\", {\n                id: \"doneList\",\n                datas: [],\n                onchange: function () { return _this.state.renderList(); },\n                onclick: function () { return _this.state.deleteTodoitem(); },\n            }),\n            renderList: function () {\n                _this.state.renderTodolist();\n                _this.state.renderDonelist();\n            },\n            renderTodolist: function () {\n                if (_this.state.todolistControl.reload !== undefined) {\n                    _this.state.todolistControl.reload(_this.state.todolist.filter(function (todoItem) { return todoItem.done === false; }));\n                }\n            },\n            renderDonelist: function () {\n                if (_this.state.donelistControl.reload !== undefined) {\n                    _this.state.donelistControl.reload(_this.state.todolist.filter(function (todoItem) { return todoItem.done === true; }));\n                }\n            },\n            saveTodoitem: function (inputElmn) {\n                if (!inputElmn.value) {\n                    alert(\"할일을 입력해 주세요\");\n                    inputElmn.focus();\n                    return;\n                }\n                _this.state.todolist.push({\n                    id: crypto.randomUUID(),\n                    contents: inputElmn.value,\n                    done: false,\n                    deleted: false,\n                });\n                _this.state.renderTodolist();\n                inputElmn.value = \"\";\n                inputElmn.focus();\n            },\n            deleteTodoitem: function () {\n                _this.state.todolist = _this.state.todolist.filter(function (todoItem) { return todoItem.deleted === false; });\n                _this.state.renderList();\n            },\n        };\n        this.setState = function (nextState) {\n            _this.state = __assign(__assign({}, _this.state), nextState);\n        };\n        this.render = function () {\n            var appChild = window.Widget.fragment(\"\", { parent: $target }).getEl();\n            window.Widget.element(\"h1\", {\n                innerText: \"TODO 리스트\",\n                parent: appChild,\n            });\n            window.Widget.element(\"input\", {\n                id: \"todoInput\",\n                onkeydown: function (event) {\n                    if (event.keyCode !== 13)\n                        return;\n                    var inputElmn = window.Widget.get(\"todoInput\").getEl();\n                    _this.state.saveTodoitem(inputElmn);\n                },\n                placeholder: \"할 일을 입력해주세요.\",\n                value: \"\",\n                parent: appChild,\n            });\n            window.Widget.element(\"button\", {\n                id: \"btnSave\",\n                innerText: \"입력\",\n                onclick: function () {\n                    var inputElmn = window.Widget.get(\"todoInput\").getEl();\n                    _this.state.saveTodoitem(inputElmn);\n                },\n                parent: appChild,\n            });\n            appChild.appendChild(_this.state.todolistControl.getEl());\n            appChild.appendChild(_this.state.donelistControl.getEl());\n            _this.state.renderList();\n            $target.appendChild(appChild);\n        };\n        this.render();\n    }\n    return App;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack:///./src/App.ts?");

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