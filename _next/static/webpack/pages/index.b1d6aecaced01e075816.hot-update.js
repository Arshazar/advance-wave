webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/randomiser/index.js":
/*!********************************************!*\
  !*** ./src/components/randomiser/index.js ***!
  \********************************************/
/*! exports provided: Randomiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Randomiser\", function() { return Randomiser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _recoil_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../recoil/atoms */ \"./src/recoil/atoms.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nvar _jsxFileName = \"/home/arsha/Desktop/isvg/src/components/randomiser/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Randomiser = function Randomiser(_ref) {\n  _s();\n\n  var colourType = _ref.colourType;\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_recoil_atoms__WEBPACK_IMPORTED_MODULE_4__[\"theme\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useRecoilState, 2),\n      themeEl = _useRecoilState2[0],\n      setThemeEl = _useRecoilState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentPercent = _useState[0],\n      setCurrentPercent = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      num = _useState2[0],\n      setNum = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document) {\n      document.addEventListener('keydown', function (e) {\n        if (e.code === 'Space') {\n          setNum(num + 1);\n        }\n      });\n      document.addEventListener('keyup', function (e) {\n        if (e.code === 'Space') {\n          setNum(0);\n        }\n      });\n    }\n\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline();\n    tl.to('#progressbar', {\n      duration: 2,\n      value: 100,\n      ease: 'power2.easeInOut'\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (currentPercent < 100) {\n      if (num > 0 && num < 100) {\n        setNum(num + 1);\n        setCurrentPercent(currentPercent + 1);\n      }\n    }\n\n    if (currentPercent > 0 && currentPercent < 101) {\n      if (num < 1) {\n        setNum(num - 1);\n        setCurrentPercent(currentPercent - 1);\n      }\n    }\n  }, [num]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute z-0 w-full mt-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"flex relative flex-col m-auto z-10\",\n      style: {\n        width: '%70'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"font-extralight text-2xl\",\n        style: {\n          color: themeEl === 'light' ? '#000' : '#fff',\n          filter: 'brightness(0.7)'\n        },\n        children: \"Hold space bar to randomise a wave\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"progress\", {\n        className: \"w-full\",\n        id: \"progressbar\",\n        value: \"0\",\n        max: \"100\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Randomiser, \"rSd6ld0qSr1f8WTHlLP4xzU/Alg=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = Randomiser;\n\nvar _c;\n\n$RefreshReg$(_c, \"Randomiser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmFuZG9taXNlci9pbmRleC5qcz9mZmEwIl0sIm5hbWVzIjpbIlJhbmRvbWlzZXIiLCJjb2xvdXJUeXBlIiwidXNlUmVjb2lsU3RhdGUiLCJ0aGVtZSIsInRoZW1lRWwiLCJzZXRUaGVtZUVsIiwidXNlU3RhdGUiLCJjdXJyZW50UGVyY2VudCIsInNldEN1cnJlbnRQZXJjZW50IiwibnVtIiwic2V0TnVtIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsInRvIiwiZHVyYXRpb24iLCJ2YWx1ZSIsImVhc2UiLCJ3aWR0aCIsImNvbG9yIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLHdCQUNaQyw2REFBYyxDQUFDQyxtREFBRCxDQURGO0FBQUE7QUFBQSxNQUNuQ0MsT0FEbUM7QUFBQSxNQUMxQkMsVUFEMEI7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsQ0FBRCxDQUZWO0FBQUEsTUFFbkNDLGNBRm1DO0FBQUEsTUFFbkJDLGlCQUZtQjs7QUFBQSxtQkFHcEJGLHNEQUFRLENBQUMsQ0FBRCxDQUhZO0FBQUEsTUFHbkNHLEdBSG1DO0FBQUEsTUFHOUJDLE1BSDhCOztBQUsxQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsUUFBSixFQUFjO0FBQ1ZBLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDLFlBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQWYsRUFBd0I7QUFDcEJMLGdCQUFNLENBQUNELEdBQUcsR0FBRyxDQUFQLENBQU47QUFDSDtBQUNKLE9BSkQ7QUFLQUcsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87QUFDdEMsWUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUNwQkwsZ0JBQU0sQ0FBQyxDQUFELENBQU47QUFDSDtBQUNKLE9BSkQ7QUFLSDs7QUFFRCxRQUFNTSxFQUFFLEdBQUdDLDRDQUFJLENBQUNDLFFBQUwsRUFBWDtBQUNBRixNQUFFLENBQUNHLEVBQUgsQ0FBTSxjQUFOLEVBQXNCO0FBQ2xCQyxjQUFRLEVBQUUsQ0FEUTtBQUVsQkMsV0FBSyxFQUFFLEdBRlc7QUFHbEJDLFVBQUksRUFBRTtBQUhZLEtBQXRCO0FBS0gsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVDtBQXNCQVgseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUosY0FBYyxHQUFHLEdBQXJCLEVBQTBCO0FBQ3RCLFVBQUlFLEdBQUcsR0FBRyxDQUFOLElBQVdBLEdBQUcsR0FBRyxHQUFyQixFQUEwQjtBQUN0QkMsY0FBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFOO0FBQ0FELHlCQUFpQixDQUFDRCxjQUFjLEdBQUcsQ0FBbEIsQ0FBakI7QUFDSDtBQUNKOztBQUNELFFBQUlBLGNBQWMsR0FBRyxDQUFqQixJQUFzQkEsY0FBYyxHQUFHLEdBQTNDLEVBQWdEO0FBQzVDLFVBQUlFLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDVEMsY0FBTSxDQUFDRCxHQUFHLEdBQUcsQ0FBUCxDQUFOO0FBQ0FELHlCQUFpQixDQUFDRCxjQUFjLEdBQUcsQ0FBbEIsQ0FBakI7QUFDSDtBQUNKO0FBQ0osR0FiUSxFQWFOLENBQUNFLEdBQUQsQ0FiTSxDQUFUO0FBZUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxvQ0FBZjtBQUFvRCxXQUFLLEVBQUU7QUFBRWMsYUFBSyxFQUFFO0FBQVQsT0FBM0Q7QUFBQSw4QkFDSTtBQUNJLGlCQUFTLEVBQUMsMEJBRGQ7QUFFSSxhQUFLLEVBQUU7QUFDSEMsZUFBSyxFQUFFcEIsT0FBTyxLQUFLLE9BQVosR0FBc0IsTUFBdEIsR0FBK0IsTUFEbkM7QUFFSHFCLGdCQUFNLEVBQUU7QUFGTCxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFlSTtBQUFVLGlCQUFTLEVBQUMsUUFBcEI7QUFBNkIsVUFBRSxFQUFDLGFBQWhDO0FBQThDLGFBQUssRUFBQyxHQUFwRDtBQUF3RCxXQUFHLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQS9ETTs7R0FBTXpCLFU7VUFDcUJFLHFEOzs7S0FEckJGLFUiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yYW5kb21pc2VyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9yZWNvaWwvYXRvbXMnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5leHBvcnQgY29uc3QgUmFuZG9taXNlciA9ICh7IGNvbG91clR5cGUgfSkgPT4ge1xuICAgIGNvbnN0IFt0aGVtZUVsLCBzZXRUaGVtZUVsXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lKVxuICAgIGNvbnN0IFtjdXJyZW50UGVyY2VudCwgc2V0Q3VycmVudFBlcmNlbnRdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgICAgICAgICAgICAgICBzZXROdW0obnVtICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtKDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG4gICAgICAgIHRsLnRvKCcjcHJvZ3Jlc3NiYXInLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLmVhc2VJbk91dCdcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA8IDEwMCkge1xuICAgICAgICAgICAgaWYgKG51bSA+IDAgJiYgbnVtIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSArIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50UGVyY2VudCA+IDAgJiYgY3VycmVudFBlcmNlbnQgPCAxMDEpIHtcbiAgICAgICAgICAgIGlmIChudW0gPCAxKSB7XG4gICAgICAgICAgICAgICAgc2V0TnVtKG51bSAtIDEpXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBlcmNlbnQoY3VycmVudFBlcmNlbnQgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW251bV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgei0wIHctZnVsbCBtdC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGZsZXgtY29sIG0tYXV0byB6LTEwXCIgc3R5bGU9e3sgd2lkdGg6ICclNzAnIH19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IHRleHQtMnhsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZUVsID09PSAnbGlnaHQnID8gJyMwMDAnIDogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygwLjcpJ1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgSG9sZCBzcGFjZSBiYXIgdG8gcmFuZG9taXNlIGEgd2F2ZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBoLTIgbWItNCB0ZXh0LXhzIGZsZXggcm91bmRlZCBiZy10ZWFsLTIwMCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke2N1cnJlbnRQZXJjZW50fSVgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbm9uZSBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgYmctdGVhbC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3NOYW1lPVwidy1mdWxsXCIgaWQ9XCJwcm9ncmVzc2JhclwiIHZhbHVlPVwiMFwiIG1heD1cIjEwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/randomiser/index.js\n");

/***/ })

})