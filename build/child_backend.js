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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.scss */ "./src/backend.scss");
/* harmony import */ var _backend_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backend_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_backend_format_3dtext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/backend/format-3dtext.js */ "./src/js/backend/format-3dtext.js");



/***/ }),

/***/ "./src/backend.scss":
/*!**************************!*\
  !*** ./src/backend.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/backend/format-3dtext.js":
/*!*****************************************!*\
  !*** ./src/js/backend/format-3dtext.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_icons_3d_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/icons/3d.svg */ "./static/icons/3d.svg");

var addFilter = wp.hooks.addFilter;
var _wp$compose = wp.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent,
    withState = _wp$compose.withState;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    getBlock = _wp$blockEditor.getBlock;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ToggleControl = _wp$components.ToggleControl;

var affectedBlocks = ['core/paragraph', 'core/heading', 'kadence/advancedheading'];
var colors = ['brand', 'highlight', 'accent', 'black'];
var tdOptions = {
  direction: ['left', 'right'],
  color: [].concat(colors),
  length: ['short', 'medium', 'long']
};
var withControl = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    if (!affectedBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var defaults = {
      tdEnabled: false,
      tdDirection: tdOptions.direction[0],
      tdColor: tdOptions.color[0],
      tdLength: tdOptions.length[0]
    }; //const { tdEnabled, tdExtColor, tdDirection, tdLength} = props.attributes;

    var setAttributes = props.setAttributes; // We may begin with classes set but 3d text isn't enabled

    var className = props.attributes.className;

    if (className && className.includes('t3d-') && !props.tdEnabled) {
      setAttributes({
        tdEnabled: true
      });
    }

    function getClass(type) {
      var regex = new RegExp("t3d-".concat(type, "-([a-z]+)"));

      if (className) {
        var match = className.match(regex);

        if (match && match.length) {
          return match[1];
        }
      }

      return false;
    }

    function getCurrent() {
      var ret = defaults;

      if (className && className.includes('t3d-')) {
        ret.tdEnabled = true;
        ret.tdColor = getClass('color');
        ret.tdDirection = getClass('direction');
        ret.tdLength = getClass('length');
      }

      return ret;
    }

    var tdColor = getClass('color');
    var tdDirection = getClass('direction');
    var tdLength = getClass('length');

    if (tdColor) {
      setAttributes({
        tdColor: tdColor
      });
    }

    if (tdDirection) {
      setAttributes({
        tdDirection: tdDirection
      });
    }

    if (tdLength) {
      setAttributes({
        tdLength: tdLength
      });
    }

    function updateClass(update) {
      var resolved = Object.assign(getCurrent(), update);
      console.log('resolved', resolved);
      var classes = props.attributes.className ? props.attributes.className.split(' ') : [];

      if (classes.length) {
        classes = classes.filter(function (c) {
          return !c.includes("t3d-");
        });
      }

      if (resolved.tdEnabled) {
        classes.push("t3d-color-".concat(resolved.tdColor), "t3d-direction-".concat(resolved.tdDirection), "t3d-length-".concat(resolved.tdLength));
      }

      setAttributes({
        className: classes.join(' '),
        tdEnabled: resolved.tdEnabled,
        tdColor: resolved.tdColor,
        tdDirection: resolved.tdDirection,
        tdLength: resolved.tdLength
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_static_icons_3d_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], {
        style: {
          height: '1em'
        }
      }),
      label: "3D Text",
      onClick: function onClick() {
        setAttributes({
          popoverVisible: !props.attributes.popoverVisible
        });
        updateClass();
      }
    }), props.attributes.popoverVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Popover, {
      onFocusOutside: function onFocusOutside() {
        setAttributes({
          popoverVisible: false
        });
      },
      focusOnMount: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        padding: '1em'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      label: "Enable 3D Text",
      checked: props.attributes.tdEnabled,
      onChange: function onChange() {
        updateClass({
          tdEnabled: !props.attributes.tdEnabled
        });
      }
    }), props.attributes.tdEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Extrude Color",
      value: props.attributes.tdColor,
      onChange: function onChange(selectedColor) {
        updateClass({
          tdColor: selectedColor
        });
      },
      options: tdOptions.color.map(function (val) {
        return {
          label: val.charAt(0).toUpperCase() + val.slice(1),
          value: val
        };
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Extrude Direction",
      value: props.attributes.tdDirection,
      onChange: function onChange(selectedDirection) {
        updateClass({
          tdDirection: selectedDirection
        });
      },
      options: tdOptions.direction.map(function (val) {
        return {
          label: val.charAt(0).toUpperCase() + val.slice(1),
          value: val
        };
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Length",
      value: props.attributes.tdLength,
      onChange: function onChange(selectedLength) {
        updateClass({
          tdLength: selectedLength
        });
      },
      options: tdOptions.length.map(function (val) {
        return {
          label: val.charAt(0).toUpperCase() + val.slice(1),
          value: val
        };
      })
    })))))));
  };
});
addFilter('editor.BlockEdit', 'wwopn/blockedit/t3d', withControl);

