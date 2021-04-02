(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[390],{

/***/ 77206:
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
  d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutlineSharp');

exports.Z = _default;

/***/ }),

/***/ 99049:
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
  d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'PlayCircleOutlineSharp');

exports.Z = _default;

/***/ }),

/***/ 59169:
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
  d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'RemoveCircleOutlineSharp');

exports.Z = _default;

/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_WindowViewer)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/extend/withPlugins.js
var withPlugins = __webpack_require__(11196);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react-sizeme/dist/react-sizeme.js
var react_sizeme = __webpack_require__(8935);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 6 modules
var withStyles = __webpack_require__(49353);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/colorManipulator.js
var colorManipulator = __webpack_require__(59114);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/getters.js
var getters = __webpack_require__(81610);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(79895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/withTranslation.js + 2 modules
var withTranslation = __webpack_require__(87217);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/canvas.js
var canvas = __webpack_require__(36691);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/config.js
var config = __webpack_require__(1172);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AddCircleOutlineSharp.js
var AddCircleOutlineSharp = __webpack_require__(77206);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/RemoveCircleOutlineSharp.js
var RemoveCircleOutlineSharp = __webpack_require__(59169);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__(62087);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/RestoreZoomIcon.js


/**
 * RestoreZoomIcon ~
*/

function RestoreZoomIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
  })));
}
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js + 1 modules
var MiradorMenuButton = __webpack_require__(79058);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ZoomControls.js
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
 */

var ZoomControls = /*#__PURE__*/function (_Component) {
  _inherits(ZoomControls, _Component);

  var _super = _createSuper(ZoomControls);

  /**
   * constructor -
   */
  function ZoomControls(props) {
    var _this;

    _classCallCheck(this, ZoomControls);

    _this = _super.call(this, props);
    _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
    _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  _createClass(ZoomControls, [{
    key: "handleZoomInClick",
    value: function handleZoomInClick() {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          updateViewport = _this$props.updateViewport,
          viewer = _this$props.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom * 2
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleZoomOutClick",
    value: function handleZoomOutClick() {
      var _this$props2 = this.props,
          windowId = _this$props2.windowId,
          updateViewport = _this$props2.updateViewport,
          viewer = _this$props2.viewer;
      updateViewport(windowId, {
        zoom: viewer.zoom / 2
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          displayDivider = _this$props3.displayDivider,
          showZoomControls = _this$props3.showZoomControls,
          classes = _this$props3.classes,
          t = _this$props3.t,
          zoomToWorld = _this$props3.zoomToWorld;

      if (!showZoomControls) {
        return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.zoom_controls
      }, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('zoomIn'),
        onClick: this.handleZoomInClick
      }, /*#__PURE__*/external_React_default().createElement(AddCircleOutlineSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('zoomOut'),
        onClick: this.handleZoomOutClick
      }, /*#__PURE__*/external_React_default().createElement(RemoveCircleOutlineSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('zoomReset'),
        onClick: function onClick() {
          return zoomToWorld(false);
        }
      }, /*#__PURE__*/external_React_default().createElement(RestoreZoomIcon, null)), displayDivider && /*#__PURE__*/external_React_default().createElement("span", {
        className: classes.divider
      }));
    }
  }]);

  return ZoomControls;
}(external_React_.Component);
ZoomControls.defaultProps = {
  displayDivider: true,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  updateViewport: function updateViewport() {},
  viewer: {},
  windowId: ''
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ZoomControls.js








/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    showZoomControls: (0,config/* getShowZoomControlsConfig */._M)(state),
    viewer: (0,getters/* getViewer */.gA)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = {
  updateViewport: canvas/* updateViewport */.WH
};
/**
 *
 * @param theme
 * @returns {{zoom_controls: {position: string, right: number},
 * ListItem: {paddingBottom: number, paddingTop: number}}}
 */

var styles = function styles(theme) {
  return {
    divider: {
      borderRight: '1px solid #808080',
      display: 'inline-block',
      height: '24px',
      margin: '12px 6px'
    },
    ListItem: {
      paddingBottom: 0,
      paddingTop: 0
    },
    zoom_controls: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  };
};

var enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(styles), (0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ZoomControls'));
/* harmony default export */ const containers_ZoomControls = (enhance(ZoomControls));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/config/css-ns.js
var css_ns = __webpack_require__(81720);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ViewerInfo.js
function ViewerInfo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ViewerInfo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ViewerInfo_createClass(Constructor, protoProps, staticProps) { if (protoProps) ViewerInfo_defineProperties(Constructor.prototype, protoProps); if (staticProps) ViewerInfo_defineProperties(Constructor, staticProps); return Constructor; }

function ViewerInfo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ViewerInfo_setPrototypeOf(subClass, superClass); }

function ViewerInfo_setPrototypeOf(o, p) { ViewerInfo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ViewerInfo_setPrototypeOf(o, p); }

function ViewerInfo_createSuper(Derived) { var hasNativeReflectConstruct = ViewerInfo_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ViewerInfo_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ViewerInfo_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ViewerInfo_possibleConstructorReturn(this, result); }; }

function ViewerInfo_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ViewerInfo_assertThisInitialized(self); }

