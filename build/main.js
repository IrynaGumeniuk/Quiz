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

/***/ "./src/components/checkAnswer.js":
/*!***************************************!*\
  !*** ./src/components/checkAnswer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAnswer\": () => (/* binding */ checkAnswer)\n/* harmony export */ });\n/* harmony import */ var _dataBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBase.js */ \"./src/components/dataBase.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ \"./src/components/elements.js\");\n/* harmony import */ var _clearPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearPage.js */ \"./src/components/clearPage.js\");\n/* harmony import */ var _showQuestion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showQuestion.js */ \"./src/components/showQuestion.js\");\n \n\n\n \n\n\n//Answer button\nfunction checkAnswer(){\n  const checkedRadio = _elements_js__WEBPACK_IMPORTED_MODULE_2__.listContainer.querySelector('input[type=\"radio\"]:checked');\n  \n  //if any answer was selected\n  if (!checkedRadio){\n      _elements_js__WEBPACK_IMPORTED_MODULE_2__.submitBtn.blur();\n      return\n  };\n\n  //Find checked answer number\n  const userAnswer = parseInt(checkedRadio.value);\n\n  //correct answer or not\n  if (userAnswer === _dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions[_index_js__WEBPACK_IMPORTED_MODULE_1__.questionIndex][\"correct\"]) {\n      _index_js__WEBPACK_IMPORTED_MODULE_1__.score++;\n  }\n\n  //last answer or not\n  if (_index_js__WEBPACK_IMPORTED_MODULE_1__.questionIndex !== _dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions.length - 1){\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.questionIndex++;\n    (0,_clearPage_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();\n    (0,_showQuestion_js__WEBPACK_IMPORTED_MODULE_4__.showQuestion)();\n    return;\n  } else {\n    (0,_clearPage_js__WEBPACK_IMPORTED_MODULE_3__.clearPage)();\n    showResults();\n  };\n};\n\n//# sourceURL=webpack://quiz/./src/components/checkAnswer.js?");

/***/ }),

/***/ "./src/components/clearPage.js":
/*!*************************************!*\
  !*** ./src/components/clearPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPage\": () => (/* binding */ clearPage)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/components/elements.js\");\n\n\n//Clean HTML page and render current question\nfunction clearPage(){\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.headerContainer.innerHTML = \" \";\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML = \" \";\n};\n\n//# sourceURL=webpack://quiz/./src/components/clearPage.js?");

/***/ }),

