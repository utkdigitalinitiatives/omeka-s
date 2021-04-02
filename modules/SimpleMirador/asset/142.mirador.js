(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[142],{

/***/ 71142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_GalleryView)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 6 modules
var withStyles = __webpack_require__(49353);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/extend/withPlugins.js
var withPlugins = __webpack_require__(11196);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(79895);
// EXTERNAL MODULE: ./node_modules/lodash/flatten.js
var flatten = __webpack_require__(85564);
var flatten_default = /*#__PURE__*/__webpack_require__.n(flatten);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/index.js
var actions = __webpack_require__(1124);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/window.js
var actions_window = __webpack_require__(50166);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/annotation.js
var annotation = __webpack_require__(73953);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/canvas.js
var actions_canvas = __webpack_require__(36691);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(63786);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const Person = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/external_React_.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },

    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},

    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},

    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover',
      // Hide alt text.
      color: 'transparent',
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000
    },

    /* Styles applied to the fallback icon */
    fallback: {
      width: '75%',
      height: '75%'
    }
  };
};

function useLoaded(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet;

  var _React$useState = external_React_.useState(false),
      loaded = _React$useState[0],
      setLoaded = _React$useState[1];

  external_React_.useEffect(function () {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;

    image.onload = function () {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = function () {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return function () {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}

var Avatar = /*#__PURE__*/external_React_.forwardRef(function Avatar(props, ref) {
  var alt = props.alt,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circle' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);

  var children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  var loaded = useLoaded({
    src: src,
    srcSet: srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = /*#__PURE__*/external_React_.createElement("img", (0,esm_extends/* default */.Z)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/external_React_.createElement(Person, {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/external_React_.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAvatar'
})(Avatar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(71267);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CommentSharp.js
var CommentSharp = __webpack_require__(40480);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SearchSharp.js
var SearchSharp = __webpack_require__(75421);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/intersection-observer/intersection-observer.js
var intersection_observer = __webpack_require__(66337);
// EXTERNAL MODULE: ./node_modules/@researchgate/react-intersection-observer/lib/es/index.js + 4 modules
var lib_es = __webpack_require__(9361);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/lib/MiradorCanvas.js
var MiradorCanvas = __webpack_require__(7590);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/IIIFThumbnail.js + 1 modules
var IIIFThumbnail = __webpack_require__(20362);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/GalleryViewThumbnail.js
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







 // polyfill needed for Safari




/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */

var GalleryViewThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(GalleryViewThumbnail, _Component);

  var _super = _createSuper(GalleryViewThumbnail);

  /** */
  function GalleryViewThumbnail(props) {
    var _this;

    _classCallCheck(this, GalleryViewThumbnail);

    _this = _super.call(this, props);
    _this.state = {
      requestedAnnotations: false
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
    _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** @private */


  _createClass(GalleryViewThumbnail, [{
    key: "handleSelect",
    value: function handleSelect() {
      var _this$props = this.props,
          canvas = _this$props.canvas,
          selected = _this$props.selected,
          setCanvas = _this$props.setCanvas,
          focusOnCanvas = _this$props.focusOnCanvas;

      if (selected) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.id);
      }
    }
    /** @private */

  }, {
    key: "handleKey",
    value: function handleKey(event) {
      var _this$props2 = this.props,
          canvas = _this$props2.canvas,
          setCanvas = _this$props2.setCanvas,
          focusOnCanvas = _this$props2.focusOnCanvas;
      this.keys = {
        enter: 'Enter',
        space: ' '
      };
      this.chars = {
        enter: 13,
        space: 32
      };
      var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;

      if (enterOrSpace) {
        focusOnCanvas();
      } else {
        setCanvas(canvas.index, canvas.id);
      }
    }
    /** */

  }, {
    key: "handleIntersection",
    value: function handleIntersection(_ref) {
      var isIntersecting = _ref.isIntersecting;
      var _this$props3 = this.props,
          annotationsCount = _this$props3.annotationsCount,
          requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
      var requestedAnnotations = this.state.requestedAnnotations;
      if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
      this.setState({
        requestedAnnotations: true
      });
      requestCanvasAnnotations();
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          annotationsCount = _this$props4.annotationsCount,
          searchAnnotationsCount = _this$props4.searchAnnotationsCount,
          canvas = _this$props4.canvas,
          classes = _this$props4.classes,
          config = _this$props4.config,
          selected = _this$props4.selected;
      var miradorCanvas = new MiradorCanvas/* default */.Z(canvas);
      return /*#__PURE__*/external_React_default().createElement(lib_es/* default */.ZP, {
        onChange: this.handleIntersection
      }, /*#__PURE__*/external_React_default().createElement("div", {
        key: canvas.index,
        className: classnames_default()(classes.galleryViewItem, selected ? classes.selected : '', searchAnnotationsCount > 0 ? classes.hasAnnotations : ''),
        onClick: this.handleSelect,
        onKeyUp: this.handleKey,
        role: "button",
        tabIndex: 0
      }, /*#__PURE__*/external_React_default().createElement(IIIFThumbnail/* default */.Z, {
        resource: canvas,
        labelled: true,
        variant: "outside",
        maxWidth: config.width,
        maxHeight: config.height,
        style: {
          margin: '0 auto',
          maxWidth: "".concat(Math.ceil(config.height * miradorCanvas.aspectRatio), "px")
        }
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.chips
      }, searchAnnotationsCount > 0 && /*#__PURE__*/external_React_default().createElement(Chip/* default */.Z, {
        avatar: /*#__PURE__*/external_React_default().createElement(Avatar_Avatar, {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/external_React_default().createElement(SearchSharp/* default */.Z, {
          fontSize: "small"
        })),
        label: searchAnnotationsCount,
        className: classnames_default()(classes.searchChip),
        size: "small"
      }), (annotationsCount || 0) > 0 && /*#__PURE__*/external_React_default().createElement(Chip/* default */.Z, {
        avatar: /*#__PURE__*/external_React_default().createElement(Avatar_Avatar, {
          className: classes.avatar,
          classes: {
            circle: classes.avatarIcon
          }
        }, /*#__PURE__*/external_React_default().createElement(CommentSharp/* default */.Z, {
          className: classes.annotationIcon
        })),
        label: annotationsCount,
        className: classnames_default()(classes.annotationsChip),
        size: "small"
      })))));
    }
  }]);

  return GalleryViewThumbnail;
}(external_React_.Component);
GalleryViewThumbnail.defaultProps = {
  annotationsCount: undefined,
  config: {
    height: 100,
    width: null
  },
  requestCanvasAnnotations: function requestCanvasAnnotations() {},
  searchAnnotationsCount: 0,
  selected: false
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/canvases.js + 1 modules
var canvases = __webpack_require__(49455);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/searches.js
var searches = __webpack_require__(51580);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/companionWindows.js
var companionWindows = __webpack_require__(80923);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/annotations.js + 3 modules
var selectors_annotations = __webpack_require__(32012);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/config.js
var config = __webpack_require__(1172);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/GalleryViewThumbnail.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Styles to be passed to the withStyles HOC
 */

var GalleryViewThumbnail_styles = function styles(theme) {
  return {
    annotationIcon: {
      height: '1rem',
      width: '1rem'
    },
    annotationsChip: _objectSpread({}, theme.typography.caption),
    avatar: {
      backgroundColor: 'transparent'
    },
    chips: {
      opacity: 0.875,
      position: 'absolute',
      right: 0,
      textAlign: 'right',
      top: 0
    },
    galleryViewItem: {
      '&$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.action.selected)
      },
      '&$selected,&$selected$hasAnnotations': {
        border: "2px solid ".concat(theme.palette.primary.main)
      },
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      border: '2px solid transparent',
      cursor: 'pointer',
      display: 'inline-block',
      margin: "".concat(theme.spacing(1), "px ").concat(theme.spacing(0.5), "px"),
      maxHeight: function maxHeight(props) {
        return props.config.height + 45;
      },
      minWidth: '60px',
      overflow: 'hidden',
      padding: theme.spacing(0.5),
      position: 'relative',
      width: 'min-content'
    },
    hasAnnotations: {},
    searchChip: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
      '&$selected $avatar': {
        backgroundColor: theme.palette.highlights.primary
      },
      marginTop: 2
    }),
    selected: {}
  };
};
/** */


var mapStateToProps = function mapStateToProps(state, _ref) {
  var canvas = _ref.canvas,
      windowId = _ref.windowId;
  var currentCanvas = (0,canvases/* getCurrentCanvas */.Pm)(state, {
    windowId: windowId
  });
  var searchAnnotations = (0,searches/* getSearchAnnotationsForWindow */.kM)(state, {
    windowId: windowId
  });
  var canvasAnnotations = flatten_default()(searchAnnotations.map(function (a) {
    return a.resources;
  })).filter(function (a) {
    return a.targetId === canvas.id;
  });
  var hasOpenAnnotationsWindow = (0,companionWindows/* getCompanionWindowsForContent */.ig)(state, {
    content: 'annotations',
    windowId: windowId
  }).length > 0;
  return {
    annotationsCount: function () {
      if (!hasOpenAnnotationsWindow) return undefined;
      var annotations = (0,selectors_annotations/* getPresentAnnotationsOnSelectedCanvases */.A7)(state, {
        canvasId: canvas.id
      });
      return annotations.reduce(function (v, a) {
        return v + a.resources.filter(function (r) {
          return r.targetId === canvas.id;
        }).length;
      }, 0);
    }(),
    config: (0,config/* getConfig */.iE)(state).galleryView,
    searchAnnotationsCount: canvasAnnotations.length,
    selected: currentCanvas && currentCanvas.id === canvas.id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var canvas = _ref2.canvas,
      id = _ref2.id,
      windowId = _ref2.windowId;
  return {
    focusOnCanvas: function focusOnCanvas() {
      return dispatch(actions_window/* setWindowViewType */.cx(windowId, 'single'));
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
      return dispatch(annotation/* requestCanvasAnnotations */.pj(windowId, canvas.id));
    },
    setCanvas: function setCanvas() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return dispatch(actions_canvas/* setCanvas.apply */.ji.apply(actions, [windowId].concat(args)));
    }
  };
};

var enhance = (0,redux/* compose */.qC)((0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps), (0,withStyles/* default */.Z)(GalleryViewThumbnail_styles) // further HOC go here
);
/* harmony default export */ const containers_GalleryViewThumbnail = (enhance(GalleryViewThumbnail));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/GalleryView.js
function GalleryView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryView_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryView_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryView_defineProperties(Constructor, staticProps); return Constructor; }

function GalleryView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GalleryView_setPrototypeOf(subClass, superClass); }

function GalleryView_setPrototypeOf(o, p) { GalleryView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryView_setPrototypeOf(o, p); }

function GalleryView_createSuper(Derived) { var hasNativeReflectConstruct = GalleryView_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GalleryView_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GalleryView_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GalleryView_possibleConstructorReturn(this, result); }; }

function GalleryView_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return GalleryView_assertThisInitialized(self); }

function GalleryView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryView_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function GalleryView_getPrototypeOf(o) { GalleryView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryView_getPrototypeOf(o); }




/**
 * Renders a GalleryView overview of the manifest.
 */

var GalleryView = /*#__PURE__*/function (_Component) {
  GalleryView_inherits(GalleryView, _Component);

  var _super = GalleryView_createSuper(GalleryView);

  function GalleryView() {
    GalleryView_classCallCheck(this, GalleryView);

    return _super.apply(this, arguments);
  }

  GalleryView_createClass(GalleryView, [{
    key: "render",

    /**
     * Renders things
     */
    value: function render() {
      var _this$props = this.props,
          canvases = _this$props.canvases,
          classes = _this$props.classes,
          viewingDirection = _this$props.viewingDirection,
          windowId = _this$props.windowId;
      var htmlDir = viewingDirection === 'right-to-left' ? 'rtl' : 'ltr';
      return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        component: "section",
        dir: htmlDir,
        square: true,
        elevation: 0,
        className: classes.galleryContainer,
        id: "".concat(windowId, "-gallery")
      }, canvases.map(function (canvas) {
        return /*#__PURE__*/external_React_default().createElement(containers_GalleryViewThumbnail, {
          key: canvas.id,
          windowId: windowId,
          canvas: canvas
        });
      }));
    }
  }]);

  return GalleryView;
}(external_React_.Component);
GalleryView.defaultProps = {
  classes: {},
  viewingDirection: ''
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/sequences.js
var sequences = __webpack_require__(95981);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/GalleryView.js






/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var GalleryView_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvases: (0,canvases/* getCanvases */.LU)(state, {
      windowId: windowId
    }),
    viewingDirection: (0,sequences/* getSequenceViewingDirection */.Xf)(state, {
      windowId: windowId
    })
  };
};
/**
 * Styles to be passed to the withStyles HOC
 */


var GalleryView_styles = function styles(theme) {
  return {
    galleryContainer: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowX: 'hidden',
      overflowY: 'scroll',
      padding: '50px 0 50px 20px',
      width: '100%'
    }
  };
};

var GalleryView_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(GalleryView_styles), (0,es/* connect */.$j)(GalleryView_mapStateToProps), (0,withPlugins/* withPlugins */.A)('GalleryView') // further HOC go here
);
/* harmony default export */ const containers_GalleryView = (GalleryView_enhance(GalleryView));

/***/ })

}]);
//# sourceMappingURL=142.mirador.js.map