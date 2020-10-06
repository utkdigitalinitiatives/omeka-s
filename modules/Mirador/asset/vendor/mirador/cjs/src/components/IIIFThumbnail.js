"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IIIFThumbnail = void 0;

var _react = _interopRequireWildcard(require("react"));

require("intersection-observer");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntersectionObserver = _interopRequireDefault(require("@researchgate/react-intersection-observer"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * Uses InteractionObserver to "lazy" load canvas thumbnails that are in view.
 */
var IIIFThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(IIIFThumbnail, _Component);

  var _super = _createSuper(IIIFThumbnail);

  /**
   */
  function IIIFThumbnail(props) {
    var _this;

    _classCallCheck(this, IIIFThumbnail);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false
    };
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
  */


  _createClass(IIIFThumbnail, [{
    key: "imageStyles",
    value: function imageStyles() {
      var _this$props = this.props,
          maxHeight = _this$props.maxHeight,
          maxWidth = _this$props.maxWidth,
          style = _this$props.style,
          image = _this$props.image;
      var styleProps = {
        height: 'auto',
        width: 'auto'
      };
      if (!image) return _objectSpread(_objectSpread({}, style), {}, {
        height: maxHeight || 'auto',
        width: maxWidth || 'auto'
      });
      var thumbHeight = image.height,
          thumbWidth = image.width;

      if (thumbHeight && thumbWidth) {
        if (maxHeight && thumbHeight > maxHeight || maxWidth && thumbWidth > maxWidth) {
          var aspectRatio = thumbWidth / thumbHeight;

          if (maxHeight && maxWidth) {
            if (maxWidth / maxHeight < aspectRatio) {
              styleProps.height = Math.round(maxWidth / aspectRatio);
              styleProps.width = maxWidth;
            } else {
              styleProps.height = maxHeight;
              styleProps.width = Math.round(maxHeight * aspectRatio);
            }
          } else if (maxHeight) {
            styleProps.height = maxHeight;
            styleProps.maxWidth = Math.round(maxHeight * aspectRatio);
          } else if (maxWidth) {
            styleProps.width = maxWidth;
            styleProps.maxHeight = Math.round(maxWidth / aspectRatio);
          }
        } else {
          styleProps.width = thumbWidth;
          styleProps.height = thumbHeight;
        }
      } else if (thumbHeight && !thumbWidth) {
        styleProps.height = maxHeight;
      } else if (!thumbHeight && thumbWidth) {
        styleProps.width = maxWidth;
      }

      return _objectSpread(_objectSpread({}, styleProps), style);
    }
    /**
     * Handles the intersection (visibility) of a given thumbnail, by requesting
     * the image and then updating the state.
     */

  }, {
    key: "handleIntersection",
    value: function handleIntersection(event) {
      var loaded = this.state.loaded;
      if (loaded || !event.isIntersecting) return;
      this.setState({
        loaded: true
      });
    }
    /**
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          classes = _this$props2.classes,
          image = _this$props2.image,
          label = _this$props2.label,
          labelled = _this$props2.labelled,
          variant = _this$props2.variant;
      var loaded = this.state.loaded;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.root, _defineProperty({}, classes["".concat(variant, "Root")], variant))
      }, /*#__PURE__*/_react["default"].createElement(_reactIntersectionObserver["default"], {
        onChange: this.handleIntersection
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        role: "presentation",
        src: loaded && image && image.url || IIIFThumbnail.defaultImgPlaceholder,
        style: this.imageStyles(),
        className: classes.image
      })), labelled && label && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.label, _defineProperty({}, classes["".concat(variant, "Label")], variant))
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        classes: {
          root: (0, _classnames["default"])(classes.caption, _defineProperty({}, classes["".concat(variant, "Caption")], variant))
        }
      }, label)), children);
    }
  }]);

  return IIIFThumbnail;
}(_react.Component); // Transparent "gray"


exports.IIIFThumbnail = IIIFThumbnail;
IIIFThumbnail.defaultImgPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDQmtBwADgwF/Op8FmAAAAABJRU5ErkJggg==';
IIIFThumbnail.defaultProps = {
  children: null,
  classes: {},
  image: null,
  label: undefined,
  labelled: false,
  maxHeight: null,
  maxWidth: null,
  style: {},
  variant: null
};