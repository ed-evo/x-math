function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var vuetifyLogo$1 = {};

var ids = vuetifyLogo$1.ids = [3];
var modules = vuetifyLogo$1.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default;
module.exports.__inject__ = function (context) {
  add("8fa7cefe", content, true, context);
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_VuetifyLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_VuetifyLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_VuetifyLogo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vuetify-logo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/VuetifyLogo.vue?vue&type=template&id=50c9f37e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"vuetify-logo",attrs:{"alt":"Vuetify Logo","src":"/vuetify-logo.svg"}},[])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/VuetifyLogo.vue?vue&type=template&id=50c9f37e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/VuetifyLogo.vue

var script = {};
function injectStyles (context) {
  
  var style0 = __webpack_require__(139);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5dbcea52"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

};

const vuetifyLogo = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': vuetifyLogo$1,
  ids: ids,
  modules: modules
}, [vuetifyLogo$1]));

export { vuetifyLogo as v };
