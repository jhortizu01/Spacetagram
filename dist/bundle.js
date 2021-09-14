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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Spacetagram/./src/styles/index.scss?");

/***/ }),

/***/ "./src/classes/spaceObject.js":
/*!************************************!*\
  !*** ./src/classes/spaceObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SpaceObject {\n  constructor(singleSpaceObject) {\n    this.copyright = singleSpaceObject.copyright,\n    this.date = singleSpaceObject.date,\n    this.explanation = singleSpaceObject.explanation,\n    this.hdurl = singleSpaceObject.hdurl,\n    this.media_type = singleSpaceObject.media_type,\n    this.service_version = singleSpaceObject.service_version,\n    this.title = singleSpaceObject.title,\n    this.url = singleSpaceObject.url\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpaceObject);\n\n//# sourceURL=webpack://Spacetagram/./src/classes/spaceObject.js?");

/***/ }),

/***/ "./src/classes/spaceRepository.js":
/*!****************************************!*\
  !*** ./src/classes/spaceRepository.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SpaceRepository {\n  constructor(allSpaceData) {\n    this.spaceRepository = allSpaceData;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpaceRepository);\n\n//# sourceURL=webpack://Spacetagram/./src/classes/spaceRepository.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _classes_spaceRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/spaceRepository.js */ \"./src/classes/spaceRepository.js\");\n/* harmony import */ var _classes_spaceObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/spaceObject.js */ \"./src/classes/spaceObject.js\");\n/* harmony import */ var _images_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/like.svg */ \"./src/images/like.svg\");\n/* harmony import */ var _images_unlike_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/unlike.svg */ \"./src/images/unlike.svg\");\n/* harmony import */ var _images_space_background_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/space-background.jpeg */ \"./src/images/space-background.jpeg\");\n/* harmony import */ var _images_sample_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sample.png */ \"./src/images/sample.png\");\n\n\n\n\n\n\n\n\n\n\nlet spaceRepository, spaceObject\n\nlet cardContainer = document.getElementById('cardContainer')\n\nfunction fetchAPI() {\n  let API_KEY = \"SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj\"\n  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)\n   .then(response => response.json())\n   .then(data => instantiate(data));\n }\n\n function instantiate(data) {\n   spaceRepository = new _classes_spaceRepository_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data)\n   spaceObject = data.map(object => {\n    return new _classes_spaceObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](object)\n   })\n   \n   showCards()\n }\n\n function showCards() {\n  spaceObject.map(object =>\n    {\n    const spaceCard = document.createElement('div');\n    spaceCard.classList = 'space-card';\n\n    let cardContent =\n    `<div class=\"card\">\n      <input type=\"button\" class=\"like-button unlike\" id=\"likeButton\">\n      </input>\n      <p class=\"date\">${object.date}</p>\n      <img src=\"${object.hdurl}\" class=\"card-image\" alt=\"${object.title}\">\n      <div class=\"card-description\">\n        <p class=\"title\">${object.title}</p><br>\n        <p class=\"description\">${object.explanation}\n        </p>\n      </div>\n    </div>`\n\n    cardContainer.innerHTML += cardContent\n  })\n }\n\n window.addEventListener('load', () => {\n   fetchAPI()\n })\n\ncardContainer.addEventListener('click', (e) => {\n  let likeButton = e.target\n  if(likeButton.closest('input').classList.contains('unlike')) {\n    likeButton.closest('input').classList.remove('unlike')\n    likeButton.closest('input').classList.add('like')\n  } else if (likeButton.closest('input').classList.contains('like')) {\n    likeButton.closest('input').classList.remove('like')\n    likeButton.closest('input').classList.add('unlike')\n  }\n})\n\n//# sourceURL=webpack://Spacetagram/./src/index.js?");

/***/ }),

/***/ "./src/images/like.svg":
/*!*****************************!*\
  !*** ./src/images/like.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8047226706423cad1f0.svg\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/like.svg?");

/***/ }),

/***/ "./src/images/sample.png":
/*!*******************************!*\
  !*** ./src/images/sample.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1646d0ade7c7552f732.png\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/sample.png?");

/***/ }),

/***/ "./src/images/space-background.jpeg":
/*!******************************************!*\
  !*** ./src/images/space-background.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b54e2384da0d60918bc.jpeg\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/space-background.jpeg?");

/***/ }),

/***/ "./src/images/unlike.svg":
/*!*******************************!*\
  !*** ./src/images/unlike.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7fccd692f3cde939aa2e.svg\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/unlike.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;