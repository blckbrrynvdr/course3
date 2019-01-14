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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/assets/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/welcomeFlip */ \"./src/assets/scripts/modules/welcomeFlip.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0, _preloader2.default)().loaded();\n});\n\nconsole.log(\"auth module loaded\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCw2QkFBWUMsTUFBWjtBQUNELENBRkQ7O0FBSUFDLFFBQVFDLEdBQVIsQ0FBWSxvQkFBWiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByZWxvYWRlciBmcm9tIFwiLi9tb2R1bGVzL3ByZWxvYWRlclwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3dlbGNvbWVGbGlwXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgcHJlbG9hZGVyKCkubG9hZGVkKCk7XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coXCJhdXRoIG1vZHVsZSBsb2FkZWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.parallax');\nvar layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n  var initialX = window.innerWidth / 2 - e.pageX;\n  var initialY = window.innerHeight / 2 - e.pageY;\n\n  layers.forEach(function (layer, i) {\n    var divider = i / 100;\n    var positionX = initialX * divider;\n    var positionY = initialY * divider;\n    // const bottomPosition = (window.innerHeight / 2) * divider;\n    // const image = layer.firstElementChild;\n\n    // image.style.bottom = `-${bottomPosition}px`;\n\n    layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n  });\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJtb3ZlTGF5ZXJzIiwiaW5pdGlhbFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZSIsInBhZ2VYIiwiaW5pdGlhbFkiLCJpbm5lckhlaWdodCIsInBhZ2VZIiwiZm9yRWFjaCIsImxheWVyIiwiaSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJzdHlsZSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0EsSUFBTUMsU0FBU0MsTUFBTUMsSUFBTixDQUFXTCxrQkFBa0JNLFFBQTdCLENBQWY7O0FBRUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDdEIsTUFBTUMsV0FBWUMsT0FBT0MsVUFBUCxHQUFvQixDQUFyQixHQUEwQkMsRUFBRUMsS0FBN0M7QUFDQSxNQUFNQyxXQUFZSixPQUFPSyxXQUFQLEdBQXFCLENBQXRCLEdBQTJCSCxFQUFFSSxLQUE5Qzs7QUFFQVosU0FBT2EsT0FBUCxDQUFlLFVBQUNDLEtBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzFCLFFBQU1DLFVBQVVELElBQUksR0FBcEI7QUFDQSxRQUFNRSxZQUFZWixXQUFXVyxPQUE3QjtBQUNBLFFBQU1FLFlBQVlSLFdBQVdNLE9BQTdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQUYsVUFBTUssS0FBTixDQUFZQyxTQUFaLGtCQUFxQ0gsU0FBckMsWUFBcURDLFNBQXJEO0FBQ0QsR0FWRDtBQVdELENBZkQ7O0FBaUJBWixPQUFPZSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2pCLFVBQXJDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xyXG5jb25zdCBsYXllcnMgPSBBcnJheS5mcm9tKHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuKTtcclxuXHJcbmNvbnN0IG1vdmVMYXllcnMgPSBlID0+IHtcclxuICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gZS5wYWdlWDtcclxuICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcblxyXG4gIGxheWVycy5mb3JFYWNoKChsYXllcixpKSA9PiB7XHJcbiAgICBjb25zdCBkaXZpZGVyID0gaSAvIDEwMDtcclxuICAgIGNvbnN0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcjtcclxuICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuICAgIC8vIGNvbnN0IGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcjtcclxuICAgIC8vIGNvbnN0IGltYWdlID0gbGF5ZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgLy8gaW1hZ2Uuc3R5bGUuYm90dG9tID0gYC0ke2JvdHRvbVBvc2l0aW9ufXB4YDtcclxuXHJcbiAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgO1xyXG4gIH0pO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = preloader;\nfunction preloader() {\n  var loader = document.querySelector(\".preloader\");\n  var images = document.querySelectorAll(\"img\");\n  var wrapper = document.querySelector(\".wrapper\");\n  var preloaderProgress = document.querySelector(\".preloader__text\");\n  wrapper.style.height = \"100%\";\n\n  var percent = 0;\n  var step = 100 / images.length;\n\n  function percentTick(end, imgLoaded) {\n    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    if (start <= end) {\n      setTimeout(function () {\n        percent = percent < 100 ? ++percent : 100;\n        preloaderProgress.textContent = \"\" + percent;\n        percentTick(end, imgLoaded, start + 1);\n      }, 10);\n    }\n    if (imgLoaded === images.length && percent === 100) {\n      wrapper.style.height = \"\";\n      loader.classList.add(\"hide\");\n      setTimeout(function () {\n        loader.style.display = 'none';\n      }, 1000);\n    }\n  }\n  return {\n    loaded: function loaded() {\n      var imgLoaded = 0;\n      if (images.length === 0) {\n        wrapper.style.height = \"\";\n        loader.classList.add(\"hide\");\n        setTimeout(function () {\n          loader.style.display = 'none';\n        }, 1000);\n        return;\n      }\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          var shadowImg = new Image();\n          shadowImg.onload = function () {\n            imgLoaded++;\n            percentTick(step, imgLoaded);\n          };\n          shadowImg.src = item.getAttribute(\"src\");\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid3JhcHBlciIsInByZWxvYWRlclByb2dyZXNzIiwic3R5bGUiLCJoZWlnaHQiLCJwZXJjZW50Iiwic3RlcCIsImxlbmd0aCIsInBlcmNlbnRUaWNrIiwiZW5kIiwiaW1nTG9hZGVkIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5IiwibG9hZGVkIiwiaXRlbSIsInNoYWRvd0ltZyIsIkltYWdlIiwib25sb2FkIiwic3JjIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLFM7QUFBVCxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLE1BQU1DLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLE1BQU1DLFNBQVNGLFNBQVNHLGdCQUFULENBQTBCLEtBQTFCLENBQWY7QUFDQSxNQUFNQyxVQUFVSixTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsTUFBTUksb0JBQW9CTCxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUExQjtBQUNBRyxVQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsTUFBdkI7O0FBRUEsTUFBSUMsVUFBVSxDQUFkO0FBQ0EsTUFBTUMsT0FBTyxNQUFNUCxPQUFPUSxNQUExQjs7QUFFQSxXQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsU0FBMUIsRUFBZ0Q7QUFBQSxRQUFYQyxLQUFXLHVFQUFILENBQUc7O0FBQzlDLFFBQUlBLFNBQVNGLEdBQWIsRUFBa0I7QUFDaEJHLGlCQUFXLFlBQU07QUFDZlAsa0JBQVVBLFVBQVUsR0FBVixHQUFnQixFQUFFQSxPQUFsQixHQUE0QixHQUF0QztBQUNBSCwwQkFBa0JXLFdBQWxCLFFBQW1DUixPQUFuQztBQUNBRyxvQkFBWUMsR0FBWixFQUFpQkMsU0FBakIsRUFBNEJDLFFBQVEsQ0FBcEM7QUFDRCxPQUpELEVBSUcsRUFKSDtBQUtEO0FBQ0QsUUFBSUQsY0FBY1gsT0FBT1EsTUFBckIsSUFBK0JGLFlBQVksR0FBL0MsRUFBb0Q7QUFDbERKLGNBQVFFLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixFQUF2QjtBQUNBUixhQUFPa0IsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDRUgsaUJBQVcsWUFBTTtBQUNmaEIsZUFBT08sS0FBUCxDQUFhYSxPQUFiLEdBQXVCLE1BQXZCO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHSDtBQUNGO0FBQ0QsU0FBTztBQUNMQyxVQURLLG9CQUNJO0FBQ1AsVUFBSVAsWUFBWSxDQUFoQjtBQUNBLFVBQUlYLE9BQU9RLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJOLGdCQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDQVIsZUFBT2tCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0FILG1CQUFXLFlBQU07QUFDZmhCLGlCQUFPTyxLQUFQLENBQWFhLE9BQWIsR0FBdUIsTUFBdkI7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7O0FBVE07QUFBQTtBQUFBOztBQUFBO0FBV1AsNkJBQWlCakIsTUFBakIsOEhBQXlCO0FBQUEsY0FBaEJtQixJQUFnQjs7QUFDdkIsY0FBTUMsWUFBWSxJQUFJQyxLQUFKLEVBQWxCO0FBQ0FELG9CQUFVRSxNQUFWLEdBQW1CLFlBQU07QUFDdkJYO0FBQ0FGLHdCQUFZRixJQUFaLEVBQWtCSSxTQUFsQjtBQUNELFdBSEQ7QUFJQVMsb0JBQVVHLEdBQVYsR0FBZ0JKLEtBQUtLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBaEI7QUFDRDtBQWxCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJSO0FBcEJJLEdBQVA7QUFzQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkZXIoKSB7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIik7XHJcbiAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xyXG4gIGNvbnN0IHByZWxvYWRlclByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJfX3RleHRcIik7XHJcbiAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgbGV0IHBlcmNlbnQgPSAwO1xyXG4gIGNvbnN0IHN0ZXAgPSAxMDAgLyBpbWFnZXMubGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBwZXJjZW50VGljayhlbmQsIGltZ0xvYWRlZCwgc3RhcnQgPSAwKSB7XHJcbiAgICBpZiAoc3RhcnQgPD0gZW5kKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHBlcmNlbnQgPSBwZXJjZW50IDwgMTAwID8gKytwZXJjZW50IDogMTAwO1xyXG4gICAgICAgIHByZWxvYWRlclByb2dyZXNzLnRleHRDb250ZW50ID0gYCR7cGVyY2VudH1gO1xyXG4gICAgICAgIHBlcmNlbnRUaWNrKGVuZCwgaW1nTG9hZGVkLCBzdGFydCArIDEpO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nTG9hZGVkID09PSBpbWFnZXMubGVuZ3RoICYmIHBlcmNlbnQgPT09IDEwMCkge1xyXG4gICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGVkKCkge1xyXG4gICAgICBsZXQgaW1nTG9hZGVkID0gMDtcclxuICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGltYWdlcykge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHNoYWRvd0ltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpbWdMb2FkZWQrKztcclxuICAgICAgICAgIHBlcmNlbnRUaWNrKHN0ZXAsIGltZ0xvYWRlZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzaGFkb3dJbWcuc3JjID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/welcomeFlip.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/modules/welcomeFlip.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar buttonAuth = document.querySelector('.auth__btn');\nvar buttonBack = document.querySelector('.auth__back');\nvar authPanel = document.querySelector('.welcome__panel');\n\nbuttonAuth.addEventListener('click', function () {\n  authPanel.style.transform = 'rotateY(180deg)';\n  buttonAuth.style.opacity = '0';\n  setTimeout(function () {\n    authPanel.classList.add('welcome__panel--sideB');\n    authPanel.style.transform = 'rotateY(0deg)';\n    buttonAuth.style.display = 'none';\n  }, 350);\n});\n\nbuttonBack.addEventListener('click', function (e) {\n  e.preventDefault();\n  authPanel.style.transform = 'rotateY(180deg)';\n  buttonAuth.style.display = 'inline-block';\n  setTimeout(function () {\n    authPanel.classList.remove('welcome__panel--sideB');\n    authPanel.classList.add('welcome__panel--sideA');\n    authPanel.style.transform = 'rotateY(0deg)';\n    buttonAuth.style.opacity = '1';\n  }, 350);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy93ZWxjb21lRmxpcC5qcz82ODM4Il0sIm5hbWVzIjpbImJ1dHRvbkF1dGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25CYWNrIiwiYXV0aFBhbmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFDQSxJQUFNQyxhQUFhRixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQW5CO0FBQ0EsSUFBTUUsWUFBWUgsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBbEI7O0FBRUFGLFdBQVdLLGdCQUFYLENBQTRCLE9BQTVCLEVBQW9DLFlBQVk7QUFDOUNELFlBQVVFLEtBQVYsQ0FBZ0JDLFNBQWhCLEdBQTRCLGlCQUE1QjtBQUNBUCxhQUFXTSxLQUFYLENBQWlCRSxPQUFqQixHQUEyQixHQUEzQjtBQUNBQyxhQUFXLFlBQU07QUFDZkwsY0FBVU0sU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsdUJBQXhCO0FBQ0FQLGNBQVVFLEtBQVYsQ0FBZ0JDLFNBQWhCLEdBQTRCLGVBQTVCO0FBQ0FQLGVBQVdNLEtBQVgsQ0FBaUJNLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0QsR0FKRCxFQUlHLEdBSkg7QUFLRCxDQVJEOztBQVVBVCxXQUFXRSxnQkFBWCxDQUE0QixPQUE1QixFQUFvQyxVQUFVUSxDQUFWLEVBQWE7QUFDL0NBLElBQUVDLGNBQUY7QUFDQVYsWUFBVUUsS0FBVixDQUFnQkMsU0FBaEIsR0FBNEIsaUJBQTVCO0FBQ0FQLGFBQVdNLEtBQVgsQ0FBaUJNLE9BQWpCLEdBQTJCLGNBQTNCO0FBQ0FILGFBQVcsWUFBTTtBQUNmTCxjQUFVTSxTQUFWLENBQW9CSyxNQUFwQixDQUEyQix1QkFBM0I7QUFDQVgsY0FBVU0sU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsdUJBQXhCO0FBQ0FQLGNBQVVFLEtBQVYsQ0FBZ0JDLFNBQWhCLEdBQTRCLGVBQTVCO0FBQ0FQLGVBQVdNLEtBQVgsQ0FBaUJFLE9BQWpCLEdBQTJCLEdBQTNCO0FBQ0QsR0FMRCxFQUtHLEdBTEg7QUFNRCxDQVZEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvd2VsY29tZUZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhfX2J0bicpO1xyXG5jb25zdCBidXR0b25CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhfX2JhY2snKTtcclxuY29uc3QgYXV0aFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWVfX3BhbmVsJyk7XHJcblxyXG5idXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgYXV0aFBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVZKDE4MGRlZyknO1xyXG4gIGJ1dHRvbkF1dGguc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGF1dGhQYW5lbC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lX19wYW5lbC0tc2lkZUInKTtcclxuICAgIGF1dGhQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgwZGVnKSc7XHJcbiAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgMzUwKTtcclxufSlcclxuXHJcbmJ1dHRvbkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGF1dGhQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgxODBkZWcpJztcclxuICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGF1dGhQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3ZWxjb21lX19wYW5lbC0tc2lkZUInKTtcclxuICAgIGF1dGhQYW5lbC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lX19wYW5lbC0tc2lkZUEnKTtcclxuICAgIGF1dGhQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgwZGVnKSc7XHJcbiAgICBidXR0b25BdXRoLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgfSwgMzUwKTtcclxufSlcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/welcomeFlip.js\n");

/***/ })

/******/ });