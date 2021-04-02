(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[710],{

/***/ 74693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(63804));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(2108));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
}), 'ListSharp');

exports.Z = _default;

/***/ }),

/***/ 46710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_SelectCollection)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/withTranslation.js + 2 modules
var withTranslation = __webpack_require__(87217);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 6 modules
var withStyles = __webpack_require__(49353);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/window.js
var actions_window = __webpack_require__(50166);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/extend/withPlugins.js
var withPlugins = __webpack_require__(11196);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/getters.js
var getters = __webpack_require__(81610);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(41749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ListSharp.js
var ListSharp = __webpack_require__(74693);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/SelectCollection.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 *
 */

var SelectCollection = /*#__PURE__*/function (_Component) {
  _inherits(SelectCollection, _Component);

  var _super = _createSuper(SelectCollection);

  /** */
  function SelectCollection(props) {
    var _this;

    _classCallCheck(this, SelectCollection);

    _this = _super.call(this, props);
    _this.openCollectionDialog = _this.openCollectionDialog.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  _createClass(SelectCollection, [{
    key: "openCollectionDialog",
    value: function openCollectionDialog() {
      var _this$props = this.props,
          collectionPath = _this$props.collectionPath,
          manifestId = _this$props.manifestId,
          showCollectionDialog = _this$props.showCollectionDialog,
          windowId = _this$props.windowId;
      showCollectionDialog(manifestId, collectionPath.slice(0, -1), windowId);
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        justify: "center",
        alignItems: "center"
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        direction: "column",
        alignItems: "center"
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h4",
        paragraph: true
      }, /*#__PURE__*/external_React_default().createElement("em", null, t('noItemSelected'))), /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        color: "primary",
        variant: "contained",
        onClick: this.openCollectionDialog,
        startIcon: /*#__PURE__*/external_React_default().createElement(ListSharp/* default */.Z, null)
      }, t('showCollection'))));
    }
  }]);

  return SelectCollection;
}(external_React_.Component);
SelectCollection.defaultProps = {
  collectionPath: [],
  manifestId: null,
  t: function t() {},
  windowId: null
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/SelectCollection.js








/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;

  var _ref2 = (0,getters/* getWindow */.Jj)(state, {
    windowId: windowId
  }) || {},
      collectionPath = _ref2.collectionPath,
      manifestId = _ref2.manifestId;

  return {
    collectionPath: collectionPath,
    manifestId: manifestId
  };
};

var mapDispatchToProps = {
  showCollectionDialog: actions_window/* showCollectionDialog */.FK
};
/** */

var styles = function styles(theme) {
  return {};
};

var enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(styles), (0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('SelectCollection'));
/* harmony default export */ const containers_SelectCollection = (enhance(SelectCollection));

/***/ })

}]);
//# sourceMappingURL=710.mirador.js.map