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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _classes_spaceRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/spaceRepository.js */ \"./src/classes/spaceRepository.js\");\n/* harmony import */ var _classes_spaceObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/spaceObject.js */ \"./src/classes/spaceObject.js\");\n/* harmony import */ var _images_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/like.svg */ \"./src/images/like.svg\");\n/* harmony import */ var _images_unlike_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/unlike.svg */ \"./src/images/unlike.svg\");\n/* harmony import */ var _images_space_background_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/space-background.jpeg */ \"./src/images/space-background.jpeg\");\n/* harmony import */ var _images_astronaut_dance_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/astronaut-dance.gif */ \"./src/images/astronaut-dance.gif\");\n\n\n\n\n\n\n\n\nlet spaceRepository, spaceObject\n\nlet cardContainer = document.getElementById('cardContainer')\n\nfunction fetchAPI() {\n  let API_KEY = \"SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj\"\n  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)\n   .then(response => response.json())\n   .then(data => instantiate(data));\n }\n\n function instantiate(data) {\n   spaceRepository = new _classes_spaceRepository_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data)\n   spaceObject = data.map(object => {\n    return new _classes_spaceObject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](object)\n   })\n   \n   showCards()\n }\n\n function showCards() {\n  spaceObject.map(object =>\n    {\n    const spaceCard = document.createElement('div');\n    spaceCard.classList = 'space-card';\n\n    let cardContent =\n    `<div class=\"card\">\n      <input type=\"button\" class=\"like-button unlike\" id=\"likeButton\">\n      </input>\n    \n      <p class=\"date\">${object.date}</p>\n      <img src=\"${object.hdurl}\" class=\"card-image\" alt=\"${object.title}\">\n      <article class=\"card-description\">\n        <p class=\"title\">${object.title}</p><br>\n        <p class=\"description\">${object.explanation}\n        </p>\n      </article>\n    </div>`\n\n    cardContainer.innerHTML += cardContent\n  })\n }\n\n window.addEventListener('load', () => {\n   fetchAPI()\n })\n\ncardContainer.addEventListener('click', (e) => {\n  let likeButton = e.target\n  if(likeButton.closest('input').classList.contains('unlike')) {\n    likeButton.closest('input').classList.remove('unlike')\n    likeButton.closest('input').classList.add('like')\n  } else if (likeButton.closest('input').classList.contains('like')) {\n    likeButton.closest('input').classList.remove('like')\n    likeButton.closest('input').classList.add('unlike')\n  }\n})\n\n//# sourceURL=webpack://Spacetagram/./src/index.js?");

/***/ }),

/***/ "./src/images/astronaut-dance.gif":
/*!****************************************!*\
  !*** ./src/images/astronaut-dance.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47f6facd21fd9e48e255.gif\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/astronaut-dance.gif?");

/***/ }),