function ViewerInfo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ViewerInfo_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ViewerInfo_getPrototypeOf(o) { ViewerInfo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ViewerInfo_getPrototypeOf(o); }





/**
 *
 */

var ViewerInfo = /*#__PURE__*/function (_Component) {
  ViewerInfo_inherits(ViewerInfo, _Component);

  var _super = ViewerInfo_createSuper(ViewerInfo);

  function ViewerInfo() {
    ViewerInfo_classCallCheck(this, ViewerInfo);

    return _super.apply(this, arguments);
  }

  ViewerInfo_createClass(ViewerInfo, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          canvasCount = _this$props.canvasCount,
          canvasIndex = _this$props.canvasIndex,
          canvasLabel = _this$props.canvasLabel,
          classes = _this$props.classes,
          t = _this$props.t;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classnames_default()((0,css_ns/* default */.Z)('osd-info'), classes.osdInfo)
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        display: "inline",
        variant: "caption",
        className: (0,css_ns/* default */.Z)('canvas-count')
      }, t('pagination', {
        current: canvasIndex + 1,
        total: canvasCount
      })), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        display: "inline",
        variant: "caption",
        className: (0,css_ns/* default */.Z)('canvas-label')
      }, canvasLabel && " \u2022 ".concat(canvasLabel)));
    }
  }]);

  return ViewerInfo;
}(external_React_.Component);
ViewerInfo.defaultProps = {
  canvasLabel: undefined,
  t: function t() {}
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/canvases.js + 1 modules
var selectors_canvases = __webpack_require__(49455);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/sequences.js
var sequences = __webpack_require__(95981);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ViewerInfo.js







/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */

var ViewerInfo_mapStateToProps = function mapStateToProps(state, props) {
  var windowId = props.windowId;
  var canvases = (0,selectors_canvases/* getCanvases */.LU)(state, {
    windowId: windowId
  });
  var canvasIndex = (0,sequences/* getCanvasIndex */.Dr)(state, {
    windowId: windowId
  });
  var canvasId = ((0,selectors_canvases/* getCurrentCanvas */.Pm)(state, {
    windowId: windowId
  }) || {}).id;
  return {
    canvasCount: canvases.length,
    canvasIndex: canvasIndex,
    canvasLabel: (0,selectors_canvases/* getCanvasLabel */.vt)(state, {
      canvasId: canvasId,
      windowId: windowId
    })
  };
};

var ViewerInfo_styles = {
  osdInfo: {
    order: 2,
    overflow: 'hidden',
    paddingBottom: 3,
    textOverflow: 'ellipsis',
    unicodeBidi: 'plaintext',
    whiteSpace: 'nowrap',
    width: '100%'
  }
};
var ViewerInfo_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(ViewerInfo_styles), (0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(ViewerInfo_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('ViewerInfo'));
/* harmony default export */ const containers_ViewerInfo = (ViewerInfo_enhance(ViewerInfo));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleOutlineSharp.js
var PlayCircleOutlineSharp = __webpack_require__(99049);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ViewerNavigation.js
function ViewerNavigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ViewerNavigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ViewerNavigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) ViewerNavigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) ViewerNavigation_defineProperties(Constructor, staticProps); return Constructor; }

