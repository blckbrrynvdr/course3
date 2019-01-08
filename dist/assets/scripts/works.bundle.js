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

/***/ "./src/assets/scripts/modules/hamburgermenu.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/modules/hamburgermenu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar menu = function (options) {\n\n  var buttonOpen = document.querySelector(options.buttonOpen);\n  var menu = document.querySelector(options.menu);\n  var body = document.querySelector('body');\n\n  var _toggleMenu = function _toggleMenu() {\n    menu.classList.toggle('overlay--open');\n    body.classList.toggle('body-active-menu');\n  };\n\n  var addListeners = function addListeners() {\n    buttonOpen.addEventListener('click', _toggleMenu);\n    var list = document.querySelector('.overlay-menu__list');\n\n    list.addEventListener('click', function (e) {\n      var target = e.target;\n      if (target.classList.contains('overlay-menu__link')) {\n        _toggleMenu();\n      }\n    });\n  };\n\n  return { open: addListeners };\n}({\n  buttonOpen: '#open',\n  menu: '#overlay'\n});\n\nmenu.open();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXJtZW51LmpzP2RiYTgiXSwibmFtZXMiOlsibWVudSIsIm9wdGlvbnMiLCJidXR0b25PcGVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsIl90b2dnbGVNZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3QiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJvcGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQVMsVUFBU0MsT0FBVCxFQUFrQjs7QUFFN0IsTUFBSUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QkgsUUFBUUMsVUFBL0IsQ0FBakI7QUFDQSxNQUFJRixPQUFPRyxTQUFTQyxhQUFULENBQXVCSCxRQUFRRCxJQUEvQixDQUFYO0FBQ0EsTUFBSUssT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUVBLE1BQUlFLGNBQWMsU0FBZEEsV0FBYyxHQUFXO0FBQzNCTixTQUFLTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZUFBdEI7QUFDQUgsU0FBS0UsU0FBTCxDQUFlQyxNQUFmLENBQXNCLGtCQUF0QjtBQUNELEdBSEQ7O0FBS0EsTUFBSUMsZUFBZSxTQUFmQSxZQUFlLEdBQVc7QUFDNUJQLGVBQVdRLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDSixXQUFyQztBQUNBLFFBQUlLLE9BQU9SLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQVg7O0FBRUFPLFNBQUtELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVNFLENBQVQsRUFBWTtBQUN6QyxVQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0MsVUFBR0EsT0FBT04sU0FBUCxDQUFpQk8sUUFBakIsQ0FBMEIsb0JBQTFCLENBQUgsRUFBbUQ7QUFDbERSO0FBQ0E7QUFDSCxLQUxEO0FBTUQsR0FWRDs7QUFZQSxTQUFPLEVBQUNTLE1BQUtOLFlBQU4sRUFBUDtBQUNELENBeEJXLENBd0JUO0FBQ0RQLGNBQVksT0FEWDtBQUVERixRQUFNO0FBRkwsQ0F4QlMsQ0FBWjs7QUE4QkFBLEtBQUtlLElBQUwiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXJtZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG1lbnUgPSAgKGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgbGV0IGJ1dHRvbk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uT3Blbik7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMubWVudSk7XHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gIGxldCBfdG9nZ2xlTWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LS1vcGVuJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHktYWN0aXZlLW1lbnUnKTtcclxuICB9XHJcblxyXG4gIGxldCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGJ1dHRvbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdG9nZ2xlTWVudSk7XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LW1lbnVfX2xpc3QnKTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVybGF5LW1lbnVfX2xpbmsnKSl7XHJcbiAgICAgICAgX3RvZ2dsZU1lbnUoKTtcclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge29wZW46YWRkTGlzdGVuZXJzfVxyXG59KSh7XHJcbiAgYnV0dG9uT3BlbjogJyNvcGVuJyxcclxuICBtZW51OiAnI292ZXJsYXknXHJcbn0pO1xyXG5cclxuXHJcbm1lbnUub3BlbigpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburgermenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/works.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/works.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/hamburgermenu */ \"./src/assets/scripts/modules/hamburgermenu.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL3dvcmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2hhbWJ1cmdlcm1lbnVcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });