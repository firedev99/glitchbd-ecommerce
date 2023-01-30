"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./styles/GlobalStyle.tsx

const GlobalStyle = external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgba(0, 0, 0, 1);
    -webkit-font-smoothing: antialiased;
    color: rgba(170, 170, 170, 1);
    font-family: sans-serif;

    a {
      text-decoration: none;
      color: rgba(170, 170, 170, 1);
    }

    ::-webkit-scrollbar {
      height: 12px;
      width: 13px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      padding: 1px;
      background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #5a5a5a;
      width: 12px;
    }

    /* On hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b3b3b3;
    }
  }
`;

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps , router  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            Component.Layout ? /*#__PURE__*/ jsx_runtime_.jsx(Component.Layout, {
                ...pageProps,
                children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                    ...pageProps,
                    key: router.route
                })
            }) : /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                ...pageProps,
                key: router.route
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(609));
module.exports = __webpack_exports__;

})();