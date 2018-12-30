/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/modules/slider.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/modules/slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slides = document.querySelectorAll('#slides .slide');\nvar next = document.getElementById('next');\nvar previous = document.getElementById('previous');\nvar controls = document.querySelectorAll('.controls');\n\nvar currentSlide = 0;\n\n//осуществляет переход к слайду номер n (начиная с 0)\nfunction goToSlide(n) {\n    slides[currentSlide].className = 'slide';\n    currentSlide = (n + slides.length) % slides.length; //остаток деления\n    slides[currentSlide].className = 'slide showing';\n}\n\n//навешивает обработчики событий на элементы next и previous\nfunction setupListeners() {\n    next.onclick = function () {\n        goToSlide(currentSlide + 1);\n    };\n    previous.onclick = function () {\n        goToSlide(currentSlide - 1);\n    };\n}\n\n//показывает кнопки для навигации\nfunction showButtons() {\n    for (var i = 0; i < controls.length; i++) {\n        controls[i].style.display = 'inline-block';\n    }\n}\n\n//инициализация слайдера\nfunction sliderInit() {\n    if (slides.length !== 0) {\n        //если на странице есть нужный html код\n        setupListeners();\n        showButtons();\n    }\n}\n\nmodule.exports = sliderInit;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/M2VhMSJdLCJuYW1lcyI6WyJzbGlkZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXh0IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2aW91cyIsImNvbnRyb2xzIiwiY3VycmVudFNsaWRlIiwiZ29Ub1NsaWRlIiwibiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNldHVwTGlzdGVuZXJzIiwib25jbGljayIsInNob3dCdXR0b25zIiwiaSIsInN0eWxlIiwiZGlzcGxheSIsInNsaWRlckluaXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVNDLFNBQVNDLGdCQUFULENBQTBCLGdCQUExQixDQUFmO0FBQ0EsSUFBTUMsT0FBT0YsU0FBU0csY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsSUFBTUMsV0FBV0osU0FBU0csY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLElBQU1FLFdBQVdMLFNBQVNDLGdCQUFULENBQTBCLFdBQTFCLENBQWpCOztBQUVBLElBQUlLLGVBQWUsQ0FBbkI7O0FBRUE7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNsQlQsV0FBT08sWUFBUCxFQUFxQkcsU0FBckIsR0FBaUMsT0FBakM7QUFDQUgsbUJBQWUsQ0FBQ0UsSUFBRVQsT0FBT1csTUFBVixJQUFrQlgsT0FBT1csTUFBeEMsQ0FGa0IsQ0FFOEI7QUFDaERYLFdBQU9PLFlBQVAsRUFBcUJHLFNBQXJCLEdBQWlDLGVBQWpDO0FBQ0g7O0FBRUQ7QUFDQSxTQUFTRSxjQUFULEdBQTBCO0FBQ3RCVCxTQUFLVSxPQUFMLEdBQWUsWUFBWTtBQUN2Qkwsa0JBQVVELGVBQWEsQ0FBdkI7QUFDSCxLQUZEO0FBR0FGLGFBQVNRLE9BQVQsR0FBbUIsWUFBWTtBQUMzQkwsa0JBQVVELGVBQWEsQ0FBdkI7QUFDSCxLQUZEO0FBR0g7O0FBRUQ7QUFDQSxTQUFTTyxXQUFULEdBQXVCO0FBQ25CLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxTQUFTSyxNQUE3QixFQUFxQ0ksR0FBckMsRUFBMEM7QUFDdENULGlCQUFTUyxDQUFULEVBQVlDLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLGNBQTVCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLFNBQVNDLFVBQVQsR0FBc0I7QUFDbEIsUUFBSWxCLE9BQU9XLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFBRTtBQUN2QkM7QUFDQUU7QUFDSDtBQUNKOztBQUVESyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzbGlkZXMgLnNsaWRlJyk7XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5jb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpO1xyXG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9scycpO1xyXG5cclxubGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4vL9C+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgiDQv9C10YDQtdGF0L7QtCDQuiDRgdC70LDQudC00YMg0L3QvtC80LXRgCBuICjQvdCw0YfQuNC90LDRjyDRgSAwKVxyXG5mdW5jdGlvbiBnb1RvU2xpZGUobikge1xyXG4gICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ3NsaWRlJztcclxuICAgIGN1cnJlbnRTbGlkZSA9IChuK3NsaWRlcy5sZW5ndGgpJXNsaWRlcy5sZW5ndGg7IC8v0L7RgdGC0LDRgtC+0Log0LTQtdC70LXQvdC40Y9cclxuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTmFtZSA9ICdzbGlkZSBzaG93aW5nJztcclxufVxyXG5cclxuLy/QvdCw0LLQtdGI0LjQstCw0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5INC90LAg0Y3Qu9C10LzQtdC90YLRiyBuZXh0INC4IHByZXZpb3VzXHJcbmZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzKCkge1xyXG4gICAgbmV4dC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUrMSk7XHJcbiAgICB9XHJcbiAgICBwcmV2aW91cy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUtMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v0L/QvtC60LDQt9GL0LLQsNC10YIg0LrQvdC+0L/QutC4INC00LvRjyDQvdCw0LLQuNCz0LDRhtC40LhcclxuZnVuY3Rpb24gc2hvd0J1dHRvbnMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29udHJvbHNbaV0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL9C40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvQsNC50LTQtdGA0LBcclxuZnVuY3Rpb24gc2xpZGVySW5pdCgpIHtcclxuICAgIGlmIChzbGlkZXMubGVuZ3RoICE9PSAwKSB7IC8v0LXRgdC70Lgg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC10YHRgtGMINC90YPQttC90YvQuSBodG1sINC60L7QtFxyXG4gICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgc2hvd0J1dHRvbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzbGlkZXJJbml0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/slider.js\n");

/***/ }),

/***/ "./src/assets/scripts/works.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/works.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(/*! ./modules/slider */ \"./src/assets/scripts/modules/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _slider2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy93b3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGlkZXIgZnJvbSBcIi4vbW9kdWxlcy9zbGlkZXJcIlxyXG5cclxuc2xpZGVyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });