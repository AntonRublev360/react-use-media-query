(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(module,exports,__webpack_require__){__webpack_require__(148),__webpack_require__(227),module.exports=__webpack_require__(228)},228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(13),__webpack_require__(18),__webpack_require__(113),__webpack_require__(19);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(64),req=__webpack_require__(348);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(114)(module))},348:function(module,exports,__webpack_require__){var map={"./useMediaQuery.stories.js":349};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=348},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64),_src_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54),queryMobile="(max-width: 400px)",queryTablet="(min-width: 401px) and (max-width: 640px)",queryDesktop="(min-width: 641px) and (max-width: 1024px)",queryLargeDesktop="(min-width: 1025px)";function MeduaQueriesSample(){var mobile=Object(_src_index__WEBPACK_IMPORTED_MODULE_2__.a)(queryMobile),tablet=Object(_src_index__WEBPACK_IMPORTED_MODULE_2__.a)(queryTablet),desktop=Object(_src_index__WEBPACK_IMPORTED_MODULE_2__.a)(queryDesktop),largeDesktop=Object(_src_index__WEBPACK_IMPORTED_MODULE_2__.a)(queryLargeDesktop);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("di",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Hint: Try resizing the browser window to see changes."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,queryMobile," = ",JSON.stringify(mobile)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,queryTablet," = ",JSON.stringify(tablet)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,queryDesktop," = ",JSON.stringify(desktop)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,queryLargeDesktop," = ",JSON.stringify(largeDesktop))))}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("useMediaQuery",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeduaQueriesSample,null)})}.call(this,__webpack_require__(114)(module))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return useMediaQuery});__webpack_require__(30),__webpack_require__(27),__webpack_require__(13),__webpack_require__(51);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function useMediaQuery(mediaQuery){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(function(){return window.matchMedia(mediaQuery).matches}),2),matches=_useState2[0],setMatches=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(function(){var mediaQueryList=window.matchMedia(mediaQuery),listener=function(e){return setMatches(e.matches)};return mediaQueryList.addListener(listener),function(){return mediaQueryList.removeListener(listener)}},[mediaQuery]),matches}}},[[147,1,2]]]);
//# sourceMappingURL=main.4a6c93b54ee010da0cd9.bundle.js.map