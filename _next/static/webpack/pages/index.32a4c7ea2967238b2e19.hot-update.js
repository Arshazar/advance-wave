webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Randomiser = function Randomiser(_ref) {\n  _s();\n\n  var colourType = _ref.colourType;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentPercent = _useState[0],\n      setCurrentPercent = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      num = _useState2[0],\n      setNum = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          setNum(num + 1);\n        }\n      });\n      document.addEventListener('keyup', function (e) {\n        if (e.code === 'Space') {\n          setNum(0);\n        }\n      });\n    }\n\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline();\n    tl.to('#progressbar', {\n      duration: 2,\n      value: 100,\n      ease: 'power2.easeInOut'\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (currentPercent < 100) {\n      if (num > 0 && num < 100) {\n        setNum(num + 1);\n        setCurrentPercent(currentPercent + 1);\n      }\n    }\n\n    if (currentPercent > 0 && currentPercent < 101) {\n      if (num < 1) {\n        setNum(num - 1);\n        setCurrentPercent(currentPercent - 1);\n      }\n    }\n  }, [num]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex relative flex-col m-auto z-10 sm:w-5/6 md:w-1/3\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-2xl\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)'\n        },\n        children: \"Hold space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"progress\", {\n        className: \"w-full\",\n        id: \"progressbar\",\n        value: \"0\",\n        max: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"rSd6ld0qSr1f8WTHlLP4xzU/Alg=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJjb2xvdXJUeXBlIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwidXNlU3RhdGUiLCJjdXJyZW50UGVyY2VudCIsInNldEN1cnJlbnRQZXJjZW50IiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsInRvIiwiZHVyYXRpb24iLCJ2YWx1ZSIsImVhc2UiLCJjb2xvciIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSx3QkFDWkMsNkRBQWMsQ0FBQ0MsbURBQUQsQ0FERjtBQUFBO0FBQUEsTUFDbkNDLE9BRG1DO0FBQUEsTUFDMUJDLFVBRDBCOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLENBQUQsQ0FGVjtBQUFBLE1BRW5DQyxjQUZtQztBQUFBLE1BRW5CQyxpQkFGbUI7O0FBQUEsbUJBR3BCRixzREFBUSxDQUFDLENBQUQsQ0FIWTtBQUFBLE1BR25DRyxHQUhtQztBQUFBLE1BRzlCQyxNQUg4Qjs7QUFLMUNDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQUosRUFBYztBQUNWQSxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QyxZQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3BCTCxnQkFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFOO0FBQ0g7QUFDSixPQUpEO0FBS0FHLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFlBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFDcEJMLGdCQUFNLENBQUMsQ0FBRCxDQUFOO0FBQ0g7QUFDSixPQUpEO0FBS0g7O0FBRUQsUUFBTU0sRUFBRSxHQUFHQyw0Q0FBSSxDQUFDQyxRQUFMLEVBQVg7QUFDQUYsTUFBRSxDQUFDRyxFQUFILENBQU0sY0FBTixFQUFzQjtBQUNsQkMsY0FBUSxFQUFFLENBRFE7QUFFbEJDLFdBQUssRUFBRSxHQUZXO0FBR2xCQyxVQUFJLEVBQUU7QUFIWSxLQUF0QjtBQUtILEdBcEJRLEVBb0JOLEVBcEJNLENBQVQ7QUFzQkFYLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlKLGNBQWMsR0FBRyxHQUFyQixFQUEwQjtBQUN0QixVQUFJRSxHQUFHLEdBQUcsQ0FBTixJQUFXQSxHQUFHLEdBQUcsR0FBckIsRUFBMEI7QUFDdEJDLGNBQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQVAsQ0FBTjtBQUNBRCx5QkFBaUIsQ0FBQ0QsY0FBYyxHQUFHLENBQWxCLENBQWpCO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxjQUFjLEdBQUcsQ0FBakIsSUFBc0JBLGNBQWMsR0FBRyxHQUEzQyxFQUFnRDtBQUM1QyxVQUFJRSxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ1RDLGNBQU0sQ0FBQ0QsR0FBRyxHQUFHLENBQVAsQ0FBTjtBQUNBRCx5QkFBaUIsQ0FBQ0QsY0FBYyxHQUFHLENBQWxCLENBQWpCO0FBQ0g7QUFDSjtBQUNKLEdBYlEsRUFhTixDQUFDRSxHQUFELENBYk0sQ0FBVDtBQWVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDSTtBQUNJLGlCQUFTLEVBQUMsMEJBRGQ7QUFFSSxhQUFLLEVBQUU7QUFDSGMsZUFBSyxFQUFFbkIsT0FBTyxLQUFLLE9BQVosR0FBc0IsTUFBdEIsR0FBK0IsTUFEbkM7QUFFSG9CLGdCQUFNLEVBQUU7QUFGTCxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFlSTtBQUFVLGlCQUFTLEVBQUMsUUFBcEI7QUFBNkIsVUFBRSxFQUFDLGFBQWhDO0FBQThDLGFBQUssRUFBQyxHQUFwRDtBQUF3RCxXQUFHLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQS9ETTs7R0FBTXhCLFU7VUFDcUJFLHFEOzs7S0FEckJGLFUiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yYW5kb21pc2VyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9yZWNvaWwvYXRvbXMnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5leHBvcnQgY29uc3QgUmFuZG9taXNlciA9ICh7IGNvbG91clR5cGUgfSkgPT4ge1xuICAgIGNvbnN0IFt0aGVtZUVsLCBzZXRUaGVtZUVsXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lKVxuICAgIGNvbnN0IFtjdXJyZW50UGVyY2VudCwgc2V0Q3VycmVudFBlcmNlbnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgICAgICAgICAgICAgICBzZXROdW0obnVtICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtKDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG4gICAgICAgIHRsLnRvKCcjcHJvZ3Jlc3NiYXInLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLmVhc2VJbk91dCdcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA8IDEwMCkge1xuICAgICAgICAgICAgaWYgKG51bSA+IDAgJiYgbnVtIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSArIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA+IDAgJiYgY3VycmVudFBlcmNlbnQgPCAxMDEpIHtcbiAgICAgICAgICAgIGlmIChudW0gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSAtIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW251bV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGZsZXgtY29sIG0tYXV0byB6LTEwIHNtOnctNS82IG1kOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWV4dHJhbGlnaHQgdGV4dC0yeGxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lRWwgPT09ICdsaWdodCcgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDAuNyknXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBIb2xkIHNwYWNlIGJhciB0byByYW5kb21pc2UgYSB3YXZlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGgtMiBtYi00IHRleHQteHMgZmxleCByb3VuZGVkIGJnLXRlYWwtMjAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7Y3VycmVudFBlcmNlbnR9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1ub25lIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlciBiZy10ZWFsLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBpZD1cInByb2dyZXNzYmFyXCIgdmFsdWU9XCIwXCIgbWF4PVwiMTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})