function ViewerNavigation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ViewerNavigation_setPrototypeOf(subClass, superClass); }

function ViewerNavigation_setPrototypeOf(o, p) { ViewerNavigation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ViewerNavigation_setPrototypeOf(o, p); }

function ViewerNavigation_createSuper(Derived) { var hasNativeReflectConstruct = ViewerNavigation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ViewerNavigation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ViewerNavigation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ViewerNavigation_possibleConstructorReturn(this, result); }; }

function ViewerNavigation_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ViewerNavigation_assertThisInitialized(self); }

function ViewerNavigation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ViewerNavigation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ViewerNavigation_getPrototypeOf(o) { ViewerNavigation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ViewerNavigation_getPrototypeOf(o); }






/**
 */

var ViewerNavigation = /*#__PURE__*/function (_Component) {
  ViewerNavigation_inherits(ViewerNavigation, _Component);

  var _super = ViewerNavigation_createSuper(ViewerNavigation);

  function ViewerNavigation() {
    ViewerNavigation_classCallCheck(this, ViewerNavigation);

    return _super.apply(this, arguments);
  }

  ViewerNavigation_createClass(ViewerNavigation, [{
    key: "render",

    /**
     * Renders things
     */
    value: function render() {
      var _this$props = this.props,
          hasNextCanvas = _this$props.hasNextCanvas,
          hasPreviousCanvas = _this$props.hasPreviousCanvas,
          setNextCanvas = _this$props.setNextCanvas,
          setPreviousCanvas = _this$props.setPreviousCanvas,
          t = _this$props.t,
          classes = _this$props.classes,
          viewingDirection = _this$props.viewingDirection;
      var htmlDir = 'ltr';
      var previousIconStyle = {};
      var nextIconStyle = {};

      switch (viewingDirection) {
        case 'top-to-bottom':
          previousIconStyle = {
            transform: 'rotate(270deg)'
          };
          nextIconStyle = {
            transform: 'rotate(90deg)'
          };
          break;

        case 'bottom-to-top':
          previousIconStyle = {
            transform: 'rotate(90deg)'
          };
          nextIconStyle = {
            transform: 'rotate(270deg)'
          };
          break;

        case 'right-to-left':
          htmlDir = 'rtl';
          previousIconStyle = {};
          nextIconStyle = {
            transform: 'rotate(180deg)'
          };
          break;

        default:
          previousIconStyle = {
            transform: 'rotate(180deg)'
          };
          nextIconStyle = {};
      }

      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classnames_default()((0,css_ns/* default */.Z)('osd-navigation'), classes.osdNavigation),
        dir: htmlDir
      }, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('previousCanvas'),
        className: (0,css_ns/* default */.Z)('previous-canvas-button'),
        disabled: !hasPreviousCanvas,
        onClick: function onClick() {
          hasPreviousCanvas && setPreviousCanvas();
        }
      }, /*#__PURE__*/external_React_default().createElement(PlayCircleOutlineSharp/* default */.Z, {
        style: previousIconStyle
      })), /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('nextCanvas'),
        className: (0,css_ns/* default */.Z)('next-canvas-button'),
        disabled: !hasNextCanvas,
        onClick: function onClick() {
          hasNextCanvas && setNextCanvas();
        }
      }, /*#__PURE__*/external_React_default().createElement(PlayCircleOutlineSharp/* default */.Z, {
        style: nextIconStyle
      })));
    }
  }]);

  return ViewerNavigation;
}(external_React_.Component);
ViewerNavigation.defaultProps = {
  hasNextCanvas: false,
  hasPreviousCanvas: false,
  setNextCanvas: function setNextCanvas() {},
  setPreviousCanvas: function setPreviousCanvas() {},
  viewingDirection: ''
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ViewerNavigation.js








/** */

var ViewerNavigation_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    hasNextCanvas: !!(0,selectors_canvases/* getNextCanvasGrouping */.m7)(state, {
      windowId: windowId
    }),
    hasPreviousCanvas: !!(0,selectors_canvases/* getPreviousCanvasGrouping */.iQ)(state, {
      windowId: windowId
    }),
    viewingDirection: (0,sequences/* getSequenceViewingDirection */.Xf)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */


var ViewerNavigation_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    setNextCanvas: function setNextCanvas() {
      return dispatch(canvas/* setNextCanvas */.NU(windowId));
    },
    setPreviousCanvas: function setPreviousCanvas() {
      return dispatch(canvas/* setPreviousCanvas */.Ch(windowId));
    }
  };
};