/***/ }),

/***/ "./static/icons/3d.svg":
/*!*****************************!*\
  !*** ./static/icons/3d.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return Svg3D; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "currentColor"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M453.5 80.9c-16.4-12.4-39.6-11.8-44.8-11.8h-37.4V186h39.9c4.3 0 9-.3 13.6-.9 26.9-3.4 36.5-15.5 41.8-26.6 6.8-13.9 7.1-25.7 7.1-31.5-.1-6.8-1-31.3-20.2-46.1z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M592.2 100.1c-3.6-5.3-8.1-11.1-13.9-16.9l.2-.1L529.3 34v.2C513.4 19 488.5 4.6 446.1 1c-9-.6-18.2-1-27.2-1H277.7v55.2c-5.4-13.9-15.7-27.6-32.8-36.8-21.7-11.6-47.6-13.6-72.3-14.7-7.7-.3-15.2-.6-22.4-.6C92.3 3.1 54 15.4 33.5 40.4 22.2 53.8 19.1 64.9 16.2 78.1L11.8 98 59 145.2l7.9 7.9-67 3 3.8 19.5c1.5 7.9 2.4 12.4 4.5 17.8 2.7 7.6 6.5 14.5 11.7 21.7 2 2.8 4.1 5.4 6.4 7.9l.1.1c1.9 2 3.8 4 5.9 5.9l41.4 41.4c19.2 21.1 48.5 31.6 93.5 33.9 8.3.3 17.7.6 26.9.6 44.7 0 77.6-6.2 100.7-18.8 3.5-1.9 6.8-4.1 9.9-6.3l20.2 20.2h155.7c24.1 0 33.6-1.9 45.4-4.9 15.4-3.9 26.8-10 31.7-12.6l.4-.2c16-9.1 25.1-18.7 29.1-23.7 23.6-27.7 27.2-63.5 27.2-82.4 0-11 0-44.2-22.2-76.1zM239.3 223.8c-26 14.2-63.4 16.7-92.5 16.7-8.7 0-17.6-.3-26.3-.6-49.2-2.5-72.7-15.2-86.6-34.6-4.3-5.9-7.4-11.4-9.6-17.6-1.5-4-2.2-7.1-3.7-15.2l69.6-3.1c3.4 10.5 15.2 17 17 17.9 13.3 6.2 35.6 6.2 37.4 6.2 0 0 25.7.6 37.4-7.4 7.7-5.3 8.7-13.3 8.7-17 0-2.2-.6-6.8-3.4-11.1-5.6-7.7-15.2-9.9-32.8-9.9h-46.4v-39.9h17.3c9.6 0 19.2 0 28.5-.6 6.5-.3 13.6-.3 19.5-2.8 4.3-1.9 12.7-5.9 12.7-17.6 0-2.2-.3-8.7-5.3-13.3C174 67.3 161 66 152.4 66c-22.9 0-37.7 4.9-44.5 12.4-1.9 2.2-2.2 2.5-4 6.8L33 81.8c2.8-12.7 5.3-20.4 13.6-30.3C69.2 24 118 20.3 150.2 20.3c7.1 0 14.5.3 21.6.6 21 .9 45.8 2.5 64.9 12.7 24.1 13 28.5 35.9 28.5 46.4 0 11.1-3.7 20.1-11.8 27.8-13.6 12.7-34 15.5-38 16.4 2.8.3 13.3 1.9 22.6 5.3 9 3.1 32.5 13.3 32.5 42.4 0 12.3-3.1 36.4-31.2 51.9zm287.5-23.5c-3.7 4.6-11.4 12.4-24.4 19.8-4.6 2.5-14.5 7.7-27.8 11.1-11.1 2.8-19.2 4.3-41.1 4.3H294.9V17.2h124c8.7 0 17.3.3 26 .9 50.7 4.3 73 25.7 86 44.5 18.6 26.6 19.2 54.4 19.2 66.2-.1 9.9-1 45.5-23.3 71.5z"
}));

function Svg3D(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 614.4 304.9"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjE0LjQgMzA0LjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJjdXJyZW50Q29sb3IiPgogICAgICAgIDxwYXRoIGQ9Im00NTMuNSA4MC45Yy0xNi40LTEyLjQtMzkuNi0xMS44LTQ0LjgtMTEuOGgtMzcuNHYxMTYuOWgzOS45YzQuMyAwIDktLjMgMTMuNi0uOSAyNi45LTMuNCAzNi41LTE1LjUgNDEuOC0yNi42IDYuOC0xMy45IDcuMS0yNS43IDcuMS0zMS41LS4xLTYuOC0xLTMxLjMtMjAuMi00Ni4xeiIvPgogICAgICAgIDxwYXRoIGQ9Im01OTIuMiAxMDAuMWMtMy42LTUuMy04LjEtMTEuMS0xMy45LTE2LjlsLjItLjEtNDkuMi00OS4xdi4yYy0xNS45LTE1LjItNDAuOC0yOS42LTgzLjItMzMuMi05LS42LTE4LjItMS0yNy4yLTFoLTE0MS4ydjU1LjJjLTUuNC0xMy45LTE1LjctMjcuNi0zMi44LTM2LjgtMjEuNy0xMS42LTQ3LjYtMTMuNi03Mi4zLTE0LjctNy43LS4zLTE1LjItLjYtMjIuNC0uNi01Ny45IDAtOTYuMiAxMi4zLTExNi43IDM3LjMtMTEuMyAxMy40LTE0LjQgMjQuNS0xNy4zIDM3LjdsLTQuNCAxOS45IDQ3LjIgNDcuMiA3LjkgNy45LTY3IDMgMy44IDE5LjVjMS41IDcuOSAyLjQgMTIuNCA0LjUgMTcuOCAyLjcgNy42IDYuNSAxNC41IDExLjcgMjEuNyAyIDIuOCA0LjEgNS40IDYuNCA3LjlsLjEuMWMxLjkgMiAzLjggNCA1LjkgNS45bDQxLjQgNDEuNGMxOS4yIDIxLjEgNDguNSAzMS42IDkzLjUgMzMuOSA4LjMuMyAxNy43LjYgMjYuOS42IDQ0LjcgMCA3Ny42LTYuMiAxMDAuNy0xOC44IDMuNS0xLjkgNi44LTQuMSA5LjktNi4zbDIwLjIgMjAuMmgxNTUuN2MyNC4xIDAgMzMuNi0xLjkgNDUuNC00LjkgMTUuNC0zLjkgMjYuOC0xMCAzMS43LTEyLjZsLjQtLjJjMTYtOS4xIDI1LjEtMTguNyAyOS4xLTIzLjcgMjMuNi0yNy43IDI3LjItNjMuNSAyNy4yLTgyLjQgMC0xMSAwLTQ0LjItMjIuMi03Ni4xem0tMzUyLjkgMTIzLjdjLTI2IDE0LjItNjMuNCAxNi43LTkyLjUgMTYuNy04LjcgMC0xNy42LS4zLTI2LjMtLjYtNDkuMi0yLjUtNzIuNy0xNS4yLTg2LjYtMzQuNi00LjMtNS45LTcuNC0xMS40LTkuNi0xNy42LTEuNS00LTIuMi03LjEtMy43LTE1LjJsNjkuNi0zLjFjMy40IDEwLjUgMTUuMiAxNyAxNyAxNy45IDEzLjMgNi4yIDM1LjYgNi4yIDM3LjQgNi4yIDAgMCAyNS43LjYgMzcuNC03LjQgNy43LTUuMyA4LjctMTMuMyA4LjctMTcgMC0yLjItLjYtNi44LTMuNC0xMS4xLTUuNi03LjctMTUuMi05LjktMzIuOC05LjloLTQ2LjR2LTM5LjloMTcuM2M5LjYgMCAxOS4yIDAgMjguNS0uNiA2LjUtLjMgMTMuNi0uMyAxOS41LTIuOCA0LjMtMS45IDEyLjctNS45IDEyLjctMTcuNiAwLTIuMi0uMy04LjctNS4zLTEzLjMtNi44LTYuNi0xOS44LTcuOS0yOC40LTcuOS0yMi45IDAtMzcuNyA0LjktNDQuNSAxMi40LTEuOSAyLjItMi4yIDIuNS00IDYuOGwtNzAuOS0zLjRjMi44LTEyLjcgNS4zLTIwLjQgMTMuNi0zMC4zIDIyLjYtMjcuNSA3MS40LTMxLjIgMTAzLjYtMzEuMiA3LjEgMCAxNC41LjMgMjEuNi42IDIxIC45IDQ1LjggMi41IDY0LjkgMTIuNyAyNC4xIDEzIDI4LjUgMzUuOSAyOC41IDQ2LjQgMCAxMS4xLTMuNyAyMC4xLTExLjggMjcuOC0xMy42IDEyLjctMzQgMTUuNS0zOCAxNi40IDIuOC4zIDEzLjMgMS45IDIyLjYgNS4zIDkgMy4xIDMyLjUgMTMuMyAzMi41IDQyLjQgMCAxMi4zLTMuMSAzNi40LTMxLjIgNTEuOXptMjg3LjUtMjMuNWMtMy43IDQuNi0xMS40IDEyLjQtMjQuNCAxOS44LTQuNiAyLjUtMTQuNSA3LjctMjcuOCAxMS4xLTExLjEgMi44LTE5LjIgNC4zLTQxLjEgNC4zaC0xMzguNnYtMjE4LjNoMTI0YzguNyAwIDE3LjMuMyAyNiAuOSA1MC43IDQuMyA3MyAyNS43IDg2IDQ0LjUgMTguNiAyNi42IDE5LjIgNTQuNCAxOS4yIDY2LjItLjEgOS45LTEgNDUuNS0yMy4zIDcxLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPg==");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=child_backend.js.map