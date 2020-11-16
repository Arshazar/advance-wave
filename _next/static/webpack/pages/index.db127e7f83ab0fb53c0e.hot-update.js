webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var _svg_wave_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/wave/wave */ \"./src/components/svg/wave/wave.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Randomiser = function Randomiser() {\n  _s();\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"wave\"]),\n      _useRecoilState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState3, 2),\n      waveEl = _useRecoilState4[0],\n      setWaveEl = _useRecoilState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          var wavery = new _svg_wave_wave__WEBPACK_IMPORTED_MODULE_5__[\"Wavery\"](waveEl);\n          var generatedSvg = wavery.generateSvg();\n          setWaveEl(generatedSvg);\n        }\n      });\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex relative flex-col m-auto z-10 sm:w-5/6 md:w-1/3 p-2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-2xl mb-3\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)'\n        },\n        children: \"Press space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"JSJwdjsD5nbEREx/63tfi/9w+GI=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"], recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJ1c2VSZWNvaWxTdGF0ZSIsInRoZW1lIiwidGhlbWVFbCIsInNldFRoZW1lRWwiLCJ3YXZlIiwid2F2ZUVsIiwic2V0V2F2ZUVsIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJ3YXZlcnkiLCJXYXZlcnkiLCJnZW5lcmF0ZWRTdmciLCJnZW5lcmF0ZVN2ZyIsImNvbG9yIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLHdCQUNFQyw2REFBYyxDQUFDQyxtREFBRCxDQURoQjtBQUFBO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsVUFEWTs7QUFBQSx5QkFFQUgsNkRBQWMsQ0FBQ0ksa0RBQUQsQ0FGZDtBQUFBO0FBQUEsTUFFckJDLE1BRnFCO0FBQUEsTUFFYkMsU0FGYTs7QUFJNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFFBQUosRUFBYztBQUNWQSxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QyxZQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3BCLGNBQU1DLE1BQU0sR0FBRyxJQUFJQyxxREFBSixDQUFXUixNQUFYLENBQWY7QUFDQSxjQUFNUyxZQUFZLEdBQUdGLE1BQU0sQ0FBQ0csV0FBUCxFQUFyQjtBQUNBVCxtQkFBUyxDQUFDUSxZQUFELENBQVQ7QUFDSDtBQUNKLE9BTkQ7QUFPSDtBQUNKLEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLDBEQUFmO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLCtCQURkO0FBRUksYUFBSyxFQUFFO0FBQ0hFLGVBQUssRUFBRWQsT0FBTyxLQUFLLE9BQVosR0FBc0IsTUFBdEIsR0FBK0IsTUFEbkM7QUFFSGUsZ0JBQU0sRUFBRTtBQUZMLFNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0E5Qk07O0dBQU1sQixVO1VBQ3FCQyxxRCxFQUNGQSxxRDs7O0tBRm5CRCxVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgdGhlbWUsIHdhdmUgfSBmcm9tICcuLi8uLi9yZWNvaWwvYXRvbXMnXG5pbXBvcnQgeyBXYXZlcnkgfSBmcm9tICcuLi9zdmcvd2F2ZS93YXZlJ1xuXG5leHBvcnQgY29uc3QgUmFuZG9taXNlciA9ICgpID0+IHtcbiAgICBjb25zdCBbdGhlbWVFbCwgc2V0VGhlbWVFbF0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZSlcbiAgICBjb25zdCBbd2F2ZUVsLCBzZXRXYXZlRWxdID0gdXNlUmVjb2lsU3RhdGUod2F2ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3YXZlcnkgPSBuZXcgV2F2ZXJ5KHdhdmVFbClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVkU3ZnID0gd2F2ZXJ5LmdlbmVyYXRlU3ZnKClcbiAgICAgICAgICAgICAgICAgICAgc2V0V2F2ZUVsKGdlbmVyYXRlZFN2ZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGZsZXgtY29sIG0tYXV0byB6LTEwIHNtOnctNS82IG1kOnctMS8zIHAtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IHRleHQtMnhsIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lRWwgPT09ICdsaWdodCcgPyAnIzAwMCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDAuNyknXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBQcmVzcyBzcGFjZSBiYXIgdG8gcmFuZG9taXNlIGEgd2F2ZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})