var ViewerNavigation_styles = {
  osdNavigation: {
    order: 1
  }
};
var ViewerNavigation_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(ViewerNavigation_styles), (0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(ViewerNavigation_mapStateToProps, ViewerNavigation_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ViewerNavigation') // further HOC go here
);
/* harmony default export */ const containers_ViewerNavigation = (ViewerNavigation_enhance(ViewerNavigation));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/components/PluginHook.js
var PluginHook = __webpack_require__(95450);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowCanvasNavigationControls.js
function WindowCanvasNavigationControls_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowCanvasNavigationControls_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowCanvasNavigationControls_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowCanvasNavigationControls_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowCanvasNavigationControls_defineProperties(Constructor, staticProps); return Constructor; }

function WindowCanvasNavigationControls_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowCanvasNavigationControls_setPrototypeOf(subClass, superClass); }

function WindowCanvasNavigationControls_setPrototypeOf(o, p) { WindowCanvasNavigationControls_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowCanvasNavigationControls_setPrototypeOf(o, p); }

function WindowCanvasNavigationControls_createSuper(Derived) { var hasNativeReflectConstruct = WindowCanvasNavigationControls_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowCanvasNavigationControls_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowCanvasNavigationControls_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowCanvasNavigationControls_possibleConstructorReturn(this, result); }; }

function WindowCanvasNavigationControls_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowCanvasNavigationControls_assertThisInitialized(self); }

function WindowCanvasNavigationControls_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowCanvasNavigationControls_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowCanvasNavigationControls_getPrototypeOf(o) { WindowCanvasNavigationControls_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowCanvasNavigationControls_getPrototypeOf(o); }










/**
 * Represents the viewer controls in the mirador workspace.
 */

var WindowCanvasNavigationControls = /*#__PURE__*/function (_Component) {
  WindowCanvasNavigationControls_inherits(WindowCanvasNavigationControls, _Component);

  var _super = WindowCanvasNavigationControls_createSuper(WindowCanvasNavigationControls);

  function WindowCanvasNavigationControls() {
    WindowCanvasNavigationControls_classCallCheck(this, WindowCanvasNavigationControls);

    return _super.apply(this, arguments);
  }

  WindowCanvasNavigationControls_createClass(WindowCanvasNavigationControls, [{
    key: "canvasNavControlsAreStacked",

    /**
     * Determine if canvasNavControls are stacked (based on a hard-coded width)
    */
    value: function canvasNavControlsAreStacked() {
      var size = this.props.size;
      return size && size.width && size.width <= 253;
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          visible = _this$props.visible,
          windowId = _this$props.windowId,
          zoomToWorld = _this$props.zoomToWorld;
      if (!visible) return /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "srOnly",
        component: "div"
      }, /*#__PURE__*/external_React_default().createElement(containers_ViewerInfo, {
        windowId: windowId
      }));
      return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        square: true,
        className: classnames_default()(classes.controls, (0,css_ns/* default */.Z)('canvas-nav'), classes.canvasNav, this.canvasNavControlsAreStacked() ? (0,css_ns/* default */.Z)('canvas-nav-stacked') : null, this.canvasNavControlsAreStacked() ? classes.canvasNavStacked : null),
        elevation: 0
      }, /*#__PURE__*/external_React_default().createElement(containers_ZoomControls, {
        displayDivider: !this.canvasNavControlsAreStacked(),
        windowId: windowId,
        zoomToWorld: zoomToWorld
      }), /*#__PURE__*/external_React_default().createElement(containers_ViewerNavigation, {
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(containers_ViewerInfo, {
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props));
    }
  }]);

  return WindowCanvasNavigationControls;
}(external_React_.Component);
WindowCanvasNavigationControls.defaultProps = {
  classes: {},
  visible: true
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowCanvasNavigationControls.js








/** */

var WindowCanvasNavigationControls_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    visible: (0,getters/* getWorkspace */.oq)(state).focusedWindowId === windowId
  };
};
/**
 *
 * @param theme
 */


