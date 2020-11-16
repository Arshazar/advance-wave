webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/svg */ \"./src/components/svg/index.js\");\n/* harmony import */ var _src_components_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/toolbar */ \"./src/components/toolbar/index.js\");\n/* harmony import */ var _src_components_expander__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/expander */ \"./src/components/expander.js\");\n/* harmony import */ var _src_components_toolbar_backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/toolbar/backdrop */ \"./src/components/toolbar/backdrop.js\");\n/* harmony import */ var _src_components_randomiser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/randomiser */ \"./src/components/randomiser/index.js\");\n/* harmony import */ var _src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _src_components_svg_wave_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/svg/wave/wave */ \"./src/components/svg/wave/wave.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"wave\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      waveEl = _useRecoilState4[0],\n      setWaveEl = _useRecoilState4[1];\n\n  var _useRecoilState5 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"themeColours\"]),\n      _useRecoilState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState5, 2),\n      themeColoursEl = _useRecoilState6[0],\n      setThemeColoursEl = _useRecoilState6[1];\n\n  var _useRecoilState7 = Object(recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"])(_src_recoil_atoms__WEBPACK_IMPORTED_MODULE_9__[\"flipY\"]),\n      _useRecoilState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState7, 2),\n      flipYEl = _useRecoilState8[0],\n      setFlipYEl = _useRecoilState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var date = new Date();\n    var mins = date.getHours() * 60 + date.getMinutes();\n\n    if (mins > 1110 || mins < 390) {\n      setThemeEl('dark');\n    } else {\n      setThemeEl('light');\n    }\n  }, []);\n  var wavery = new _src_components_svg_wave_wave__WEBPACK_IMPORTED_MODULE_11__[\"Wavery\"](waveEl);\n  var generatedSvg = wavery.generateSvg();\n  var path = generatedSvg.svg.path;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"iSVG\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"flex flex-col h-screen\",\n      style: {\n        background: themeEl === 'light' ? themeColoursEl.light : themeColoursEl.dark\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 italic text-sm tracking-widest m-10\",\n        children: \"Coded with full of \\u2764 by Arshazar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_toolbar__WEBPACK_IMPORTED_MODULE_5__[\"Toolbar\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_expander__WEBPACK_IMPORTED_MODULE_6__[\"Expander\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_toolbar_backdrop__WEBPACK_IMPORTED_MODULE_7__[\"Backdrop\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full absolute bg-transparent\",\n        style: {\n          bottom: Number(flipYEl) === 1 ? 0 : 'unset',\n          top: Number(flipYEl) === -1 ? 0 : 'unset'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_svg__WEBPACK_IMPORTED_MODULE_4__[\"Svg\"], {\n          path: path\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_src_components_randomiser__WEBPACK_IMPORTED_MODULE_8__[\"Randomiser\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"f15/8gwoj4XF74DyrNGVCtt1Uo0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_10__[\"useRecoilState\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwid2F2ZSIsIndhdmVFbCIsInNldFdhdmVFbCIsInRoZW1lQ29sb3VycyIsInRoZW1lQ29sb3Vyc0VsIiwic2V0VGhlbWVDb2xvdXJzRWwiLCJmbGlwWSIsImZsaXBZRWwiLCJzZXRGbGlwWUVsIiwidXNlRWZmZWN0IiwiZGF0ZSIsIkRhdGUiLCJtaW5zIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwid2F2ZXJ5IiwiV2F2ZXJ5IiwiZ2VuZXJhdGVkU3ZnIiwiZ2VuZXJhdGVTdmciLCJwYXRoIiwic3ZnIiwiYmFja2dyb3VuZCIsImxpZ2h0IiwiZGFyayIsImJvdHRvbSIsIk51bWJlciIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFDR0MsOERBQWMsQ0FBQ0MsdURBQUQsQ0FEakI7QUFBQTtBQUFBLE1BQ3BCQyxPQURvQjtBQUFBLE1BQ1hDLFVBRFc7O0FBQUEseUJBRUNILDhEQUFjLENBQUNJLHNEQUFELENBRmY7QUFBQTtBQUFBLE1BRXBCQyxNQUZvQjtBQUFBLE1BRVpDLFNBRlk7O0FBQUEseUJBR2lCTiw4REFBYyxDQUFDTyw4REFBRCxDQUgvQjtBQUFBO0FBQUEsTUFHcEJDLGNBSG9CO0FBQUEsTUFHSkMsaUJBSEk7O0FBQUEseUJBSUdULDhEQUFjLENBQUNVLHVEQUFELENBSmpCO0FBQUE7QUFBQSxNQUlwQkMsT0FKb0I7QUFBQSxNQUlYQyxVQUpXOztBQU0zQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBLFFBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxRQUFMLEtBQWtCLEVBQWxCLEdBQXVCSCxJQUFJLENBQUNJLFVBQUwsRUFBcEM7O0FBRUEsUUFBSUYsSUFBSSxHQUFHLElBQVAsSUFBZUEsSUFBSSxHQUFHLEdBQTFCLEVBQStCO0FBQzNCYixnQkFBVSxDQUFDLE1BQUQsQ0FBVjtBQUNILEtBRkQsTUFFTztBQUNIQSxnQkFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNIO0FBQ0osR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLE1BQU1nQixNQUFNLEdBQUcsSUFBSUMscUVBQUosQ0FBV2YsTUFBWCxDQUFmO0FBQ0EsTUFBTWdCLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUFQLEVBQXJCO0FBbEIyQixNQW1CbkJDLElBbkJtQixHQW1CVkYsWUFBWSxDQUFDRyxHQW5CSCxDQW1CbkJELElBbkJtQjtBQXFCM0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUNJLGVBQVMsRUFBQyx3QkFEZDtBQUVJLFdBQUssRUFBRTtBQUNIRSxrQkFBVSxFQUFFdkIsT0FBTyxLQUFLLE9BQVosR0FBc0JNLGNBQWMsQ0FBQ2tCLEtBQXJDLEdBQTZDbEIsY0FBYyxDQUFDbUI7QUFEckUsT0FGWDtBQUFBLDhCQUtJO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBUUkscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBU0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBVUkscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKLGVBV0k7QUFDSSxpQkFBUyxrQ0FEYjtBQUVJLGFBQUssRUFBRTtBQUNIQyxnQkFBTSxFQUFFQyxNQUFNLENBQUNsQixPQUFELENBQU4sS0FBb0IsQ0FBcEIsR0FBd0IsQ0FBeEIsR0FBNEIsT0FEakM7QUFFSG1CLGFBQUcsRUFBRUQsTUFBTSxDQUFDbEIsT0FBRCxDQUFOLEtBQW9CLENBQUMsQ0FBckIsR0FBeUIsQ0FBekIsR0FBNkI7QUFGL0IsU0FGWDtBQUFBLCtCQU1JLHFFQUFDLHVEQUFEO0FBQUssY0FBSSxFQUFFWTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFtQkkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7R0FsRHVCeEIsSTtVQUNVQyxzRCxFQUNGQSxzRCxFQUNnQkEsc0QsRUFDZEEsc0Q7OztLQUpWRCxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBTdmcgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9zdmcnXG5pbXBvcnQgeyBUb29sYmFyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvdG9vbGJhcidcbmltcG9ydCB7IEV4cGFuZGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvZXhwYW5kZXInXG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvYmFja2Ryb3AnXG5pbXBvcnQgeyBSYW5kb21pc2VyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlcidcbmltcG9ydCB7IHRoZW1lLCB0aGVtZUNvbG91cnMsIHdhdmUsIGZsaXBZIH0gZnJvbSAnLi4vc3JjL3JlY29pbC9hdG9tcydcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgV2F2ZXJ5IH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvc3ZnL3dhdmUvd2F2ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbdGhlbWVFbCwgc2V0VGhlbWVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZSlcbiAgICBjb25zdCBbd2F2ZUVsLCBzZXRXYXZlRWxdID0gdXNlUmVjb2lsU3RhdGUod2F2ZSlcbiAgICBjb25zdCBbdGhlbWVDb2xvdXJzRWwsIHNldFRoZW1lQ29sb3Vyc0VsXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lQ29sb3VycylcbiAgICBjb25zdCBbZmxpcFlFbCwgc2V0RmxpcFlFbF0gPSB1c2VSZWNvaWxTdGF0ZShmbGlwWSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGNvbnN0IG1pbnMgPSBkYXRlLmdldEhvdXJzKCkgKiA2MCArIGRhdGUuZ2V0TWludXRlcygpXG5cbiAgICAgICAgaWYgKG1pbnMgPiAxMTEwIHx8IG1pbnMgPCAzOTApIHtcbiAgICAgICAgICAgIHNldFRoZW1lRWwoJ2RhcmsnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGhlbWVFbCgnbGlnaHQnKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCB3YXZlcnkgPSBuZXcgV2F2ZXJ5KHdhdmVFbClcbiAgICBjb25zdCBnZW5lcmF0ZWRTdmcgPSB3YXZlcnkuZ2VuZXJhdGVTdmcoKVxuICAgIGNvbnN0IHsgcGF0aCB9ID0gZ2VuZXJhdGVkU3ZnLnN2Z1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5pU1ZHPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lRWwgPT09ICdsaWdodCcgPyB0aGVtZUNvbG91cnNFbC5saWdodCA6IHRoZW1lQ29sb3Vyc0VsLmRhcmtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaXRhbGljIHRleHQtc20gdHJhY2tpbmctd2lkZXN0IG0tMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29kZWQgd2l0aCBmdWxsIG9mIOKdpCBieSBBcnNoYXphclxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgICAgICAgICAgPEV4cGFuZGVyIC8+XG4gICAgICAgICAgICAgICAgPEJhY2tkcm9wIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgYWJzb2x1dGUgYmctdHJhbnNwYXJlbnRgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBOdW1iZXIoZmxpcFlFbCkgPT09IDEgPyAwIDogJ3Vuc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogTnVtYmVyKGZsaXBZRWwpID09PSAtMSA/IDAgOiAndW5zZXQnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8U3ZnIHBhdGg9e3BhdGh9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFJhbmRvbWlzZXIgLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})