/***/ "./src/components/dataBase.js":
/*!************************************!*\
  !*** ./src/components/dataBase.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questions\": () => (/* binding */ questions)\n/* harmony export */ });\nconst questions = [ \n    {\n      question: \"Яка мова працює у браузурі?\",\n      answers: [\"Java\", \"C\", \"Python\", \"JavaScript\"],\n      correct: 4,\n      topic: \"JS\",\n      level: 2,\n    },\n    {\n      question: \"Тег- це?\",\n      answers: [\"код для визначення структури веб-сторінок\", \n                \"команда у мові HTML\", \"будь-яке текстове повідомлення, що розташоване в кутових дужках\", \n                \"настроювання вигляду частини веб-сторінки за допомогою спеціального коду\"],\n      correct: 2,\n      topic: \"HTML\",\n      level: 1,\n    },\n    { \n      question: \"Що означає CSS?\",\n      answers: [\"Central Style Sheets\",\n                \"Cascading Style Sheets\",\n                \"Cascading Simple Sheets\", \n                \"Cars SUVs Sailboats\"],\n      correct: 2,\n      topic: \"CSS\",\n      level: 1,\n    },\n    {\n      question: \"Що означає HTML?\",\n      answers: [\"Hypertext Markup Language\", \n                \"Hypertext Markdown Language\", \n                \"Hyperloop Machine Language\", \n                \"Helicopters Terminals Motorboats Lamborginis\"],\n      correct: 1,\n      topic: \"HTML\",\n      level: 1, \n    },\n    {\n      question: \"Атрибут- це?\",\n      answers: [\"характеристика тегу, що впливає на створюваний ним ефект\", \n                \"характеристика тегу, що вивчає місце його розташування в HTML- документі\", \n                \"характеристика кольорів тексту та тла веб-сторінки\", \n                \"властивість тегу\"],\n      correct: 4,\n      topic: \"HTML\",\n      level: 1,\n    },\n    {\n      question: \"В якому HTML елементі правильно підключати CSS файл??\",\n      answers: [\"< body >\", \"< head >\", \"Вкінці документа\", \"< script >\"],\n      correct: 2,\n      topic: \"HTML\",\n      level: 2,\n    },\n    {\n      question: \"Як правильно додавати коментарі в CSS документ?\",\n      answers: [\"< !-- коментар --> \", \" /* коментар */ \", \"// коментар\", \"// коментар // \"],\n      correct: 2,\n      topic: \"CSS\",\n      level: 2,\n    },\n    {\n      question: \" Виберіть правильний CSS синтаксис \",\n      answers: [\"{div;color:black;}\", \"div:color=black;\", \"div {color: black;}\", \"{div:color=black;} \"],\n      correct: 3,\n      topic: \"CSS\",\n      level: 2,\n    },\n    {\n      question: \"В якому році був створенний JavaScript?\",\n      answers: [\"1996\", \"1995\", \"1994\", \"все ответы неверные\"],\n      correct: 2,\n      topic: \"JS\",\n      level: 3,\n    },\n    {\n      question: \"Хто створив Javascript?\",\n      answers: [\"Тім Бернер Лі\", \"Стів Джобс\", \"Ларі Пейдж\", \"Брендан Айк\", \"Біл Гейтс\"],\n      correct: 4,\n      topic: \"JS\",\n      level: 3,\n    },\n    {\n      question: \"Яка компанія започаткувала використання Javascript?\",\n      answers: [\"Netscape\", \"Microsoft\", \"Google\", \"Apple\"],\n      correct: 1,\n      topic: \"JS\",\n      level: 3,\n    },\n    {\n      question: \"Javascript є регістро - залежною чи незалежною мовою програмування\",\n      answers: [\"так\", \"ні\"],\n      correct: 1,\n      topic: \"JS\",\n      level: 3,\n    },\n  ];\n\n//# sourceURL=webpack://quiz/./src/components/dataBase.js?");

/***/ }),

/***/ "./src/components/elements.js":
/*!************************************!*\
  !*** ./src/components/elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerContainer\": () => (/* binding */ headerContainer),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn)\n/* harmony export */ });\n//Find elements\nconst headerContainer = document.querySelector(\"#header\");\nconst listContainer = document.querySelector(\"#answers\");\nconst submitBtn = document.querySelector(\"#submit\");\n\n//# sourceURL=webpack://quiz/./src/components/elements.js?");

/***/ }),

