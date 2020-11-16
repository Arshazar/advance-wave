webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Randomiser = function Randomiser(_ref) {\n  _s();\n\n  var colourType = _ref.colourType;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentPercent = _useState[0],\n      setCurrentPercent = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      num = _useState2[0],\n      setNum = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          setNum(num + 1);\n        }\n      });\n      document.addEventListener('keyup', function (e) {\n        if (e.code === 'Space') {\n          setNum(0);\n        }\n      });\n    }\n\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline();\n    var bar = document.getElementById('progressbar');\n    tl.to(bar, 2, {\n      value: 100,\n      ease: 'power2.easeInOut'\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (currentPercent < 100) {\n      if (num > 0 && num < 100) {\n        setNum(num + 1);\n        setCurrentPercent(currentPercent + 1);\n      }\n    }\n\n    if (currentPercent > 0 && currentPercent < 101) {\n      if (num < 1) {\n        setNum(num - 1);\n        setCurrentPercent(currentPercent - 1);\n      }\n    }\n  }, [num]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col m-auto z-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-2xl\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)'\n        },\n        children: \"Hold space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"progress\", {\n        id: \"progressbar\",\n        value: \"0\",\n        max: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"rSd6ld0qSr1f8WTHlLP4xzU/Alg=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJjb2xvdXJUeXBlIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwidXNlU3RhdGUiLCJjdXJyZW50UGVyY2VudCIsInNldEN1cnJlbnRQZXJjZW50IiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsImJhciIsImdldEVsZW1lbnRCeUlkIiwidG8iLCJ2YWx1ZSIsImVhc2UiLCJjb2xvciIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSx3QkFDWkMsNkRBQWMsQ0FBQ0MsbURBQUQsQ0FERjtBQUFBO0FBQUEsTUFDbkNDLE9BRG1DO0FBQUEsTUFDMUJDLFVBRDBCOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLENBQUQsQ0FGVjtBQUFBLE1BRW5DQyxjQUZtQztBQUFBLE1BRW5CQyxpQkFGbUI7O0FBQUEsbUJBR3BCRixzREFBUSxDQUFDLENBQUQsQ0FIWTtBQUFBLE1BR25DRyxHQUhtQztBQUFBLE1BRzlCQyxNQUg4Qjs7QUFLMUNDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQUosRUFBYztBQUNWQSxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QyxZQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3BCTCxnQkFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFOO0FBQ0g7QUFDSixPQUpEO0FBS0FHLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFlBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFDcEJMLGdCQUFNLENBQUMsQ0FBRCxDQUFOO0FBQ0g7QUFDSixPQUpEO0FBS0g7O0FBRUQsUUFBTU0sRUFBRSxHQUFHQyw0Q0FBSSxDQUFDQyxRQUFMLEVBQVg7QUFDQSxRQUFNQyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBVCxDQUF3QixhQUF4QixDQUFaO0FBQ0FKLE1BQUUsQ0FBQ0ssRUFBSCxDQUFNRixHQUFOLEVBQVcsQ0FBWCxFQUFjO0FBQ1ZHLFdBQUssRUFBRSxHQURHO0FBRVZDLFVBQUksRUFBRTtBQUZJLEtBQWQ7QUFJSCxHQXBCUSxFQW9CTixFQXBCTSxDQUFUO0FBc0JBWix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJSixjQUFjLEdBQUcsR0FBckIsRUFBMEI7QUFDdEIsVUFBSUUsR0FBRyxHQUFHLENBQU4sSUFBV0EsR0FBRyxHQUFHLEdBQXJCLEVBQTBCO0FBQ3RCQyxjQUFNLENBQUNELEdBQUcsR0FBRyxDQUFQLENBQU47QUFDQUQseUJBQWlCLENBQUNELGNBQWMsR0FBRyxDQUFsQixDQUFqQjtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsY0FBYyxHQUFHLENBQWpCLElBQXNCQSxjQUFjLEdBQUcsR0FBM0MsRUFBZ0Q7QUFDNUMsVUFBSUUsR0FBRyxHQUFHLENBQVYsRUFBYTtBQUNUQyxjQUFNLENBQUNELEdBQUcsR0FBRyxDQUFQLENBQU47QUFDQUQseUJBQWlCLENBQUNELGNBQWMsR0FBRyxDQUFsQixDQUFqQjtBQUNIO0FBQ0o7QUFDSixHQWJRLEVBYU4sQ0FBQ0UsR0FBRCxDQWJNLENBQVQ7QUFlQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFDLDBCQURkO0FBRUksYUFBSyxFQUFFO0FBQ0hlLGVBQUssRUFBRXBCLE9BQU8sS0FBSyxPQUFaLEdBQXNCLE1BQXRCLEdBQStCLE1BRG5DO0FBRUhxQixnQkFBTSxFQUFFO0FBRkwsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZUk7QUFBVSxVQUFFLEVBQUMsYUFBYjtBQUEyQixhQUFLLEVBQUMsR0FBakM7QUFBcUMsV0FBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0EvRE07O0dBQU16QixVO1VBQ3FCRSxxRDs7O0tBRHJCRixVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vcmVjb2lsL2F0b21zJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGNvbnN0IFJhbmRvbWlzZXIgPSAoeyBjb2xvdXJUeXBlIH0pID0+IHtcbiAgICBjb25zdCBbdGhlbWVFbCwgc2V0VGhlbWVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZSlcbiAgICBjb25zdCBbY3VycmVudFBlcmNlbnQsIHNldEN1cnJlbnRQZXJjZW50XSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtKG51bSArIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE51bSgwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKVxuICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NiYXInKVxuICAgICAgICB0bC50byhiYXIsIDIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLmVhc2VJbk91dCdcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA8IDEwMCkge1xuICAgICAgICAgICAgaWYgKG51bSA+IDAgJiYgbnVtIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSArIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA+IDAgJiYgY3VycmVudFBlcmNlbnQgPCAxMDEpIHtcbiAgICAgICAgICAgIGlmIChudW0gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSAtIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW251bV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG0tYXV0byB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhbGlnaHQgdGV4dC0yeGxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lRWwgPT09ICdsaWdodCcgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDAuNyknXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBIb2xkIHNwYWNlIGJhciB0byByYW5kb21pc2UgYSB3YXZlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGgtMiBtYi00IHRleHQteHMgZmxleCByb3VuZGVkIGJnLXRlYWwtMjAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7Y3VycmVudFBlcmNlbnR9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1ub25lIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlciBiZy10ZWFsLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBpZD1cInByb2dyZXNzYmFyXCIgdmFsdWU9XCIwXCIgbWF4PVwiMTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})