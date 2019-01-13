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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/hamburgermenu */ \"./src/assets/scripts/modules/hamburgermenu.js\");\n\n__webpack_require__(/*! ./modules/parallaxScroll */ \"./src/assets/scripts/modules/parallaxScroll.js\");\n\n__webpack_require__(/*! ./modules/blogArticles */ \"./src/assets/scripts/modules/blogArticles.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9oYW1idXJnZXJtZW51XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9wYXJhbGxheFNjcm9sbFwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvYmxvZ0FydGljbGVzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blogArticles.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/blogArticles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blogList = document.querySelector(\".blog__menu-list\");\nvar articles = document.querySelectorAll(\".blog__article\");\nvar links = document.querySelectorAll(\".blog__link\");\nvar button = document.querySelector('.blog__button');\nvar menu = document.querySelector('.blog__menu');\n\nbutton.addEventListener('click', function (e) {\n  menu.classList.toggle('blog__menu--active');\n});\n\nlinks[0].parentElement.classList.add(\"blog__menu-item--active\");\n\nfunction windowScroller(reqmove, duration) {\n  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n  window.requestAnimationFrame = requestAnimationFrame;\n\n  var scrollHeight = window.scrollY;\n  var diffY = scrollHeight < reqmove ? reqmove - scrollHeight : -1 * (scrollHeight - reqmove);\n\n  var animate = function animate(draw, duration) {\n    var start = performance.now();\n    requestAnimationFrame(function move(time) {\n      var timePassed = time - start;\n      if (timePassed > duration) timePassed = duration;\n      draw(timePassed);\n      if (timePassed < duration) requestAnimationFrame(move);\n    });\n  };\n\n  animate(function (timePassed) {\n    window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1));\n  }, duration);\n}\n\nfunction fixed() {\n  if (blogList.parentElement.getBoundingClientRect().top <= 0) {\n    blogList.classList.remove(\"blog__menu-list--absolute\");\n    blogList.classList.add(\"blog__menu-list--fixed\");\n    button.classList.remove('hidden');\n  } else {\n    blogList.classList.remove(\"blog__menu-list--fixed\");\n    blogList.classList.add(\"blog__menu-list--absolute\");\n    button.classList.add('hidden');\n  };\n}\n\nfunction checkCurrentArticle() {\n  for (var i = 0; i < articles.length; i++) {\n    if (articles[i].getBoundingClientRect().y < 300 && articles[i].getBoundingClientRect().y > -articles[i].getBoundingClientRect().height) {\n      var prevArticle = links[i].parentElement.previousElementSibling;\n      var nextArticle = links[i].parentElement.nextElementSibling;\n      console.log(articles[i].getBoundingClientRect().y);\n\n      if (prevArticle) {\n        prevArticle.classList.remove(\"blog__menu-item--active\");\n      }\n      if (nextArticle) {\n        nextArticle.classList.remove(\"blog__menu-item--active\");\n      }\n\n      links[i].parentElement.classList.add(\"blog__menu-item--active\");\n    }\n  }\n}\n\nfunction toArticle(name) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var item = _step.value;\n\n      if (name === item.dataset.name) {\n        var scrollPos = item.getBoundingClientRect().top + window.scrollY;\n        windowScroller(scrollPos, 300);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nblogList.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  if (e.target.classList.contains(\"blog__link\") && !e.target.parentElement.classList.contains(\"blog__menu-item--active\")) {\n    toArticle(e.target.getAttribute(\"data-name\"));\n  }\n});\n\nfixed();\n\nwindow.addEventListener(\"scroll\", function (e) {\n  fixed();\n  checkCurrentArticle();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nQXJ0aWNsZXMuanM/ZDFkMCJdLCJuYW1lcyI6WyJibG9nTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmtzIiwiYnV0dG9uIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwYXJlbnRFbGVtZW50IiwiYWRkIiwid2luZG93U2Nyb2xsZXIiLCJyZXFtb3ZlIiwiZHVyYXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFkiLCJkaWZmWSIsImFuaW1hdGUiLCJkcmF3Iiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm1vdmUiLCJ0aW1lIiwidGltZVBhc3NlZCIsInNjcm9sbCIsIk1hdGgiLCJtaW4iLCJmaXhlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJlbW92ZSIsImNoZWNrQ3VycmVudEFydGljbGUiLCJpIiwibGVuZ3RoIiwieSIsImhlaWdodCIsInByZXZBcnRpY2xlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRBcnRpY2xlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY29uc29sZSIsImxvZyIsInRvQXJ0aWNsZSIsIm5hbWUiLCJpdGVtIiwiZGF0YXNldCIsInNjcm9sbFBvcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWpCO0FBQ0EsSUFBTUMsV0FBV0Ys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Qjs7QUFFQWxCLE9BQU9ULGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLGFBQUs7QUFDckMyQjtBQUNBSTtBQUNELENBSEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nQXJ0aWNsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBibG9nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZ19fbWVudS1saXN0XCIpO1xyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZ19fYXJ0aWNsZVwiKTtcclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2dfX2xpbmtcIik7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19idXR0b24nKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX19tZW51Jyk7XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Jsb2dfX21lbnUtLWFjdGl2ZScpXHJcbiAgXHJcbn0pXHJcblxyXG5saW5rc1swXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nX19tZW51LWl0ZW0tLWFjdGl2ZVwiKTtcclxuXHJcbmZ1bmN0aW9uIHdpbmRvd1Njcm9sbGVyKHJlcW1vdmUsIGR1cmF0aW9uKSB7XHJcbiAgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuXHJcbiAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gd2luZG93LnNjcm9sbFlcclxuICBjb25zdCBkaWZmWSA9XHJcbiAgICBzY3JvbGxIZWlnaHQgPCByZXFtb3ZlXHJcbiAgICAgID8gcmVxbW92ZSAtIHNjcm9sbEhlaWdodFxyXG4gICAgICA6IC0xICogKHNjcm9sbEhlaWdodCAtIHJlcW1vdmUpXHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAoZHJhdywgZHVyYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBtb3ZlKHRpbWUpIHtcclxuICAgICAgbGV0IHRpbWVQYXNzZWQgPSB0aW1lIC0gc3RhcnRcclxuICAgICAgaWYgKHRpbWVQYXNzZWQgPiBkdXJhdGlvbikgdGltZVBhc3NlZCA9IGR1cmF0aW9uXHJcbiAgICAgIGRyYXcodGltZVBhc3NlZClcclxuICAgICAgaWYgKHRpbWVQYXNzZWQgPCBkdXJhdGlvbikgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSh0aW1lUGFzc2VkID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGwoMCwgc2Nyb2xsSGVpZ2h0ICsgZGlmZlkgKiBNYXRoLm1pbih0aW1lUGFzc2VkIC8gZHVyYXRpb24sIDEpKVxyXG4gIH0sIGR1cmF0aW9uKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZml4ZWQoKSB7XHJcbiAgaWYgKGJsb2dMaXN0LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApIHtcclxuICAgIGJsb2dMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nX19tZW51LWxpc3QtLWFic29sdXRlXCIpO1xyXG4gICAgYmxvZ0xpc3QuY2xhc3NMaXN0LmFkZChcImJsb2dfX21lbnUtbGlzdC0tZml4ZWRcIik7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZ19fbWVudS1saXN0LS1maXhlZFwiKTtcclxuICAgIGJsb2dMaXN0LmNsYXNzTGlzdC5hZGQoXCJibG9nX19tZW51LWxpc3QtLWFic29sdXRlXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH07XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBjaGVja0N1cnJlbnRBcnRpY2xlKCkge1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgaWYgKFxyXG4gICAgICAgICAgYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8IDMwMCAmJlxyXG4gICAgICAgICAgYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA+XHJcbiAgICAgICAgICAgIC1hcnRpY2xlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZBcnRpY2xlID0gbGlua3NbaV0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgY29uc3QgbmV4dEFydGljbGUgPSBsaW5rc1tpXS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFydGljbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpO1xyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgaWYgKHByZXZBcnRpY2xlKSB7XHJcbiAgICAgICAgICAgIHByZXZBcnRpY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nX19tZW51LWl0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChuZXh0QXJ0aWNsZSkge1xyXG4gICAgICAgICAgICBuZXh0QXJ0aWNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZ19fbWVudS1pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGlua3NbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZ19fbWVudS1pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvQXJ0aWNsZShuYW1lKSB7XHJcbiAgZm9yIChsZXQgaXRlbSBvZiBhcnRpY2xlcykge1xyXG4gICAgaWYgKG5hbWUgPT09IGl0ZW0uZGF0YXNldC5uYW1lKSB7XHJcbiAgICAgIGxldCBzY3JvbGxQb3MgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgIHdpbmRvd1Njcm9sbGVyKHNjcm9sbFBvcywgMzAwKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYmxvZ0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZ19fbGlua1wiKSAmJiAhZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nX19tZW51LWl0ZW0tLWFjdGl2ZVwiKSkge1xyXG4gICAgdG9BcnRpY2xlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZpeGVkKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBlID0+IHtcclxuICBmaXhlZCgpO1xyXG4gIGNoZWNrQ3VycmVudEFydGljbGUoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blogArticles.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburgermenu.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/modules/hamburgermenu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar menu = function (options) {\n\n  var buttonOpen = document.querySelector(options.buttonOpen);\n  var menu = document.querySelector(options.menu);\n  var body = document.querySelector('body');\n\n  var _toggleMenu = function _toggleMenu() {\n    menu.classList.toggle('overlay--open');\n    body.classList.toggle('body-active-menu');\n    buttonOpen.classList.toggle('is-active');\n  };\n\n  var addListeners = function addListeners() {\n    buttonOpen.addEventListener('click', _toggleMenu);\n    var list = document.querySelector('.overlay-menu__list');\n\n    list.addEventListener('click', function (e) {\n      var target = e.target;\n      if (target.classList.contains('overlay-menu__link')) {\n        _toggleMenu();\n      }\n    });\n  };\n\n  return { open: addListeners };\n}({\n  buttonOpen: '#open',\n  menu: '#overlay'\n});\n\nmenu.open();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXJtZW51LmpzP2RiYTgiXSwibmFtZXMiOlsibWVudSIsIm9wdGlvbnMiLCJidXR0b25PcGVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsIl90b2dnbGVNZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3QiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJvcGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQVMsVUFBU0MsT0FBVCxFQUFrQjs7QUFFN0IsTUFBSUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QkgsUUFBUUMsVUFBL0IsQ0FBakI7QUFDQSxNQUFJRixPQUFPRyxTQUFTQyxhQUFULENBQXVCSCxRQUFRRCxJQUEvQixDQUFYO0FBQ0EsTUFBSUssT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUVBLE1BQUlFLGNBQWMsU0FBZEEsV0FBYyxHQUFXO0FBQzNCTixTQUFLTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZUFBdEI7QUFDQUgsU0FBS0UsU0FBTCxDQUFlQyxNQUFmLENBQXNCLGtCQUF0QjtBQUNBTixlQUFXSyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixXQUE1QjtBQUNELEdBSkQ7O0FBTUEsTUFBSUMsZUFBZSxTQUFmQSxZQUFlLEdBQVc7QUFDNUJQLGVBQVdRLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDSixXQUFyQztBQUNBLFFBQUlLLE9BQU9SLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQVg7O0FBRUFPLFNBQUtELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVNFLENBQVQsRUFBWTtBQUN6QyxVQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0MsVUFBR0EsT0FBT04sU0FBUCxDQUFpQk8sUUFBakIsQ0FBMEIsb0JBQTFCLENBQUgsRUFBbUQ7QUFDbERSO0FBQ0E7QUFDSCxLQUxEO0FBTUQsR0FWRDs7QUFZQSxTQUFPLEVBQUNTLE1BQUtOLFlBQU4sRUFBUDtBQUNELENBekJXLENBeUJUO0FBQ0RQLGNBQVksT0FEWDtBQUVERixRQUFNO0FBRkwsQ0F6QlMsQ0FBWjs7QUErQkFBLEtBQUtlLElBQUwiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXJtZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG1lbnUgPSAgKGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgbGV0IGJ1dHRvbk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uT3Blbik7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMubWVudSk7XHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gIGxldCBfdG9nZ2xlTWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LS1vcGVuJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHktYWN0aXZlLW1lbnUnKTtcclxuICAgIGJ1dHRvbk9wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBidXR0b25PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RvZ2dsZU1lbnUpO1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS1tZW51X19saXN0Jyk7XHJcblxyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheS1tZW51X19saW5rJykpe1xyXG4gICAgICAgIF90b2dnbGVNZW51KCk7XHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtvcGVuOmFkZExpc3RlbmVyc31cclxufSkoe1xyXG4gIGJ1dHRvbk9wZW46ICcjb3BlbicsXHJcbiAgbWVudTogJyNvdmVybGF5J1xyXG59KTtcclxuXHJcblxyXG5tZW51Lm9wZW4oKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburgermenu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallaxScroll.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/parallaxScroll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxScroll = function () {\n  var bg = document.querySelector('.hero__bg');\n  var user = document.querySelector('.user');\n  var sectionText = document.querySelector('.title-img');\n\n  return {\n    move: function move(block, windowScroll, strafeAmount) {\n      var strafe = windowScroll / -strafeAmount + '%';\n      var transformString = 'translate3d(0,' + strafe + ' , 0)';\n\n      var style = block.style;\n\n      style.transform = transformString;\n      style.webkitTransform = transformString;\n    },\n\n    init: function init(wScroll) {\n      this.move(bg, wScroll, 45);\n      this.move(sectionText, wScroll, 20);\n      this.move(user, wScroll, 3);\n    }\n  };\n}();\n\nwindow.onscroll = function () {\n  var wScroll = window.pageYOffset;\n\n  parallaxScroll.init(wScroll);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheFNjcm9sbC5qcz8yM2E5Il0sIm5hbWVzIjpbInBhcmFsbGF4U2Nyb2xsIiwiYmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyIiwic2VjdGlvblRleHQiLCJtb3ZlIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJzdHJhZmUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzdHlsZSIsInRyYW5zZm9ybSIsIndlYmtpdFRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIiwid2luZG93Iiwib25zY3JvbGwiLCJwYWdlWU9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBa0IsWUFBWTtBQUNoQyxNQUFJQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQVQ7QUFDQSxNQUFJQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVg7QUFDQSxNQUFJRSxjQUFjSCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWxCOztBQUVBLFNBQU87QUFDTEcsVUFBTSxjQUFVQyxLQUFWLEVBQWlCQyxZQUFqQixFQUErQkMsWUFBL0IsRUFBNkM7QUFDakQsVUFBSUMsU0FBU0YsZUFBZSxDQUFDQyxZQUFoQixHQUErQixHQUE1QztBQUNBLFVBQUlFLGtCQUFrQixtQkFBa0JELE1BQWxCLEdBQTBCLE9BQWhEOztBQUVBLFVBQUlFLFFBQVFMLE1BQU1LLEtBQWxCOztBQUVBQSxZQUFNQyxTQUFOLEdBQWtCRixlQUFsQjtBQUNBQyxZQUFNRSxlQUFOLEdBQXdCSCxlQUF4QjtBQUNELEtBVEk7O0FBV0xJLFVBQU0sY0FBVUMsT0FBVixFQUFtQjtBQUN2QixXQUFLVixJQUFMLENBQVVMLEVBQVYsRUFBY2UsT0FBZCxFQUF1QixFQUF2QjtBQUNBLFdBQUtWLElBQUwsQ0FBVUQsV0FBVixFQUF1QlcsT0FBdkIsRUFBZ0MsRUFBaEM7QUFDQSxXQUFLVixJQUFMLENBQVVGLElBQVYsRUFBZ0JZLE9BQWhCLEVBQXlCLENBQXpCO0FBRUQ7QUFoQkksR0FBUDtBQWtCRCxDQXZCcUIsRUFBdEI7O0FBeUJBQyxPQUFPQyxRQUFQLEdBQWtCLFlBQVk7QUFDNUIsTUFBSUYsVUFBVUMsT0FBT0UsV0FBckI7O0FBRUFuQixpQkFBZWUsSUFBZixDQUFvQkMsT0FBcEI7QUFDRCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxsYXhTY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFyYWxsYXhTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19iZycpO1xyXG4gIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcclxuICB2YXIgc2VjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW1nJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xyXG4gICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsJysgc3RyYWZlICsnICwgMCknXHJcblxyXG4gICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuXHJcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICB0aGlzLm1vdmUoYmcsIHdTY3JvbGwsIDQ1KTtcclxuICAgICAgdGhpcy5tb3ZlKHNlY3Rpb25UZXh0LCB3U2Nyb2xsLCAyMCk7XHJcbiAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAzKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59KCkpO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICBwYXJhbGxheFNjcm9sbC5pbml0KHdTY3JvbGwpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallaxScroll.js\n");

/***/ })

/******/ });