/***/ "./src/components/showQuestion.js":
/*!****************************************!*\
  !*** ./src/components/showQuestion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showQuestion\": () => (/* binding */ showQuestion)\n/* harmony export */ });\n/* harmony import */ var _dataBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataBase.js */ \"./src/components/dataBase.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ \"./src/components/elements.js\");\n\n\n\n\n\nfunction showQuestion(){\n  //Question\n  const headerTemplate = `<h2 class=\"title\">%title%</h2>`;\n  const title = headerTemplate.replace(\"%title%\", _dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions[_index_js__WEBPACK_IMPORTED_MODULE_1__.questionIndex][\"question\"]);\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.headerContainer.innerHTML = title;\n\n\n  //Answers\n  let answerNumber = 1;\n  let answerText;\n  for (answerText of _dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions[_index_js__WEBPACK_IMPORTED_MODULE_1__.questionIndex][\"answers\"]){\n      const questionTemplate = \n      `<li>\n        <label>\n          <input value=\"%number%\" type=\"radio\" class=\"answer\" name=\"answer\" />\n          <span>%answer%</span>\n        </label>\n       </li>`;\n      const answerHTML = questionTemplate\n                          .replace(\"%answer%\", answerText)\n                          .replace(\"%number%\", answerNumber);\n      \n      _elements_js__WEBPACK_IMPORTED_MODULE_2__.listContainer.innerHTML += answerHTML;\n      answerNumber++;\n  }\n};\n\n//# sourceURL=webpack://quiz/./src/components/showQuestion.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Css1\": () => (/* binding */ Css1),\n/* harmony export */   \"Css2\": () => (/* binding */ Css2),\n/* harmony export */   \"Css3\": () => (/* binding */ Css3),\n/* harmony export */   \"Html1\": () => (/* binding */ Html1),\n/* harmony export */   \"Html2\": () => (/* binding */ Html2),\n/* harmony export */   \"Html3\": () => (/* binding */ Html3),\n/* harmony export */   \"Js1\": () => (/* binding */ Js1),\n/* harmony export */   \"Js2\": () => (/* binding */ Js2),\n/* harmony export */   \"Js3\": () => (/* binding */ Js3),\n/* harmony export */   \"n\": () => (/* binding */ n),\n/* harmony export */   \"questionIndex\": () => (/* binding */ questionIndex),\n/* harmony export */   \"score\": () => (/* binding */ score)\n/* harmony export */ });\n/* harmony import */ var _components_dataBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dataBase.js */ \"./src/components/dataBase.js\");\n/* harmony import */ var _components_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/elements.js */ \"./src/components/elements.js\");\n/* harmony import */ var _components_clearPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/clearPage.js */ \"./src/components/clearPage.js\");\n/* harmony import */ var _components_showQuestion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showQuestion.js */ \"./src/components/showQuestion.js\");\n/* harmony import */ var _components_checkAnswer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkAnswer.js */ \"./src/components/checkAnswer.js\");\n\n\n\n\n\n\n\nlet Html1 = []; \nlet Html2 = []; \nlet Html3 = []; \nlet Css1 = []; \nlet Css2 = []; \nlet Css3 = []; \nlet Js1 = []; \nlet Js2 = []; \nlet Js3 = []; \n\nlet n = 0;  \n\n\nwhile (n < _components_dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions.length ) {\n  let element = _components_dataBase_js__WEBPACK_IMPORTED_MODULE_0__.questions[n];\n\n  switch (element.topic) {\n    case \"HTML\" :\n      switch (element.level) {\n        case 1:\n          Html1.push(element);\n          break;\n        \n        case 2:\n          Html2.push(element);\n          break;\n\n        case 3:\n          Html3.push(element);\n          break;\n      };\n      break;\n\n      case \"CSS\" :\n        switch (element.level) {\n          case 1:\n            Css1.push(element);\n            break;\n          \n          case 2:\n            Css2.push(element);\n            break;\n  \n          case 3:\n            Css3.push(element);\n            break;\n        };\n        break;\n\n        case \"JS\" :\n          switch (element.level) {\n            case 1:\n              Js1.push(element);\n              break;\n            \n            case 2:\n              Js2.push(element);\n              break;\n    \n            case 3:\n              Js3.push(element);\n              break;\n          };\n          break;\n  };\n\n  n++;\n\n}\n\n\n//Variables\nlet score = 0;\nlet questionIndex = 0;\n\n(0,_components_clearPage_js__WEBPACK_IMPORTED_MODULE_2__.clearPage)();\n(0,_components_showQuestion_js__WEBPACK_IMPORTED_MODULE_3__.showQuestion)();\n_components_elements_js__WEBPACK_IMPORTED_MODULE_1__.submitBtn.onclick = _components_checkAnswer_js__WEBPACK_IMPORTED_MODULE_4__.checkAnswer;\n\n \n\n//# sourceURL=webpack://quiz/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;