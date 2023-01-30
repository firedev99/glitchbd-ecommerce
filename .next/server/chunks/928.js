exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 887:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Poppins_a4b479', '__Poppins_Fallback_a4b479'","fontStyle":"normal"},
	"className": "__className_a4b479"
};


/***/ }),

/***/ 772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_components_layouts_MainLayout_tsx_import_Poppins_arguments_weight_400_500_600_800_900_subsets_latin_variableName_poppins___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(887);
/* harmony import */ var _next_font_google_target_css_path_components_layouts_MainLayout_tsx_import_Poppins_arguments_weight_400_500_600_800_900_subsets_latin_variableName_poppins___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_components_layouts_MainLayout_tsx_import_Poppins_arguments_weight_400_500_600_800_900_subsets_latin_variableName_poppins___WEBPACK_IMPORTED_MODULE_1__);


function MainLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: (_next_font_google_target_css_path_components_layouts_MainLayout_tsx_import_Poppins_arguments_weight_400_500_600_800_900_subsets_latin_variableName_poppins___WEBPACK_IMPORTED_MODULE_1___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function Seo({ title , siteName ="Glitch Dhaka" , description ="Glitch is a fashion apparel and gear shop and manufacturer located at Dhaka, Bangladesh. Get yourself glitched within a click." , url ="https://glitchbd.com"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: `${title} – ${siteName}`
            }, "title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "og_type"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title
            }, "og_title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }, "og_description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:locale",
                content: "en_IE"
            }, "og_locale"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: siteName
            }, "og_site_name"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: url
            }, "og_url"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: siteName
            }, "og_site_name"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon.ico"
            })
        ]
    });
}
{
/* <meta
      key="og_image"
      property="og:image"
      content={ogImage ?? DEFAULT_OG_IMAGE}
    />
    <meta
      key="og_image:alt"
      property="og:image:alt"
      content={`${title} | ${siteName}`}
    />
    <meta key="og_image:width" property="og:image:width" content="1200" />
    <meta key="og_image:height" property="og:image:height" content="630" />

    <meta name="robots" content="index,follow" />

    <meta
      key="twitter:card"
      name="twitter:card"
      content="summary_large_image"
    />
    <meta 
      key="twitter:site" 
      name="twitter:site" 
      content={twitterHandle} 
    />
    <meta
      key="twitter:creator"
      name="twitter:creator"
      content={twitterHandle}
    />
    <meta 
      key="twitter:title" 
      property="twitter:title" 
      content={title} 
    />
    <meta
      key="twitter:description"
      property="twitter:description"
      content={description}
    />
    
    <link rel="canonical" href={canonical ?? DOMAIN} /> */ }{
/* <link rel="canonical" href="https://glitchbd.com" key="canonical" /> */ }

/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-48685d9-0"
})`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


/***/ })

};
;