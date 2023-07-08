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

/***/ "./src/baseWidget.ts":
/*!***************************!*\
  !*** ./src/baseWidget.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rawWidget: () => (/* binding */ rawWidget)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core.ts\");\n\nfunction rawWidget(_createControl) {\n    var createControl = function (elName, option) {\n        if (option.id === undefined || option.id === \"\") {\n            option.id =\n                elName.toString() + \"_\" + Math.random().toString(36).substring(2, 16);\n        }\n        if ((0,_core__WEBPACK_IMPORTED_MODULE_0__.hasControl)(option.id)) {\n            option.id = option.id + \"_\" + Math.random().toString(36).substring(2, 16);\n        }\n        var control = _createControl(elName, option);\n        control.append = function (childControl) {\n            control.getEl().append(childControl.getEl());\n            return (0,_core__WEBPACK_IMPORTED_MODULE_0__.getControl)(option.id || elName);\n        };\n        control.remove = function (id) {\n            (0,_core__WEBPACK_IMPORTED_MODULE_0__.removeNode)(control.getEl());\n            (0,_core__WEBPACK_IMPORTED_MODULE_0__.delControl)(id);\n        };\n        (0,_core__WEBPACK_IMPORTED_MODULE_0__.addControl)(control.id, control);\n        if (option.parent !== undefined) {\n            option.parent.append(control.getEl());\n        }\n        return control;\n    };\n    return createControl;\n}\n\n\n//# sourceURL=webpack:///./src/baseWidget.ts?");

        /***/
}),

  /***/ "./src/core.ts":
  /*!*********************!*\
    !*** ./src/core.ts ***!
    \*********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addControl: () => (/* binding */ addControl),\n/* harmony export */   delControl: () => (/* binding */ delControl),\n/* harmony export */   getControl: () => (/* binding */ getControl),\n/* harmony export */   getControls: () => (/* binding */ getControls),\n/* harmony export */   hasControl: () => (/* binding */ hasControl),\n/* harmony export */   removeNode: () => (/* binding */ removeNode)\n/* harmony export */ });\nvar WidgetDict = {};\nfunction hasControl(id) {\n    return WidgetDict.hasOwnProperty(id);\n}\nfunction getControl(id) {\n    if (WidgetDict[id] !== undefined) {\n        return WidgetDict[id];\n    }\n    var control = {\n        id: id,\n        getEl: function () {\n            return document.createDocumentFragment();\n        },\n    };\n    return control;\n}\nfunction getControls(id) {\n    return Object.keys(WidgetDict).filter(function (item) {\n        return item.split(\"_\")[0] == id;\n    });\n}\nfunction delControl(id) {\n    delete WidgetDict[id];\n}\nfunction addControl(id, control) {\n    WidgetDict[id] = control;\n}\nfunction removeNode(node) {\n    if (node instanceof DocumentFragment) {\n        if (node.parentElement) {\n            node.parentElement.removeChild(node);\n        }\n    }\n    else {\n        node.remove();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/core.ts?");

        /***/
}),

  /***/ "./src/extends/todoItem.ts":
  /*!*********************************!*\
    !*** ./src/extends/todoItem.ts ***!
    \*********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)\n/* harmony export */ });\n/* harmony import */ var _baseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseWidget */ \"./src/baseWidget.ts\");\n\nfunction _createTodoItem(elName, option) {\n    if (elName === void 0) { elName = \"todoItem\"; }\n    var el = window.Widget.element(\"li\", { id: option.id }).getEl();\n    window.Widget.element(\"input\", {\n        id: \"todoCheck-\".concat(option.id),\n        type: \"checkbox\",\n        checked: option.checked,\n        onChange: option.onChange,\n        parent: el,\n    });\n    window.Widget.element(\"span\", {\n        id: \"todoSpan-\".concat(option.id),\n        innerText: option.innerText,\n        parent: el,\n    });\n    window.Widget.element(\"button\", {\n        id: \"todoBtn-\".concat(option.id),\n        innerText: \"삭제\",\n        type: \"button\",\n        onClick: option.onClick,\n        parent: el,\n    });\n    var control = {\n        id: option.id || \"\",\n        getEl: function () {\n            return el;\n        },\n        focus: function () {\n            el.focus();\n        },\n        setValue: function (value) {\n            el.value = value;\n        },\n        innerHTML: function (html) {\n            el.innerHTML = html;\n        },\n    };\n    return control;\n}\nvar createTodoItem = (0,_baseWidget__WEBPACK_IMPORTED_MODULE_0__.rawWidget)(_createTodoItem);\n\n\n//# sourceURL=webpack:///./src/extends/todoItem.ts?");

        /***/
}),

  /***/ "./src/extends/todoList.ts":
  /*!*********************************!*\
    !*** ./src/extends/todoList.ts ***!
    \*********************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoList: () => (/* binding */ createTodoList)\n/* harmony export */ });\n/* harmony import */ var _baseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseWidget */ \"./src/baseWidget.ts\");\n\nfunction _createTodoList(elName, option) {\n    if (elName === void 0) { elName = \"todoList\"; }\n    var el = window.Widget.element(\"ul\", { id: option.id }).getEl();\n    render(option.datas || [], option.columns || {});\n    var control = {\n        id: option.id || \"\",\n        getEl: function () {\n            return el;\n        },\n        reload: function (datas) {\n            el.innerHTML = \"\";\n            render(datas, option.columns || {});\n        },\n    };\n    return control;\n    function render(datas, columns) {\n        datas.forEach(function (data) {\n            var todoItem = window.Widget.todoItem(\"todoItem\", {\n                id: data.id,\n                innerText: data.contents,\n                checked: data.done,\n                onChange: function (event) {\n                    data.done = !data.done;\n                    if (columns.onChange !== undefined) {\n                        columns.onChange(event);\n                    }\n                },\n                onClick: function (event) {\n                    data.deleted = true;\n                    if (columns.onClick !== undefined) {\n                        columns.onClick(event);\n                    }\n                },\n                parent: el,\n            });\n        });\n    }\n}\nvar createTodoList = (0,_baseWidget__WEBPACK_IMPORTED_MODULE_0__.rawWidget)(_createTodoList);\n\n\n//# sourceURL=webpack:///./src/extends/todoList.ts?");

        /***/
}),

  /***/ "./src/index.ts":
  /*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raw_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw/fragment */ \"./src/raw/fragment.ts\");\n/* harmony import */ var _raw_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raw/widget */ \"./src/raw/widget.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ \"./src/core.ts\");\n/* harmony import */ var _extends_todoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extends/todoItem */ \"./src/extends/todoItem.ts\");\n/* harmony import */ var _extends_todoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extends/todoList */ \"./src/extends/todoList.ts\");\n\n\n\n\n\nwindow.Widget = {\n    fragment: _raw_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragment,\n    element: _raw_widget__WEBPACK_IMPORTED_MODULE_1__.createWidget,\n    todoItem: _extends_todoItem__WEBPACK_IMPORTED_MODULE_3__.createTodoItem,\n    todoList: _extends_todoList__WEBPACK_IMPORTED_MODULE_4__.createTodoList,\n    get: _core__WEBPACK_IMPORTED_MODULE_2__.getControl,\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

        /***/
}),

  /***/ "./src/raw/fragment.ts":
  /*!*****************************!*\
    !*** ./src/raw/fragment.ts ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFragment: () => (/* binding */ createFragment)\n/* harmony export */ });\n/* harmony import */ var _baseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseWidget */ \"./src/baseWidget.ts\");\n\nfunction _createFragment(elName, option) {\n    var el = document.createDocumentFragment();\n    var control = {\n        id: option.id || \"\",\n        getEl: function () {\n            return el;\n        },\n    };\n    return control;\n}\nvar createFragment = (0,_baseWidget__WEBPACK_IMPORTED_MODULE_0__.rawWidget)(_createFragment);\n\n\n//# sourceURL=webpack:///./src/raw/fragment.ts?");

        /***/
}),

  /***/ "./src/raw/widget.ts":
  /*!***************************!*\
    !*** ./src/raw/widget.ts ***!
    \***************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWidget: () => (/* binding */ createWidget)\n/* harmony export */ });\n/* harmony import */ var _baseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseWidget */ \"./src/baseWidget.ts\");\n\nfunction _createWidget(elName, option) {\n    var _a, _b, _c, _d, _e, _f, _g, _h;\n    var el = document.createElement(elName);\n    el.id = option.id || \"\";\n    el.className = option.class || \"\";\n    el.name = option.name;\n    el.setAttribute(\"style\", option.style || \"\");\n    el.label = option.label;\n    el.textContent = (_a = option.innerText) !== null && _a !== void 0 ? _a : null;\n    el.value = option.value;\n    el.placeholder = option.placeholder;\n    el.type = option.type;\n    el.checked = option.checked;\n    el.min = option.min;\n    el.max = option.max;\n    el.step = option.step;\n    el.oninput = (_b = option.onInput) !== null && _b !== void 0 ? _b : null;\n    el.onclick = (_c = option.onClick) !== null && _c !== void 0 ? _c : null;\n    el.onchange = (_d = option.onChange) !== null && _d !== void 0 ? _d : null;\n    el.onsubmit = (_e = option.onSubmit) !== null && _e !== void 0 ? _e : null;\n    el.onblur = (_f = option.onBlur) !== null && _f !== void 0 ? _f : null;\n    el.onkeydown = (_g = option.onKeyDown) !== null && _g !== void 0 ? _g : null;\n    el.onkeypress = (_h = option.onKeyPress) !== null && _h !== void 0 ? _h : null;\n    el.colspan = option.colSpan;\n    el.src = option.src;\n    el.href = option.href;\n    var control = {\n        id: option.id || \"\",\n        getEl: function () {\n            return el;\n        },\n        focus: function () {\n            el.focus();\n        },\n        setValue: function (value) {\n            el.value = value;\n        },\n        innerHTML: function (html) {\n            el.innerHTML = html;\n        },\n    };\n    return control;\n}\nvar createWidget = (0,_baseWidget__WEBPACK_IMPORTED_MODULE_0__.rawWidget)(_createWidget);\n\n\n//# sourceURL=webpack:///./src/raw/widget.ts?");

        /***/
})

    /******/
});
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
      /******/
}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
      /******/
};
  /******/
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
    /******/
}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for (var key in definition) {
  /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
  /******/
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/
  /******/
})()
  ;