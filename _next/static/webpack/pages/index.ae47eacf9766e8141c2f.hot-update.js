webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Randomiser = function Randomiser(_ref) {\n  _s();\n\n  var colourType = _ref.colourType;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      num = _useState[0],\n      setNum = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      pushing = _useState2[0],\n      setPushing = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline();\n          tl.to('#progressbar', {\n            duration: 0.2,\n            value: num + 1,\n            ease: 'power2.easeInOut'\n          });\n          setNum(num + 1);\n        }\n      });\n      document.addEventListener('keyup', function (e) {\n        if (e.code === 'Space') {\n          var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline();\n          tl.to('#progressbar', {\n            duration: 0.2,\n            value: num - 1,\n            ease: 'power2.easeInOut'\n          });\n          setNum(num - 1);\n        }\n      });\n    }\n  }, [num]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex relative flex-col m-auto z-10 sm:w-5/6 md:w-1/3 p-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-2xl mb-3\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)'\n        },\n        children: \"Hold space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"progress\", {\n        className: \"progress-bar\",\n        id: \"progressbar\",\n        value: \"0\",\n        max: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"441VAiQHAVWyzPW+5U3wYJlFQ1k=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJjb2xvdXJUeXBlIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwidXNlU3RhdGUiLCJudW0iLCJzZXROdW0iLCJwdXNoaW5nIiwic2V0UHVzaGluZyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJ0byIsImR1cmF0aW9uIiwidmFsdWUiLCJlYXNlIiwiY29sb3IiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsd0JBQ1pDLDZEQUFjLENBQUNDLG1EQUFELENBREY7QUFBQTtBQUFBLE1BQ25DQyxPQURtQztBQUFBLE1BQzFCQyxVQUQwQjs7QUFBQSxrQkFFcEJDLHNEQUFRLENBQUMsQ0FBRCxDQUZZO0FBQUEsTUFFbkNDLEdBRm1DO0FBQUEsTUFFOUJDLE1BRjhCOztBQUFBLG1CQUdaRixzREFBUSxDQUFDLEtBQUQsQ0FISTtBQUFBLE1BR25DRyxPQUhtQztBQUFBLE1BRzFCQyxVQUgwQjs7QUFLMUNDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQUosRUFBYztBQUNWQSxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QyxZQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3BCLGNBQU1DLEVBQUUsR0FBR0MsNENBQUksQ0FBQ0MsUUFBTCxFQUFYO0FBQ0FGLFlBQUUsQ0FBQ0csRUFBSCxDQUFNLGNBQU4sRUFBc0I7QUFDbEJDLG9CQUFRLEVBQUUsR0FEUTtBQUVsQkMsaUJBQUssRUFBRWQsR0FBRyxHQUFHLENBRks7QUFHbEJlLGdCQUFJLEVBQUU7QUFIWSxXQUF0QjtBQUtBZCxnQkFBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFOO0FBQ0g7QUFDSixPQVZEO0FBV0FLLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFlBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFDcEIsY0FBTUMsRUFBRSxHQUFHQyw0Q0FBSSxDQUFDQyxRQUFMLEVBQVg7QUFDQUYsWUFBRSxDQUFDRyxFQUFILENBQU0sY0FBTixFQUFzQjtBQUNsQkMsb0JBQVEsRUFBRSxHQURRO0FBRWxCQyxpQkFBSyxFQUFFZCxHQUFHLEdBQUcsQ0FGSztBQUdsQmUsZ0JBQUksRUFBRTtBQUhZLFdBQXRCO0FBS0FkLGdCQUFNLENBQUNELEdBQUcsR0FBRyxDQUFQLENBQU47QUFDSDtBQUNKLE9BVkQ7QUFXSDtBQUNKLEdBekJRLEVBeUJOLENBQUNBLEdBQUQsQ0F6Qk0sQ0FBVDtBQTJCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLDBEQUFmO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFDLCtCQURkO0FBRUksYUFBSyxFQUFFO0FBQ0hnQixlQUFLLEVBQUVuQixPQUFPLEtBQUssT0FBWixHQUFzQixNQUF0QixHQUErQixNQURuQztBQUVIb0IsZ0JBQU0sRUFBRTtBQUZMLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxVQUFFLEVBQUMsYUFBdEM7QUFBb0QsYUFBSyxFQUFDLEdBQTFEO0FBQThELFdBQUcsRUFBQztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBckRNOztHQUFNeEIsVTtVQUNxQkUscUQ7OztLQURyQkYsVSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3JhbmRvbWlzZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uLy4uL3JlY29pbC9hdG9tcydcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBjb25zdCBSYW5kb21pc2VyID0gKHsgY29sb3VyVHlwZSB9KSA9PiB7XG4gICAgY29uc3QgW3RoZW1lRWwsIHNldFRoZW1lRWxdID0gdXNlUmVjb2lsU3RhdGUodGhlbWUpXG4gICAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3B1c2hpbmcsIHNldFB1c2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKClcbiAgICAgICAgICAgICAgICAgICAgdGwudG8oJyNwcm9ncmVzc2JhcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVtICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIuZWFzZUluT3V0J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZXROdW0obnVtICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKClcbiAgICAgICAgICAgICAgICAgICAgdGwudG8oJyNwcm9ncmVzc2JhcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVtIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIuZWFzZUluT3V0J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZXROdW0obnVtIC0gMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW251bV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGZsZXgtY29sIG0tYXV0byB6LTEwIHNtOnctNS82IG1kOnctMS8zIHAtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IHRleHQtMnhsIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lRWwgPT09ICdsaWdodCcgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDAuNyknXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBIb2xkIHNwYWNlIGJhciB0byByYW5kb21pc2UgYSB3YXZlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGgtMiBtYi00IHRleHQteHMgZmxleCByb3VuZGVkIGJnLXRlYWwtMjAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7Y3VycmVudFBlcmNlbnR9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1ub25lIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlciBiZy10ZWFsLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiBpZD1cInByb2dyZXNzYmFyXCIgdmFsdWU9XCIwXCIgbWF4PVwiMTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})