/***/ "./src/images/like.svg":
/*!*****************************!*\
  !*** ./src/images/like.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjZWIxODcxIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4wIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48c3ltYm9sIGlkPSJhIiB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48Zz48cG9seWdvbiBmaWxsPSIjZWIxODcxIiBwb2ludHM9Ii0xNS43NSwtMTUuNzUgLTE1Ljc1LDE1Ljc1IDE1Ljc1LDE1Ljc1IDE1Ljc1LC0xNS43NSAgICAgIj48L3BvbHlnb24+PHBhdGggZmlsbD0iI2ViMTg3MSIgZD0iTTE1LjUsMTUuNXYtMzFoLTMxdjMxSDE1LjUgTTE2LDE2aC0zMnYtMzJoMzJWMTZMMTYsMTZ6Ij48L3BhdGg+PC9nPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD0iLTU1Ljc5MSAtMTYgMTExLjU4MiAzMiI+PHVzZSB4bGluazpocmVmPSIjYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4PSItMTYiIHk9Ii0xNiIgdHJhbnNmb3JtPSJtYXRyaXgoLTIuNDY1MSAwIDAgLTEgMi44NjgyIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4PSItMTYiIHk9Ii0xNiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIDM5Ljc5MSAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI2EiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeD0iLTE2IiB5PSItMTYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAtMSAtMzkuNzkxIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PGRlZnM+PGZpbHRlciBpZD0iZyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItNTUuNzkiIHk9Ii0xNiIgd2lkdGg9IjExMS41OCIgaGVpZ2h0PSIzMiI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCI+PC9mZUNvbG9yTWF0cml4PjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItNTUuNzkiIHk9Ii0xNiIgd2lkdGg9IjExMS41OCIgaGVpZ2h0PSIzMiIgaWQ9ImUiPjxnIGZpbHRlcj0idXJsKCNnKSI+PHVzZSB4bGluazpocmVmPSIjZiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMxIiB4PSItMTYiIHk9Ii0xNS41IiB0cmFuc2Zvcm09Im1hdHJpeCgzLjE5IDAgMCAxIDAuMDcyMyAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjwvZz48L21hc2s+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDApIiBtYXNrPSJ1cmwoI2UpIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHg9Ii0xNiIgeT0iLTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMy40ODY5IDAgMCAtMSAwIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PC9nPjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC00My43OTEgLTUuMzM1OSkiIGZpbGw9IiNlYjE4NzEiIGZvbnQtZmFtaWx5PSInRnJ1dGlnZXJOZXh0TFQtUmVndWxhciciIGZvbnQtc2l6ZT0iMTYiPlNlaXRlbmFuZmFuZzwvdGV4dD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xNiAtMTYgMzIgMzIiPjx1c2UgeGxpbms6aHJlZj0iI2IiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeD0iLTE2IiB5PSItMTYiIG92ZXJmbG93PSJ2aXNpYmxlIj48L3VzZT48Zz48cG9seWxpbmUgZmlsbD0iI2ViMTg3MSIgc3Ryb2tlPSIjZWIxODcxIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iLTksLTUgMCw0IDksLTUgICAgICI+PC9wb2x5bGluZT48L2c+PC9zeW1ib2w+PHN5bWJvbCBpZD0iZiIgdmlld0JveD0iLTE2IC0xNS41IDMyIDMxIj48Zz48cG9seWdvbiBmaWxsPSIjZWIxODcxIiBwb2ludHM9IjE2LC0xNS41IC0xNiwtMTUuNSAtMTYsMTUuNSAxNiwxNS41ICAgICAiPjwvcG9seWdvbj48L2c+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48dXNlIHhsaW5rOmhyZWY9IiNiIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHg9Ii0xNiIgeT0iLTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMCAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjxnPjxwb2x5bGluZSBmaWxsPSIjZWIxODcxIiBzdHJva2U9IiNlYjE4NzEiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI2LC0wLjcwMSAwLC03IC02LC0wLjcwMSAgICAgIj48L3BvbHlsaW5lPjxsaW5lIGZpbGw9IiNlYjE4NzEiIHN0cm9rZT0iI2ViMTg3MSIgc3Ryb2tlLXdpZHRoPSIyIiB4MT0iMCIgeTE9Ii0yIiB4Mj0iMCIgeTI9IjciPjwvbGluZT48L2c+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48Zz48cG9seWdvbiBmaWxsPSIjZWIxODcxIiBwb2ludHM9Ii0xNS43NSwtMTUuNzUgLTE1Ljc1LDE1Ljc1IDE1Ljc1LDE1Ljc1IDE1Ljc1LC0xNS43NSAgICAgIj48L3BvbHlnb24+PGc+PHBhdGggZmlsbD0iI2ViMTg3MSIgZD0iTTE1LjUsMTUuNXYtMzFoLTMxdjMxSDE1LjUgTTE2LDE2aC0zMnYtMzJoMzJWMTZMMTYsMTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xNiAtMTYgMzIgMzIiPjxnPjxwb2x5Z29uIGZpbGw9IiNlYjE4NzEiIHBvaW50cz0iLTE1Ljc1LC0xNS43NSAtMTUuNzUsMTUuNzUgMTUuNzUsMTUuNzUgMTUuNzUsLTE1Ljc1ICAgICAiPjwvcG9seWdvbj48cGF0aCBmaWxsPSIjZWIxODcxIiBkPSJNMTUuNSwxNS41di0zMWgtMzF2MzFIMTUuNSBNMTYsMTZoLTMydi0zMmgzMlYxNkwxNiwxNnoiPjwvcGF0aD48L2c+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iLTE2IC0xNiAzMiAzMiI+PGc+PHBvbHlnb24gZmlsbD0iI2ViMTg3MSIgcG9pbnRzPSItMTUuNzUsLTE1Ljc1IC0xNS43NSwxNS43NSAxNS43NSwxNS43NSAxNS43NSwtMTUuNzUgICAgICI+PC9wb2x5Z29uPjxwYXRoIGZpbGw9IiNlYjE4NzEiIGQ9Ik0xNS41LDE1LjV2LTMxaC0zMXYzMUgxNS41IE0xNiwxNmgtMzJ2LTMyaDMyVjE2TDE2LDE2eiI+PC9wYXRoPjwvZz48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xMCAtMTAgMjAgMjAiPjxwb2x5Z29uIGZpbGw9IiNlYjE4NzEiIHBvaW50cz0iMTAsLTEwIC0xMCwtMTAgLTEwLDEwIDEwLDEwICAgICI+PC9wb2x5Z29uPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD0iLTUuNzA3IC0zLjU2MSAxMS40MTQgNy4xMjEiPjxwb2x5bGluZSBmaWxsPSIjZWIxODcxIiBzdHJva2U9IiNlYjE4NzEiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI1LDIuODU0IDAsLTIuMTQ2IC01LDIuODU0ICAgICI+PC9wb2x5bGluZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii04LjM1NCAtOC4zNTQgMTYuNzA3IDE2LjcwNyI+PGRlZnM+PGZpbHRlciBpZD0iZCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItOC4zNTQiIHk9IjEuOTM5IiB3aWR0aD0iNi40MTQiIGhlaWdodD0iNi40MTQiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSItMSAwIDAgMCAxICAwIC0xIDAgMCAxICAwIDAgLTEgMCAxICAwIDAgMCAxIDAiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgcmVzdWx0PSJzb3VyY2UiPjwvZmVDb2xvck1hdHJpeD48ZmVGbG9vZCBzdHlsZT0iZmxvb2QtY29sb3I6d2hpdGU7Zmxvb2Qtb3BhY2l0eToxOyIgcmVzdWx0PSJiYWNrIj48L2ZlRmxvb2Q+PGZlQmxlbmQgaW49InNvdXJjZSIgaW4yPSJiYWNrIiBtb2RlPSJub3JtYWwiPjwvZmVCbGVuZD48L2ZpbHRlcj48L2RlZnM+PG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTguMzU0IiB5PSIxLjkzOSIgd2lkdGg9IjYuNDE0IiBoZWlnaHQ9IjYuNDE0IiBpZD0iYyI+PGcgZmlsdGVyPSJ1cmwoI2QpIj48Zz48cGF0aCBmaWxsPSIjZWIxODcxIiBkPSJNMi4xMDQsOC4zNTRjMy40NTMsMCw2LjI1LTIuNzk4LDYuMjUtNi4yNTFjMC0zLjQ1MS0yLjc5Ny02LjI0OS02LjI1LTYuMjQ5cy02LjI1LDIuNzk4LTYuMjUsNi4yNDkgICAgICAgIEMtNC4xNDYsNS41NTUtMS4zNSw4LjM1NCwyLjEwNCw4LjM1NCBNMi4xMDQsMTAuMzU0Yy00LjU0OSwwLTguMjUtMy43MDEtOC4yNS04LjI1MWMwLTQuNTQ4LDMuNzAxLTguMjQ5LDguMjUtOC4yNDkgICAgICAgIHM4LjI1LDMuNzAxLDguMjUsOC4yNDlDMTAuMzU0LDYuNjUyLDYuNjUyLDEwLjM1NCwyLjEwNCwxMC4zNTRMMi4xMDQsMTAuMzU0eiI+PC9wYXRoPjwvZz48L2c+PC9tYXNrPjxsaW5lIG1hc2s9InVybCgjYykiIGZpbGw9IiNlYjE4NzEiIHN0cm9rZT0iI2ViMTg3MSIgc3Ryb2tlLXdpZHRoPSIyIiB4MT0iLTIuNjQ2IiB5MT0iLTIuNjQ2IiB4Mj0iLTcuNjQ2IiB5Mj0iLTcuNjQ2Ij48L2xpbmU+PGc+PHBhdGggZmlsbD0iI2ViMTg3MSIgZD0iTTIuMTA0LDYuMzU0YzIuMzQ0LDAsNC4yNS0xLjkwNyw0LjI1LTQuMjUxYzAtMi4zNDMtMS45MDYtNC4yNDktNC4yNS00LjI0OXMtNC4yNSwxLjkwNi00LjI1LDQuMjQ5ICAgICAgQy0yLjE0Niw0LjQ0Ni0wLjI0LDYuMzU0LDIuMTA0LDYuMzU0IE0yLjEwNCw4LjM1NGMtMy40NTMsMC02LjI1LTIuNzk4LTYuMjUtNi4yNTFjMC0zLjQ1MSwyLjc5Ny02LjI0OSw2LjI1LTYuMjQ5ICAgICAgczYuMjUsMi43OTgsNi4yNSw2LjI0OUM4LjM1NCw1LjU1NSw1LjU1Nyw4LjM1NCwyLjEwNCw4LjM1NEwyLjEwNCw4LjM1NHoiPjwvcGF0aD48L2c+PC9zeW1ib2w+PGc+PHBhdGggZD0iTTQsOUMzLjQ0Nyw5LDMsOC41NTIsMyw4YzAtMi4yMDYsMS43OTQtNCw0LTRjMC40NDcsMCwwLjg4NywwLjA3MywxLjMwNiwwLjIxOGMwLjUyMiwwLjE4MSwwLjgsMC43NSwwLjYxOSwxLjI3MiAgICAgQzguNzQzLDYuMDEyLDguMTczLDYuMjg4LDcuNjUzLDYuMTA5QzcuNDQ0LDYuMDM3LDcuMjI1LDYsNyw2QzUuODk3LDYsNSw2Ljg5Nyw1LDhDNSw4LjU1Miw0LjU1Myw5LDQsOUw0LDl6Ij48L3BhdGg+PHBhdGggZD0iTTEwLjAwMSw5QzkuOTQ5LDksOS44OTYsOC45OTYsOS44NDMsOC45ODhjLTAuNTQ1LTAuMDg3LTAuOTE3LTAuNTk5LTAuODMtMS4xNDVDOS4zNzgsNS41NDQsMTAuOTgsNCwxMyw0ICAgICBjMi4yMDYsMCw0LDEuNzk0LDQsNGMwLDAuNTUyLTAuNDQ3LDEtMSwxcy0xLTAuNDQ4LTEtMWMwLTEuMTAzLTAuODk3LTItMi0yYy0xLjIzMSwwLTEuODQ3LDEuMTE0LTIuMDEzLDIuMTU3ICAgICBDMTAuOTA5LDguNjQ5LDEwLjQ4NCw5LDEwLjAwMSw5TDEwLjAwMSw5eiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMCwxN2MtMC4yMTcsMC0wLjQzNS0wLjA3MS0wLjYxNS0wLjIxMkM4LjczMSwxNi4yNzgsMywxMS42OTgsMyw4YzAtMC41NTIsMC40NDctMSwxLTFzMSwwLjQ0OCwxLDEgICAgIGMwLDEuODc1LDIuODUxLDQuOTA0LDUsNi43MTJjMi4xNDktMS44MSw1LTQuODQxLDUtNi43MTJjMC0wLjU1MiwwLjQ0Ny0xLDEtMXMxLDAuNDQ4LDEsMWMwLDMuNjk4LTUuNzMxLDguMjc4LTYuMzg1LDguNzg4ICAgICBDMTAuNDM1LDE2LjkyOSwxMC4yMTcsMTcsMTAsMTdMMTAsMTd6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/like.svg?");

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
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzEwMHB4JyB3aWR0aD0nMTAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4wIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48c3ltYm9sIGlkPSJhIiB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48Zz48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9Ii0xNS43NSwtMTUuNzUgLTE1Ljc1LDE1Ljc1IDE1Ljc1LDE1Ljc1IDE1Ljc1LC0xNS43NSAgICAgIj48L3BvbHlnb24+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE1LjUsMTUuNXYtMzFoLTMxdjMxSDE1LjUgTTE2LDE2aC0zMnYtMzJoMzJWMTZMMTYsMTZ6Ij48L3BhdGg+PC9nPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD0iLTU1Ljc5MSAtMTYgMTExLjU4MiAzMiI+PHVzZSB4bGluazpocmVmPSIjYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4PSItMTYiIHk9Ii0xNiIgdHJhbnNmb3JtPSJtYXRyaXgoLTIuNDY1MSAwIDAgLTEgMi44NjgyIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjYSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4PSItMTYiIHk9Ii0xNiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIDM5Ljc5MSAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI2EiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeD0iLTE2IiB5PSItMTYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAtMSAtMzkuNzkxIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PGRlZnM+PGZpbHRlciBpZD0iZyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItNTUuNzkiIHk9Ii0xNiIgd2lkdGg9IjExMS41OCIgaGVpZ2h0PSIzMiI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCI+PC9mZUNvbG9yTWF0cml4PjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItNTUuNzkiIHk9Ii0xNiIgd2lkdGg9IjExMS41OCIgaGVpZ2h0PSIzMiIgaWQ9ImUiPjxnIGZpbHRlcj0idXJsKCNnKSI+PHVzZSB4bGluazpocmVmPSIjZiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMxIiB4PSItMTYiIHk9Ii0xNS41IiB0cmFuc2Zvcm09Im1hdHJpeCgzLjE5IDAgMCAxIDAuMDcyMyAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjwvZz48L21hc2s+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDApIiBtYXNrPSJ1cmwoI2UpIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHg9Ii0xNiIgeT0iLTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMy40ODY5IDAgMCAtMSAwIDApIiBvdmVyZmxvdz0idmlzaWJsZSI+PC91c2U+PC9nPjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC00My43OTEgLTUuMzM1OSkiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSInRnJ1dGlnZXJOZXh0TFQtUmVndWxhciciIGZvbnQtc2l6ZT0iMTYiPlNlaXRlbmFuZmFuZzwvdGV4dD48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xNiAtMTYgMzIgMzIiPjx1c2UgeGxpbms6aHJlZj0iI2IiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeD0iLTE2IiB5PSItMTYiIG92ZXJmbG93PSJ2aXNpYmxlIj48L3VzZT48Zz48cG9seWxpbmUgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iLTksLTUgMCw0IDksLTUgICAgICI+PC9wb2x5bGluZT48L2c+PC9zeW1ib2w+PHN5bWJvbCBpZD0iZiIgdmlld0JveD0iLTE2IC0xNS41IDMyIDMxIj48Zz48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjE2LC0xNS41IC0xNiwtMTUuNSAtMTYsMTUuNSAxNiwxNS41ICAgICAiPjwvcG9seWdvbj48L2c+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48dXNlIHhsaW5rOmhyZWY9IiNiIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHg9Ii0xNiIgeT0iLTE2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMCAwKSIgb3ZlcmZsb3c9InZpc2libGUiPjwvdXNlPjxnPjxwb2x5bGluZSBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI2LC0wLjcwMSAwLC03IC02LC0wLjcwMSAgICAgIj48L3BvbHlsaW5lPjxsaW5lIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiB4MT0iMCIgeTE9Ii0yIiB4Mj0iMCIgeTI9IjciPjwvbGluZT48L2c+PC9zeW1ib2w+PHN5bWJvbCB2aWV3Qm94PSItMTYgLTE2IDMyIDMyIj48Zz48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9Ii0xNS43NSwtMTUuNzUgLTE1Ljc1LDE1Ljc1IDE1Ljc1LDE1Ljc1IDE1Ljc1LC0xNS43NSAgICAgIj48L3BvbHlnb24+PGc+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE1LjUsMTUuNXYtMzFoLTMxdjMxSDE1LjUgTTE2LDE2aC0zMnYtMzJoMzJWMTZMMTYsMTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xNiAtMTYgMzIgMzIiPjxnPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iLTE1Ljc1LC0xNS43NSAtMTUuNzUsMTUuNzUgMTUuNzUsMTUuNzUgMTUuNzUsLTE1Ljc1ICAgICAiPjwvcG9seWdvbj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTUuNSwxNS41di0zMWgtMzF2MzFIMTUuNSBNMTYsMTZoLTMydi0zMmgzMlYxNkwxNiwxNnoiPjwvcGF0aD48L2c+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iLTE2IC0xNiAzMiAzMiI+PGc+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSItMTUuNzUsLTE1Ljc1IC0xNS43NSwxNS43NSAxNS43NSwxNS43NSAxNS43NSwtMTUuNzUgICAgICI+PC9wb2x5Z29uPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xNS41LDE1LjV2LTMxaC0zMXYzMUgxNS41IE0xNiwxNmgtMzJ2LTMyaDMyVjE2TDE2LDE2eiI+PC9wYXRoPjwvZz48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii0xMCAtMTAgMjAgMjAiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMTAsLTEwIC0xMCwtMTAgLTEwLDEwIDEwLDEwICAgICI+PC9wb2x5Z29uPjwvc3ltYm9sPjxzeW1ib2wgdmlld0JveD0iLTUuNzA3IC0zLjU2MSAxMS40MTQgNy4xMjEiPjxwb2x5bGluZSBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSI1LDIuODU0IDAsLTIuMTQ2IC01LDIuODU0ICAgICI+PC9wb2x5bGluZT48L3N5bWJvbD48c3ltYm9sIHZpZXdCb3g9Ii04LjM1NCAtOC4zNTQgMTYuNzA3IDE2LjcwNyI+PGRlZnM+PGZpbHRlciBpZD0iZCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSItOC4zNTQiIHk9IjEuOTM5IiB3aWR0aD0iNi40MTQiIGhlaWdodD0iNi40MTQiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSItMSAwIDAgMCAxICAwIC0xIDAgMCAxICAwIDAgLTEgMCAxICAwIDAgMCAxIDAiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgcmVzdWx0PSJzb3VyY2UiPjwvZmVDb2xvck1hdHJpeD48ZmVGbG9vZCBzdHlsZT0iZmxvb2QtY29sb3I6d2hpdGU7Zmxvb2Qtb3BhY2l0eToxOyIgcmVzdWx0PSJiYWNrIj48L2ZlRmxvb2Q+PGZlQmxlbmQgaW49InNvdXJjZSIgaW4yPSJiYWNrIiBtb2RlPSJub3JtYWwiPjwvZmVCbGVuZD48L2ZpbHRlcj48L2RlZnM+PG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTguMzU0IiB5PSIxLjkzOSIgd2lkdGg9IjYuNDE0IiBoZWlnaHQ9IjYuNDE0IiBpZD0iYyI+PGcgZmlsdGVyPSJ1cmwoI2QpIj48Zz48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMi4xMDQsOC4zNTRjMy40NTMsMCw2LjI1LTIuNzk4LDYuMjUtNi4yNTFjMC0zLjQ1MS0yLjc5Ny02LjI0OS02LjI1LTYuMjQ5cy02LjI1LDIuNzk4LTYuMjUsNi4yNDkgICAgICAgIEMtNC4xNDYsNS41NTUtMS4zNSw4LjM1NCwyLjEwNCw4LjM1NCBNMi4xMDQsMTAuMzU0Yy00LjU0OSwwLTguMjUtMy43MDEtOC4yNS04LjI1MWMwLTQuNTQ4LDMuNzAxLTguMjQ5LDguMjUtOC4yNDkgICAgICAgIHM4LjI1LDMuNzAxLDguMjUsOC4yNDlDMTAuMzU0LDYuNjUyLDYuNjUyLDEwLjM1NCwyLjEwNCwxMC4zNTRMMi4xMDQsMTAuMzU0eiI+PC9wYXRoPjwvZz48L2c+PC9tYXNrPjxsaW5lIG1hc2s9InVybCgjYykiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiB4MT0iLTIuNjQ2IiB5MT0iLTIuNjQ2IiB4Mj0iLTcuNjQ2IiB5Mj0iLTcuNjQ2Ij48L2xpbmU+PGc+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTIuMTA0LDYuMzU0YzIuMzQ0LDAsNC4yNS0xLjkwNyw0LjI1LTQuMjUxYzAtMi4zNDMtMS45MDYtNC4yNDktNC4yNS00LjI0OXMtNC4yNSwxLjkwNi00LjI1LDQuMjQ5ICAgICAgQy0yLjE0Niw0LjQ0Ni0wLjI0LDYuMzU0LDIuMTA0LDYuMzU0IE0yLjEwNCw4LjM1NGMtMy40NTMsMC02LjI1LTIuNzk4LTYuMjUtNi4yNTFjMC0zLjQ1MSwyLjc5Ny02LjI0OSw2LjI1LTYuMjQ5ICAgICAgczYuMjUsMi43OTgsNi4yNSw2LjI0OUM4LjM1NCw1LjU1NSw1LjU1Nyw4LjM1NCwyLjEwNCw4LjM1NEwyLjEwNCw4LjM1NHoiPjwvcGF0aD48L2c+PC9zeW1ib2w+PGc+PHBhdGggZD0iTTQsOUMzLjQ0Nyw5LDMsOC41NTIsMyw4YzAtMi4yMDYsMS43OTQtNCw0LTRjMC40NDcsMCwwLjg4NywwLjA3MywxLjMwNiwwLjIxOGMwLjUyMiwwLjE4MSwwLjgsMC43NSwwLjYxOSwxLjI3MiAgICAgQzguNzQzLDYuMDEyLDguMTczLDYuMjg4LDcuNjUzLDYuMTA5QzcuNDQ0LDYuMDM3LDcuMjI1LDYsNyw2QzUuODk3LDYsNSw2Ljg5Nyw1LDhDNSw4LjU1Miw0LjU1Myw5LDQsOUw0LDl6Ij48L3BhdGg+PHBhdGggZD0iTTEwLjAwMSw5QzkuOTQ5LDksOS44OTYsOC45OTYsOS44NDMsOC45ODhjLTAuNTQ1LTAuMDg3LTAuOTE3LTAuNTk5LTAuODMtMS4xNDVDOS4zNzgsNS41NDQsMTAuOTgsNCwxMyw0ICAgICBjMi4yMDYsMCw0LDEuNzk0LDQsNGMwLDAuNTUyLTAuNDQ3LDEtMSwxcy0xLTAuNDQ4LTEtMWMwLTEuMTAzLTAuODk3LTItMi0yYy0xLjIzMSwwLTEuODQ3LDEuMTE0LTIuMDEzLDIuMTU3ICAgICBDMTAuOTA5LDguNjQ5LDEwLjQ4NCw5LDEwLjAwMSw5TDEwLjAwMSw5eiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMCwxN2MtMC4yMTcsMC0wLjQzNS0wLjA3MS0wLjYxNS0wLjIxMkM4LjczMSwxNi4yNzgsMywxMS42OTgsMyw4YzAtMC41NTIsMC40NDctMSwxLTFzMSwwLjQ0OCwxLDEgICAgIGMwLDEuODc1LDIuODUxLDQuOTA0LDUsNi43MTJjMi4xNDktMS44MSw1LTQuODQxLDUtNi43MTJjMC0wLjU1MiwwLjQ0Ny0xLDEtMXMxLDAuNDQ4LDEsMWMwLDMuNjk4LTUuNzMxLDguMjc4LTYuMzg1LDguNzg4ICAgICBDMTAuNDM1LDE2LjkyOSwxMC4yMTcsMTcsMTAsMTdMMTAsMTd6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+\";\n\n//# sourceURL=webpack://Spacetagram/./src/images/unlike.svg?");

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