var WindowCanvasNavigationControls_styles = function styles(theme) {
  return {
    canvasNav: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center'
    },
    canvasNavStacked: {
      flexDirection: 'column'
    },
    controls: {
      backgroundColor: (0,colorManipulator/* fade */.U1)(theme.palette.background.paper, 0.5),
      bottom: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 50
    }
  };
};

var WindowCanvasNavigationControls_enhance = (0,redux/* compose */.qC)((0,es/* connect */.$j)(WindowCanvasNavigationControls_mapStateToProps), (0,withStyles/* default */.Z)(WindowCanvasNavigationControls_styles), (0,react_sizeme.withSize)(), (0,withPlugins/* withPlugins */.A)('WindowCanvasNavigationControls'));
/* harmony default export */ const containers_WindowCanvasNavigationControls = (WindowCanvasNavigationControls_enhance(WindowCanvasNavigationControls));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowViewer.js
function WindowViewer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowViewer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowViewer_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowViewer_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowViewer_defineProperties(Constructor, staticProps); return Constructor; }

function WindowViewer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowViewer_setPrototypeOf(subClass, superClass); }

function WindowViewer_setPrototypeOf(o, p) { WindowViewer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowViewer_setPrototypeOf(o, p); }

function WindowViewer_createSuper(Derived) { var hasNativeReflectConstruct = WindowViewer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowViewer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowViewer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowViewer_possibleConstructorReturn(this, result); }; }

function WindowViewer_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowViewer_assertThisInitialized(self); }

function WindowViewer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowViewer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowViewer_getPrototypeOf(o) { WindowViewer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowViewer_getPrototypeOf(o); }



var OSDViewer = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 501).then(__webpack_require__.bind(__webpack_require__, 26501));
});
/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */

var WindowViewer = /*#__PURE__*/function (_Component) {
  WindowViewer_inherits(WindowViewer, _Component);

  var _super = WindowViewer_createSuper(WindowViewer);

  /** */
  function WindowViewer(props) {
    var _this;

    WindowViewer_classCallCheck(this, WindowViewer);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */


  WindowViewer_createClass(WindowViewer, [{
    key: "render",

    /**
     * Renders things
     */
    value: function render() {
      var windowId = this.props.windowId;
      var hasError = this.state.hasError;

      if (hasError) {
        return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      }

      return /*#__PURE__*/external_React_default().createElement(external_React_.Suspense, {
        fallback: /*#__PURE__*/external_React_default().createElement("div", null)
      }, /*#__PURE__*/external_React_default().createElement(OSDViewer, {
        windowId: windowId
      }, /*#__PURE__*/external_React_default().createElement(containers_WindowCanvasNavigationControls, {
        windowId: windowId
      })));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return WindowViewer;
}(external_React_.Component);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowViewer.js



var WindowViewer_enhance = (0,redux/* compose */.qC)((0,withPlugins/* withPlugins */.A)('WindowViewer') // further HOC go here
);
/* harmony default export */ const containers_WindowViewer = (WindowViewer_enhance(WindowViewer));

/***/ })

}]);
//# sourceMappingURL=390.mirador.js.map