webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/svg */ \"./src/components/svg/index.js\");\n/* harmony import */ var _src_components_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/toolbar */ \"./src/components/toolbar/index.js\");\n/* harmony import */ var _src_components_expander__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/expander */ \"./src/components/expander.js\");\n/* harmony import */ var _src_components_toolbar_backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/toolbar/backdrop */ \"./src/components/toolbar/backdrop.js\");\n/* harmony import */ var _src_components_randomiser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/randomiser */ \"./src/components/randomiser/index.js\");\n/* harmony import */ var _src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_components_svg_wave_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/svg/wave/wave */ \"./src/components/svg/wave/wave.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"wave\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      waveEl = _useRecoilState4[0],\n      setWaveEl = _useRecoilState4[1];\n\n  var _useRecoilState5 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"themeColours\"]),\n      _useRecoilState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState5, 2),\n      themeColoursEl = _useRecoilState6[0],\n      setThemeColoursEl = _useRecoilState6[1];\n\n  var _useRecoilState7 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"flipY\"]),\n      _useRecoilState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState7, 2),\n      flipYEl = _useRecoilState8[0],\n      setFlipYEl = _useRecoilState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var date = new Date();\n    var mins = date.getHours() * 60 + date.getMinutes();\n\n    if (mins > 1110 || mins < 390) {\n      setThemeEl('dark');\n    } else {\n      setThemeEl('light');\n    }\n  }, []);\n  var wavery = new _src_components_svg_wave_wave__WEBPACK_IMPORTED_MODULE_11__[\"Wavery\"](waveEl);\n  var generatedSvg = wavery.generateSvg();\n  var path = generatedSvg.svg.path;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"iSVG\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"flex flex-col h-screen\",\n      style: {\n        background: themeEl === 'light' ? themeColoursEl.light : themeColoursEl.dark\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 italic text-sm tracking-widest cursor-default\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          margin: '10px'\n        },\n        children: \"Coded with full of \\u2764 by Arshazar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_toolbar__WEBPACK_IMPORTED_MODULE_5__[\"Toolbar\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_expander__WEBPACK_IMPORTED_MODULE_6__[\"Expander\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_toolbar_backdrop__WEBPACK_IMPORTED_MODULE_7__[\"Backdrop\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full absolute bg-transparent\",\n        style: {\n          bottom: Number(flipYEl) === 1 ? 0 : 'unset',\n          top: Number(flipYEl) === -1 ? 0 : 'unset'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_svg__WEBPACK_IMPORTED_MODULE_4__[\"Svg\"], {\n          path: path\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_randomiser__WEBPACK_IMPORTED_MODULE_8__[\"Randomiser\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"f15/8gwoj4XF74DyrNGVCtt1Uo0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwid2F2ZSIsIndhdmVFbCIsInNldFdhdmVFbCIsInRoZW1lQ29sb3VycyIsInRoZW1lQ29sb3Vyc0VsIiwic2V0VGhlbWVDb2xvdXJzRWwiLCJmbGlwWSIsImZsaXBZRWwiLCJzZXRGbGlwWUVsIiwidXNlRWZmZWN0IiwiZGF0ZSIsIkRhdGUiLCJtaW5zIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwid2F2ZXJ5IiwiV2F2ZXJ5IiwiZ2VuZXJhdGVkU3ZnIiwiZ2VuZXJhdGVTdmciLCJwYXRoIiwic3ZnIiwiYmFja2dyb3VuZCIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwibWFyZ2luIiwiYm90dG9tIiwiTnVtYmVyIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLHdCQUNHQyw4REFBYyxDQUFDQyx1REFBRCxDQURqQjtBQUFBO0FBQUEsTUFDcEJDLE9BRG9CO0FBQUEsTUFDWEMsVUFEVzs7QUFBQSx5QkFFQ0gsOERBQWMsQ0FBQ0ksc0RBQUQsQ0FGZjtBQUFBO0FBQUEsTUFFcEJDLE1BRm9CO0FBQUEsTUFFWkMsU0FGWTs7QUFBQSx5QkFHaUJOLDhEQUFjLENBQUNPLDhEQUFELENBSC9CO0FBQUE7QUFBQSxNQUdwQkMsY0FIb0I7QUFBQSxNQUdKQyxpQkFISTs7QUFBQSx5QkFJR1QsOERBQWMsQ0FBQ1UsdURBQUQsQ0FKakI7QUFBQTtBQUFBLE1BSXBCQyxPQUpvQjtBQUFBLE1BSVhDLFVBSlc7O0FBTTNCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFFBQUwsS0FBa0IsRUFBbEIsR0FBdUJILElBQUksQ0FBQ0ksVUFBTCxFQUFwQzs7QUFFQSxRQUFJRixJQUFJLEdBQUcsSUFBUCxJQUFlQSxJQUFJLEdBQUcsR0FBMUIsRUFBK0I7QUFDM0JiLGdCQUFVLENBQUMsTUFBRCxDQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGdCQUFVLENBQUMsT0FBRCxDQUFWO0FBQ0g7QUFDSixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsTUFBTWdCLE1BQU0sR0FBRyxJQUFJQyxxRUFBSixDQUFXZixNQUFYLENBQWY7QUFDQSxNQUFNZ0IsWUFBWSxHQUFHRixNQUFNLENBQUNHLFdBQVAsRUFBckI7QUFsQjJCLE1BbUJuQkMsSUFuQm1CLEdBbUJWRixZQUFZLENBQUNHLEdBbkJILENBbUJuQkQsSUFuQm1CO0FBcUIzQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQ0ksZUFBUyxFQUFDLHdCQURkO0FBRUksV0FBSyxFQUFFO0FBQ0hFLGtCQUFVLEVBQUV2QixPQUFPLEtBQUssT0FBWixHQUFzQk0sY0FBYyxDQUFDa0IsS0FBckMsR0FBNkNsQixjQUFjLENBQUNtQjtBQURyRSxPQUZYO0FBQUEsOEJBS0k7QUFDSSxpQkFBUyxFQUFDLGdFQURkO0FBRUksYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTFCLE9BQU8sS0FBSyxPQUFaLEdBQXNCLE1BQXRCLEdBQStCLE1BQXhDO0FBQWdEMkIsZ0JBQU0sRUFBRTtBQUF4RCxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFVSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFXSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFZSSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSTtBQUNJLGlCQUFTLGtDQURiO0FBRUksYUFBSyxFQUFFO0FBQ0hDLGdCQUFNLEVBQUVDLE1BQU0sQ0FBQ3BCLE9BQUQsQ0FBTixLQUFvQixDQUFwQixHQUF3QixDQUF4QixHQUE0QixPQURqQztBQUVIcUIsYUFBRyxFQUFFRCxNQUFNLENBQUNwQixPQUFELENBQU4sS0FBb0IsQ0FBQyxDQUFyQixHQUF5QixDQUF6QixHQUE2QjtBQUYvQixTQUZYO0FBQUEsK0JBTUkscUVBQUMsdURBQUQ7QUFBSyxjQUFJLEVBQUVZO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixlQXFCSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQXBEdUJ4QixJO1VBQ1VDLHNELEVBQ0ZBLHNELEVBQ2dCQSxzRCxFQUNkQSxzRDs7O0tBSlZELEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFN2ZyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3N2ZydcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy90b29sYmFyJ1xuaW1wb3J0IHsgRXhwYW5kZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9leHBhbmRlcidcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvdG9vbGJhci9iYWNrZHJvcCdcbmltcG9ydCB7IFJhbmRvbWlzZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9yYW5kb21pc2VyJ1xuaW1wb3J0IHsgdGhlbWUsIHRoZW1lQ29sb3Vycywgd2F2ZSwgZmxpcFkgfSBmcm9tICcuLi9zcmMvcmVjb2lsL2F0b21zJ1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyBXYXZlcnkgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9zdmcvd2F2ZS93YXZlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFt0aGVtZUVsLCBzZXRUaGVtZUVsXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lKVxuICAgIGNvbnN0IFt3YXZlRWwsIHNldFdhdmVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh3YXZlKVxuICAgIGNvbnN0IFt0aGVtZUNvbG91cnNFbCwgc2V0VGhlbWVDb2xvdXJzRWxdID0gdXNlUmVjb2lsU3RhdGUodGhlbWVDb2xvdXJzKVxuICAgIGNvbnN0IFtmbGlwWUVsLCBzZXRGbGlwWUVsXSA9IHVzZVJlY29pbFN0YXRlKGZsaXBZKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgY29uc3QgbWlucyA9IGRhdGUuZ2V0SG91cnMoKSAqIDYwICsgZGF0ZS5nZXRNaW51dGVzKClcblxuICAgICAgICBpZiAobWlucyA+IDExMTAgfHwgbWlucyA8IDM5MCkge1xuICAgICAgICAgICAgc2V0VGhlbWVFbCgnZGFyaycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaGVtZUVsKCdsaWdodCcpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHdhdmVyeSA9IG5ldyBXYXZlcnkod2F2ZUVsKVxuICAgIGNvbnN0IGdlbmVyYXRlZFN2ZyA9IHdhdmVyeS5nZW5lcmF0ZVN2ZygpXG4gICAgY29uc3QgeyBwYXRoIH0gPSBnZW5lcmF0ZWRTdmcuc3ZnXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmlTVkc8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWVFbCA9PT0gJ2xpZ2h0JyA/IHRoZW1lQ29sb3Vyc0VsLmxpZ2h0IDogdGhlbWVDb2xvdXJzRWwuZGFya1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBpdGFsaWMgdGV4dC1zbSB0cmFja2luZy13aWRlc3QgY3Vyc29yLWRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogdGhlbWVFbCA9PT0gJ2xpZ2h0JyA/ICcjMDAwJyA6ICcjZmZmJywgbWFyZ2luOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIENvZGVkIHdpdGggZnVsbCBvZiDinaQgYnkgQXJzaGF6YXJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICAgICAgICAgIDxFeHBhbmRlciAvPlxuICAgICAgICAgICAgICAgIDxCYWNrZHJvcCAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGFic29sdXRlIGJnLXRyYW5zcGFyZW50YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogTnVtYmVyKGZsaXBZRWwpID09PSAxID8gMCA6ICd1bnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IE51bWJlcihmbGlwWUVsKSA9PT0gLTEgPyAwIDogJ3Vuc2V0J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFN2ZyBwYXRoPXtwYXRofSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5kb21pc2VyIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})