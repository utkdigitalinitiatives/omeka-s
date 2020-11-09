"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectCollection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ListSharp = _interopRequireDefault(require("@material-ui/icons/ListSharp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        justify: "center",
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        direction: "column",
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4",
        paragraph: true
      }, /*#__PURE__*/_react["default"].createElement("em", null, t('noItemSelected'))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary",
        variant: "contained",
        onClick: this.openCollectionDialog,
        startIcon: /*#__PURE__*/_react["default"].createElement(_ListSharp["default"], null)
      }, t('showCollection'))));
    }
  }]);

  return SelectCollection;
}(_react.Component);

exports.SelectCollection = SelectCollection;
SelectCollection.defaultProps = {
  collectionPath: [],
  manifestId: null,
  t: function t() {},
  windowId: null
};