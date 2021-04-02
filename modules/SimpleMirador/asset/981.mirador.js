(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[981],{

/***/ 41749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63804);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86010);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49353);


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: className,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
var StyledGrid = (0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiGrid'
})(Grid);

if (false) { var requireProp; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledGrid);

/***/ }),

/***/ 8972:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'AddSharp');

exports.Z = _default;

/***/ }),

/***/ 37863:
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
  d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeftSharp');

exports.Z = _default;

/***/ }),

/***/ 30576:
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
  d: "M10 17l5-5-5-5v10z"
}), 'ArrowRightSharp');

exports.Z = _default;

/***/ }),

/***/ 422:
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
  d: "M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"
}), 'BookmarksSharp');

exports.Z = _default;

/***/ }),

/***/ 3409:
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
}), 'CheckSharp');

exports.Z = _default;

/***/ }),

/***/ 80366:
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.Z = _default;

/***/ }),

/***/ 40480:
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
  d: "M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'CommentSharp');

exports.Z = _default;

/***/ }),

/***/ 28890:
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
  d: "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'CopyrightSharp');

exports.Z = _default;

/***/ }),

/***/ 97263:
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
  d: "M21 3H3v18h18V3zm-2 16H5V5h14v14z"
}), 'CropDinSharp');

exports.Z = _default;

/***/ }),

/***/ 46583:
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
  d: "M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"
}), 'CropOriginalSharp');

exports.Z = _default;

/***/ }),

/***/ 41842:
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
  d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutlineSharp');

exports.Z = _default;

/***/ }),

/***/ 17212:
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
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
}), 'ExpandLessSharp');

exports.Z = _default;

/***/ }),

/***/ 16562:
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
}), 'ExpandMoreSharp');

exports.Z = _default;

/***/ }),

/***/ 43217:
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
  d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
}), 'FullscreenExitSharp');

exports.Z = _default;

/***/ }),

/***/ 90639:
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
  d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), 'FullscreenSharp');

exports.Z = _default;

/***/ }),

/***/ 18257:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'InfoSharp');

exports.Z = _default;

/***/ }),

/***/ 42192:
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
  d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
}), 'Input');

exports.Z = _default;

/***/ }),

/***/ 26878:
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
  d: "M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z"
}), 'InsertDriveFileSharp');

exports.Z = _default;

/***/ }),

/***/ 88957:
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
  d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
}), 'LayersSharp');

exports.Z = _default;

/***/ }),

/***/ 68963:
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
  d: "M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"
}), 'LockSharp');

exports.Z = _default;

/***/ }),

/***/ 74743:
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
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'MenuSharp');

exports.Z = _default;

/***/ }),

/***/ 27368:
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
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHorizSharp');

exports.Z = _default;

/***/ }),

/***/ 72156:
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
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVertSharp');

exports.Z = _default;

/***/ }),

/***/ 8813:
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
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
}), 'PaletteSharp');

exports.Z = _default;

/***/ }),

/***/ 94445:
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
  d: "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
}), 'SaveAltSharp');

exports.Z = _default;

/***/ }),

/***/ 21276:
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
  d: "M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
}), 'SettingsSharp');

exports.Z = _default;

/***/ }),

/***/ 51724:
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
  d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"
}), 'ViewColumn');

exports.Z = _default;

/***/ }),

/***/ 20640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(11742);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 96622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(63804);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IComCom = function (_React$Component) {
  _inherits(IComCom, _React$Component);

  function IComCom(args) {
    _classCallCheck(this, IComCom);

    var _this = _possibleConstructorReturn(this, (IComCom.__proto__ || Object.getPrototypeOf(IComCom)).call(this, args));

    _this.onReceiveMessage = _this.onReceiveMessage.bind(_this);
    _this.onLoad = _this.onLoad.bind(_this);
    _this.sendMessage = _this.sendMessage.bind(_this);
    return _this;
  }

  _createClass(IComCom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('message', this.onReceiveMessage);
      if (this._frame) {
        this._frame.addEventListener('load', this.onLoad);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('message', this.onReceiveMessage, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.postMessageData !== nextProps.postMessageData) {
        this.sendMessage(nextProps.postMessageData);
      }
    }
  }, {
    key: 'onReceiveMessage',
    value: function onReceiveMessage(event) {
      var handleReceiveMessage = this.props.handleReceiveMessage;

      if (handleReceiveMessage) {
        handleReceiveMessage(event);
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var handleReady = this.props.handleReady;

      if (handleReady) {
        handleReady();
      }

      this.sendMessage(this.props.postMessageData);
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(postMessageData) {
      this._frame.contentWindow.postMessage(postMessageData, this.props.targetOrigin);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attributes = this.props.attributes;


      return _react2.default.createElement('iframe', _extends({
        ref: function ref(el) {
          _this2._frame = el;
        }
      }, Object.assign({}, IComCom.defaultAttributes, attributes)));
    }
  }]);

  return IComCom;
}(_react2.default.Component);

IComCom.propTypes = {
  attributes: _propTypes2.default.shape({
    frameBorder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    name: _propTypes2.default.string,
    scrolling: _propTypes2.default.string,
    sandbox: _propTypes2.default.string,
    srcDoc: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
  }),
  handleReceiveMessage: _propTypes2.default.func,
  handleReady: _propTypes2.default.func,
  postMessageData: _propTypes2.default.any,
  targetOrigin: _propTypes2.default.string
};
IComCom.defaultProps = {
  targetOrigin: '*'
};
IComCom.defaultAttributes = {
  frameBorder: 0
};
exports.Z = IComCom;

/***/ }),

/***/ 7145:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && "production" === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}


/***/ }),

/***/ 29750:
/***/ ((module) => {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),

/***/ 38845:
/***/ ((module) => {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),

/***/ 63012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(97786),
    baseSet = __webpack_require__(10611),
    castPath = __webpack_require__(71811);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 74691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClamp = __webpack_require__(29750),
    toNumber = __webpack_require__(14841);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),

/***/ 49995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(89465),
    createAggregator = __webpack_require__(55189);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */
var countBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    ++result[key];
  } else {
    baseAssignValue(result, key, 1);
  }
});

module.exports = countBy;


/***/ }),

/***/ 81629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDelay = __webpack_require__(38845),
    baseRest = __webpack_require__(5976);

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;


/***/ }),

/***/ 91966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(20731),
    baseFlatten = __webpack_require__(21078),
    baseRest = __webpack_require__(5976),
    isArrayLikeObject = __webpack_require__(29246);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 30731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259),
    toInteger = __webpack_require__(40554);

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;


/***/ }),

/***/ 43624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259),
    toInteger = __webpack_require__(40554);

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRight;


/***/ }),

/***/ 18446:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(90939);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 35937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseIteratee = __webpack_require__(67206),
    basePickBy = __webpack_require__(63012),
    getAllKeysIn = __webpack_require__(46904);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ 69572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259),
    toInteger = __webpack_require__(40554);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ 23493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(23279),
    isObject = __webpack_require__(13218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 15981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_WorkspaceArea)
});

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/withTranslation.js + 2 modules
var withTranslation = __webpack_require__(87217);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(59693);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 6 modules
var withStyles = __webpack_require__(49353);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/extend/withPlugins.js
var withPlugins = __webpack_require__(11196);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__(52353);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96156);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(93871);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(1182);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28481);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(12666);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(43366);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__(5653);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(17294);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js










var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
  exit: transitions/* duration.leavingScreen */.x9.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/external_React_.forwardRef(function Fade(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition/* default */.ZP : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

  var theme = (0,useTheme/* default */.Z)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = external_React_.useRef(null);
  var foreignRef = (0,useForkRef/* default */.Z)(children.ref, ref);
  var handleRef = (0,useForkRef/* default */.Z)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,utils/* reflow */.n)(node); // So the animation always start from the start.

    var transitionProps = (0,utils/* getTransitionProps */.C)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,utils/* getTransitionProps */.C)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/external_React_.cloneElement(children, (0,esm_extends/* default */.Z)({
      style: (0,esm_extends/* default */.Z)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Fade_Fade = (Fade);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js







var Backdrop_styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/external_React_.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Fade_Fade : _props$TransitionComp,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/external_React_.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const Backdrop_Backdrop = ((0,withStyles/* default */.Z)(Backdrop_styles, {
  name: 'MuiBackdrop'
})(Backdrop));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(79895);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js













var Dialog_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,defineProperty/* default */.Z)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
  exit: transitions/* duration.leavingScreen */.x9.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/external_React_.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? Paper/* default */.Z : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Fade_Fade : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,objectWithoutProperties/* default */.Z)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = external_React_.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/external_React_.createElement(Modal/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    BackdropComponent: Backdrop_Backdrop,
    BackdropProps: (0,esm_extends/* default */.Z)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/external_React_.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.container, classes["scroll".concat((0,capitalize/* default */.Z)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/external_React_.createElement(PaperComponent, (0,esm_extends/* default */.Z)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx_m/* default */.Z)(classes.paper, classes["paperScroll".concat((0,capitalize/* default */.Z)(scroll))], classes["paperWidth".concat((0,capitalize/* default */.Z)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 false ? 0 : void 0;
/* harmony default export */ const Dialog_Dialog = ((0,withStyles/* default */.Z)(Dialog_styles, {
  name: 'MuiDialog'
})(Dialog));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js






var DialogContent_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/external_React_.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContent_DialogContent = ((0,withStyles/* default */.Z)(DialogContent_styles, {
  name: 'MuiDialogContent'
})(DialogContent));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js







var DialogTitle_styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/external_React_.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/external_React_.createElement(Typography/* default */.Z, {
    component: "h2",
    variant: "h6"
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogTitle_DialogTitle = ((0,withStyles/* default */.Z)(DialogTitle_styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js





var DialogContentText_styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/external_React_.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/external_React_.createElement(Typography/* default */.Z, (0,esm_extends/* default */.Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContentText_DialogContentText = ((0,withStyles/* default */.Z)(DialogContentText_styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js






var DialogActions_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/external_React_.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogActions_DialogActions = ((0,withStyles/* default */.Z)(DialogActions_styles, {
  name: 'MuiDialogActions'
})(DialogActions));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ErrorDialog.js


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
var ErrorDialog = /*#__PURE__*/function (_Component) {
  _inherits(ErrorDialog, _Component);

  var _super = _createSuper(ErrorDialog);

  function ErrorDialog() {
    _classCallCheck(this, ErrorDialog);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorDialog, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          removeError = _this$props.removeError,
          t = _this$props.t;
      var hasError = !isUndefined_default()(error);
      return error ? /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        "aria-labelledby": "error-dialog-title",
        id: "error-dialog",
        onClose: function onClose() {
          return removeError(error.id);
        },
        open: hasError
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "error-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2"
      }, t('errorDialogTitle'))), /*#__PURE__*/external_React_default().createElement(DialogContent_DialogContent, {
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(DialogContentText_DialogContentText, {
        variant: "body2",
        noWrap: true,
        color: "inherit"
      }, "".concat(error.message)), /*#__PURE__*/external_React_default().createElement(DialogActions_DialogActions, null, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: function onClick() {
          return removeError(error.id);
        },
        variant: "contained"
      }, t('errorDialogConfirm'))))) : null;
    }
  }]);

  return ErrorDialog;
}(external_React_.Component);
ErrorDialog.defaultProps = {
  error: null,
  removeError: function removeError() {},
  t: function t(key) {
    return key;
  }
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/errors.js
var errors = __webpack_require__(75924);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/workspace.js
var workspace = __webpack_require__(31001);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ErrorDialog.js







/**
 * mapStateToProps - to hook up connect
 * @memberof ErrorDialog
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: (0,workspace/* getLatestError */.xp)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  removeError: errors/* removeError */.e
};
var enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(mapStateToProps, mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ErrorDialog'));
/* harmony default export */ const containers_ErrorDialog = (enhance(ErrorDialog));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js








var AppBar_styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
var AppBar = /*#__PURE__*/external_React_.forwardRef(function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "color", "position"]);

  return /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    square: true,
    component: "header",
    elevation: 4,
    className: (0,clsx_m/* default */.Z)(classes.root, classes["position".concat((0,capitalize/* default */.Z)(position))], classes["color".concat((0,capitalize/* default */.Z)(color))], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const AppBar_AppBar = ((0,withStyles/* default */.Z)(AppBar_styles, {
  name: 'MuiAppBar'
})(AppBar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(28358);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(93869);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme_useTheme = __webpack_require__(159);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = (0,useTheme_useTheme/* default */.Z)();
  var props = (0,getThemeProps/* default */.Z)({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = (0,esm_extends/* default */.Z)({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = external_React_.useState(function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  external_React_.useEffect(function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (false) {}

  return match;
}
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/withWidth/withWidth.js









 // By default, returns true if screen width is the same or greater than the given breakpoint.

var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }

  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }

  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};
var useEnhancedEffect = typeof window === 'undefined' ? external_React_.useEffect : external_React_.useLayoutEffect;

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$noSSR = options.noSSR,
        noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
        initialWidthOption = options.initialWidth;

    function WithWidth(props) {
      var contextTheme = (0,useTheme/* default */.Z)();
      var theme = props.theme || contextTheme;

      var _getThemeProps = (0,getThemeProps/* default */.Z)({
        theme: theme,
        name: 'MuiWithWidth',
        props: (0,esm_extends/* default */.Z)({}, props)
      }),
          initialWidth = _getThemeProps.initialWidth,
          width = _getThemeProps.width,
          other = (0,objectWithoutProperties/* default */.Z)(_getThemeProps, ["initialWidth", "width"]);

      var _React$useState = external_React_.useState(false),
          mountedState = _React$useState[0],
          setMountedState = _React$useState[1];

      useEnhancedEffect(function () {
        setMountedState(true);
      }, []);
      /**
       * innerWidth |xs      sm      md      lg      xl
       *            |-------|-------|-------|-------|------>
       * width      |  xs   |  sm   |  md   |  lg   |  xl
       */

      var keys = theme.breakpoints.keys.slice().reverse();
      var widthComputed = keys.reduce(function (output, key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null);

      var more = (0,esm_extends/* default */.Z)({
        width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
      }, withThemeOption ? {
        theme: theme
      } : {}, other); // When rendering the component on the server,
      // we have no idea about the client browser screen width.
      // In order to prevent blinks and help the reconciliation of the React tree
      // we are not rendering the child component.
      //
      // An alternative is to use the `initialWidth` property.


      if (more.width === undefined) {
        return null;
      }

      return /*#__PURE__*/external_React_.createElement(Component, more);
    }

     false ? 0 : void 0;

    if (false) {}

    hoist_non_react_statics_cjs_default()(WithWidth, Component);
    return WithWidth;
  };
};

/* harmony default export */ const withWidth_withWidth = (withWidth);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/workspace.js
var actions_workspace = __webpack_require__(41328);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/getters.js
var getters = __webpack_require__(81610);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(54720);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js








var Fab_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,esm_extends/* default */.Z)({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = /*#__PURE__*/external_React_.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return /*#__PURE__*/external_React_.createElement(ButtonBase/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat((0,capitalize/* default */.Z)(size))], disabled && classes.disabled, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx_m/* default */.Z)(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), /*#__PURE__*/external_React_.createElement("span", {
    className: classes.label
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const Fab_Fab = ((0,withStyles/* default */.Z)(Fab_styles, {
  name: 'MuiFab'
})(Fab));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(868);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AddSharp.js
var AddSharp = __webpack_require__(8972);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CloseSharp.js
var CloseSharp = __webpack_require__(95378);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceAddButton.js
function WorkspaceAddButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceAddButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceAddButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceAddButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceAddButton_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceAddButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceAddButton_setPrototypeOf(subClass, superClass); }

function WorkspaceAddButton_setPrototypeOf(o, p) { WorkspaceAddButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceAddButton_setPrototypeOf(o, p); }

function WorkspaceAddButton_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceAddButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceAddButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceAddButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceAddButton_possibleConstructorReturn(this, result); }; }

function WorkspaceAddButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceAddButton_assertThisInitialized(self); }

function WorkspaceAddButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceAddButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceAddButton_getPrototypeOf(o) { WorkspaceAddButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceAddButton_getPrototypeOf(o); }






/**
 */

var WorkspaceAddButton = /*#__PURE__*/function (_Component) {
  WorkspaceAddButton_inherits(WorkspaceAddButton, _Component);

  var _super = WorkspaceAddButton_createSuper(WorkspaceAddButton);

  function WorkspaceAddButton() {
    WorkspaceAddButton_classCallCheck(this, WorkspaceAddButton);

    return _super.apply(this, arguments);
  }

  WorkspaceAddButton_createClass(WorkspaceAddButton, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
          isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
          useExtendedFab = _this$props.useExtendedFab;
      return /*#__PURE__*/external_React_default().createElement(Tooltip/* default */.ZP, {
        title: isWorkspaceAddVisible ? t('closeAddResourceMenu') : t('addResource')
      }, /*#__PURE__*/external_React_default().createElement(Fab_Fab, {
        size: "medium",
        color: "primary",
        id: "addBtn",
        disableRipple: true,
        "aria-label": isWorkspaceAddVisible ? t('closeAddResourceMenu') : useExtendedFab && t('startHere') || t('addResource'),
        className: classes.fab,
        classes: {
          primary: classes.fabPrimary,
          secondary: classes.fabSecondary
        },
        variant: useExtendedFab ? 'extended' : 'round',
        onClick: function onClick() {
          setWorkspaceAddVisibility(!isWorkspaceAddVisible);
        }
      }, isWorkspaceAddVisible ? /*#__PURE__*/external_React_default().createElement(CloseSharp/* default */.Z, null) : /*#__PURE__*/external_React_default().createElement(AddSharp/* default */.Z, null), useExtendedFab && t('startHere')));
    }
  }]);

  return WorkspaceAddButton;
}(external_React_.Component);
WorkspaceAddButton.defaultProps = {
  isWorkspaceAddVisible: false,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceAddButton.js









/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */

var WorkspaceAddButton_mapStateToProps = function mapStateToProps(state, _ref) {
  var width = _ref.width;

  var _getWorkspace = (0,getters/* getWorkspace */.oq)(state),
      isWorkspaceAddVisible = _getWorkspace.isWorkspaceAddVisible;

  return {
    isWorkspaceAddVisible: isWorkspaceAddVisible,
    useExtendedFab: width !== 'xs' && !isWorkspaceAddVisible && (0,getters/* getWindowIds */.BF)(state).length === 0
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var WorkspaceAddButton_mapDispatchToProps = {
  setWorkspaceAddVisibility: actions_workspace/* setWorkspaceAddVisibility */.B4
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var WorkspaceAddButton_styles = function styles(theme) {
  return {
    fab: {
      margin: theme.spacing(1)
    },
    fabPrimary: {
      '&:focus': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    fabSecondary: {
      '&:focus': {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  };
};

var WorkspaceAddButton_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceAddButton_styles), withWidth_withWidth(), (0,es/* connect */.$j)(WorkspaceAddButton_mapStateToProps, WorkspaceAddButton_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceAddButton'));
/* harmony default export */ const containers_WorkspaceAddButton = (WorkspaceAddButton_enhance(WorkspaceAddButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FullscreenSharp.js
var FullscreenSharp = __webpack_require__(90639);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FullscreenExitSharp.js
var FullscreenExitSharp = __webpack_require__(43217);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/MiradorMenuButton.js + 1 modules
var MiradorMenuButton = __webpack_require__(79058);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/FullScreenButton.js
function FullScreenButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FullScreenButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FullScreenButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) FullScreenButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) FullScreenButton_defineProperties(Constructor, staticProps); return Constructor; }

function FullScreenButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FullScreenButton_setPrototypeOf(subClass, superClass); }

function FullScreenButton_setPrototypeOf(o, p) { FullScreenButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FullScreenButton_setPrototypeOf(o, p); }

function FullScreenButton_createSuper(Derived) { var hasNativeReflectConstruct = FullScreenButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = FullScreenButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = FullScreenButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return FullScreenButton_possibleConstructorReturn(this, result); }; }

function FullScreenButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return FullScreenButton_assertThisInitialized(self); }

function FullScreenButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FullScreenButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function FullScreenButton_getPrototypeOf(o) { FullScreenButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FullScreenButton_getPrototypeOf(o); }





/**
 */

var FullScreenButton = /*#__PURE__*/function (_Component) {
  FullScreenButton_inherits(FullScreenButton, _Component);

  var _super = FullScreenButton_createSuper(FullScreenButton);

  function FullScreenButton() {
    FullScreenButton_classCallCheck(this, FullScreenButton);

    return _super.apply(this, arguments);
  }

  FullScreenButton_createClass(FullScreenButton, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isFullscreenEnabled = _this$props.isFullscreenEnabled,
          setWorkspaceFullscreen = _this$props.setWorkspaceFullscreen,
          t = _this$props.t;
      return /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        className: className,
        "aria-label": isFullscreenEnabled ? t('exitFullScreen') : t('workspaceFullScreen'),
        onClick: function onClick() {
          return setWorkspaceFullscreen(!isFullscreenEnabled);
        }
      }, isFullscreenEnabled ? /*#__PURE__*/external_React_default().createElement(FullscreenExitSharp/* default */.Z, null) : /*#__PURE__*/external_React_default().createElement(FullscreenSharp/* default */.Z, null));
    }
  }]);

  return FullScreenButton;
}(external_React_.Component);
FullScreenButton.defaultProps = {
  className: undefined,
  isFullscreenEnabled: false,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/FullScreenButton.js







/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */

var FullScreenButton_mapStateToProps = function mapStateToProps(state) {
  return {
    isFullscreenEnabled: (0,workspace/* getFullScreenEnabled */.By)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var FullScreenButton_mapDispatchToProps = {
  setWorkspaceFullscreen: actions_workspace/* setWorkspaceFullscreen */.jL
};
var FullScreenButton_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(FullScreenButton_mapStateToProps, FullScreenButton_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('FullScreenButton'));
/* harmony default export */ const containers_FullScreenButton = (FullScreenButton_enhance(FullScreenButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SettingsSharp.js
var SettingsSharp = __webpack_require__(21276);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/config.js
var config = __webpack_require__(1172);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 1 modules
var Menu = __webpack_require__(99050);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(85639);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/config.js
var actions_config = __webpack_require__(29767);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(46869);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(95757);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckSharp.js
var CheckSharp = __webpack_require__(3409);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/LanguageSettings.js
function LanguageSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LanguageSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LanguageSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) LanguageSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) LanguageSettings_defineProperties(Constructor, staticProps); return Constructor; }

function LanguageSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LanguageSettings_setPrototypeOf(subClass, superClass); }

function LanguageSettings_setPrototypeOf(o, p) { LanguageSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LanguageSettings_setPrototypeOf(o, p); }

function LanguageSettings_createSuper(Derived) { var hasNativeReflectConstruct = LanguageSettings_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LanguageSettings_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LanguageSettings_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LanguageSettings_possibleConstructorReturn(this, result); }; }

function LanguageSettings_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return LanguageSettings_assertThisInitialized(self); }

function LanguageSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LanguageSettings_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function LanguageSettings_getPrototypeOf(o) { LanguageSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LanguageSettings_getPrototypeOf(o); }







/**
 * LanguageSettings ~ the workspace sub menu to change the language
 * of the application
*/
var LanguageSettings = /*#__PURE__*/function (_Component) {
  LanguageSettings_inherits(LanguageSettings, _Component);

  var _super = LanguageSettings_createSuper(LanguageSettings);

  function LanguageSettings() {
    LanguageSettings_classCallCheck(this, LanguageSettings);

    return _super.apply(this, arguments);
  }

  LanguageSettings_createClass(LanguageSettings, [{
    key: "render",

    /**
     * Returns the rendered component
    */
    value: function render() {
      var _this$props = this.props,
          handleClick = _this$props.handleClick,
          languages = _this$props.languages;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, languages.map(function (language) {
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          button: !language.current,
          key: language.locale,
          onClick: function onClick() {
            handleClick(language.locale);
          }
        }, /*#__PURE__*/external_React_default().createElement(ListItemIcon/* default */.Z, null, language.current && /*#__PURE__*/external_React_default().createElement(CheckSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(ListItemText/* default */.Z, {
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, language.label));
      }));
    }
  }]);

  return LanguageSettings;
}(external_React_.Component);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/LanguageSettings.js






/**
 * Map state to props for connect
 */

var LanguageSettings_mapStateToProps = function mapStateToProps(state) {
  return {
    languages: (0,config/* getLanguagesFromConfigWithCurrent */.yX)(state)
  };
};
/**
 * Map action dispatches to props for connect
 */


var LanguageSettings_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var afterSelect = _ref.afterSelect;
  return {
    handleClick: function handleClick(language) {
      dispatch(actions_config/* updateConfig */.rF({
        language: language
      }));
      afterSelect && afterSelect();
    }
  };
};

/* harmony default export */ const containers_LanguageSettings = ((0,redux/* compose */.qC)((0,es/* connect */.$j)(LanguageSettings_mapStateToProps, LanguageSettings_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('LanguageSettings'))(LanguageSettings));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLessSharp.js
var ExpandLessSharp = __webpack_require__(17212);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMoreSharp.js
var ExpandMoreSharp = __webpack_require__(16562);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/NestedMenu.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NestedMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NestedMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NestedMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) NestedMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) NestedMenu_defineProperties(Constructor, staticProps); return Constructor; }

function NestedMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NestedMenu_setPrototypeOf(subClass, superClass); }

function NestedMenu_setPrototypeOf(o, p) { NestedMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NestedMenu_setPrototypeOf(o, p); }

function NestedMenu_createSuper(Derived) { var hasNativeReflectConstruct = NestedMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NestedMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NestedMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NestedMenu_possibleConstructorReturn(this, result); }; }

function NestedMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return NestedMenu_assertThisInitialized(self); }

function NestedMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NestedMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NestedMenu_getPrototypeOf(o) { NestedMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NestedMenu_getPrototypeOf(o); }







/**
 * NestedMenu ~ A presentation component to render a menu item and have
 * it control the visibility of the MUI List passed in as the children
*/

var NestedMenu = /*#__PURE__*/function (_Component) {
  NestedMenu_inherits(NestedMenu, _Component);

  var _super = NestedMenu_createSuper(NestedMenu);

  /**
   * constructor -
   */
  function NestedMenu(props) {
    var _this;

    NestedMenu_classCallCheck(this, NestedMenu);

    _this = _super.call(this, props);
    _this.state = {
      nestedMenuIsOpen: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(NestedMenu_assertThisInitialized(_this));
    return _this;
  }
  /**
   * handleMenuClick toggles the nestedMenuIsOpen state
   */


  NestedMenu_createClass(NestedMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
      this.setState({
        nestedMenuIsOpen: !nestedMenuIsOpen
      });
    }
    /**
     * Returns the rendered component.  Spreads unused props to MenuItem
    */

  }, {
    key: "render",
    value: function render() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;

      var _this$props = this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          label = _this$props.label,
          otherProps = _objectWithoutProperties(_this$props, ["children", "icon", "label"]);

      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, Object.assign({
        onClick: this.handleMenuClick,
        divider: nestedMenuIsOpen
      }, otherProps), icon && /*#__PURE__*/external_React_default().createElement(ListItemIcon/* default */.Z, null, icon), /*#__PURE__*/external_React_default().createElement(ListItemText/* default */.Z, {
        primaryTypographyProps: {
          variant: 'body1'
        }
      }, label), nestedMenuIsOpen ? /*#__PURE__*/external_React_default().createElement(ExpandLessSharp/* default */.Z, null) : /*#__PURE__*/external_React_default().createElement(ExpandMoreSharp/* default */.Z, null)), nestedMenuIsOpen && children);
    }
  }]);

  return NestedMenu;
}(external_React_.Component);
NestedMenu.defaultProps = {
  icon: null
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuList/MenuList.js
var MenuList = __webpack_require__(29829);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js







var Card_styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/external_React_.forwardRef(function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Card_Card = ((0,withStyles/* default */.Z)(Card_styles, {
  name: 'MuiCard'
})(Card));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js






var CardContent_styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/external_React_.forwardRef(function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "component"]);

  return /*#__PURE__*/external_React_.createElement(Component, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const CardContent_CardContent = ((0,withStyles/* default */.Z)(CardContent_styles, {
  name: 'MuiCardContent'
})(CardContent));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__(62087);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeElasticIcon.js


/**
 * ElasticWorkspaceIcon ~
*/

function ElasticWorkspaceIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "90",
    viewBox: "0 0 300 225"
  }, /*#__PURE__*/external_React_default().createElement("defs", null, /*#__PURE__*/external_React_default().createElement("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.14",
    stopOpacity: "0.631"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "1",
    stopOpacity: "0"
  })), /*#__PURE__*/external_React_default().createElement("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: "0"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.23",
    stopColor: "#fff",
    stopOpacity: "0.012"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.36",
    stopColor: "#fff",
    stopOpacity: "0.039"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.47",
    stopColor: "#fff",
    stopOpacity: "0.102"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.57",
    stopColor: "#fff",
    stopOpacity: "0.18"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.67",
    stopColor: "#fff",
    stopOpacity: "0.278"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.75",
    stopColor: "#fff",
    stopOpacity: "0.412"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.83",
    stopColor: "#fff",
    stopOpacity: "0.561"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.91",
    stopColor: "#fff",
    stopOpacity: "0.741"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.98",
    stopColor: "#fff",
    stopOpacity: "0.929"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "1",
    stopColor: "#fff"
  })), /*#__PURE__*/external_React_default().createElement("clipPath", {
    id: "clip-elastic_icon"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "300",
    height: "225"
  }))), /*#__PURE__*/external_React_default().createElement("g", {
    id: "elastic_icon",
    "data-name": "elastic icon",
    clipPath: "url(#clip-elastic_icon)"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "300",
    height: "225",
    fill: "#fff"
  }), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_278",
    "data-name": "Rectangle 278",
    transform: "translate(232 159)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "54",
    height: "54",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "53",
    height: "53",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_8",
    "data-name": "Rectangle 8",
    transform: "translate(7 148)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "70",
    height: "70",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "69",
    height: "69",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_258",
    "data-name": "Rectangle 258",
    transform: "translate(224 6)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "70",
    height: "100",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "69",
    height: "99",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_259",
    "data-name": "Rectangle 259",
    transform: "translate(71 64)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "115",
    height: "75",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "114",
    height: "74",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_260",
    "data-name": "Rectangle 260",
    transform: "translate(99 87)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "115",
    height: "75",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "114",
    height: "74",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_689",
    "data-name": "Group 689"
  }, /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_687",
    "data-name": "Group 687",
    transform: "translate(0 3)"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    id: "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.164 -1.063)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.246"
  }), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Path_821",
    "data-name": "Path 821",
    transform: "translate(40 36)",
    fill: "none"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M0,0H220V147H0Z",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
    stroke: "none",
    fill: "#01579b"
  }))), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_257",
    "data-name": "Rectangle 257",
    transform: "translate(40 39)",
    fill: "#fff",
    stroke: "#01579b",
    strokeWidth: "2"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "20",
    height: "147",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "145",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_688",
    "data-name": "Group 688",
    transform: "translate(-27.5 -126)"
  }, /*#__PURE__*/external_React_default().createElement("circle", {
    id: "teal_circle",
    "data-name": "teal circle",
    cx: "7.5",
    cy: "7.5",
    r: "7.5",
    transform: "translate(70 171)",
    fill: "#009688"
  }), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_333",
    "data-name": "Group 333",
    transform: "translate(70 171)",
    opacity: "0.12"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    id: "gradient_border_2",
    "data-name": "gradient border 2",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient)"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    id: "gradient_border_1",
    "data-name": "gradient border 1",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient-2)"
  })))))));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/WorkspaceTypeMosaicIcon.js


/**
 * WorkspaceTypeMosaicIcon ~
*/

function WorkspaceTypeMosaicIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "90",
    viewBox: "0 0 300 225"
  }, /*#__PURE__*/external_React_default().createElement("defs", null, /*#__PURE__*/external_React_default().createElement("linearGradient", {
    id: "linear-gradient",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.14",
    stopOpacity: "0.631"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "1",
    stopOpacity: "0"
  })), /*#__PURE__*/external_React_default().createElement("linearGradient", {
    id: "linear-gradient-2",
    x1: "0.5",
    y1: "1",
    x2: "0.5",
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: "0"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.23",
    stopColor: "#fff",
    stopOpacity: "0.012"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.36",
    stopColor: "#fff",
    stopOpacity: "0.039"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.47",
    stopColor: "#fff",
    stopOpacity: "0.102"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.57",
    stopColor: "#fff",
    stopOpacity: "0.18"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.67",
    stopColor: "#fff",
    stopOpacity: "0.278"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.75",
    stopColor: "#fff",
    stopOpacity: "0.412"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.83",
    stopColor: "#fff",
    stopOpacity: "0.561"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.91",
    stopColor: "#fff",
    stopOpacity: "0.741"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "0.98",
    stopColor: "#fff",
    stopOpacity: "0.929"
  }), /*#__PURE__*/external_React_default().createElement("stop", {
    offset: "1",
    stopColor: "#fff"
  })), /*#__PURE__*/external_React_default().createElement("clipPath", {
    id: "clip-mosaic_icon"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "300",
    height: "225"
  }))), /*#__PURE__*/external_React_default().createElement("g", {
    id: "mosaic_icon",
    "data-name": "mosaic icon",
    clipPath: "url(#clip-mosaic_icon)"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "300",
    height: "225",
    fill: "#fff"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    id: "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.163 1.938)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.5"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    id: "checkbox-2",
    "data-name": "checkbox",
    d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
    transform: "translate(1.164 1.938)",
    fill: "#010101",
    fillRule: "evenodd",
    opacity: "0.246"
  }), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Path_821",
    "data-name": "Path 821",
    transform: "translate(40 39)",
    fill: "none"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M0,0H220V147H0Z",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
    stroke: "none",
    fill: "#01579b"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_257",
    "data-name": "Rectangle 257",
    transform: "translate(40 39)",
    fill: "#fff",
    stroke: "#01579b",
    strokeWidth: "2"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "20",
    height: "147",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "145",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_688",
    "data-name": "Group 688",
    transform: "translate(-27.5 -126)"
  }, /*#__PURE__*/external_React_default().createElement("circle", {
    id: "teal_circle",
    "data-name": "teal circle",
    cx: "7.5",
    cy: "7.5",
    r: "7.5",
    transform: "translate(70 171)",
    fill: "#009688"
  }), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Group_333",
    "data-name": "Group 333",
    transform: "translate(70 171)",
    opacity: "0.12"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    id: "gradient_border_2",
    "data-name": "gradient border 2",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient)"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    id: "gradient_border_1",
    "data-name": "gradient border 1",
    d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
    transform: "translate(-3403 -959)",
    fill: "url(#linear-gradient-2)"
  }))), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_270",
    "data-name": "Rectangle 270",
    transform: "translate(60 40.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "99",
    height: "72",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "98",
    height: "71",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_271",
    "data-name": "Rectangle 271",
    transform: "translate(159 40.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "99",
    height: "72",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "98",
    height: "71",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_272",
    "data-name": "Rectangle 272",
    transform: "translate(192 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_284",
    "data-name": "Rectangle 284",
    transform: "translate(60 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })), /*#__PURE__*/external_React_default().createElement("g", {
    id: "Rectangle_285",
    "data-name": "Rectangle 285",
    transform: "translate(126 112.647)",
    fill: "#88c6c3",
    stroke: "#707070",
    strokeWidth: "1",
    opacity: "0.747"
  }, /*#__PURE__*/external_React_default().createElement("rect", {
    width: "66",
    height: "71.45",
    stroke: "none"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "65",
    height: "70.45",
    fill: "none"
  })))));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ScrollIndicatedDialogContent.js
function ScrollIndicatedDialogContent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ScrollIndicatedDialogContent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ScrollIndicatedDialogContent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * ScrollIndicatedDialogContent ~ Inject a style into the DialogContent component
 *                                to indicate there is scrollable content
*/

function ScrollIndicatedDialogContent(props) {
  var classes = props.classes,
      className = props.className,
      otherProps = ScrollIndicatedDialogContent_objectWithoutProperties(props, ["classes", "className"]);

  var ourClassName = [className, classes.shadowScrollDialog].join(' ');
  return /*#__PURE__*/external_React_default().createElement(DialogContent_DialogContent, Object.assign({
    className: ourClassName
  }, otherProps));
}
ScrollIndicatedDialogContent.defaultProps = {
  className: ''
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ScrollIndicatedDialogContent.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Styles for the withStyles HOC
 */

var ScrollIndicatedDialogContent_styles = function styles(theme) {
  var _shadowScrollDialog;

  return {
    shadowScrollDialog: (_shadowScrollDialog = {
      /* Shadow covers */
      background: "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") // Shaddows
      + 'radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%,'
    }, _defineProperty(_shadowScrollDialog, "background", "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") // eslint-disable-line no-dupe-keys
    + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") // Shaddows
    + 'radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;'), _defineProperty(_shadowScrollDialog, "backgroundAttachment", 'local, local, scroll, scroll'), _defineProperty(_shadowScrollDialog, "backgroundRepeat", 'no-repeat'), _defineProperty(_shadowScrollDialog, "backgroundSize", '100% 40px, 100% 40px, 100% 14px, 100% 14px'), _defineProperty(_shadowScrollDialog, "overflowY", 'auto'), _shadowScrollDialog)
  };
};

/* harmony default export */ const containers_ScrollIndicatedDialogContent = ((0,withStyles/* default */.Z)(ScrollIndicatedDialogContent_styles)(ScrollIndicatedDialogContent));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceSelectionDialog.js
function WorkspaceSelectionDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceSelectionDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceSelectionDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceSelectionDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceSelectionDialog_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceSelectionDialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceSelectionDialog_setPrototypeOf(subClass, superClass); }

function WorkspaceSelectionDialog_setPrototypeOf(o, p) { WorkspaceSelectionDialog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceSelectionDialog_setPrototypeOf(o, p); }

function WorkspaceSelectionDialog_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceSelectionDialog_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceSelectionDialog_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceSelectionDialog_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceSelectionDialog_possibleConstructorReturn(this, result); }; }

function WorkspaceSelectionDialog_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceSelectionDialog_assertThisInitialized(self); }

function WorkspaceSelectionDialog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceSelectionDialog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceSelectionDialog_getPrototypeOf(o) { WorkspaceSelectionDialog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceSelectionDialog_getPrototypeOf(o); }








/**
 */

var WorkspaceSelectionDialog = /*#__PURE__*/function (_Component) {
  WorkspaceSelectionDialog_inherits(WorkspaceSelectionDialog, _Component);

  var _super = WorkspaceSelectionDialog_createSuper(WorkspaceSelectionDialog);

  WorkspaceSelectionDialog_createClass(WorkspaceSelectionDialog, null, [{
    key: "setInitialFocus",

    /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current workspace type
     * in a selector on the value attribute (which we need to set)
    */
    value: function setInitialFocus(dialogElement, workspaceType) {
      var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(workspaceType, "\"]"));
      if (!selectedListItem || selectedListItem.length === 0) return;
      selectedListItem[0].focus();
    }
    /**
     * constructor
     */

  }]);

  function WorkspaceSelectionDialog(props) {
    var _this;

    WorkspaceSelectionDialog_classCallCheck(this, WorkspaceSelectionDialog);

    _this = _super.call(this, props);
    _this.handleWorkspaceTypeChange = _this.handleWorkspaceTypeChange.bind(WorkspaceSelectionDialog_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Propagate workspace type selection into the global state
   */


  WorkspaceSelectionDialog_createClass(WorkspaceSelectionDialog, [{
    key: "handleWorkspaceTypeChange",
    value: function handleWorkspaceTypeChange(workspaceType) {
      var _this$props = this.props,
          handleClose = _this$props.handleClose,
          updateWorkspace = _this$props.updateWorkspace;
      updateWorkspace({
        type: workspaceType
      });
      handleClose();
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          container = _this$props2.container,
          handleClose = _this$props2.handleClose,
          open = _this$props2.open,
          children = _this$props2.children,
          t = _this$props2.t,
          workspaceType = _this$props2.workspaceType;
      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        "aria-labelledby": "workspace-selection-dialog-title",
        container: container,
        id: "workspace-selection-dialog",
        onClose: handleClose,
        onEntered: function onEntered(dialog) {
          return WorkspaceSelectionDialog.setInitialFocus(dialog, workspaceType);
        },
        onEscapeKeyDown: handleClose,
        open: open
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "workspace-selection-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2"
      }, t('workspaceSelectionTitle'))), /*#__PURE__*/external_React_default().createElement(containers_ScrollIndicatedDialogContent, null, children, /*#__PURE__*/external_React_default().createElement(MenuList/* default */.Z, {
        classes: {
          root: classes.list
        },
        selected: workspaceType
      }, /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        className: classes.menuItem,
        onClick: function onClick() {
          return _this2.handleWorkspaceTypeChange('elastic');
        },
        selected: workspaceType === 'elastic',
        value: "elastic"
      }, /*#__PURE__*/external_React_default().createElement(Card_Card, {
        className: classes.card
      }, /*#__PURE__*/external_React_default().createElement(ElasticWorkspaceIcon, {
        className: classes.svgIcon,
        viewBox: "0 0 120 90"
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.details
      }, /*#__PURE__*/external_React_default().createElement(CardContent_CardContent, {
        classes: {
          root: classes.root
        },
        className: classes.content
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        className: classes.headline,
        component: "p",
        variant: "h3"
      }, t('elastic')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('elasticDescription')))))), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        className: classes.menuItem,
        onClick: function onClick() {
          return _this2.handleWorkspaceTypeChange('mosaic');
        },
        selected: workspaceType === 'mosaic',
        value: "mosaic"
      }, /*#__PURE__*/external_React_default().createElement(Card_Card, {
        className: classes.card
      }, /*#__PURE__*/external_React_default().createElement(WorkspaceTypeMosaicIcon, {
        className: classes.svgIcon,
        viewBox: "0 0 120 90"
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.details
      }, /*#__PURE__*/external_React_default().createElement(CardContent_CardContent, {
        className: classes.content,
        classes: {
          root: classes.root
        }
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        className: classes.headline,
        component: "p",
        variant: "h3"
      }, t('mosaic')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('mosaicDescription')))))))));
    }
  }]);

  return WorkspaceSelectionDialog;
}(external_React_.Component);
WorkspaceSelectionDialog.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceSelectionDialog.js








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var WorkspaceSelectionDialog_mapDispatchToProps = {
  updateWorkspace: actions_workspace/* updateWorkspace */.eA
};
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceSelectionDialog_mapStateToProps = function mapStateToProps(state) {
  return {
    workspaceType: (0,workspace/* getWorkspaceType */.WM)(state)
  };
};
/** */


var WorkspaceSelectionDialog_styles = function styles(theme) {
  return {
    card: {
      backgroundColor: 'transparent',
      borderRadius: '0',
      boxShadow: '0 0 transparent',
      display: 'flex'
    },
    content: {
      flex: '1 0 auto'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    headline: {
      paddingBottom: '6px'
    },
    list: {
      '&active': {
        outline: 'none'
      },
      '&focus': {
        outline: 'none'
      },
      outline: 'none'
    },
    media: {
      flex: '0 0 120px',
      height: '90px'
    },
    menuItem: {
      height: 'auto',
      overflow: 'auto',
      whiteSpace: 'inherit'
    },
    root: {
      '&:last-child': {
        paddingBottom: '12px'
      },
      paddingBottom: 0,
      paddingTop: 0,
      textAlign: 'left'
    },
    svgIcon: {
      flexShrink: 0,
      height: '90px',
      width: '120px'
    }
  };
};

var WorkspaceSelectionDialog_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceSelectionDialog_styles), (0,es/* connect */.$j)(WorkspaceSelectionDialog_mapStateToProps, WorkspaceSelectionDialog_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceSelectionDialog'));
/* harmony default export */ const containers_WorkspaceSelectionDialog = (WorkspaceSelectionDialog_enhance(WorkspaceSelectionDialog));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/config/css-ns.js
var css_ns = __webpack_require__(81720);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PaletteSharp.js
var PaletteSharp = __webpack_require__(8813);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ChangeThemeDialog.js
function ChangeThemeDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChangeThemeDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChangeThemeDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChangeThemeDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChangeThemeDialog_defineProperties(Constructor, staticProps); return Constructor; }

function ChangeThemeDialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ChangeThemeDialog_setPrototypeOf(subClass, superClass); }

function ChangeThemeDialog_setPrototypeOf(o, p) { ChangeThemeDialog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChangeThemeDialog_setPrototypeOf(o, p); }

function ChangeThemeDialog_createSuper(Derived) { var hasNativeReflectConstruct = ChangeThemeDialog_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ChangeThemeDialog_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ChangeThemeDialog_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ChangeThemeDialog_possibleConstructorReturn(this, result); }; }

function ChangeThemeDialog_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ChangeThemeDialog_assertThisInitialized(self); }

function ChangeThemeDialog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ChangeThemeDialog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ChangeThemeDialog_getPrototypeOf(o) { ChangeThemeDialog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChangeThemeDialog_getPrototypeOf(o); }





/**
 * a simple dialog providing the possibility to switch the theme
 */
var ChangeThemeDialog = /*#__PURE__*/function (_Component) {
  ChangeThemeDialog_inherits(ChangeThemeDialog, _Component);

  var _super = ChangeThemeDialog_createSuper(ChangeThemeDialog);

  ChangeThemeDialog_createClass(ChangeThemeDialog, null, [{
    key: "setInitialFocus",

    /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current theme
     * in a selector on the value attribute (which we need to set)
    */
    value: function setInitialFocus(dialogElement, selectedTheme) {
      var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(selectedTheme, "\"]"));
      if (!selectedListItem || selectedListItem.length === 0) return;
      selectedListItem[0].focus();
    }
    /**
    */

  }]);

  function ChangeThemeDialog(props) {
    var _this;

    ChangeThemeDialog_classCallCheck(this, ChangeThemeDialog);

    _this = _super.call(this, props);
    _this.selectedItemRef = /*#__PURE__*/external_React_default().createRef();
    _this.handleThemeChange = _this.handleThemeChange.bind(ChangeThemeDialog_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Propagate theme palette type selection into the global state
   */


  ChangeThemeDialog_createClass(ChangeThemeDialog, [{
    key: "handleThemeChange",
    value: function handleThemeChange(theme) {
      var _this$props = this.props,
          setSelectedTheme = _this$props.setSelectedTheme,
          handleClose = _this$props.handleClose;
      setSelectedTheme(theme);
      handleClose();
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          handleClose = _this$props2.handleClose,
          open = _this$props2.open,
          selectedTheme = _this$props2.selectedTheme,
          t = _this$props2.t,
          themeIds = _this$props2.themeIds;
      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        onClose: handleClose,
        onEntered: function onEntered(dialog) {
          return ChangeThemeDialog.setInitialFocus(dialog, selectedTheme);
        },
        open: open
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "change-the-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2"
      }, t('changeTheme'))), /*#__PURE__*/external_React_default().createElement(DialogContent_DialogContent, {
        className: classes.dialogContent
      }, /*#__PURE__*/external_React_default().createElement(MenuList/* default */.Z, null, themeIds.map(function (value) {
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          key: value,
          className: classes.listitem,
          onClick: function onClick() {
            _this2.handleThemeChange(value);
          },
          selected: value === selectedTheme,
          value: value
        }, /*#__PURE__*/external_React_default().createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/external_React_default().createElement(PaletteSharp/* default */.Z, {
          className: classes[value]
        })), /*#__PURE__*/external_React_default().createElement(ListItemText/* default */.Z, null, t(value)));
      }))));
    }
  }]);

  return ChangeThemeDialog;
}(external_React_.Component);
ChangeThemeDialog.defaultProps = {
  open: false,
  themeIds: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ChangeThemeDialog.js








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ChangeThemeDialog
 * @private
 */

var ChangeThemeDialog_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    setSelectedTheme: function setSelectedTheme(theme) {
      return dispatch(actions_config/* updateConfig */.rF({
        selectedTheme: theme
      }));
    }
  };
};
/**
 * mapStateToProps - to hook up connect
 * @memberof ChangeThemeDialog
 * @private
 */


var ChangeThemeDialog_mapStateToProps = function mapStateToProps(state) {
  return {
    selectedTheme: (0,config/* getConfig */.iE)(state).selectedTheme,
    themeIds: (0,config/* getThemeIds */.CX)(state)
  };
};
/** */


var ChangeThemeDialog_styles = function styles(theme) {
  return {
    dark: {
      color: '#000000'
    },
    dialogContent: {
      padding: 0
    },
    light: {
      color: '#BDBDBD'
    },
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      cursor: 'pointer'
    }
  };
};

var ChangeThemeDialog_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(ChangeThemeDialog_styles), (0,es/* connect */.$j)(ChangeThemeDialog_mapStateToProps, ChangeThemeDialog_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ChangeThemeDialog'));
/* harmony default export */ const containers_ChangeThemeDialog = (ChangeThemeDialog_enhance(ChangeThemeDialog));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/components/PluginHook.js
var PluginHook = __webpack_require__(95450);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceMenu.js
function WorkspaceMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceMenu_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceMenu_setPrototypeOf(subClass, superClass); }

function WorkspaceMenu_setPrototypeOf(o, p) { WorkspaceMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceMenu_setPrototypeOf(o, p); }

function WorkspaceMenu_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceMenu_possibleConstructorReturn(this, result); }; }

function WorkspaceMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceMenu_assertThisInitialized(self); }

function WorkspaceMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceMenu_getPrototypeOf(o) { WorkspaceMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceMenu_getPrototypeOf(o); }











/**
 */

var WorkspaceMenu = /*#__PURE__*/function (_Component) {
  WorkspaceMenu_inherits(WorkspaceMenu, _Component);

  var _super = WorkspaceMenu_createSuper(WorkspaceMenu);

  /**
   * constructor -
   */
  function WorkspaceMenu(props) {
    var _this;

    WorkspaceMenu_classCallCheck(this, WorkspaceMenu);

    _this = _super.call(this, props);
    _this.state = {
      changeTheme: {},
      toggleZoom: {},
      workspaceSelection: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(WorkspaceMenu_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(WorkspaceMenu_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WorkspaceMenu_createClass(WorkspaceMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item, event) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      obj[item].anchorEl = event.currentTarget;
      this.setState(obj);
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;

      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        obj[item].anchorEl = null;

        _this2.setState(obj);
      };
    }
    /**
     * @private
     */

  }, {
    key: "handleZoomToggleClick",
    value: function handleZoomToggleClick() {
      var _this$props = this.props,
          toggleZoomControls = _this$props.toggleZoomControls,
          showZoomControls = _this$props.showZoomControls;
      toggleZoomControls(!showZoomControls);
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          containerId = _this$props2.containerId,
          handleClose = _this$props2.handleClose,
          anchorEl = _this$props2.anchorEl,
          showThemePicker = _this$props2.showThemePicker,
          isWorkspaceAddVisible = _this$props2.isWorkspaceAddVisible,
          t = _this$props2.t,
          showZoomControls = _this$props2.showZoomControls;
      var _this$state = this.state,
          changeTheme = _this$state.changeTheme,
          toggleZoom = _this$state.toggleZoom,
          workspaceSelection = _this$state.workspaceSelection;
      var container = document.querySelector("#".concat(containerId, " .").concat((0,css_ns/* default */.Z)('viewer')));
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Menu/* default */.Z, {
        id: "workspace-menu",
        container: container,
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        open: Boolean(anchorEl),
        onClose: handleClose
      }, /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        "aria-haspopup": "true",
        disabled: isWorkspaceAddVisible,
        onClick: function onClick(e) {
          _this3.handleZoomToggleClick(e);

          handleClose(e);
        },
        "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, showZoomControls ? t('hideZoomControls') : t('showZoomControls'))), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('workspaceSelection', e);

          handleClose(e);
        },
        "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('selectWorkspaceMenu'))), /*#__PURE__*/external_React_default().createElement(NestedMenu, {
        label: t('language')
      }, /*#__PURE__*/external_React_default().createElement(containers_LanguageSettings, {
        afterSelect: handleClose
      })), showThemePicker && /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('changeTheme', e);

          handleClose(e);
        },
        "aria-owns": changeTheme.anchorEl ? 'change-theme' : undefined
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('changeTheme'))), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props)), Boolean(changeTheme.open) && /*#__PURE__*/external_React_default().createElement(containers_ChangeThemeDialog, {
        container: container,
        handleClose: this.handleMenuItemClose('changeTheme'),
        open: Boolean(changeTheme.open)
      }), Boolean(workspaceSelection.open) && /*#__PURE__*/external_React_default().createElement(containers_WorkspaceSelectionDialog, {
        open: Boolean(workspaceSelection.open),
        container: container,
        handleClose: this.handleMenuItemClose('workspaceSelection')
      }));
    }
  }]);

  return WorkspaceMenu;
}(external_React_.Component);
WorkspaceMenu.defaultProps = {
  anchorEl: null,
  isWorkspaceAddVisible: false,
  showThemePicker: false,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  toggleZoomControls: function toggleZoomControls() {}
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceMenu.js







/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WorkspaceMenu
 * @private
 */

var WorkspaceMenu_mapDispatchToProps = {
  toggleZoomControls: actions_workspace/* toggleZoomControls */.eE
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var WorkspaceMenu_mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0,config/* getContainerId */.vW)(state),
    isWorkspaceAddVisible: (0,getters/* getWorkspace */.oq)(state).isWorkspaceAddVisible,
    showThemePicker: (0,config/* getThemeIds */.CX)(state).length > 0,
    showZoomControls: (0,config/* getShowZoomControlsConfig */._M)(state)
  };
};

var WorkspaceMenu_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WorkspaceMenu_mapStateToProps, WorkspaceMenu_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceMenu'));
/* harmony default export */ const containers_WorkspaceMenu = (WorkspaceMenu_enhance(WorkspaceMenu));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceMenuButton.js
function WorkspaceMenuButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceMenuButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceMenuButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceMenuButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceMenuButton_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceMenuButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceMenuButton_setPrototypeOf(subClass, superClass); }

function WorkspaceMenuButton_setPrototypeOf(o, p) { WorkspaceMenuButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceMenuButton_setPrototypeOf(o, p); }

function WorkspaceMenuButton_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceMenuButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceMenuButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceMenuButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceMenuButton_possibleConstructorReturn(this, result); }; }

function WorkspaceMenuButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceMenuButton_assertThisInitialized(self); }

function WorkspaceMenuButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceMenuButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceMenuButton_getPrototypeOf(o) { WorkspaceMenuButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceMenuButton_getPrototypeOf(o); }






/**
 */

var WorkspaceMenuButton = /*#__PURE__*/function (_Component) {
  WorkspaceMenuButton_inherits(WorkspaceMenuButton, _Component);

  var _super = WorkspaceMenuButton_createSuper(WorkspaceMenuButton);

  /**
   * constructor -
   */
  function WorkspaceMenuButton(props) {
    var _this;

    WorkspaceMenuButton_classCallCheck(this, WorkspaceMenuButton);

    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(WorkspaceMenuButton_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(WorkspaceMenuButton_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WorkspaceMenuButton_createClass(WorkspaceMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-haspopup": "true",
        "aria-label": t('workspaceMenu'),
        "aria-owns": anchorEl ? 'workspace-menu' : undefined,
        className: classnames_default()(classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
        id: "menuBtn",
        onClick: this.handleMenuClick
      }, /*#__PURE__*/external_React_default().createElement(SettingsSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(containers_WorkspaceMenu, {
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);

  return WorkspaceMenuButton;
}(external_React_.Component);
WorkspaceMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceMenuButton.js





/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var WorkspaceMenuButton_styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};

var WorkspaceMenuButton_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceMenuButton_styles), (0,withPlugins/* withPlugins */.A)('WorkspaceMenuButton') // further HOC
);
/* harmony default export */ const containers_WorkspaceMenuButton = (WorkspaceMenuButton_enhance(WorkspaceMenuButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoreHorizSharp.js
var MoreHorizSharp = __webpack_require__(27368);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Input.js
var Input = __webpack_require__(42192);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SaveAltSharp.js
var SaveAltSharp = __webpack_require__(94445);
// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(27196);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__(30626);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(55192);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js








function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event) {
  return document.documentElement.clientWidth < event.clientX || document.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */


function ClickAwayListener(props) {
  var children = props.children,
      _props$disableReactTr = props.disableReactTree,
      disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
      _props$mouseEvent = props.mouseEvent,
      mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
      onClickAway = props.onClickAway,
      _props$touchEvent = props.touchEvent,
      touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
  var movedRef = external_React_.useRef(false);
  var nodeRef = external_React_.useRef(null);
  var activatedRef = external_React_.useRef(false);
  var syntheticEventRef = external_React_.useRef(false);
  external_React_.useEffect(function () {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(function () {
      activatedRef.current = true;
    }, 0);
    return function () {
      activatedRef.current = false;
    };
  }, []); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = external_React_.useCallback(function (instance) {
    // #StrictMode ready
    nodeRef.current = external_ReactDOM_.findDOMNode(instance);
  }, []);
  var handleRef = (0,useForkRef/* default */.Z)(children.ref, handleOwnRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviours like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  var handleClickAway = (0,useEventCallback/* default */.Z)(function (event) {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false; // 1. IE 11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    var insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      // TODO v6 remove dead logic https://caniuse.com/#search=composedPath.
      var doc = (0,ownerDocument/* default */.Z)(nodeRef.current);
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  var createHandleSynthetic = function createHandleSynthetic(handlerName) {
    return function (event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };

  var childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  external_React_.useEffect(function () {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = (0,ownerDocument/* default */.Z)(nodeRef.current);

      var handleTouchMove = function handleTouchMove() {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return function () {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  external_React_.useEffect(function () {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = (0,ownerDocument/* default */.Z)(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function () {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/external_React_.createElement(external_React_.Fragment, null, /*#__PURE__*/external_React_.cloneElement(children, childrenProps));
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const ClickAwayListener_ClickAwayListener = (ClickAwayListener);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(82568);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js
var Grow = __webpack_require__(20170);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js









var SnackbarContent_styles = function styles(theme) {
  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0,colorManipulator/* emphasize */._4)(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: (0,esm_extends/* default */.Z)({}, theme.typography.body2, (0,defineProperty/* default */.Z)({
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1
    }, theme.breakpoints.up('sm'), {
      flexGrow: 'initial',
      minWidth: 288
    })),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var SnackbarContent = /*#__PURE__*/external_React_.forwardRef(function SnackbarContent(props, ref) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["action", "classes", "className", "message", "role"]);

  return /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    role: role,
    square: true,
    elevation: 6,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/external_React_.createElement("div", {
    className: classes.message
  }, message), action ? /*#__PURE__*/external_React_.createElement("div", {
    className: classes.action
  }, action) : null);
});
 false ? 0 : void 0;
/* harmony default export */ const SnackbarContent_SnackbarContent = ((0,withStyles/* default */.Z)(SnackbarContent_styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js














var Snackbar_styles = function styles(theme) {
  var top1 = {
    top: 8
  };
  var bottom1 = {
    bottom: 8
  };
  var right = {
    justifyContent: 'flex-end'
  };
  var left = {
    justifyContent: 'flex-start'
  };
  var top3 = {
    top: 24
  };
  var bottom3 = {
    bottom: 24
  };
  var right3 = {
    right: 24
  };
  var left3 = {
    left: 24
  };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: (0,esm_extends/* default */.Z)({}, top1, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({}, top3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: (0,esm_extends/* default */.Z)({}, bottom1, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({}, bottom3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: (0,esm_extends/* default */.Z)({}, top1, right, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      left: 'auto'
    }, top3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: (0,esm_extends/* default */.Z)({}, bottom1, right, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      left: 'auto'
    }, bottom3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: (0,esm_extends/* default */.Z)({}, top1, left, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      right: 'auto'
    }, top3, left3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: (0,esm_extends/* default */.Z)({}, bottom1, left, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      right: 'auto'
    }, bottom3, left3)))
  };
};
var Snackbar = /*#__PURE__*/external_React_.forwardRef(function Snackbar(props, ref) {
  var action = props.action,
      _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'bottom',
    horizontal: 'center'
  } : _props$anchorOrigin;

  var vertical = _props$anchorOrigin.vertical,
      horizontal = _props$anchorOrigin.horizontal,
      _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati,
      children = props.children,
      classes = props.classes,
      className = props.className,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      ContentProps = props.ContentProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      message = props.message,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow/* default */.Z : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? {
    enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
    exit: transitions/* duration.leavingScreen */.x9.leavingScreen
  } : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var timerAutoHide = external_React_.useRef();

  var _React$useState = external_React_.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var handleClose = (0,useEventCallback/* default */.Z)(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = (0,useEventCallback/* default */.Z)(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  external_React_.useEffect(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  var handleResume = external_React_.useCallback(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  var handleExited = function handleExited() {
    setExited(true);
  };

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  external_React_.useEffect(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return /*#__PURE__*/external_React_.createElement(ClickAwayListener_ClickAwayListener, (0,esm_extends/* default */.Z)({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, classes["anchorOrigin".concat((0,capitalize/* default */.Z)(vertical)).concat((0,capitalize/* default */.Z)(horizontal))], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    appear: true,
    in: open,
    onEnter: (0,createChainedFunction/* default */.Z)(handleEnter, onEnter),
    onEntered: onEntered,
    onEntering: onEntering,
    onExit: onExit,
    onExited: (0,createChainedFunction/* default */.Z)(handleExited, onExited),
    onExiting: onExiting,
    timeout: transitionDuration,
    direction: vertical === 'top' ? 'down' : 'up'
  }, TransitionProps), children || /*#__PURE__*/external_React_.createElement(SnackbarContent_SnackbarContent, (0,esm_extends/* default */.Z)({
    message: message,
    action: action
  }, ContentProps)))));
});
 false ? 0 : void 0;
/* harmony default export */ const Snackbar_Snackbar = ((0,withStyles/* default */.Z)(Snackbar_styles, {
  flip: false,
  name: 'MuiSnackbar'
})(Snackbar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17812);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(80366);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(74855);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceExport.js
function WorkspaceExport_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceExport_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceExport_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceExport_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceExport_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceExport_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceExport_setPrototypeOf(subClass, superClass); }

function WorkspaceExport_setPrototypeOf(o, p) { WorkspaceExport_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceExport_setPrototypeOf(o, p); }

function WorkspaceExport_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceExport_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceExport_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceExport_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceExport_possibleConstructorReturn(this, result); }; }

function WorkspaceExport_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceExport_assertThisInitialized(self); }

function WorkspaceExport_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceExport_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceExport_getPrototypeOf(o) { WorkspaceExport_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceExport_getPrototypeOf(o); }












/**
 */

var WorkspaceExport = /*#__PURE__*/function (_Component) {
  WorkspaceExport_inherits(WorkspaceExport, _Component);

  var _super = WorkspaceExport_createSuper(WorkspaceExport);

  /** */
  function WorkspaceExport(props) {
    var _this;

    WorkspaceExport_classCallCheck(this, WorkspaceExport);

    _this = _super.call(this, props);
    _this.state = {
      copied: false
    };
    _this.onCopy = _this.onCopy.bind(WorkspaceExport_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(WorkspaceExport_assertThisInitialized(_this));
    return _this;
  }
  /** Handle closing after the content is copied and the snackbar is done */


  WorkspaceExport_createClass(WorkspaceExport, [{
    key: "handleClose",
    value: function handleClose() {
      var handleClose = this.props.handleClose;
      handleClose();
    }
    /** Show the snackbar */

  }, {
    key: "onCopy",
    value: function onCopy() {
      this.setState({
        copied: true
      });
    }
    /**
     * @private
     */

  }, {
    key: "exportedState",
    value: function exportedState() {
      var exportableState = this.props.exportableState;
      return JSON.stringify(exportableState, null, 2);
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          container = _this$props.container,
          open = _this$props.open,
          t = _this$props.t;
      var copied = this.state.copied;

      if (copied) {
        return /*#__PURE__*/external_React_default().createElement(Snackbar_Snackbar, {
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          },
          open: true,
          autoHideDuration: 6000,
          onClose: this.handleClose,
          message: t('exportCopied'),
          action: /*#__PURE__*/external_React_default().createElement(IconButton/* default */.Z, {
            size: "small",
            "aria-label": t('dismiss'),
            color: "inherit",
            onClick: this.handleClose
          }, /*#__PURE__*/external_React_default().createElement(Close/* default */.Z, {
            fontSize: "small"
          }))
        });
      }

      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        id: "workspace-settings",
        container: container,
        open: open,
        onClose: this.handleClose,
        scroll: "paper",
        fullWidth: true,
        maxWidth: "sm"
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "form-dialog-title",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2"
      }, t('downloadExport'))), /*#__PURE__*/external_React_default().createElement(containers_ScrollIndicatedDialogContent, null, children, /*#__PURE__*/external_React_default().createElement("pre", null, this.exportedState())), /*#__PURE__*/external_React_default().createElement(DialogActions_DialogActions, null, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: this.handleClose
      }, t('cancel')), /*#__PURE__*/external_React_default().createElement(lib.CopyToClipboard, {
        onCopy: this.onCopy,
        text: this.exportedState()
      }, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        variant: "contained",
        color: "primary"
      }, t('copy')))));
    }
  }]);

  return WorkspaceExport;
}(external_React_.Component);
WorkspaceExport.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceExport.js






/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceExport_mapStateToProps = function mapStateToProps(state) {
  return {
    exportableState: (0,config/* getExportableState */.iU)(state)
  };
};

var WorkspaceExport_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WorkspaceExport_mapStateToProps, {}), (0,withPlugins/* withPlugins */.A)('WorkspaceExport'));
/* harmony default export */ const containers_WorkspaceExport = (WorkspaceExport_enhance(WorkspaceExport));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(7784);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceImport.js
function WorkspaceImport_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceImport_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceImport_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceImport_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceImport_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceImport_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceImport_setPrototypeOf(subClass, superClass); }

function WorkspaceImport_setPrototypeOf(o, p) { WorkspaceImport_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceImport_setPrototypeOf(o, p); }

function WorkspaceImport_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceImport_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceImport_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceImport_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceImport_possibleConstructorReturn(this, result); }; }

function WorkspaceImport_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceImport_assertThisInitialized(self); }

function WorkspaceImport_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceImport_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceImport_getPrototypeOf(o) { WorkspaceImport_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceImport_getPrototypeOf(o); }







/**
 */

var WorkspaceImport = /*#__PURE__*/function (_Component) {
  WorkspaceImport_inherits(WorkspaceImport, _Component);

  var _super = WorkspaceImport_createSuper(WorkspaceImport);

  /**
   *
   * constructor
   */
  function WorkspaceImport(props) {
    var _this;

    WorkspaceImport_classCallCheck(this, WorkspaceImport);

    _this = _super.call(this, props);
    _this.state = {
      configImportValue: ''
    };
    _this.handleImportConfig = _this.handleImportConfig.bind(WorkspaceImport_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(WorkspaceImport_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WorkspaceImport_createClass(WorkspaceImport, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.setState({
        configImportValue: event.target.value
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleImportConfig",
    value: function handleImportConfig(event) {
      var _this$props = this.props,
          handleClose = _this$props.handleClose,
          importConfig = _this$props.importConfig;
      var configImportValue = this.state.configImportValue;

      try {
        var configJSON = JSON.parse(configImportValue);
        importConfig(configJSON);
        handleClose();
      } catch (ex) {
        var addError = this.props.addError;
        addError(ex.toString());
      }
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          handleClose = _this$props2.handleClose,
          open = _this$props2.open,
          t = _this$props2.t;
      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        "aria-labelledby": "workspace-import-title",
        id: "workspace-import",
        onEscapeKeyDown: handleClose,
        onClose: handleClose,
        open: open,
        fullWidth: true,
        maxWidth: "sm"
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "workspace-import-title",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2"
      }, t('importWorkspace'))), /*#__PURE__*/external_React_default().createElement(containers_ScrollIndicatedDialogContent, null, /*#__PURE__*/external_React_default().createElement(TextField/* default */.Z, {
        className: classes.textField,
        id: "workspace-import-input",
        multiline: true,
        onChange: this.handleChange,
        rows: "15",
        variant: "filled",
        inputProps: {
          autoFocus: 'autofocus',
          className: classes.textInput
        },
        helperText: t('importWorkspaceHint')
      })), /*#__PURE__*/external_React_default().createElement(DialogActions_DialogActions, null, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        className: classes.cancelBtn,
        onClick: handleClose
      }, t('cancel')), /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        color: "primary",
        onClick: this.handleImportConfig,
        variant: "contained"
      }, t('import'))));
    }
  }]);

  return WorkspaceImport;
}(external_React_.Component);
WorkspaceImport.defaultProps = {
  classes: {},
  open: false,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceImport.js







/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */

var WorkspaceImport_mapDispatchToProps = {
  addError: errors/* addError */.i,
  importConfig: actions_config/* importMiradorState */.Mu
};
/** */

var WorkspaceImport_styles = function styles(theme) {
  return {
    cancelBtn: {
      color: theme.palette.text.primary
    },
    textField: {
      width: '100%'
    },
    textInput: {
      fontFamily: 'monospace'
    }
  };
};

var WorkspaceImport_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceImport_styles), (0,es/* connect */.$j)(null, WorkspaceImport_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceImport'));
/* harmony default export */ const containers_WorkspaceImport = (WorkspaceImport_enhance(WorkspaceImport));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceOptionsMenu.js
function WorkspaceOptionsMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceOptionsMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceOptionsMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceOptionsMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceOptionsMenu_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceOptionsMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceOptionsMenu_setPrototypeOf(subClass, superClass); }

function WorkspaceOptionsMenu_setPrototypeOf(o, p) { WorkspaceOptionsMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceOptionsMenu_setPrototypeOf(o, p); }

function WorkspaceOptionsMenu_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceOptionsMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceOptionsMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceOptionsMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceOptionsMenu_possibleConstructorReturn(this, result); }; }

function WorkspaceOptionsMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceOptionsMenu_assertThisInitialized(self); }

function WorkspaceOptionsMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceOptionsMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceOptionsMenu_getPrototypeOf(o) { WorkspaceOptionsMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceOptionsMenu_getPrototypeOf(o); }












/**
 * WorkspaceOptionsMenu ~ the menu for workspace options such as import/export
*/

var WorkspaceOptionsMenu = /*#__PURE__*/function (_Component) {
  WorkspaceOptionsMenu_inherits(WorkspaceOptionsMenu, _Component);

  var _super = WorkspaceOptionsMenu_createSuper(WorkspaceOptionsMenu);

  /**
   * constructor -
   */
  function WorkspaceOptionsMenu(props) {
    var _this;

    WorkspaceOptionsMenu_classCallCheck(this, WorkspaceOptionsMenu);

    _this = _super.call(this, props);
    _this.state = {
      exportWorkspace: {},
      importWorkspace: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind(WorkspaceOptionsMenu_assertThisInitialized(_this));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind(WorkspaceOptionsMenu_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WorkspaceOptionsMenu_createClass(WorkspaceOptionsMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      this.setState(obj);
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;

      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;

        _this2.setState(obj);
      };
    }
    /**
     * Returns the rendered component
    */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          anchorEl = _this$props.anchorEl,
          containerId = _this$props.containerId,
          handleClose = _this$props.handleClose,
          t = _this$props.t;
      var _this$state = this.state,
          exportWorkspace = _this$state.exportWorkspace,
          importWorkspace = _this$state.importWorkspace;
      var container = document.querySelector("#".concat(containerId, " .").concat((0,css_ns/* default */.Z)('viewer')));
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Menu/* default */.Z, {
        id: "workspace-options-menu",
        container: container,
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        open: Boolean(anchorEl),
        onClose: handleClose
      }, /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        "aria-haspopup": "true",
        onClick: function onClick() {
          _this3.handleMenuItemClick('exportWorkspace');

          handleClose();
        },
        "aria-owns": exportWorkspace.open ? 'workspace-export' : undefined
      }, /*#__PURE__*/external_React_default().createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/external_React_default().createElement(SaveAltSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('downloadExportWorkspace'))), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        "aria-haspopup": "true",
        id: "workspace-menu-import",
        onClick: function onClick() {
          _this3.handleMenuItemClick('importWorkspace');

          handleClose();
        },
        "aria-owns": exportWorkspace.open ? 'workspace-import' : undefined
      }, /*#__PURE__*/external_React_default().createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/external_React_default().createElement(Input/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1"
      }, t('importWorkspace'))), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props)), Boolean(exportWorkspace.open) && /*#__PURE__*/external_React_default().createElement(containers_WorkspaceExport, {
        open: Boolean(exportWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('exportWorkspace')
      }), Boolean(importWorkspace.open) && /*#__PURE__*/external_React_default().createElement(containers_WorkspaceImport, {
        open: Boolean(importWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('importWorkspace')
      }));
    }
  }]);

  return WorkspaceOptionsMenu;
}(external_React_.Component);
WorkspaceOptionsMenu.defaultProps = {
  anchorEl: null
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceOptionsMenu.js





/** Used for connect */

var WorkspaceOptionsMenu_mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0,config/* getContainerId */.vW)(state)
  };
}; // containerId: getContainerId(state),/


var WorkspaceOptionsMenu_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WorkspaceOptionsMenu_mapStateToProps, null));
/* harmony default export */ const containers_WorkspaceOptionsMenu = (WorkspaceOptionsMenu_enhance(WorkspaceOptionsMenu));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceOptionsButton.js
function WorkspaceOptionsButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceOptionsButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceOptionsButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceOptionsButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceOptionsButton_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceOptionsButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceOptionsButton_setPrototypeOf(subClass, superClass); }

function WorkspaceOptionsButton_setPrototypeOf(o, p) { WorkspaceOptionsButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceOptionsButton_setPrototypeOf(o, p); }

function WorkspaceOptionsButton_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceOptionsButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceOptionsButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceOptionsButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceOptionsButton_possibleConstructorReturn(this, result); }; }

function WorkspaceOptionsButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceOptionsButton_assertThisInitialized(self); }

function WorkspaceOptionsButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceOptionsButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceOptionsButton_getPrototypeOf(o) { WorkspaceOptionsButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceOptionsButton_getPrototypeOf(o); }






/**
 * WorkspaceOptionsButton ~
*/

var WorkspaceOptionsButton = /*#__PURE__*/function (_Component) {
  WorkspaceOptionsButton_inherits(WorkspaceOptionsButton, _Component);

  var _super = WorkspaceOptionsButton_createSuper(WorkspaceOptionsButton);

  /**
   * constructor -
   */
  function WorkspaceOptionsButton(props) {
    var _this;

    WorkspaceOptionsButton_classCallCheck(this, WorkspaceOptionsButton);

    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(WorkspaceOptionsButton_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(WorkspaceOptionsButton_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WorkspaceOptionsButton_createClass(WorkspaceOptionsButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * Returns the rendered component
    */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('workspaceOptions'),
        className: classnames_default()(classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
        onClick: this.handleMenuClick
      }, /*#__PURE__*/external_React_default().createElement(MoreHorizSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(containers_WorkspaceOptionsMenu, {
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);

  return WorkspaceOptionsButton;
}(external_React_.Component);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceOptionsButton.js





/**
 *
 * @param theme
 */

var WorkspaceOptionsButton_styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};

var WorkspaceOptionsButton_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WorkspaceOptionsButton_styles), (0,withTranslation/* withTranslation */.Z)(), (0,withPlugins/* withPlugins */.A)('WorkspaceOptionsButton'));
/* harmony default export */ const containers_WorkspaceOptionsButton = (WorkspaceOptionsButton_enhance(WorkspaceOptionsButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/BookmarksSharp.js
var BookmarksSharp = __webpack_require__(422);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/window.js
var actions_window = __webpack_require__(50166);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/windows.js
var windows = __webpack_require__(89875);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(96837);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowList.js
function WindowList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowList_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowList_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowList_defineProperties(Constructor, staticProps); return Constructor; }

function WindowList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowList_setPrototypeOf(subClass, superClass); }

function WindowList_setPrototypeOf(o, p) { WindowList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowList_setPrototypeOf(o, p); }

function WindowList_createSuper(Derived) { var hasNativeReflectConstruct = WindowList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowList_possibleConstructorReturn(this, result); }; }

function WindowList_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowList_assertThisInitialized(self); }

function WindowList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowList_getPrototypeOf(o) { WindowList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowList_getPrototypeOf(o); }







/**
 */

var WindowList = /*#__PURE__*/function (_Component) {
  WindowList_inherits(WindowList, _Component);

  var _super = WindowList_createSuper(WindowList);

  function WindowList() {
    WindowList_classCallCheck(this, WindowList);

    return _super.apply(this, arguments);
  }

  WindowList_createClass(WindowList, [{
    key: "titleContent",

    /**
     * Get the title for a window from its manifest title
     * @private
     */
    value: function titleContent(windowId) {
      var _this$props = this.props,
          titles = _this$props.titles,
          t = _this$props.t;
      return titles[windowId] || t('untitled');
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          containerId = _this$props2.containerId,
          handleClose = _this$props2.handleClose,
          anchorEl = _this$props2.anchorEl,
          windowIds = _this$props2.windowIds,
          focusWindow = _this$props2.focusWindow,
          t = _this$props2.t;
      return /*#__PURE__*/external_React_default().createElement(Menu/* default */.Z, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        id: "window-list-menu",
        container: document.querySelector("#".concat(containerId, " .").concat((0,css_ns/* default */.Z)('viewer'))),
        disableAutoFocusItem: true,
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        onEntering: WindowList.focus2ndListIitem
      }, /*#__PURE__*/external_React_default().createElement(ListSubheader/* default */.Z, {
        role: "presentation",
        selected: false,
        disabled: true,
        tabIndex: "-1"
      }, t('openWindows')), windowIds.map(function (windowId, i) {
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          key: windowId,
          onClick: function onClick(e) {
            focusWindow(windowId, true);
            handleClose(e);
          }
        }, /*#__PURE__*/external_React_default().createElement(ListItemText/* default */.Z, {
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, _this.titleContent(windowId)));
      }));
    }
  }], [{
    key: "focus2ndListIitem",

    /**
     * Given the menuElement passed in by the onEntering callback,
     * find the 2nd ListItem element (avoiding the header) and focus it
    */
    value: function focus2ndListIitem(menuElement) {
      if (!menuElement.querySelectorAll('li') || menuElement.querySelectorAll('li').length < 2) return;
      menuElement.querySelectorAll('li')[1].focus(); // The 2nd LI
    }
  }]);

  return WindowList;
}(external_React_.Component);
WindowList.defaultProps = {
  anchorEl: null,
  t: function t(key) {
    return key;
  },
  titles: {}
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowList.js







/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var WindowList_mapDispatchToProps = {
  focusWindow: actions_window/* focusWindow */.uG
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */

var WindowList_mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0,config/* getContainerId */.vW)(state),
    titles: (0,windows/* getWindowTitles */.ZK)(state),
    windowIds: (0,getters/* getWindowIds */.BF)(state)
  };
};

var WindowList_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WindowList_mapStateToProps, WindowList_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WindowList'));
/* harmony default export */ const containers_WindowList = (WindowList_enhance(WindowList));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowListButton.js
function WindowListButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowListButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowListButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowListButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowListButton_defineProperties(Constructor, staticProps); return Constructor; }

function WindowListButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowListButton_setPrototypeOf(subClass, superClass); }

function WindowListButton_setPrototypeOf(o, p) { WindowListButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowListButton_setPrototypeOf(o, p); }

function WindowListButton_createSuper(Derived) { var hasNativeReflectConstruct = WindowListButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowListButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowListButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowListButton_possibleConstructorReturn(this, result); }; }

function WindowListButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowListButton_assertThisInitialized(self); }

function WindowListButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowListButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowListButton_getPrototypeOf(o) { WindowListButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowListButton_getPrototypeOf(o); }






/**
 * WindowListButton ~
*/

var WindowListButton = /*#__PURE__*/function (_Component) {
  WindowListButton_inherits(WindowListButton, _Component);

  var _super = WindowListButton_createSuper(WindowListButton);

  /** */
  function WindowListButton(props) {
    var _this;

    WindowListButton_classCallCheck(this, WindowListButton);

    _this = _super.call(this, props);
    _this.state = {
      windowListAnchor: null
    };
    _this.handleClose = _this.handleClose.bind(WindowListButton_assertThisInitialized(_this));
    _this.handleOpen = _this.handleOpen.bind(WindowListButton_assertThisInitialized(_this));
    return _this;
  }
  /** Set the windowListAnchor to null on window close */


  WindowListButton_createClass(WindowListButton, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        windowListAnchor: null
      });
    }
    /** Set the windowListAnchor to the event's current target  */

  }, {
    key: "handleOpen",
    value: function handleOpen(event) {
      this.setState({
        windowListAnchor: event.currentTarget
      });
    }
    /**
     * Returns the rendered component
    */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          disabled = _this$props.disabled,
          t = _this$props.t,
          windowCount = _this$props.windowCount;
      var windowListAnchor = this.state.windowListAnchor;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-haspopup": "true",
        "aria-label": t('listAllOpenWindows'),
        "aria-owns": windowListAnchor ? 'window-list' : null,
        className: classnames_default()(classes.ctrlBtn, windowListAnchor ? classes.ctrlBtnSelected : null),
        disabled: disabled,
        badge: true,
        BadgeProps: {
          badgeContent: windowCount,
          classes: {
            badge: classes.badge
          }
        },
        onClick: function onClick(e) {
          return _this2.handleOpen(e);
        }
      }, /*#__PURE__*/external_React_default().createElement(BookmarksSharp/* default */.Z, null)), Boolean(windowListAnchor) && /*#__PURE__*/external_React_default().createElement(containers_WindowList, {
        anchorEl: windowListAnchor,
        id: "window-list",
        open: Boolean(windowListAnchor),
        handleClose: this.handleClose
      }));
    }
  }]);

  return WindowListButton;
}(external_React_.Component);
WindowListButton.defaultProps = {
  classes: {},
  disabled: false
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowListButton.js







/** */

var WindowListButton_mapStateToProps = function mapStateToProps(state) {
  return {
    disabled: (0,getters/* getWorkspace */.oq)(state).isWorkspaceAddVisible,
    windowCount: (0,getters/* getWindowIds */.BF)(state).length
  };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */


var WindowListButton_styles = function styles(theme) {
  return {
    badge: {
      paddingLeft: 12
    },
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};

var WindowListButton_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowListButton_styles), (0,es/* connect */.$j)(WindowListButton_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('WindowListButton'));
/* harmony default export */ const containers_WindowListButton = (WindowListButton_enhance(WindowListButton));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceControlPanelButtons.js
function WorkspaceControlPanelButtons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceControlPanelButtons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceControlPanelButtons_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceControlPanelButtons_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceControlPanelButtons_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceControlPanelButtons_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceControlPanelButtons_setPrototypeOf(subClass, superClass); }

function WorkspaceControlPanelButtons_setPrototypeOf(o, p) { WorkspaceControlPanelButtons_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceControlPanelButtons_setPrototypeOf(o, p); }

function WorkspaceControlPanelButtons_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceControlPanelButtons_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceControlPanelButtons_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceControlPanelButtons_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceControlPanelButtons_possibleConstructorReturn(this, result); }; }

function WorkspaceControlPanelButtons_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceControlPanelButtons_assertThisInitialized(self); }

function WorkspaceControlPanelButtons_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceControlPanelButtons_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceControlPanelButtons_getPrototypeOf(o) { WorkspaceControlPanelButtons_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceControlPanelButtons_getPrototypeOf(o); }







/**
 *
 */

var WorkspaceControlPanelButtons = /*#__PURE__*/function (_Component) {
  WorkspaceControlPanelButtons_inherits(WorkspaceControlPanelButtons, _Component);

  var _super = WorkspaceControlPanelButtons_createSuper(WorkspaceControlPanelButtons);

  function WorkspaceControlPanelButtons() {
    WorkspaceControlPanelButtons_classCallCheck(this, WorkspaceControlPanelButtons);

    return _super.apply(this, arguments);
  }

  WorkspaceControlPanelButtons_createClass(WorkspaceControlPanelButtons, [{
    key: "render",

    /**
     * render
     *
     * @return {type}  description
     */
    value: function render() {
      var classes = this.props.classes;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(containers_WindowListButton, null), /*#__PURE__*/external_React_default().createElement(containers_WorkspaceMenuButton, null), /*#__PURE__*/external_React_default().createElement(containers_WorkspaceOptionsButton, null), /*#__PURE__*/external_React_default().createElement(containers_FullScreenButton, {
        className: classes.ctrlBtn
      }), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props));
    }
  }]);

  return WorkspaceControlPanelButtons;
}(external_React_.Component);
WorkspaceControlPanelButtons.defaultProps = {
  classes: {}
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceControlPanelButtons.js




/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var WorkspaceControlPanelButtons_styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing(1)
    }
  };
};

var WorkspaceControlPanelButtons_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WorkspaceControlPanelButtons_styles), (0,withPlugins/* withPlugins */.A)('WorkspaceControlPanelButtons'));
/* harmony default export */ const containers_WorkspaceControlPanelButtons = (WorkspaceControlPanelButtons_enhance(WorkspaceControlPanelButtons));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/MiradorIcon.js


/**
 * ThumbnailNavigationRightIcon ~
*/

function MiradorIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, Object.assign({
    viewBox: "0 0 60 55"
  }, props), /*#__PURE__*/external_React_default().createElement("rect", {
    width: "18",
    height: "55"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    width: "18",
    height: "55",
    transform: "translate(42)"
  }), /*#__PURE__*/external_React_default().createElement("rect", {
    width: "18",
    height: "34",
    transform: "translate(21)"
  }));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/Branding.js
function Branding_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Branding_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Branding_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Branding_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Branding_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Branding_createClass(Constructor, protoProps, staticProps) { if (protoProps) Branding_defineProperties(Constructor.prototype, protoProps); if (staticProps) Branding_defineProperties(Constructor, staticProps); return Constructor; }

function Branding_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Branding_setPrototypeOf(subClass, superClass); }

function Branding_setPrototypeOf(o, p) { Branding_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Branding_setPrototypeOf(o, p); }

function Branding_createSuper(Derived) { var hasNativeReflectConstruct = Branding_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Branding_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Branding_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Branding_possibleConstructorReturn(this, result); }; }

function Branding_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Branding_assertThisInitialized(self); }

function Branding_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Branding_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Branding_getPrototypeOf(o) { Branding_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Branding_getPrototypeOf(o); }





/**
 * Display a branding icon
 */

var Branding = /*#__PURE__*/function (_Component) {
  Branding_inherits(Branding, _Component);

  var _super = Branding_createSuper(Branding);

  function Branding() {
    Branding_classCallCheck(this, Branding);

    return _super.apply(this, arguments);
  }

  Branding_createClass(Branding, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          variant = _this$props.variant,
          ContainerProps = Branding_objectWithoutProperties(_this$props, ["t", "variant"]);

      return /*#__PURE__*/external_React_default().createElement("div", ContainerProps, variant === 'wide' && /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        align: "center",
        component: "p",
        variant: "h3"
      }, t('mirador'))), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        align: "center"
      }, /*#__PURE__*/external_React_default().createElement(IconButton/* default */.Z, {
        component: "a",
        href: "https://projectmirador.org",
        target: "_blank",
        rel: "noopener"
      }, /*#__PURE__*/external_React_default().createElement(MiradorIcon, {
        "aria-label": t('aboutMirador'),
        titleAccess: t('aboutMirador'),
        fontSize: "large"
      }))));
    }
  }]);

  return Branding;
}(external_React_.Component);
Branding.defaultProps = {
  t: function t(k) {
    return k;
  },
  variant: 'default'
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/Branding.js


/* harmony default export */ const containers_Branding = ((0,withPlugins/* withPlugins */.A)('Branding')(Branding));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceControlPanel.js
function WorkspaceControlPanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceControlPanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceControlPanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceControlPanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceControlPanel_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceControlPanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceControlPanel_setPrototypeOf(subClass, superClass); }

function WorkspaceControlPanel_setPrototypeOf(o, p) { WorkspaceControlPanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceControlPanel_setPrototypeOf(o, p); }

function WorkspaceControlPanel_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceControlPanel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceControlPanel_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceControlPanel_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceControlPanel_possibleConstructorReturn(this, result); }; }

function WorkspaceControlPanel_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceControlPanel_assertThisInitialized(self); }

function WorkspaceControlPanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceControlPanel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceControlPanel_getPrototypeOf(o) { WorkspaceControlPanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceControlPanel_getPrototypeOf(o); }









/**
 * Provides the panel responsible for controlling the entire workspace
 */

var WorkspaceControlPanel = /*#__PURE__*/function (_Component) {
  WorkspaceControlPanel_inherits(WorkspaceControlPanel, _Component);

  var _super = WorkspaceControlPanel_createSuper(WorkspaceControlPanel);

  function WorkspaceControlPanel() {
    WorkspaceControlPanel_classCallCheck(this, WorkspaceControlPanel);

    return _super.apply(this, arguments);
  }

  WorkspaceControlPanel_createClass(WorkspaceControlPanel, [{
    key: "render",

    /**
     * render
     * @return {String} - HTML markup for the component
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          variant = _this$props.variant;
      return /*#__PURE__*/external_React_default().createElement(AppBar_AppBar, {
        className: classnames_default()(classes.root, (0,css_ns/* default */.Z)('workspace-control-panel'), variant === 'wide' ? classes.wide : null),
        color: "default",
        position: "absolute",
        component: "nav",
        "aria-label": t('workspaceNavigation')
      }, /*#__PURE__*/external_React_default().createElement(Toolbar/* default */.Z, {
        disableGutters: true,
        className: classes.toolbar
      }, /*#__PURE__*/external_React_default().createElement(containers_WorkspaceAddButton, null), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.workspaceButtons
      }, /*#__PURE__*/external_React_default().createElement(containers_WorkspaceControlPanelButtons, null))), /*#__PURE__*/external_React_default().createElement(containers_Branding, {
        className: classes.branding,
        t: t,
        variant: variant
      }));
    }
  }]);

  return WorkspaceControlPanel;
}(external_React_.Component);
WorkspaceControlPanel.defaultProps = {
  variant: 'default'
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceControlPanel.js
function WorkspaceControlPanel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)},
 * drawer: {overflowX: string, height: string}}}
 */

var WorkspaceControlPanel_styles = function styles(theme) {
  var _branding;

  return {
    branding: (_branding = {
      display: 'flex',
      position: 'absolute'
    }, WorkspaceControlPanel_defineProperty(_branding, theme.breakpoints.up('xs'), {
      display: 'none'
    }), WorkspaceControlPanel_defineProperty(_branding, theme.breakpoints.up('sm'), {
      bottom: 0,
      display: 'block',
      "float": 'none',
      right: 'auto',
      width: '100%'
    }), WorkspaceControlPanel_defineProperty(_branding, "right", 0), _branding),
    ctrlBtn: {
      margin: theme.spacing(1)
    },
    drawer: {
      overflowX: 'hidden'
    },
    root: WorkspaceControlPanel_defineProperty({
      height: 64
    }, theme.breakpoints.up('sm'), {
      height: '100%',
      left: 0,
      right: 'auto',
      width: 64
    }),
    toolbar: WorkspaceControlPanel_defineProperty({
      display: 'flex',
      justifyContent: 'space-between'
    }, theme.breakpoints.up('sm'), {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: 0
    }),
    wide: {
      width: 'auto'
    },
    workspaceButtons: WorkspaceControlPanel_defineProperty({}, theme.breakpoints.up('sm'), {
      display: 'flex',
      flexDirection: 'column'
    })
  };
};

var WorkspaceControlPanel_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceControlPanel_styles), (0,withPlugins/* withPlugins */.A)('WorkspaceControlPanel') // further HOC go here
);
/* harmony default export */ const containers_WorkspaceControlPanel = (WorkspaceControlPanel_enhance(WorkspaceControlPanel));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(41749);
// EXTERNAL MODULE: ./node_modules/react-mosaic-component/lib/contextTypes.js
var contextTypes = __webpack_require__(49801);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MenuSharp.js
var MenuSharp = __webpack_require__(74743);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/companionWindows.js
var companionWindows = __webpack_require__(80923);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var useFormControl = __webpack_require__(22601);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js










var FormControlLabel_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = /*#__PURE__*/external_React_.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = (0,useFormControl/* default */.Z)();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return /*#__PURE__*/external_React_.createElement("label", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat((0,capitalize/* default */.Z)(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/external_React_.cloneElement(control, controlProps), /*#__PURE__*/external_React_.createElement(Typography/* default */.Z, {
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.label, disabled && classes.disabled)
  }, label));
});
 false ? 0 : void 0;
/* harmony default export */ const FormControlLabel_FormControlLabel = ((0,withStyles/* default */.Z)(FormControlLabel_styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CropDinSharp.js
var CropDinSharp = __webpack_require__(97263);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationBottomIcon.js


/**
 * ThumbnailNavigationBottomIcon ~
*/

function ThumbnailNavigationBottomIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M3,3H21V5H3Z",
    transform: "translate(0 16)"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M21,5H3V19H21ZM19,17H5V7H19Z",
    transform: "translate(0 -2)"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/ThumbnailNavigationRightIcon.js


/**
 * ThumbnailNavigationRightIcon ~
*/

function ThumbnailNavigationRightIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M0,0H24V24H0Z",
    transform: "translate(24) rotate(90)",
    fill: "none"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M3,3H21V5H3Z",
    transform: "translate(24) rotate(90)"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M19,3H5V21H19ZM17,19H7V5H17Z",
    transform: "translate(-2)"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowThumbnailSettings.js
function WindowThumbnailSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowThumbnailSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowThumbnailSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowThumbnailSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowThumbnailSettings_defineProperties(Constructor, staticProps); return Constructor; }

function WindowThumbnailSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowThumbnailSettings_setPrototypeOf(subClass, superClass); }

function WindowThumbnailSettings_setPrototypeOf(o, p) { WindowThumbnailSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowThumbnailSettings_setPrototypeOf(o, p); }

function WindowThumbnailSettings_createSuper(Derived) { var hasNativeReflectConstruct = WindowThumbnailSettings_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowThumbnailSettings_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowThumbnailSettings_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowThumbnailSettings_possibleConstructorReturn(this, result); }; }

function WindowThumbnailSettings_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowThumbnailSettings_assertThisInitialized(self); }

function WindowThumbnailSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowThumbnailSettings_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowThumbnailSettings_getPrototypeOf(o) { WindowThumbnailSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowThumbnailSettings_getPrototypeOf(o); }








/**
 *
 */

var WindowThumbnailSettings = /*#__PURE__*/function (_Component) {
  WindowThumbnailSettings_inherits(WindowThumbnailSettings, _Component);

  var _super = WindowThumbnailSettings_createSuper(WindowThumbnailSettings);

  /**
   * constructor -
   */
  function WindowThumbnailSettings(props) {
    var _this;

    WindowThumbnailSettings_classCallCheck(this, WindowThumbnailSettings);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(WindowThumbnailSettings_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WindowThumbnailSettings_createClass(WindowThumbnailSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
      setWindowThumbnailPosition(windowId, value);
    }
    /**
     * render
     *
     * @return {type}  description
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          handleClose = _this$props2.handleClose,
          t = _this$props2.t,
          thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition,
          direction = _this$props2.direction;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(ListSubheader/* default */.Z, {
        role: "presentation",
        disableSticky: true,
        tabIndex: "-1"
      }, t('thumbnails')), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('off');

          handleClose();
        }
      }, /*#__PURE__*/external_React_default().createElement(FormControlLabel_FormControlLabel, {
        value: "off",
        classes: {
          label: thumbnailNavigationPosition === 'off' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/external_React_default().createElement(CropDinSharp/* default */.Z, {
          color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined
        }),
        label: t('off'),
        labelPlacement: "bottom"
      })), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-bottom');

          handleClose();
        }
      }, /*#__PURE__*/external_React_default().createElement(FormControlLabel_FormControlLabel, {
        value: "far-bottom",
        classes: {
          label: thumbnailNavigationPosition === 'far-bottom' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/external_React_default().createElement(ThumbnailNavigationBottomIcon, {
          color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined
        }),
        label: t('bottom'),
        labelPlacement: "bottom"
      })), /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-right');

          handleClose();
        }
      }, /*#__PURE__*/external_React_default().createElement(FormControlLabel_FormControlLabel, {
        value: "far-right",
        classes: {
          label: thumbnailNavigationPosition === 'far-right' ? classes.selectedLabel : classes.label
        },
        control: /*#__PURE__*/external_React_default().createElement(ThumbnailNavigationRightIcon, {
          color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined,
          style: direction === 'rtl' ? {
            transform: 'rotate(180deg)'
          } : {}
        }),
        label: t('right'),
        labelPlacement: "bottom"
      })));
    }
  }]);

  return WindowThumbnailSettings;
}(external_React_.Component);
WindowThumbnailSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowThumbnailSettings.js








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var WindowThumbnailSettings_mapDispatchToProps = {
  setWindowThumbnailPosition: actions_window/* setWindowThumbnailPosition */.bB
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var WindowThumbnailSettings_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: (0,config/* getThemeDirection */.tt)(state),
    thumbnailNavigationPosition: (0,companionWindows/* getThumbnailNavigationPosition */.js)(state, {
      windowId: windowId
    })
  };
};
/** */


var WindowThumbnailSettings_styles = function styles(theme) {
  return {
    label: {
      borderBottom: '2px solid transparent'
    },
    MenuItem: {
      display: 'inline-block'
    },
    selectedLabel: {
      borderBottom: "2px solid ".concat(theme.palette.secondary.main),
      color: theme.palette.secondary.main
    }
  };
};

var WindowThumbnailSettings_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WindowThumbnailSettings_styles), (0,withTranslation/* withTranslation */.Z)(null, {
  withRef: true
}), (0,es/* connect */.$j)(WindowThumbnailSettings_mapStateToProps, WindowThumbnailSettings_mapDispatchToProps, null, {
  forwardRef: true
}), (0,withPlugins/* withPlugins */.A)('WindowThumbnailSettings') // further HOC go here
);
/* harmony default export */ const containers_WindowThumbnailSettings = (WindowThumbnailSettings_enhance(WindowThumbnailSettings));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CropOriginalSharp.js
var CropOriginalSharp = __webpack_require__(46583);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ViewColumn.js
var ViewColumn = __webpack_require__(51724);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/BookViewIcon.js


/**
 * BookViewIcon ~
*/

function BookViewIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8ZM14,9.5h6V11H14ZM14,12h6v1.5H14Zm0,2.5h6V16H14Z"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/GalleryViewIcon.js


/**
 * GalleryViewIcon ~
 */

function GalleryViewIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M19.974,2H2V19.974H19.974V2ZM7.392,18.177H3.8V14.582H7.392Zm0-5.392H3.8V9.19H7.392Zm0-5.392H3.8V3.8H7.392Zm5.392,10.785H9.19V14.582h3.595Zm0-5.392H9.19V9.19h3.595Zm0-5.392H9.19V3.8h3.595Zm5.392,10.785H14.582V14.582h3.595Zm0-5.392H14.582V9.19h3.595Zm0-5.392H14.582V3.8h3.595Z",
    transform: "translate(1 1)"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowViewSettings.js
function WindowViewSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowViewSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowViewSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowViewSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowViewSettings_defineProperties(Constructor, staticProps); return Constructor; }

function WindowViewSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowViewSettings_setPrototypeOf(subClass, superClass); }

function WindowViewSettings_setPrototypeOf(o, p) { WindowViewSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowViewSettings_setPrototypeOf(o, p); }

function WindowViewSettings_createSuper(Derived) { var hasNativeReflectConstruct = WindowViewSettings_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowViewSettings_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowViewSettings_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowViewSettings_possibleConstructorReturn(this, result); }; }

function WindowViewSettings_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowViewSettings_assertThisInitialized(self); }

function WindowViewSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowViewSettings_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowViewSettings_getPrototypeOf(o) { WindowViewSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowViewSettings_getPrototypeOf(o); }









/**
 *
 */

var WindowViewSettings = /*#__PURE__*/function (_Component) {
  WindowViewSettings_inherits(WindowViewSettings, _Component);

  var _super = WindowViewSettings_createSuper(WindowViewSettings);

  /**
   * constructor -
   */
  function WindowViewSettings(props) {
    var _this;

    WindowViewSettings_classCallCheck(this, WindowViewSettings);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(WindowViewSettings_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WindowViewSettings_createClass(WindowViewSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          setWindowViewType = _this$props.setWindowViewType;
      setWindowViewType(windowId, value);
    }
    /**
     * render
     *
     * @return {type}  description
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          handleClose = _this$props2.handleClose,
          t = _this$props2.t,
          windowViewType = _this$props2.windowViewType,
          viewTypes = _this$props2.viewTypes;
      var iconMap = {
        book: BookViewIcon,
        gallery: GalleryViewIcon,
        scroll: ViewColumn/* default */.Z,
        single: CropOriginalSharp/* default */.Z
      };
      /** Suspiciously similar to a component, yet if it is invoked through JSX
          none of the click handlers work? */

      var menuItem = function menuItem(_ref) {
        var value = _ref.value,
            Icon = _ref.Icon;
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          key: value,
          className: classes.MenuItem,
          autoFocus: windowViewType === value,
          onClick: function onClick() {
            _this2.handleChange(value);

            handleClose();
          }
        }, /*#__PURE__*/external_React_default().createElement(FormControlLabel_FormControlLabel, {
          value: value,
          classes: {
            label: windowViewType === value ? classes.selectedLabel : classes.label
          },
          control: /*#__PURE__*/external_React_default().createElement(Icon, {
            color: windowViewType === value ? 'secondary' : undefined
          }),
          label: t(value),
          labelPlacement: "bottom"
        }));
      };

      if (viewTypes.length === 0) return null;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(ListSubheader/* default */.Z, {
        role: "presentation",
        disableSticky: true,
        tabIndex: "-1"
      }, t('view')), viewTypes.map(function (value) {
        return menuItem({
          Icon: iconMap[value],
          value: value
        });
      }));
    }
  }]);

  return WindowViewSettings;
}(external_React_.Component);
WindowViewSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  },
  viewTypes: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowViewSettings.js








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */

var WindowViewSettings_mapDispatchToProps = {
  setWindowViewType: actions_window/* setWindowViewType */.cx
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var WindowViewSettings_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    viewTypes: (0,windows/* getAllowedWindowViewTypes */.Gh)(state, {
      windowId: windowId
    }),
    windowViewType: (0,windows/* getWindowViewType */.ys)(state, {
      windowId: windowId
    })
  };
};
/** */


var WindowViewSettings_styles = function styles(theme) {
  return {
    label: {
      borderBottom: '2px solid transparent'
    },
    MenuItem: {
      display: 'inline-block'
    },
    selectedLabel: {
      borderBottom: "2px solid ".concat(theme.palette.secondary.main),
      color: theme.palette.secondary.main
    }
  };
};

var WindowViewSettings_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WindowViewSettings_styles), (0,withTranslation/* withTranslation */.Z)(null, {
  withRef: true
}), (0,es/* connect */.$j)(WindowViewSettings_mapStateToProps, WindowViewSettings_mapDispatchToProps, null, {
  forwardRef: true
}), (0,withPlugins/* withPlugins */.A)('WindowViewSettings'));
/* harmony default export */ const containers_WindowViewSettings = (WindowViewSettings_enhance(WindowViewSettings));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopMenu.js
function WindowTopMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopMenu_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopMenu_setPrototypeOf(subClass, superClass); }

function WindowTopMenu_setPrototypeOf(o, p) { WindowTopMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopMenu_setPrototypeOf(o, p); }

function WindowTopMenu_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopMenu_possibleConstructorReturn(this, result); }; }

function WindowTopMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopMenu_assertThisInitialized(self); }

function WindowTopMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopMenu_getPrototypeOf(o) { WindowTopMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopMenu_getPrototypeOf(o); }








/** Renders plugins */

function PluginHookWithHeader(props) {
  var PluginComponents = props.PluginComponents,
      t = props.t; // eslint-disable-line react/prop-types

  return PluginComponents ? /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(ListSubheader/* default */.Z, {
    role: "presentation",
    disableSticky: true,
    tabIndex: "-1"
  }, t('windowPluginButtons')), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, props)) : null;
}
/**
 */


var WindowTopMenu = /*#__PURE__*/function (_Component) {
  WindowTopMenu_inherits(WindowTopMenu, _Component);

  var _super = WindowTopMenu_createSuper(WindowTopMenu);

  function WindowTopMenu() {
    WindowTopMenu_classCallCheck(this, WindowTopMenu);

    return _super.apply(this, arguments);
  }

  WindowTopMenu_createClass(WindowTopMenu, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          containerId = _this$props.containerId,
          handleClose = _this$props.handleClose,
          anchorEl = _this$props.anchorEl,
          showThumbnailNavigationSettings = _this$props.showThumbnailNavigationSettings,
          toggleDraggingEnabled = _this$props.toggleDraggingEnabled,
          windowId = _this$props.windowId;
      return /*#__PURE__*/external_React_default().createElement(Menu/* default */.Z, {
        id: "window-menu_".concat(windowId),
        container: document.querySelector("#".concat(containerId, " .").concat((0,css_ns/* default */.Z)('viewer'))),
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        getContentAnchorEl: null,
        open: Boolean(anchorEl),
        onClose: handleClose,
        onEntering: toggleDraggingEnabled,
        onExit: toggleDraggingEnabled,
        orientation: "horizontal"
      }, /*#__PURE__*/external_React_default().createElement(containers_WindowViewSettings, {
        windowId: windowId,
        handleClose: handleClose
      }), showThumbnailNavigationSettings && /*#__PURE__*/external_React_default().createElement(containers_WindowThumbnailSettings, {
        windowId: windowId,
        handleClose: handleClose
      }), /*#__PURE__*/external_React_default().createElement(PluginHookWithHeader, this.props));
    }
  }]);

  return WindowTopMenu;
}(external_React_.Component);
WindowTopMenu.defaultProps = {
  anchorEl: null,
  showThumbnailNavigationSettings: true
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopMenu.js







/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopMenu
 * @private
 */

var WindowTopMenu_mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0,config/* getContainerId */.vW)(state),
    showThumbnailNavigationSettings: (0,config/* getConfig */.iE)(state).thumbnailNavigation.displaySettings
  };
};
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowTopMenu
 * @private
 */


var WindowTopMenu_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDraggingEnabled: function toggleDraggingEnabled() {
      return dispatch(actions_workspace/* toggleDraggingEnabled */.gQ());
    }
  };
};

var WindowTopMenu_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WindowTopMenu_mapStateToProps, WindowTopMenu_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WindowTopMenu'));
/* harmony default export */ const containers_WindowTopMenu = (WindowTopMenu_enhance(WindowTopMenu));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/WindowOptionsIcon.js


/**
 * WindowMinIcon ~
*/

function WindowOptionsIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M0,0H24V24H0Z",
    fill: "none"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M24.852,17.981,3,18V15.945l21.852-.019Z",
    transform: "translate(-2 5)"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8Z",
    transform: "translate(0 -2)"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopMenuButton.js
function WindowTopMenuButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopMenuButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopMenuButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopMenuButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopMenuButton_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopMenuButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopMenuButton_setPrototypeOf(subClass, superClass); }

function WindowTopMenuButton_setPrototypeOf(o, p) { WindowTopMenuButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopMenuButton_setPrototypeOf(o, p); }

function WindowTopMenuButton_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopMenuButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopMenuButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopMenuButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopMenuButton_possibleConstructorReturn(this, result); }; }

function WindowTopMenuButton_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopMenuButton_assertThisInitialized(self); }

function WindowTopMenuButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopMenuButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopMenuButton_getPrototypeOf(o) { WindowTopMenuButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopMenuButton_getPrototypeOf(o); }





/**
 */

var WindowTopMenuButton = /*#__PURE__*/function (_Component) {
  WindowTopMenuButton_inherits(WindowTopMenuButton, _Component);

  var _super = WindowTopMenuButton_createSuper(WindowTopMenuButton);

  /**
   * constructor -
   */
  function WindowTopMenuButton(props) {
    var _this;

    WindowTopMenuButton_classCallCheck(this, WindowTopMenuButton);

    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(WindowTopMenuButton_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(WindowTopMenuButton_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @private
   */


  WindowTopMenuButton_createClass(WindowTopMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          windowId = _this$props.windowId;
      var anchorEl = this.state.anchorEl;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-haspopup": "true",
        "aria-label": t('windowMenu'),
        "aria-owns": anchorEl ? "window-menu_".concat(windowId) : undefined,
        className: anchorEl ? classes.ctrlBtnSelected : null,
        onClick: this.handleMenuClick
      }, /*#__PURE__*/external_React_default().createElement(WindowOptionsIcon, null)), /*#__PURE__*/external_React_default().createElement(containers_WindowTopMenu, {
        windowId: windowId,
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);

  return WindowTopMenuButton;
}(external_React_.Component);
WindowTopMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopMenuButton.js





/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var WindowTopMenuButton_styles = function styles(theme) {
  return {
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};

var WindowTopMenuButton_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowTopMenuButton_styles), (0,withPlugins/* withPlugins */.A)('WindowTopMenuButtons'));
/* harmony default export */ const containers_WindowTopMenuButton = (WindowTopMenuButton_enhance(WindowTopMenuButton));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopBarPluginArea.js
function WindowTopBarPluginArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopBarPluginArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopBarPluginArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopBarPluginArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopBarPluginArea_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopBarPluginArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopBarPluginArea_setPrototypeOf(subClass, superClass); }

function WindowTopBarPluginArea_setPrototypeOf(o, p) { WindowTopBarPluginArea_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopBarPluginArea_setPrototypeOf(o, p); }

function WindowTopBarPluginArea_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopBarPluginArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopBarPluginArea_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopBarPluginArea_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopBarPluginArea_possibleConstructorReturn(this, result); }; }

function WindowTopBarPluginArea_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopBarPluginArea_assertThisInitialized(self); }

function WindowTopBarPluginArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopBarPluginArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopBarPluginArea_getPrototypeOf(o) { WindowTopBarPluginArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopBarPluginArea_getPrototypeOf(o); }



/**
 *
 */

var WindowTopBarPluginArea = /*#__PURE__*/function (_Component) {
  WindowTopBarPluginArea_inherits(WindowTopBarPluginArea, _Component);

  var _super = WindowTopBarPluginArea_createSuper(WindowTopBarPluginArea);

  function WindowTopBarPluginArea() {
    WindowTopBarPluginArea_classCallCheck(this, WindowTopBarPluginArea);

    return _super.apply(this, arguments);
  }

  WindowTopBarPluginArea_createClass(WindowTopBarPluginArea, [{
    key: "render",

    /** */
    value: function render() {
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props));
    }
  }]);

  return WindowTopBarPluginArea;
}(external_React_.Component);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopBarPluginArea.js






/**
 */

var WindowTopBarPluginArea_styles = {};
var WindowTopBarPluginArea_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowTopBarPluginArea_styles), (0,es/* connect */.$j)(null, null), (0,withPlugins/* withPlugins */.A)('WindowTopBarPluginArea'));
/* harmony default export */ const containers_WindowTopBarPluginArea = (WindowTopBarPluginArea_enhance(WindowTopBarPluginArea));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoreVertSharp.js
var MoreVertSharp = __webpack_require__(72156);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopBarPluginMenu.js
function WindowTopBarPluginMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopBarPluginMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopBarPluginMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopBarPluginMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopBarPluginMenu_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopBarPluginMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopBarPluginMenu_setPrototypeOf(subClass, superClass); }

function WindowTopBarPluginMenu_setPrototypeOf(o, p) { WindowTopBarPluginMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopBarPluginMenu_setPrototypeOf(o, p); }

function WindowTopBarPluginMenu_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopBarPluginMenu_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopBarPluginMenu_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopBarPluginMenu_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopBarPluginMenu_possibleConstructorReturn(this, result); }; }

function WindowTopBarPluginMenu_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopBarPluginMenu_assertThisInitialized(self); }

function WindowTopBarPluginMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopBarPluginMenu_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopBarPluginMenu_getPrototypeOf(o) { WindowTopBarPluginMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopBarPluginMenu_getPrototypeOf(o); }







/**
 *
 */

var WindowTopBarPluginMenu = /*#__PURE__*/function (_Component) {
  WindowTopBarPluginMenu_inherits(WindowTopBarPluginMenu, _Component);

  var _super = WindowTopBarPluginMenu_createSuper(WindowTopBarPluginMenu);

  /**
   * constructor -
   */
  function WindowTopBarPluginMenu(props) {
    var _this;

    WindowTopBarPluginMenu_classCallCheck(this, WindowTopBarPluginMenu);

    _this = _super.call(this, props);
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(WindowTopBarPluginMenu_assertThisInitialized(_this));
    _this.handleMenuClose = _this.handleMenuClose.bind(WindowTopBarPluginMenu_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Set the anchorEl state to the click target
   */


  WindowTopBarPluginMenu_createClass(WindowTopBarPluginMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * Set the anchorEl state to null (closing the menu)
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render component
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          containerId = _this$props.containerId,
          PluginComponents = _this$props.PluginComponents,
          t = _this$props.t,
          windowId = _this$props.windowId,
          menuIcon = _this$props.menuIcon;
      var anchorEl = this.state.anchorEl;
      if (!PluginComponents || PluginComponents.length === 0) return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-haspopup": "true",
        "aria-label": t('windowPluginMenu'),
        "aria-owns": anchorEl ? "window-plugin-menu_".concat(windowId) : undefined,
        className: anchorEl ? classes.ctrlBtnSelected : null,
        onClick: this.handleMenuClick
      }, menuIcon), /*#__PURE__*/external_React_default().createElement(Menu/* default */.Z, {
        id: "window-plugin-menu_".concat(windowId),
        container: document.querySelector("#".concat(containerId, " .").concat((0,css_ns/* default */.Z)('viewer'))),
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        getContentAnchorEl: null,
        open: Boolean(anchorEl),
        onClose: function onClose() {
          return _this2.handleMenuClose();
        }
      }, /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, Object.assign({
        handleClose: function handleClose() {
          return _this2.handleMenuClose();
        }
      }, this.props))));
    }
  }]);

  return WindowTopBarPluginMenu;
}(external_React_.Component);
WindowTopBarPluginMenu.defaultProps = {
  classes: {},
  menuIcon: /*#__PURE__*/external_React_default().createElement(MoreVertSharp/* default */.Z, null),
  PluginComponents: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopBarPluginMenu.js







/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopBarPluginMenu
 * @private
 */

var WindowTopBarPluginMenu_mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0,config/* getContainerId */.vW)(state)
  };
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */


var WindowTopBarPluginMenu_styles = function styles(theme) {
  return {
    ctrlBtnSelected: {
      backgroundColor: theme.palette.action.selected
    }
  };
};

var WindowTopBarPluginMenu_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowTopBarPluginMenu_styles), (0,es/* connect */.$j)(WindowTopBarPluginMenu_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('WindowTopBarPluginMenu'));
/* harmony default export */ const containers_WindowTopBarPluginMenu = (WindowTopBarPluginMenu_enhance(WindowTopBarPluginMenu));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/manifests.js
var manifests = __webpack_require__(49676);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(58365);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ErrorOutlineSharp.js
var ErrorOutlineSharp = __webpack_require__(41842);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopBarTitle.js
function WindowTopBarTitle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopBarTitle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopBarTitle_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopBarTitle_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopBarTitle_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopBarTitle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopBarTitle_setPrototypeOf(subClass, superClass); }

function WindowTopBarTitle_setPrototypeOf(o, p) { WindowTopBarTitle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopBarTitle_setPrototypeOf(o, p); }

function WindowTopBarTitle_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopBarTitle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopBarTitle_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopBarTitle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopBarTitle_possibleConstructorReturn(this, result); }; }

function WindowTopBarTitle_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopBarTitle_assertThisInitialized(self); }

function WindowTopBarTitle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopBarTitle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopBarTitle_getPrototypeOf(o) { WindowTopBarTitle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopBarTitle_getPrototypeOf(o); }





/**
 * WindowTopBarTitle
 */

var WindowTopBarTitle = /*#__PURE__*/function (_Component) {
  WindowTopBarTitle_inherits(WindowTopBarTitle, _Component);

  var _super = WindowTopBarTitle_createSuper(WindowTopBarTitle);

  function WindowTopBarTitle() {
    WindowTopBarTitle_classCallCheck(this, WindowTopBarTitle);

    return _super.apply(this, arguments);
  }

  WindowTopBarTitle_createClass(WindowTopBarTitle, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          error = _this$props.error,
          hideWindowTitle = _this$props.hideWindowTitle,
          isFetching = _this$props.isFetching,
          manifestTitle = _this$props.manifestTitle;
      /** */

      var TitleTypography = function TitleTypography(props) {
        return /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, Object.assign({
          variant: "h2",
          noWrap: true,
          color: "inherit",
          className: classes.title
        }, props), props.children);
      };

      var title = null;

      if (isFetching) {
        title = /*#__PURE__*/external_React_default().createElement(TitleTypography, null, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
          variant: "text"
        }));
      } else if (error) {
        title = /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(ErrorOutlineSharp/* default */.Z, {
          color: "error"
        }), /*#__PURE__*/external_React_default().createElement(TitleTypography, {
          color: "textSecondary"
        }, error));
      } else if (hideWindowTitle) {
        title = /*#__PURE__*/external_React_default().createElement("div", {
          className: classes.title
        });
      } else {
        title = /*#__PURE__*/external_React_default().createElement(TitleTypography, null, manifestTitle);
      }

      return title;
    }
  }]);

  return WindowTopBarTitle;
}(external_React_.Component);
WindowTopBarTitle.defaultProps = {
  error: null,
  hideWindowTitle: false,
  isFetching: false,
  manifestTitle: ''
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopBarTitle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { WindowTopBarTitle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WindowTopBarTitle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** mapStateToProps */

var WindowTopBarTitle_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    error: (0,manifests/* getManifestStatus */.JK)(state, {
      windowId: windowId
    }).error,
    hideWindowTitle: (0,windows/* getWindowConfig */.Em)(state, {
      windowId: windowId
    }).hideWindowTitle,
    isFetching: (0,manifests/* getManifestStatus */.JK)(state, {
      windowId: windowId
    }).isFetching,
    manifestTitle: (0,manifests/* getManifestTitle */.Yq)(state, {
      windowId: windowId
    })
  };
};
/**
 * @param theme
 */


var WindowTopBarTitle_styles = function styles(theme) {
  return {
    title: _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
      flexGrow: 1,
      paddingLeft: theme.spacing(0.5)
    })
  };
};

var WindowTopBarTitle_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowTopBarTitle_styles), (0,es/* connect */.$j)(WindowTopBarTitle_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('WindowTopBarTitle'));
/* harmony default export */ const containers_WindowTopBarTitle = (WindowTopBarTitle_enhance(WindowTopBarTitle));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/WindowMaxIcon.js


/**
 * WindowMaxIcon ~
*/

function WindowMaxIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M7,14H5v5h5V17H7Zm7-9V7h3v3h2V5Z"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/WindowMinIcon.js


/**
 * WindowMinIcon ~
*/

function WindowMinIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M5,16H8v3h2V14H5ZM16,8V5H14v5h5V8Z"
  }), /*#__PURE__*/external_React_default().createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowTopBar.js
function WindowTopBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowTopBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowTopBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowTopBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowTopBar_defineProperties(Constructor, staticProps); return Constructor; }

function WindowTopBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowTopBar_setPrototypeOf(subClass, superClass); }

function WindowTopBar_setPrototypeOf(o, p) { WindowTopBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowTopBar_setPrototypeOf(o, p); }

function WindowTopBar_createSuper(Derived) { var hasNativeReflectConstruct = WindowTopBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowTopBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowTopBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowTopBar_possibleConstructorReturn(this, result); }; }

function WindowTopBar_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowTopBar_assertThisInitialized(self); }

function WindowTopBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowTopBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowTopBar_getPrototypeOf(o) { WindowTopBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowTopBar_getPrototypeOf(o); }
















/**
 * WindowTopBar
 */

var WindowTopBar = /*#__PURE__*/function (_Component) {
  WindowTopBar_inherits(WindowTopBar, _Component);

  var _super = WindowTopBar_createSuper(WindowTopBar);

  function WindowTopBar() {
    WindowTopBar_classCallCheck(this, WindowTopBar);

    return _super.apply(this, arguments);
  }

  WindowTopBar_createClass(WindowTopBar, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          removeWindow = _this$props.removeWindow,
          windowId = _this$props.windowId,
          classes = _this$props.classes,
          toggleWindowSideBar = _this$props.toggleWindowSideBar,
          t = _this$props.t,
          windowDraggable = _this$props.windowDraggable,
          maximizeWindow = _this$props.maximizeWindow,
          maximized = _this$props.maximized,
          minimizeWindow = _this$props.minimizeWindow,
          focused = _this$props.focused,
          allowClose = _this$props.allowClose,
          allowMaximize = _this$props.allowMaximize,
          focusWindow = _this$props.focusWindow,
          allowFullscreen = _this$props.allowFullscreen,
          allowTopMenuButton = _this$props.allowTopMenuButton,
          allowWindowSideBar = _this$props.allowWindowSideBar;
      return /*#__PURE__*/external_React_default().createElement(AppBar_AppBar, {
        position: "relative",
        color: "default"
      }, /*#__PURE__*/external_React_default().createElement("nav", {
        "aria-label": t('windowNavigation')
      }, /*#__PURE__*/external_React_default().createElement(Toolbar/* default */.Z, {
        disableGutters: true,
        onMouseDown: focusWindow,
        className: classnames_default()(classes.windowTopBarStyle, windowDraggable ? classes.windowTopBarStyleDraggable : null, focused ? classes.focused : null, (0,css_ns/* default */.Z)('window-top-bar')),
        variant: "dense"
      }, allowWindowSideBar && /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('toggleWindowSideBar'),
        onClick: toggleWindowSideBar
      }, /*#__PURE__*/external_React_default().createElement(MenuSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(containers_WindowTopBarTitle, {
        windowId: windowId
      }), allowTopMenuButton && /*#__PURE__*/external_React_default().createElement(containers_WindowTopMenuButton, {
        className: (0,css_ns/* default */.Z)('window-menu-btn'),
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(containers_WindowTopBarPluginArea, {
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(containers_WindowTopBarPluginMenu, {
        windowId: windowId
      }), allowMaximize && /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
        className: (0,css_ns/* default */.Z)('window-maximize'),
        onClick: maximized ? minimizeWindow : maximizeWindow
      }, maximized ? /*#__PURE__*/external_React_default().createElement(WindowMinIcon, null) : /*#__PURE__*/external_React_default().createElement(WindowMaxIcon, null)), allowFullscreen && /*#__PURE__*/external_React_default().createElement(containers_FullScreenButton, null), allowClose && /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('closeWindow'),
        className: (0,css_ns/* default */.Z)('window-close'),
        onClick: removeWindow
      }, /*#__PURE__*/external_React_default().createElement(CloseSharp/* default */.Z, null)))));
    }
  }]);

  return WindowTopBar;
}(external_React_.Component);
WindowTopBar.defaultProps = {
  allowClose: true,
  allowFullscreen: false,
  allowMaximize: true,
  allowTopMenuButton: true,
  allowWindowSideBar: true,
  focused: false,
  focusWindow: function focusWindow() {},
  maximized: false,
  maximizeWindow: function maximizeWindow() {},
  minimizeWindow: function minimizeWindow() {},
  t: function t(key) {
    return key;
  },
  windowDraggable: true
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowTopBar.js








/** mapStateToProps */

var WindowTopBar_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var config = (0,windows/* getWindowConfig */.Em)(state, {
    windowId: windowId
  });
  return {
    allowClose: config.allowClose,
    allowFullscreen: config.allowFullscreen,
    allowMaximize: config.allowMaximize,
    allowTopMenuButton: config.allowTopMenuButton,
    allowWindowSideBar: config.allowWindowSideBar,
    focused: (0,workspace/* isFocused */.$Z)(state, {
      windowId: windowId
    }),
    maximized: config.maximized
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var WindowTopBar_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    focusWindow: function focusWindow() {
      return dispatch(actions_window/* focusWindow */.uG(windowId));
    },
    maximizeWindow: function maximizeWindow() {
      return dispatch(actions_window/* maximizeWindow */.LO(windowId));
    },
    minimizeWindow: function minimizeWindow() {
      return dispatch(actions_window/* minimizeWindow */.Y9(windowId));
    },
    removeWindow: function removeWindow() {
      return dispatch(actions_window/* removeWindow */.i0(windowId));
    },
    toggleWindowSideBar: function toggleWindowSideBar() {
      return dispatch(actions_window/* toggleWindowSideBar */.dC(windowId));
    }
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */


var WindowTopBar_styles = function styles(theme) {
  return {
    focused: {},
    windowTopBarStyle: {
      '&$focused': {
        borderTop: "2px solid ".concat(theme.palette.primary.main)
      },
      backgroundColor: theme.palette.shades.main,
      borderTop: '2px solid transparent',
      minHeight: 32,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    },
    windowTopBarStyleDraggable: {
      cursor: 'move'
    }
  };
};

var WindowTopBar_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowTopBar_styles), (0,es/* connect */.$j)(WindowTopBar_mapStateToProps, WindowTopBar_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WindowTopBar'));
/* harmony default export */ const containers_WindowTopBar = (WindowTopBar_enhance(WindowTopBar));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/canvases.js + 1 modules
var canvases = __webpack_require__(49455);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(79437);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js











 // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`

function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(".concat(window.innerWidth, "px) translateX(").concat(offsetX - rect.left, "px)");
  }

  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }

  if (direction === 'up') {
    return "translateY(".concat(window.innerHeight, "px) translateY(").concat(offsetY - rect.top, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}

function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var Slide_defaultTimeout = {
  enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
  exit: transitions/* duration.leavingScreen */.x9.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = /*#__PURE__*/external_React_.forwardRef(function Slide(props, ref) {
  var children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'down' : _props$direction,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? Slide_defaultTimeout : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition/* default */.ZP : _props$TransitionComp,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = (0,useTheme/* default */.Z)();
  var childrenRef = external_React_.useRef(null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */

  var handleOwnRef = external_React_.useCallback(function (instance) {
    // #StrictMode ready
    childrenRef.current = external_ReactDOM_.findDOMNode(instance);
  }, []);
  var handleRefIntermediary = (0,useForkRef/* default */.Z)(children.ref, handleOwnRef);
  var handleRef = (0,useForkRef/* default */.Z)(handleRefIntermediary, ref);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (isAppearing) {
      if (callback) {
        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (isAppearing === undefined) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    setTranslateValue(direction, node);
    (0,utils/* reflow */.n)(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var transitionProps = (0,utils/* getTransitionProps */.C)({
      timeout: timeout,
      style: style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,esm_extends/* default */.Z)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', (0,esm_extends/* default */.Z)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,utils/* getTransitionProps */.C)({
      timeout: timeout,
      style: style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,esm_extends/* default */.Z)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', (0,esm_extends/* default */.Z)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(function (node) {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  });
  var updatePosition = external_React_.useCallback(function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  external_React_.useEffect(function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    var handleResize = (0,debounce/* default */.Z)(function () {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);
  external_React_.useEffect(function () {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/external_React_.cloneElement(children, (0,esm_extends/* default */.Z)({
      ref: handleRef,
      style: (0,esm_extends/* default */.Z)({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, children.props.style)
    }, childProps));
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Slide_Slide = (Slide);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js













var Drawer_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 0
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var Drawer_defaultTransitionDuration = {
  enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
  exit: transitions/* duration.leavingScreen */.x9.leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = /*#__PURE__*/external_React_.forwardRef(function Drawer(props, ref) {
  var _props$anchor = props.anchor,
      anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
      BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 16 : _props$elevation,
      _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

  var BackdropPropsProp = _props$ModalProps.BackdropProps,
      ModalProps = (0,objectWithoutProperties/* default */.Z)(_props$ModalProps, ["BackdropProps"]),
      onClose = props.onClose,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      SlideProps = props.SlideProps,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Slide_Slide : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? Drawer_defaultTransitionDuration : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'temporary' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]);

  var theme = (0,useTheme/* default */.Z)(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  var mounted = external_React_.useRef(false);
  external_React_.useEffect(function () {
    mounted.current = true;
  }, []);
  var anchor = getAnchor(theme, anchorProp);
  var drawer = /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: (0,clsx_m/* default */.Z)(classes.paper, classes["paperAnchor".concat((0,capitalize/* default */.Z)(anchor))], PaperProps.className, variant !== 'temporary' && classes["paperAnchorDocked".concat((0,capitalize/* default */.Z)(anchor))])
  }), children);

  if (variant === 'permanent') {
    return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }

  var slidingDrawer = /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);

  if (variant === 'persistent') {
    return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
      className: (0,clsx_m/* default */.Z)(classes.root, classes.docked, className),
      ref: ref
    }, other), slidingDrawer);
  } // variant === temporary


  return /*#__PURE__*/external_React_.createElement(Modal/* default */.Z, (0,esm_extends/* default */.Z)({
    BackdropProps: (0,esm_extends/* default */.Z)({}, BackdropProps, BackdropPropsProp, {
      transitionDuration: transitionDuration
    }),
    BackdropComponent: Backdrop_Backdrop,
    className: (0,clsx_m/* default */.Z)(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});
 false ? 0 : void 0;
/* harmony default export */ const Drawer_Drawer = ((0,withStyles/* default */.Z)(Drawer_styles, {
  name: 'MuiDrawer',
  flip: false
})(Drawer));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/companionWindow.js
var companionWindow = __webpack_require__(80725);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/lib/MiradorCanvas.js
var MiradorCanvas = __webpack_require__(7590);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/annotations.js + 3 modules
var annotations = __webpack_require__(32012);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/searches.js
var searches = __webpack_require__(51580);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(59009);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(70065);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(41423);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/InfoSharp.js
var InfoSharp = __webpack_require__(18257);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CommentSharp.js
var CommentSharp = __webpack_require__(40480);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CopyrightSharp.js
var CopyrightSharp = __webpack_require__(28890);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LayersSharp.js
var LayersSharp = __webpack_require__(88957);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SearchSharp.js
var SearchSharp = __webpack_require__(75421);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/icons/CanvasIndexIcon.js


/**
 * Render the canvas index svg
 */

function CanvasIndexIcon(props) {
  return /*#__PURE__*/external_React_default().createElement(SvgIcon/* default */.Z, props, /*#__PURE__*/external_React_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_React_default().createElement("path", {
    d: "M6.924,21H21V19H6.924ZM3,17H21V15H3Zm3.924-4H21V11H6.924Zm0-4H21V7H6.924ZM3,3V5H21V3Z"
  })));
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowSideBarButtons.js
function WindowSideBarButtons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowSideBarButtons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowSideBarButtons_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowSideBarButtons_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowSideBarButtons_defineProperties(Constructor, staticProps); return Constructor; }

function WindowSideBarButtons_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowSideBarButtons_setPrototypeOf(subClass, superClass); }

function WindowSideBarButtons_setPrototypeOf(o, p) { WindowSideBarButtons_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowSideBarButtons_setPrototypeOf(o, p); }

function WindowSideBarButtons_createSuper(Derived) { var hasNativeReflectConstruct = WindowSideBarButtons_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowSideBarButtons_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowSideBarButtons_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowSideBarButtons_possibleConstructorReturn(this, result); }; }

function WindowSideBarButtons_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowSideBarButtons_assertThisInitialized(self); }

function WindowSideBarButtons_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowSideBarButtons_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowSideBarButtons_getPrototypeOf(o) { WindowSideBarButtons_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowSideBarButtons_getPrototypeOf(o); }












/**
 *
 */

var WindowSideBarButtons = /*#__PURE__*/function (_Component) {
  WindowSideBarButtons_inherits(WindowSideBarButtons, _Component);

  var _super = WindowSideBarButtons_createSuper(WindowSideBarButtons);

  /** */
  function WindowSideBarButtons(props) {
    var _this;

    WindowSideBarButtons_classCallCheck(this, WindowSideBarButtons);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(WindowSideBarButtons_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @param {object} event the change event
   * @param {string} value the tab's value
  */


  WindowSideBarButtons_createClass(WindowSideBarButtons, [{
    key: "handleChange",
    value: function handleChange(event, value) {
      var addCompanionWindow = this.props.addCompanionWindow;
      addCompanionWindow(value);
    }
    /**
     * render
     *
     * @return {type}  description
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          hasAnnotations = _this$props.hasAnnotations,
          hasAnyAnnotations = _this$props.hasAnyAnnotations,
          hasAnyLayers = _this$props.hasAnyLayers,
          hasCurrentLayers = _this$props.hasCurrentLayers,
          hasSearchResults = _this$props.hasSearchResults,
          hasSearchService = _this$props.hasSearchService,
          panels = _this$props.panels,
          PluginComponents = _this$props.PluginComponents,
          sideBarPanel = _this$props.sideBarPanel,
          t = _this$props.t;
      /** */

      var TabButton = function TabButton(props) {
        return /*#__PURE__*/external_React_default().createElement(Tooltip/* default */.ZP, {
          title: t('openCompanionWindow', {
            context: props.value
          })
        }, /*#__PURE__*/external_React_default().createElement(Tab/* default */.Z, Object.assign({}, props, {
          classes: {
            root: classes.tab,
            selected: classes.tabSelected
          },
          "aria-label": t('openCompanionWindow', {
            context: props.value
          }),
          disableRipple: true,
          onKeyUp: _this2.handleKeyUp
        })));
      };

      return /*#__PURE__*/external_React_default().createElement(Tabs/* default */.Z, {
        classes: {
          flexContainer: classes.tabsFlexContainer,
          indicator: classes.tabsIndicator
        },
        value: sideBarPanel === 'closed' ? false : sideBarPanel,
        onChange: this.handleChange,
        variant: "fullWidth",
        indicatorColor: "primary",
        textColor: "primary",
        orientation: "vertical",
        "aria-orientation": "vertical",
        "aria-label": t('sidebarPanelsNavigation')
      }, panels.info && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "info",
        icon: /*#__PURE__*/external_React_default().createElement(InfoSharp/* default */.Z, null)
      }), panels.attribution && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "attribution",
        icon: /*#__PURE__*/external_React_default().createElement(CopyrightSharp/* default */.Z, null)
      }), panels.canvas && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "canvas",
        icon: /*#__PURE__*/external_React_default().createElement(CanvasIndexIcon, null)
      }), panels.annotations && (hasAnnotations || hasAnyAnnotations) && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "annotations",
        icon: /*#__PURE__*/external_React_default().createElement(Badge/* default */.Z, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasAnnotations,
          variant: "dot"
        }, /*#__PURE__*/external_React_default().createElement(CommentSharp/* default */.Z, null))
      }), panels.search && hasSearchService && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "search",
        icon: /*#__PURE__*/external_React_default().createElement(Badge/* default */.Z, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasSearchResults,
          variant: "dot"
        }, /*#__PURE__*/external_React_default().createElement(SearchSharp/* default */.Z, null))
      }), panels.layers && hasAnyLayers && /*#__PURE__*/external_React_default().createElement(TabButton, {
        value: "layers",
        icon: /*#__PURE__*/external_React_default().createElement(Badge/* default */.Z, {
          classes: {
            badge: classes.badge
          },
          invisible: !hasCurrentLayers,
          variant: "dot"
        }, /*#__PURE__*/external_React_default().createElement(LayersSharp/* default */.Z, null))
      }), PluginComponents && PluginComponents.map(function (PluginComponent) {
        return /*#__PURE__*/external_React_default().createElement(TabButton, {
          key: PluginComponent.value,
          value: PluginComponent.value,
          icon: /*#__PURE__*/external_React_default().createElement(PluginComponent, null)
        });
      }));
    }
  }]);

  return WindowSideBarButtons;
}(external_React_.Component);
WindowSideBarButtons.defaultProps = {
  classes: {},
  hasAnnotations: false,
  hasAnyAnnotations: false,
  hasAnyLayers: false,
  hasCurrentLayers: false,
  hasSearchResults: false,
  hasSearchService: false,
  panels: [],
  PluginComponents: null,
  sideBarPanel: 'closed',
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowSideBarButtons.js









/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowSideButtons
 * @private
 */

var WindowSideBarButtons_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    addCompanionWindow: function addCompanionWindow(content) {
      return dispatch(companionWindow/* addOrUpdateCompanionWindow */.tT(windowId, {
        content: content,
        position: 'left'
      }));
    }
  };
};
/** */


function hasLayers(canvases) {
  return canvases && canvases.some(function (c) {
    return new MiradorCanvas/* default */.Z(c).imageResources.length > 1;
  });
}
/** */


function hasAnnotations(canvases) {
  return canvases && canvases.some(function (c) {
    var canvas = new MiradorCanvas/* default */.Z(c);
    return canvas.annotationListUris.length > 0 || canvas.canvasAnnotationPages.length > 0;
  });
}
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowSideButtons
 * @private
 */


var WindowSideBarButtons_mapStateToProps = function mapStateToProps(state, _ref2) {
  var windowId = _ref2.windowId;
  return {
    hasAnnotations: (0,annotations/* getAnnotationResourcesByMotivation */.aW)(state, {
      windowId: windowId
    }).length > 0,
    hasAnyAnnotations: hasAnnotations((0,canvases/* getCanvases */.LU)(state, {
      windowId: windowId
    })),
    hasAnyLayers: hasLayers((0,canvases/* getCanvases */.LU)(state, {
      windowId: windowId
    })),
    hasCurrentLayers: hasLayers((0,canvases/* getVisibleCanvases */.cw)(state, {
      windowId: windowId
    })),
    hasSearchResults: (0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }).suggestedSearches || (0,searches/* getSearchQuery */.uP)(state, {
      companionWindowId: ((0,companionWindows/* getCompanionWindowsForPosition */.Ve)(state, {
        position: 'left',
        windowId: windowId
      })[0] || {}).id,
      windowId: windowId
    }),
    hasSearchService: (0,manifests/* getManifestSearchService */.Oo)(state, {
      windowId: windowId
    }) !== null,
    panels: (0,windows/* getWindowConfig */.Em)(state, {
      windowId: windowId
    }).panels,
    sideBarPanel: ((0,companionWindows/* getCompanionWindowsForPosition */.Ve)(state, {
      position: 'left',
      windowId: windowId
    })[0] || {}).content
  };
};
/** */


var style = function style(theme) {
  return {
    badge: {
      backgroundColor: theme.palette.notification.main
    },
    tab: {
      '&:active': {
        backgroundColor: theme.palette.action.active
      },
      '&:focus': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none' // Reset on touch devices, it doesn't add specificity

      },
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none' // Reset on touch devices, it doesn't add specificity

      },
      borderRight: '2px solid transparent',
      minWidth: 'auto'
    },
    tabSelected: {
      borderRight: "2px solid ".concat(theme.palette.primary.main)
    },
    tabsFlexContainer: {
      flexDirection: 'column'
    },
    tabsIndicator: {
      display: 'none'
    }
  };
};

var WindowSideBarButtons_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(style), (0,es/* connect */.$j)(WindowSideBarButtons_mapStateToProps, WindowSideBarButtons_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WindowSideBarButtons'));
/* harmony default export */ const containers_WindowSideBarButtons = (WindowSideBarButtons_enhance(WindowSideBarButtons));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowSideBar.js
function WindowSideBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowSideBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowSideBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowSideBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowSideBar_defineProperties(Constructor, staticProps); return Constructor; }

function WindowSideBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowSideBar_setPrototypeOf(subClass, superClass); }

function WindowSideBar_setPrototypeOf(o, p) { WindowSideBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowSideBar_setPrototypeOf(o, p); }

function WindowSideBar_createSuper(Derived) { var hasNativeReflectConstruct = WindowSideBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowSideBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowSideBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowSideBar_possibleConstructorReturn(this, result); }; }

function WindowSideBar_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowSideBar_assertThisInitialized(self); }

function WindowSideBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowSideBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowSideBar_getPrototypeOf(o) { WindowSideBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowSideBar_getPrototypeOf(o); }





/**
 * WindowSideBar
 */

var WindowSideBar = /*#__PURE__*/function (_Component) {
  WindowSideBar_inherits(WindowSideBar, _Component);

  var _super = WindowSideBar_createSuper(WindowSideBar);

  function WindowSideBar() {
    WindowSideBar_classCallCheck(this, WindowSideBar);

    return _super.apply(this, arguments);
  }

  WindowSideBar_createClass(WindowSideBar, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          direction = _this$props.direction,
          t = _this$props.t,
          windowId = _this$props.windowId,
          sideBarOpen = _this$props.sideBarOpen;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Drawer_Drawer, {
        variant: "persistent",
        className: classnames_default()(classes.drawer),
        classes: {
          paper: classnames_default()(classes.paper)
        },
        anchor: direction === 'rtl' ? 'right' : 'left',
        PaperProps: {
          'aria-label': t('sidebarPanelsNavigation'),
          component: 'nav',
          style: {
            height: '100%',
            position: 'relative'
          }
        },
        SlideProps: {
          direction: direction === 'rtl' ? 'left' : 'right',
          mountOnEnter: true,
          unmountOnExit: true
        },
        open: sideBarOpen
      }, /*#__PURE__*/external_React_default().createElement(containers_WindowSideBarButtons, {
        windowId: windowId
      })));
    }
  }]);

  return WindowSideBar;
}(external_React_.Component);
WindowSideBar.defaultProps = {
  sideBarOpen: false
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowSideBar.js







/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBar
 * @private
 */

var WindowSideBar_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    direction: (0,config/* getThemeDirection */.tt)(state),
    sideBarOpen: ((0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    sideBarPanel: ((0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }) || {}).sideBarPanel
  };
};
/**
 *
 * @param theme
 * @returns {{toolbar: CSSProperties | toolbar | {minHeight}, grow: {flexGrow: number},
 * drawer: {overflowX: string, left: number, flexShrink: number, width: number, height: string}}}
 */


var WindowSideBar_styles = function styles(theme) {
  return {
    drawer: {
      flexShrink: 0,
      height: '100%',
      order: -1000,
      zIndex: theme.zIndex.appBar - 1
    },
    grow: {
      flexGrow: 1
    },
    paper: {
      borderInlineEnd: "1px solid ".concat(theme.palette.divider),
      overflowX: 'hidden',
      width: 48
    },
    toolbar: theme.mixins.toolbar
  };
};

var WindowSideBar_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WindowSideBar_styles), (0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(WindowSideBar_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('WindowSideBar'));
/* harmony default export */ const containers_WindowSideBar = (WindowSideBar_enhance(WindowSideBar));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowLeftSharp.js
var ArrowLeftSharp = __webpack_require__(37863);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowRightSharp.js
var ArrowRightSharp = __webpack_require__(30576);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/lib/CompanionWindowRegistry.js + 70 modules
var CompanionWindowRegistry = __webpack_require__(35626);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/CompanionWindow.js + 2 modules
var CompanionWindow = __webpack_require__(91055);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(59968);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(96410);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(82961);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(28970);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return (0,arrayWithHoles/* default */.Z)(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || (0,nonIterableRest/* default */.Z)();
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/node_modules/react-is/index.js
var react_is = __webpack_require__(65122);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(66037);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/AccordionContext.js

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = external_React_.createContext({});

if (false) {}

/* harmony default export */ const Accordion_AccordionContext = (AccordionContext);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(22775);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js














var Accordion_styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/external_React_.forwardRef(function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = external_React_.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = external_React_.Children.toArray(childrenProp),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = external_React_.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/external_React_.createElement(Accordion_AccordionContext.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/external_React_.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/external_React_.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ const Accordion_Accordion = ((0,withStyles/* default */.Z)(Accordion_styles, {
  name: 'MuiAccordion'
})(Accordion));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js



/* eslint-disable jsx-a11y/aria-role */







var AccordionSummary_styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/external_React_.forwardRef(function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      IconButtonProps = props.IconButtonProps,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocusVisible = props.onFocusVisible,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "expandIcon", "IconButtonProps", "onBlur", "onClick", "onFocusVisible"]);

  var _React$useState = external_React_.useState(false),
      focusedState = _React$useState[0],
      setFocusedState = _React$useState[1];

  var handleFocusVisible = function handleFocusVisible(event) {
    setFocusedState(true);

    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    setFocusedState(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  var _React$useContext = external_React_.useContext(Accordion_AccordionContext),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/external_React_.createElement(ButtonBase/* default */.Z, (0,esm_extends/* default */.Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx_m/* default */.Z)(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/external_React_.createElement("div", {
    className: (0,clsx_m/* default */.Z)(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/external_React_.createElement(IconButton/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? 0 : void 0;
/* harmony default export */ const AccordionSummary_AccordionSummary = ((0,withStyles/* default */.Z)(AccordionSummary_styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js






var AccordionDetails_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/external_React_.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className"]);

  return /*#__PURE__*/external_React_.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const AccordionDetails_AccordionDetails = ((0,withStyles/* default */.Z)(AccordionDetails_styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(63786);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const SuccessOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/external_React_.createElement("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const ReportProblemOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/external_React_.createElement("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const ErrorOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/external_React_.createElement("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const InfoOutlined = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/external_React_.createElement("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js
var svg_icons_Close = __webpack_require__(17694);
;// CONCATENATED MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js














var Alert_styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? colorManipulator/* darken */._j : colorManipulator/* lighten */.$n;
  var getBackgroundColor = theme.palette.type === 'light' ? colorManipulator/* lighten */.$n : colorManipulator/* darken */._j;
  return {
    /* Styles applied to the root element. */
    root: (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/external_React_.createElement(SuccessOutlined, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/external_React_.createElement(ReportProblemOutlined, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/external_React_.createElement(ErrorOutline, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/external_React_.createElement(InfoOutlined, {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/external_React_.createElement(svg_icons_Close/* default */.Z, {
  fontSize: "small"
});

var Alert = /*#__PURE__*/external_React_.forwardRef(function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? 'success' : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);

  return /*#__PURE__*/external_React_.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    role: role,
    square: true,
    elevation: 0,
    className: (0,clsx_m/* default */.Z)(classes.root, classes["".concat(variant).concat((0,capitalize/* default */.Z)(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/external_React_.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/external_React_.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/external_React_.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/external_React_.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/external_React_.createElement(IconButton/* default */.Z, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
 false ? 0 : void 0;
/* harmony default export */ const Alert_Alert = ((0,withStyles/* default */.Z)(Alert_styles, {
  name: 'MuiAlert'
})(Alert));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(64566);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ErrorContent.js
function ErrorContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorContent_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorContent_setPrototypeOf(subClass, superClass); }

function ErrorContent_setPrototypeOf(o, p) { ErrorContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorContent_setPrototypeOf(o, p); }

function ErrorContent_createSuper(Derived) { var hasNativeReflectConstruct = ErrorContent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ErrorContent_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ErrorContent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ErrorContent_possibleConstructorReturn(this, result); }; }

function ErrorContent_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ErrorContent_assertThisInitialized(self); }

function ErrorContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorContent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ErrorContent_getPrototypeOf(o) { ErrorContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorContent_getPrototypeOf(o); }









/** */

var ErrorContent = /*#__PURE__*/function (_Component) {
  ErrorContent_inherits(ErrorContent, _Component);

  var _super = ErrorContent_createSuper(ErrorContent);

  function ErrorContent() {
    ErrorContent_classCallCheck(this, ErrorContent);

    return _super.apply(this, arguments);
  }

  ErrorContent_createClass(ErrorContent, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          error = _this$props.error,
          metadata = _this$props.metadata,
          showJsError = _this$props.showJsError,
          t = _this$props.t;
      if (!showJsError) return null;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Alert_Alert, {
        elevation: 6,
        variant: "filled",
        severity: "error"
      }, t('errorDialogTitle')), showJsError && /*#__PURE__*/external_React_default().createElement(Accordion_Accordion, {
        square: true,
        className: classes.alert
      }, /*#__PURE__*/external_React_default().createElement(AccordionSummary_AccordionSummary, {
        expandIcon: /*#__PURE__*/external_React_default().createElement(ExpandMore/* default */.Z, null)
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, null, t('jsError', {
        message: error.message,
        name: error.name
      }))), /*#__PURE__*/external_React_default().createElement(AccordionDetails_AccordionDetails, {
        className: classes.details
      }, /*#__PURE__*/external_React_default().createElement("pre", null, t('jsStack', {
        stack: error.stack
      })), metadata && /*#__PURE__*/external_React_default().createElement("pre", null, JSON.stringify(metadata, null, 2)))), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props));
    }
  }]);

  return ErrorContent;
}(external_React_.Component);
ErrorContent.defaultProps = {
  metadata: null,
  showJsError: true,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ErrorContent.js







/** mapStateToProps */

var ErrorContent_mapStateToProps = function mapStateToProps(state, _ref) {
  var companionWindowId = _ref.companionWindowId,
      windowId = _ref.windowId;
  return {
    metadata: {
      companionWindow: companionWindowId && (0,companionWindows/* getCompanionWindow */.KW)(state, {
        companionWindowId: companionWindowId
      }),
      manifest: (0,getters/* getManifest */.WC)(state, {
        windowId: windowId
      }),
      viewer: (0,getters/* getViewer */.gA)(state, {
        windowId: windowId
      }),
      window: (0,getters/* getWindow */.Jj)(state, {
        windowId: windowId
      })
    },
    showJsError: (0,config/* getConfig */.iE)(state).window.showJsError
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */


var ErrorContent_styles = function styles(theme) {
  return {
    alert: {
      '& $icon': {
        color: theme.palette.error.main
      },
      backgroundColor: theme.palette.error.main,
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium
    },
    details: {
      '& pre': {
        height: '100px',
        overflowY: 'scroll'
      },
      flexDirection: 'column'
    }
  };
};

var ErrorContent_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(ErrorContent_styles), (0,es/* connect */.$j)(ErrorContent_mapStateToProps), (0,withPlugins/* withPlugins */.A)('ErrorContent'));
/* harmony default export */ const containers_ErrorContent = (ErrorContent_enhance(ErrorContent));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/CompanionWindowFactory.js
function CompanionWindowFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CompanionWindowFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CompanionWindowFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) CompanionWindowFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) CompanionWindowFactory_defineProperties(Constructor, staticProps); return Constructor; }

function CompanionWindowFactory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CompanionWindowFactory_setPrototypeOf(subClass, superClass); }

function CompanionWindowFactory_setPrototypeOf(o, p) { CompanionWindowFactory_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CompanionWindowFactory_setPrototypeOf(o, p); }

function CompanionWindowFactory_createSuper(Derived) { var hasNativeReflectConstruct = CompanionWindowFactory_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CompanionWindowFactory_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CompanionWindowFactory_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CompanionWindowFactory_possibleConstructorReturn(this, result); }; }

function CompanionWindowFactory_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return CompanionWindowFactory_assertThisInitialized(self); }

function CompanionWindowFactory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CompanionWindowFactory_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CompanionWindowFactory_getPrototypeOf(o) { CompanionWindowFactory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CompanionWindowFactory_getPrototypeOf(o); }





/**
 * Render a companion window using the appropriate component for the content
 */

var CompanionWindowFactory = /*#__PURE__*/function (_Component) {
  CompanionWindowFactory_inherits(CompanionWindowFactory, _Component);

  var _super = CompanionWindowFactory_createSuper(CompanionWindowFactory);

  /** */
  function CompanionWindowFactory(props) {
    var _this;

    CompanionWindowFactory_classCallCheck(this, CompanionWindowFactory);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */


  CompanionWindowFactory_createClass(CompanionWindowFactory, [{
    key: "componentDidUpdate",

    /**
     * Clear the error state if the internal content changes; this is a rare
     * case, only when we reuse an existing companionWindow instance for
     * the left-anchored companion area (anti-pattern?)
     */
    value: function componentDidUpdate(prevProps) {
      var content = this.props.content; // Typical usage (don't forget to compare props):

      if (content !== prevProps.content) {
        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          error: null,
          hasError: false
        });
      }
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          windowId = _this$props.windowId,
          id = _this$props.id,
          t = _this$props.t;
      var _this$state = this.state,
          error = _this$state.error,
          hasError = _this$state.hasError;

      if (hasError) {
        return /*#__PURE__*/external_React_default().createElement(CompanionWindow/* default */.Z, {
          title: t('error'),
          windowId: windowId,
          id: id
        }, /*#__PURE__*/external_React_default().createElement(containers_ErrorContent, {
          error: error,
          windowId: windowId,
          companionWindowId: id
        }));
      }

      var type = CompanionWindowRegistry/* default */.Z[content];
      if (!type) return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      return /*#__PURE__*/external_React_default().createElement(type, {
        id: id,
        windowId: windowId
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);

  return CompanionWindowFactory;
}(external_React_.Component);
CompanionWindowFactory.defaultProps = {
  content: null,
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/CompanionWindowFactory.js






/**
 * mapStateToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */

var CompanionWindowFactory_mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  var companionWindow = (0,companionWindows/* getCompanionWindow */.KW)(state, {
    companionWindowId: id
  });
  return {
    content: companionWindow.content,
    id: id
  };
};

var CompanionWindowFactory_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(CompanionWindowFactory_mapStateToProps), (0,withPlugins/* withPlugins */.A)('CompanionWindowFactory'));
/* harmony default export */ const containers_CompanionWindowFactory = (CompanionWindowFactory_enhance(CompanionWindowFactory));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/CompanionArea.js
function CompanionArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CompanionArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CompanionArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) CompanionArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) CompanionArea_defineProperties(Constructor, staticProps); return Constructor; }

function CompanionArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CompanionArea_setPrototypeOf(subClass, superClass); }

function CompanionArea_setPrototypeOf(o, p) { CompanionArea_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CompanionArea_setPrototypeOf(o, p); }

function CompanionArea_createSuper(Derived) { var hasNativeReflectConstruct = CompanionArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CompanionArea_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CompanionArea_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CompanionArea_possibleConstructorReturn(this, result); }; }

function CompanionArea_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return CompanionArea_assertThisInitialized(self); }

function CompanionArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CompanionArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CompanionArea_getPrototypeOf(o) { CompanionArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CompanionArea_getPrototypeOf(o); }








/** */

var CompanionArea = /*#__PURE__*/function (_Component) {
  CompanionArea_inherits(CompanionArea, _Component);

  var _super = CompanionArea_createSuper(CompanionArea);

  function CompanionArea() {
    CompanionArea_classCallCheck(this, CompanionArea);

    return _super.apply(this, arguments);
  }

  CompanionArea_createClass(CompanionArea, [{
    key: "areaLayoutClass",

    /** */
    value: function areaLayoutClass() {
      var _this$props = this.props,
          classes = _this$props.classes,
          position = _this$props.position;
      return position === 'bottom' || position === 'far-bottom' ? classes.horizontal : null;
    }
    /** */

  }, {
    key: "collapseIcon",
    value: function collapseIcon() {
      var _this$props2 = this.props,
          companionAreaOpen = _this$props2.companionAreaOpen,
          direction = _this$props2.direction;

      if (direction === 'rtl') {
        if (companionAreaOpen) return /*#__PURE__*/external_React_default().createElement(ArrowRightSharp/* default */.Z, null);
        return /*#__PURE__*/external_React_default().createElement(ArrowLeftSharp/* default */.Z, null);
      }

      if (companionAreaOpen) return /*#__PURE__*/external_React_default().createElement(ArrowLeftSharp/* default */.Z, null);
      return /*#__PURE__*/external_React_default().createElement(ArrowRightSharp/* default */.Z, null);
    }
    /** @private */

  }, {
    key: "slideDirection",
    value: function slideDirection() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          position = _this$props3.position;
      var defaultPosition = direction === 'rtl' ? 'left' : 'right';
      var oppositePosition = direction === 'rtl' ? 'right' : 'left';

      switch (position) {
        case 'right':
        case 'far-right':
          return oppositePosition;

        case 'bottom':
        case 'far-bottom':
          return 'up';

        default:
          return defaultPosition;
      }
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          companionWindowIds = _this$props4.companionWindowIds,
          companionAreaOpen = _this$props4.companionAreaOpen,
          setCompanionAreaOpen = _this$props4.setCompanionAreaOpen,
          position = _this$props4.position,
          sideBarOpen = _this$props4.sideBarOpen,
          t = _this$props4.t,
          windowId = _this$props4.windowId;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: [classes.root, this.areaLayoutClass(), (0,css_ns/* default */.Z)("companion-area-".concat(position))].join(' ')
      }, /*#__PURE__*/external_React_default().createElement(Slide_Slide, {
        "in": companionAreaOpen,
        direction: this.slideDirection()
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: [(0,css_ns/* default */.Z)('companion-windows'), companionWindowIds.length > 0 && classes[position], this.areaLayoutClass()].join(' '),
        style: {
          display: companionAreaOpen ? 'flex' : 'none'
        }
      }, companionWindowIds.map(function (id) {
        return /*#__PURE__*/external_React_default().createElement(containers_CompanionWindowFactory, {
          id: id,
          key: id,
          windowId: windowId
        });
      }))), setCompanionAreaOpen && position === 'left' && sideBarOpen && companionWindowIds.length > 0 && /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.toggle
      }, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-expanded": companionAreaOpen,
        "aria-label": companionAreaOpen ? t('collapseSidePanel') : t('expandSidePanel'),
        className: classes.toggleButton,
        key: companionAreaOpen ? 'collapse' : 'expand',
        onClick: function onClick() {
          setCompanionAreaOpen(windowId, !companionAreaOpen);
        },
        TooltipProps: {
          placement: 'right'
        }
      }, this.collapseIcon())));
    }
  }]);

  return CompanionArea;
}(external_React_.Component);
CompanionArea.defaultProps = {
  classes: {},
  setCompanionAreaOpen: function setCompanionAreaOpen() {},
  sideBarOpen: false
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/CompanionArea.js








/** */

var CompanionArea_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId,
      position = _ref.position;
  return {
    companionAreaOpen: (0,companionWindows/* getCompanionAreaVisibility */.a5)(state, {
      position: position,
      windowId: windowId
    }),
    companionWindowIds: (0,companionWindows/* getCompanionWindowIdsForPosition */.AP)(state, {
      position: position,
      windowId: windowId
    }),
    direction: (0,config/* getThemeDirection */.tt)(state),
    sideBarOpen: ((0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }) || {}).sideBarOpen
  };
};

var CompanionArea_mapDispatchToProps = {
  setCompanionAreaOpen: actions_window/* setCompanionAreaOpen */.Ud
};
/** */

var CompanionArea_styles = function styles(theme) {
  return {
    horizontal: {
      flexDirection: 'column',
      width: '100%'
    },
    left: {
      minWidth: 235
    },
    root: {
      display: 'flex',
      minHeight: 0,
      position: 'relative',
      zIndex: theme.zIndex.appBar - 2
    },
    toggle: {
      backgroundColor: theme.palette.background.paper,
      border: "1px solid ".concat(theme.palette.shades.dark),
      borderRadius: 0,
      height: '48px',
      left: '100%',
      marginTop: '1rem',
      padding: 2,
      position: 'absolute',
      width: '23px',
      zIndex: theme.zIndex.drawer
    },
    toggleButton: {
      marginBottom: 12,
      marginTop: 12,
      padding: 0
    }
  };
};

var CompanionArea_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(CompanionArea_styles), (0,es/* connect */.$j)(CompanionArea_mapStateToProps, CompanionArea_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('CompanionArea'));
/* harmony default export */ const containers_CompanionArea = (CompanionArea_enhance(CompanionArea));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/sequences.js
var sequences = __webpack_require__(95981);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(89659);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(71267);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowBackSharp.js
var ArrowBackSharp = __webpack_require__(1753);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/components/LabelValueMetadata.js
var LabelValueMetadata = __webpack_require__(11728);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/CollapsibleSection.js + 1 modules
var CollapsibleSection = __webpack_require__(91736);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/ManifestInfo.js + 1 modules
var ManifestInfo = __webpack_require__(42359);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/CollectionDialog.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CollectionDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollectionDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollectionDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) CollectionDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) CollectionDialog_defineProperties(Constructor, staticProps); return Constructor; }

function CollectionDialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CollectionDialog_setPrototypeOf(subClass, superClass); }

function CollectionDialog_setPrototypeOf(o, p) { CollectionDialog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CollectionDialog_setPrototypeOf(o, p); }

function CollectionDialog_createSuper(Derived) { var hasNativeReflectConstruct = CollectionDialog_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CollectionDialog_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CollectionDialog_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CollectionDialog_possibleConstructorReturn(this, result); }; }

function CollectionDialog_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return CollectionDialog_assertThisInitialized(self); }

function CollectionDialog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CollectionDialog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CollectionDialog_getPrototypeOf(o) { CollectionDialog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CollectionDialog_getPrototypeOf(o); }









/**
 */

function asArray(value) {
  if (!Array.isArray(value)) {
    return [value];
  }

  return value;
}
/**
 * a dialog providing the possibility to select the collection
 */


var CollectionDialog = /*#__PURE__*/function (_Component) {
  CollectionDialog_inherits(CollectionDialog, _Component);

  var _super = CollectionDialog_createSuper(CollectionDialog);

  CollectionDialog_createClass(CollectionDialog, null, [{
    key: "getUseableLabel",

    /** */
    value: function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
    }
    /** */

  }]);

  function CollectionDialog(props) {
    var _this;

    CollectionDialog_classCallCheck(this, CollectionDialog);

    _this = _super.call(this, props);
    _this.state = {
      filter: null
    };
    _this.hideDialog = _this.hideDialog.bind(CollectionDialog_assertThisInitialized(_this));
    return _this;
  }
  /** */


  CollectionDialog_createClass(CollectionDialog, [{
    key: "setFilter",
    value: function setFilter(filter) {
      this.setState({
        filter: filter
      });
    }
    /** */

  }, {
    key: "hideDialog",
    value: function hideDialog() {
      var _this$props = this.props,
          hideCollectionDialog = _this$props.hideCollectionDialog,
          windowId = _this$props.windowId;
      hideCollectionDialog(windowId);
    }
    /** */

  }, {
    key: "selectCollection",
    value: function selectCollection(c) {
      var _this$props2 = this.props,
          collectionPath = _this$props2.collectionPath,
          manifestId = _this$props2.manifestId,
          showCollectionDialog = _this$props2.showCollectionDialog,
          windowId = _this$props2.windowId;
      showCollectionDialog(c.id, [].concat(_toConsumableArray(collectionPath), [manifestId]), windowId);
    }
    /** */

  }, {
    key: "goToPreviousCollection",
    value: function goToPreviousCollection() {
      var _this$props3 = this.props,
          collectionPath = _this$props3.collectionPath,
          showCollectionDialog = _this$props3.showCollectionDialog,
          windowId = _this$props3.windowId;
      showCollectionDialog(collectionPath[collectionPath.length - 1], collectionPath.slice(0, -1), windowId);
    }
    /** */

  }, {
    key: "selectManifest",
    value: function selectManifest(m) {
      var _this$props4 = this.props,
          addWindow = _this$props4.addWindow,
          collectionPath = _this$props4.collectionPath,
          manifestId = _this$props4.manifestId,
          setWorkspaceAddVisibility = _this$props4.setWorkspaceAddVisibility,
          updateWindow = _this$props4.updateWindow,
          windowId = _this$props4.windowId;

      if (windowId) {
        updateWindow(windowId, {
          canvasId: null,
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      } else {
        addWindow({
          collectionPath: [].concat(_toConsumableArray(collectionPath), [manifestId]),
          manifestId: m.id
        });
      }

      this.hideDialog();
      setWorkspaceAddVisibility(false);
    }
    /** */

  }, {
    key: "dialogContainer",
    value: function dialogContainer() {
      var _this$props5 = this.props,
          containerId = _this$props5.containerId,
          windowId = _this$props5.windowId;
      return document.querySelector("#".concat(containerId, " #").concat(windowId));
    }
    /** */

  }, {
    key: "placeholder",
    value: function placeholder() {
      var classes = this.props.classes;
      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        open: true,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps()
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/external_React_default().createElement(containers_ScrollIndicatedDialogContent, null, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      }), /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      })));
    }
    /** */

  }, {
    key: "backdropProps",
    value: function backdropProps() {
      var classes = this.props.classes;
      return {
        classes: {
          root: classes.dialog
        }
      };
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          classes = _this$props6.classes,
          collection = _this$props6.collection,
          error = _this$props6.error,
          isMultipart = _this$props6.isMultipart,
          manifest = _this$props6.manifest,
          ready = _this$props6.ready,
          t = _this$props6.t;
      var filter = this.state.filter;
      if (error) return null; // If this component is optimistically rendering ahead of the window its in
      // force a re-render so that it is placed correctly. The right thing here is
      // to maybe pass a ref.

      if (!this.dialogContainer()) {
        this.forceUpdate();
        return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      }

      if (!ready) return this.placeholder();
      var rights = manifest && asArray(manifest.getProperty('rights') || manifest.getProperty('license'));
      var requiredStatement = manifest && asArray(manifest.getRequiredStatement()).filter(function (l) {
        return l.getValue();
      }).map(function (labelValuePair) {
        return {
          label: null,
          values: labelValuePair.getValues()
        };
      });
      var collections = manifest.getCollections();
      var currentFilter = filter || (collections.length > 0 ? 'collections' : 'manifests');
      return /*#__PURE__*/external_React_default().createElement(Dialog_Dialog, {
        className: classes.dialog,
        onClose: this.hideDialog,
        container: this.dialogContainer(),
        BackdropProps: this.backdropProps(),
        open: true
      }, /*#__PURE__*/external_React_default().createElement(DialogTitle_DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        component: "div",
        variant: "overline"
      }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h3"
      }, CollectionDialog.getUseableLabel(manifest))), /*#__PURE__*/external_React_default().createElement(containers_ScrollIndicatedDialogContent, {
        className: classes.dialogContent
      }, collection && /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        startIcon: /*#__PURE__*/external_React_default().createElement(ArrowBackSharp/* default */.Z, null),
        onClick: function onClick() {
          return _this2.goToPreviousCollection();
        }
      }, CollectionDialog.getUseableLabel(collection)), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.collectionMetadata
      }, /*#__PURE__*/external_React_default().createElement(ManifestInfo/* default */.Z, {
        manifestId: manifest.id
      }), /*#__PURE__*/external_React_default().createElement(CollapsibleSection/* default */.Z, {
        id: "select-collection-rights",
        label: t('attributionTitle')
      }, requiredStatement && /*#__PURE__*/external_React_default().createElement(LabelValueMetadata/* LabelValueMetadata */.K, {
        labelValuePairs: requiredStatement,
        defaultLabel: t('attribution')
      }), rights && rights.length > 0 && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "subtitle2",
        component: "dt"
      }, t('rights')), rights.map(function (v) {
        return /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
          variant: "body1",
          component: "dd",
          key: v
        }, /*#__PURE__*/external_React_default().createElement(Link/* default */.Z, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: v
        }, v));
      })))), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.collectionFilter
      }, manifest.getTotalCollections() > 0 && /*#__PURE__*/external_React_default().createElement(Chip/* default */.Z, {
        clickable: true,
        color: currentFilter === 'collections' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('collections');
        },
        label: t('totalCollections', {
          count: manifest.getTotalCollections()
        })
      }), manifest.getTotalManifests() > 0 && /*#__PURE__*/external_React_default().createElement(Chip/* default */.Z, {
        clickable: true,
        color: currentFilter === 'manifests' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('manifests');
        },
        label: t('totalManifests', {
          count: manifest.getTotalManifests()
        })
      })), currentFilter === 'collections' && /*#__PURE__*/external_React_default().createElement(MenuList/* default */.Z, null, collections.map(function (c) {
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          key: c.id,
          onClick: function onClick() {
            _this2.selectCollection(c);
          }
        }, CollectionDialog.getUseableLabel(c));
      })), currentFilter === 'manifests' && /*#__PURE__*/external_React_default().createElement(MenuList/* default */.Z, null, manifest.getManifests().map(function (m) {
        return /*#__PURE__*/external_React_default().createElement(MenuItem/* default */.Z, {
          key: m.id,
          onClick: function onClick() {
            _this2.selectManifest(m);
          }
        }, CollectionDialog.getUseableLabel(m));
      }))), /*#__PURE__*/external_React_default().createElement(DialogActions_DialogActions, null, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: this.hideDialog
      }, t('close'))));
    }
  }]);

  return CollectionDialog;
}(external_React_.Component);
CollectionDialog.defaultProps = {
  collection: null,
  collectionPath: [],
  containerId: null,
  error: null,
  isMultipart: false,
  ready: false,
  windowId: null
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/CollectionDialog.js








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof CollectionDialog
 * @private
 */

var CollectionDialog_mapDispatchToProps = {
  addWindow: actions_window/* addWindow */.QX,
  hideCollectionDialog: actions_window/* hideCollectionDialog */.mm,
  setWorkspaceAddVisibility: actions_workspace/* setWorkspaceAddVisibility */.B4,
  showCollectionDialog: actions_window/* showCollectionDialog */.FK,
  updateWindow: actions_window/* updateWindow */.zw
};
/**
 * mapStateToProps - to hook up connect
 * @memberof CollectionDialog
 * @private
 */

var CollectionDialog_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;

  var _getWindow = (0,getters/* getWindow */.Jj)(state, {
    windowId: windowId
  }),
      collectionPath = _getWindow.collectionPath,
      manifestId = _getWindow.collectionManifestId;

  var manifest = (0,getters/* getManifest */.WC)(state, {
    manifestId: manifestId
  });
  var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
  var collection = collectionId && (0,getters/* getManifest */.WC)(state, {
    manifestId: collectionId
  });
  return {
    collection: collection && (0,manifests/* getManifestoInstance */.hi)(state, {
      manifestId: collection.id
    }),
    collectionPath: collectionPath,
    containerId: (0,config/* getContainerId */.vW)(state),
    error: manifest && manifest.error,
    isMultipart: (0,sequences/* getSequenceBehaviors */.rm)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifest: manifest && (0,manifests/* getManifestoInstance */.hi)(state, {
      manifestId: manifestId
    }),
    manifestId: manifestId,
    open: state.workspace.collectionDialogOn,
    ready: manifest && !!manifest.json,
    windowId: windowId
  };
};
/** */


var CollectionDialog_styles = function styles(theme) {
  return {
    collectionFilter: {
      padding: '16px',
      paddingTop: 0
    },
    collectionMetadata: {
      padding: '16px'
    },
    dark: {
      color: '#000000'
    },
    dialog: {
      position: 'absolute !important'
    },
    dialogContent: {
      padding: 0
    },
    light: {
      color: theme.palette.grey[400]
    },
    listitem: {
      '&:focus': {
        backgroundColor: theme.palette.action.focus
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      cursor: 'pointer'
    }
  };
};

var CollectionDialog_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(CollectionDialog_styles), (0,es/* connect */.$j)(CollectionDialog_mapStateToProps, CollectionDialog_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('CollectionDialog'));
/* harmony default export */ const containers_CollectionDialog = (CollectionDialog_enhance(CollectionDialog));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/PrimaryWindow.js
function PrimaryWindow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrimaryWindow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PrimaryWindow_createClass(Constructor, protoProps, staticProps) { if (protoProps) PrimaryWindow_defineProperties(Constructor.prototype, protoProps); if (staticProps) PrimaryWindow_defineProperties(Constructor, staticProps); return Constructor; }

function PrimaryWindow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PrimaryWindow_setPrototypeOf(subClass, superClass); }

function PrimaryWindow_setPrototypeOf(o, p) { PrimaryWindow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PrimaryWindow_setPrototypeOf(o, p); }

function PrimaryWindow_createSuper(Derived) { var hasNativeReflectConstruct = PrimaryWindow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PrimaryWindow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PrimaryWindow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PrimaryWindow_possibleConstructorReturn(this, result); }; }

function PrimaryWindow_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return PrimaryWindow_assertThisInitialized(self); }

function PrimaryWindow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PrimaryWindow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function PrimaryWindow_getPrototypeOf(o) { PrimaryWindow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PrimaryWindow_getPrototypeOf(o); }







var AudioViewer = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(__webpack_require__, 37149));
});
var GalleryView = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(__webpack_require__, 71142));
});
var SelectCollection = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 710).then(__webpack_require__.bind(__webpack_require__, 46710));
});
var WindowViewer = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 390).then(__webpack_require__.bind(__webpack_require__, 5390));
});
var VideoViewer = /*#__PURE__*/(0,external_React_.lazy)(function () {
  return __webpack_require__.e(/* import() */ 399).then(__webpack_require__.bind(__webpack_require__, 54399));
});
GalleryView.displayName = 'GalleryView';
SelectCollection.displayName = 'SelectCollection';
WindowViewer.displayName = 'WindowViewer';
/**
 * PrimaryWindow - component that renders the primary content of a Mirador
 * window. Right now this differentiates between a Image, Video, or Audio viewer.
 */

var PrimaryWindow = /*#__PURE__*/function (_Component) {
  PrimaryWindow_inherits(PrimaryWindow, _Component);

  var _super = PrimaryWindow_createSuper(PrimaryWindow);

  function PrimaryWindow() {
    PrimaryWindow_classCallCheck(this, PrimaryWindow);

    return _super.apply(this, arguments);
  }

  PrimaryWindow_createClass(PrimaryWindow, [{
    key: "renderViewer",

    /**
     * renderViewer - logic used to determine what type of view to show
     *
     * @return {(String|null)}
     */
    value: function renderViewer() {
      var _this$props = this.props,
          audioResources = _this$props.audioResources,
          isCollection = _this$props.isCollection,
          isFetching = _this$props.isFetching,
          videoResources = _this$props.videoResources,
          view = _this$props.view,
          windowId = _this$props.windowId;

      if (isCollection) {
        return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(SelectCollection, {
          windowId: windowId
        }));
      }

      if (isFetching === false) {
        if (view === 'gallery') {
          return /*#__PURE__*/external_React_default().createElement(GalleryView, {
            windowId: windowId
          });
        }

        if (videoResources.length > 0) {
          return /*#__PURE__*/external_React_default().createElement(VideoViewer, {
            windowId: windowId
          });
        }

        if (audioResources.length > 0) {
          return /*#__PURE__*/external_React_default().createElement(AudioViewer, {
            windowId: windowId
          });
        }

        return /*#__PURE__*/external_React_default().createElement(WindowViewer, {
          windowId: windowId
        });
      }

      return null;
    }
    /**
     * Render the component
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isCollectionDialogVisible = _this$props2.isCollectionDialogVisible,
          windowId = _this$props2.windowId,
          classes = _this$props2.classes;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classnames_default()((0,css_ns/* default */.Z)('primary-window'), classes.primaryWindow)
      }, /*#__PURE__*/external_React_default().createElement(containers_WindowSideBar, {
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(containers_CompanionArea, {
        windowId: windowId,
        position: "left"
      }), isCollectionDialogVisible && /*#__PURE__*/external_React_default().createElement(containers_CollectionDialog, {
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement(external_React_.Suspense, {
        fallback: /*#__PURE__*/external_React_default().createElement("div", null)
      }, this.renderViewer()));
    }
  }]);

  return PrimaryWindow;
}(external_React_.Component);
PrimaryWindow.defaultProps = {
  audioResources: [],
  isCollection: false,
  isCollectionDialogVisible: false,
  isFetching: false,
  videoResources: [],
  view: undefined
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/PrimaryWindow.js






/** */

var PrimaryWindow_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var manifestoInstance = (0,manifests/* getManifestoInstance */.hi)(state, {
    windowId: windowId
  });
  return {
    audioResources: (0,canvases/* getVisibleCanvasAudioResources */.Ul)(state, {
      windowId: windowId
    }) || [],
    isCollection: manifestoInstance && manifestoInstance.isCollection(),
    isCollectionDialogVisible: (0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }).collectionDialogOn,
    videoResources: (0,canvases/* getVisibleCanvasVideoResources */.e0)(state, {
      windowId: windowId
    }) || []
  };
};

var PrimaryWindow_styles = {
  primaryWindow: {
    display: 'flex',
    flex: 1,
    position: 'relative'
  }
};
var PrimaryWindow_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(PrimaryWindow_styles), (0,es/* connect */.$j)(PrimaryWindow_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('PrimaryWindow'));
/* harmony default export */ const containers_PrimaryWindow = (PrimaryWindow_enhance(PrimaryWindow));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/MinimalWindow.js
function MinimalWindow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MinimalWindow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MinimalWindow_createClass(Constructor, protoProps, staticProps) { if (protoProps) MinimalWindow_defineProperties(Constructor.prototype, protoProps); if (staticProps) MinimalWindow_defineProperties(Constructor, staticProps); return Constructor; }

function MinimalWindow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MinimalWindow_setPrototypeOf(subClass, superClass); }

function MinimalWindow_setPrototypeOf(o, p) { MinimalWindow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MinimalWindow_setPrototypeOf(o, p); }

function MinimalWindow_createSuper(Derived) { var hasNativeReflectConstruct = MinimalWindow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MinimalWindow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MinimalWindow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MinimalWindow_possibleConstructorReturn(this, result); }; }

function MinimalWindow_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return MinimalWindow_assertThisInitialized(self); }

function MinimalWindow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MinimalWindow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function MinimalWindow_getPrototypeOf(o) { MinimalWindow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MinimalWindow_getPrototypeOf(o); }











/** */

var MinimalWindow = /*#__PURE__*/function (_Component) {
  MinimalWindow_inherits(MinimalWindow, _Component);

  var _super = MinimalWindow_createSuper(MinimalWindow);

  function MinimalWindow() {
    MinimalWindow_classCallCheck(this, MinimalWindow);

    return _super.apply(this, arguments);
  }

  MinimalWindow_createClass(MinimalWindow, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          allowClose = _this$props.allowClose,
          allowWindowSideBar = _this$props.allowWindowSideBar,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          classes = _this$props.classes,
          label = _this$props.label,
          removeWindow = _this$props.removeWindow,
          t = _this$props.t,
          windowId = _this$props.windowId;
      return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        component: "section",
        elevation: 1,
        id: windowId,
        className: classnames_default()(classes.window, (0,css_ns/* default */.Z)('placeholder-window')),
        "aria-label": label && ariaLabel ? t('window', {
          label: label
        }) : null
      }, /*#__PURE__*/external_React_default().createElement(AppBar_AppBar, {
        position: "relative",
        color: "default"
      }, /*#__PURE__*/external_React_default().createElement(Toolbar/* default */.Z, {
        disableGutters: true,
        className: classnames_default()(classes.windowTopBarStyle, (0,css_ns/* default */.Z)('window-top-bar')),
        variant: "dense"
      }, allowWindowSideBar && /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('toggleWindowSideBar'),
        disabled: true
      }, /*#__PURE__*/external_React_default().createElement(MenuSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.title
      }, label), allowClose && removeWindow && /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('closeWindow'),
        className: classnames_default()(classes.button, (0,css_ns/* default */.Z)('window-close')),
        onClick: removeWindow,
        TooltipProps: {
          tabIndex: ariaLabel ? '0' : '-1'
        }
      }, /*#__PURE__*/external_React_default().createElement(CloseSharp/* default */.Z, null)))), children);
    }
  }]);

  return MinimalWindow;
}(external_React_.Component);
MinimalWindow.defaultProps = {
  allowClose: true,
  allowWindowSideBar: true,
  ariaLabel: true,
  children: null,
  classes: {},
  label: '',
  removeWindow: function removeWindow() {},
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/MinimalWindow.js
function MinimalWindow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MinimalWindow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MinimalWindow_ownKeys(Object(source), true).forEach(function (key) { MinimalWindow_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MinimalWindow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MinimalWindow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/** mapStateToProps */

var MinimalWindow_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    allowClose: (0,windows/* getWindowConfig */.Em)(state, {
      windowId: windowId
    }).allowClose,
    allowWindowSideBar: (0,windows/* getWindowConfig */.Em)(state, {
      windowId: windowId
    }).allowWindowSideBar
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var MinimalWindow_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    removeWindow: function removeWindow() {
      return dispatch(actions_window/* removeWindow */.i0(windowId));
    }
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */


var MinimalWindow_styles = function styles(theme) {
  return {
    button: {
      marginLeft: 'auto'
    },
    title: MinimalWindow_objectSpread(MinimalWindow_objectSpread({}, theme.typography.h6), {}, {
      flexGrow: 1,
      paddingLeft: theme.spacing(0.5)
    }),
    window: {
      backgroundColor: theme.palette.shades.dark,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    },
    windowTopBarStyle: {
      backgroundColor: theme.palette.shades.main,
      borderTop: '2px solid transparent',
      minHeight: 32,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    }
  };
};

var MinimalWindow_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(MinimalWindow_styles), (0,es/* connect */.$j)(MinimalWindow_mapStateToProps, MinimalWindow_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('MinimalWindow'));
/* harmony default export */ const containers_MinimalWindow = (MinimalWindow_enhance(MinimalWindow));
// EXTERNAL MODULE: ./node_modules/manifesto.js/dist-esmodule/Utils.js
var Utils = __webpack_require__(45698);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/auth.js
var auth = __webpack_require__(27693);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/auth.js
var selectors_auth = __webpack_require__(97193);
// EXTERNAL MODULE: ./node_modules/icomcom-react/dist/index.js
var dist = __webpack_require__(96622);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/AccessTokenSender.js
function AccessTokenSender_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AccessTokenSender_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AccessTokenSender_createClass(Constructor, protoProps, staticProps) { if (protoProps) AccessTokenSender_defineProperties(Constructor.prototype, protoProps); if (staticProps) AccessTokenSender_defineProperties(Constructor, staticProps); return Constructor; }

function AccessTokenSender_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AccessTokenSender_setPrototypeOf(subClass, superClass); }

function AccessTokenSender_setPrototypeOf(o, p) { AccessTokenSender_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AccessTokenSender_setPrototypeOf(o, p); }

function AccessTokenSender_createSuper(Derived) { var hasNativeReflectConstruct = AccessTokenSender_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AccessTokenSender_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AccessTokenSender_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AccessTokenSender_possibleConstructorReturn(this, result); }; }

function AccessTokenSender_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return AccessTokenSender_assertThisInitialized(self); }

function AccessTokenSender_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AccessTokenSender_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function AccessTokenSender_getPrototypeOf(o) { AccessTokenSender_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AccessTokenSender_getPrototypeOf(o); }



/**
 * Opens a new window for click
 */

var AccessTokenSender = /*#__PURE__*/function (_Component) {
  AccessTokenSender_inherits(AccessTokenSender, _Component);

  var _super = AccessTokenSender_createSuper(AccessTokenSender);

  /** */
  function AccessTokenSender(props) {
    var _this;

    AccessTokenSender_classCallCheck(this, AccessTokenSender);

    _this = _super.call(this, props);
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(AccessTokenSender_assertThisInitialized(_this));
    return _this;
  }
  /** @private */


  AccessTokenSender_createClass(AccessTokenSender, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(e) {
      var _this$props = this.props,
          handleAccessTokenMessage = _this$props.handleAccessTokenMessage,
          url = _this$props.url;
      if (e.data && e.data.messageId && e.data.messageId === url) handleAccessTokenMessage(e.data);
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      if (!url) return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null);
      /**
      login, clickthrough/kiosk open @id, wait for close
      external, no-op
      */

      return /*#__PURE__*/external_React_default().createElement(dist/* default */.Z, {
        attributes: {
          'aria-hidden': true,
          height: 1,
          src: "".concat(url, "?origin=").concat(window.origin, "&messageId=").concat(url),
          style: {
            visibility: 'hidden'
          },
          width: 1
        },
        handleReceiveMessage: this.onReceiveAccessTokenMessage
      });
    }
  }]);

  return AccessTokenSender;
}(external_React_.Component);
AccessTokenSender.defaultProps = {
  url: undefined
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/NewWindow.js
function NewWindow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewWindow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewWindow_createClass(Constructor, protoProps, staticProps) { if (protoProps) NewWindow_defineProperties(Constructor.prototype, protoProps); if (staticProps) NewWindow_defineProperties(Constructor, staticProps); return Constructor; }

function NewWindow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NewWindow_setPrototypeOf(subClass, superClass); }

function NewWindow_setPrototypeOf(o, p) { NewWindow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NewWindow_setPrototypeOf(o, p); }

function NewWindow_createSuper(Derived) { var hasNativeReflectConstruct = NewWindow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NewWindow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NewWindow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NewWindow_possibleConstructorReturn(this, result); }; }

function NewWindow_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return NewWindow_assertThisInitialized(self); }

function NewWindow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NewWindow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function NewWindow_getPrototypeOf(o) { NewWindow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NewWindow_getPrototypeOf(o); }



/**
 * Opens a new window for click
 */
var NewWindow = /*#__PURE__*/function (_Component) {
  NewWindow_inherits(NewWindow, _Component);

  var _super = NewWindow_createSuper(NewWindow);

  /** */
  function NewWindow(props) {
    var _this;

    NewWindow_classCallCheck(this, NewWindow);

    _this = _super.call(this, props);
    _this.released = undefined;
    _this.window = null;
    _this.checkIfWindowClosed = null;
    return _this;
  }
  /** */


  NewWindow_createClass(NewWindow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.openWindow();
    }
    /**
     * Close the opened window we unmount
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.window) {
        this.window.close();
      }
    }
    /** @private */

  }, {
    key: "onClose",
    value: function onClose() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          url = _this$props.url;
      if (this.released) return;
      this.released = true;
      clearInterval(this.checkIfWindowClosed);
      onClose(url);
    }
    /** */

  }, {
    key: "openWindow",
    value: function openWindow() {
      var _this2 = this;

      var _this$props2 = this.props,
          depWindow = _this$props2.depWindow,
          features = _this$props2.features,
          name = _this$props2.name,
          url = _this$props2.url;
      this.window = (depWindow || window).open(url, name, features);
      this.released = false;
      this.checkIfWindowClosed = setInterval(function () {
        if (!_this2.window || _this2.window.closed) {
          _this2.onClose();
        }
      }, 250);
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return NewWindow;
}(external_React_.Component);
NewWindow.defaultProps = {
  depWindow: undefined,
  features: undefined,
  name: undefined
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/colorManipulator.js
var styles_colorManipulator = __webpack_require__(59114);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LockSharp.js
var LockSharp = __webpack_require__(68963);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/containers/SanitizedHtml.js + 2 modules
var SanitizedHtml = __webpack_require__(45941);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WindowAuthenticationBar.js
function WindowAuthenticationBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function WindowAuthenticationBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WindowAuthenticationBar_ownKeys(Object(source), true).forEach(function (key) { WindowAuthenticationBar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WindowAuthenticationBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WindowAuthenticationBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WindowAuthenticationBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WindowAuthenticationBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WindowAuthenticationBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) WindowAuthenticationBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) WindowAuthenticationBar_defineProperties(Constructor, staticProps); return Constructor; }

function WindowAuthenticationBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WindowAuthenticationBar_setPrototypeOf(subClass, superClass); }

function WindowAuthenticationBar_setPrototypeOf(o, p) { WindowAuthenticationBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WindowAuthenticationBar_setPrototypeOf(o, p); }

function WindowAuthenticationBar_createSuper(Derived) { var hasNativeReflectConstruct = WindowAuthenticationBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WindowAuthenticationBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WindowAuthenticationBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WindowAuthenticationBar_possibleConstructorReturn(this, result); }; }

function WindowAuthenticationBar_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WindowAuthenticationBar_assertThisInitialized(self); }

function WindowAuthenticationBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WindowAuthenticationBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WindowAuthenticationBar_getPrototypeOf(o) { WindowAuthenticationBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WindowAuthenticationBar_getPrototypeOf(o); }










/** */

var WindowAuthenticationBar = /*#__PURE__*/function (_Component) {
  WindowAuthenticationBar_inherits(WindowAuthenticationBar, _Component);

  var _super = WindowAuthenticationBar_createSuper(WindowAuthenticationBar);

  /** */
  function WindowAuthenticationBar(props) {
    var _this;

    WindowAuthenticationBar_classCallCheck(this, WindowAuthenticationBar);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.setOpen = _this.setOpen.bind(WindowAuthenticationBar_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(WindowAuthenticationBar_assertThisInitialized(_this));
    return _this;
  }
  /** */


  WindowAuthenticationBar_createClass(WindowAuthenticationBar, [{
    key: "onSubmit",
    value: function onSubmit() {
      var onConfirm = this.props.onConfirm;
      this.setOpen(false);
      onConfirm();
    }
    /** Toggle the full description */

  }, {
    key: "setOpen",
    value: function setOpen(open) {
      this.setState(function (state) {
        return WindowAuthenticationBar_objectSpread(WindowAuthenticationBar_objectSpread({}, state), {}, {
          open: open
        });
      });
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          confirmButton = _this$props.confirmButton,
          continueLabel = _this$props.continueLabel,
          header = _this$props.header,
          description = _this$props.description,
          icon = _this$props.icon,
          label = _this$props.label,
          t = _this$props.t,
          ruleSet = _this$props.ruleSet,
          hasLogoutService = _this$props.hasLogoutService,
          status = _this$props.status,
          ConfirmProps = _this$props.ConfirmProps;
      if (status === 'ok' && !hasLogoutService) return null;
      var open = this.state.open;
      var button = /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, Object.assign({
        onClick: this.onSubmit,
        className: classes.buttonInvert,
        color: "secondary"
      }, ConfirmProps), confirmButton || t('login'));

      if (!description && !header) {
        return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
          square: true,
          elevation: 4,
          color: "secondary",
          classes: {
            root: classes.paper
          }
        }, /*#__PURE__*/external_React_default().createElement("div", {
          className: classes.topBar
        }, icon || /*#__PURE__*/external_React_default().createElement(LockSharp/* default */.Z, {
          className: classes.icon
        }), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
          className: classes.label,
          component: "h3",
          variant: "body1",
          color: "inherit"
        }, ruleSet ? /*#__PURE__*/external_React_default().createElement(SanitizedHtml/* default */.Z, {
          htmlString: label,
          ruleSet: ruleSet
        }) : label), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props), button));
      }

      return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        square: true,
        elevation: 4,
        color: "secondary",
        classes: {
          root: classes.paper
        }
      }, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        fullWidth: true,
        className: classes.topBar,
        onClick: function onClick() {
          return _this2.setOpen(true);
        },
        component: "div",
        color: "inherit"
      }, icon || /*#__PURE__*/external_React_default().createElement(LockSharp/* default */.Z, {
        className: classes.icon
      }), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        className: classes.label,
        component: "h3",
        variant: "body1",
        color: "inherit"
      }, ruleSet ? /*#__PURE__*/external_React_default().createElement(SanitizedHtml/* default */.Z, {
        htmlString: label,
        ruleSet: ruleSet
      }) : label), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props), /*#__PURE__*/external_React_default().createElement("span", {
        className: classes.fauxButton
      }, !open && /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "button",
        color: "inherit"
      }, continueLabel || t('continue')))), /*#__PURE__*/external_React_default().createElement(Collapse/* default */.Z, {
        "in": open,
        onClose: function onClose() {
          return _this2.setOpen(false);
        }
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "body1",
        color: "inherit",
        className: classes.expanded
      }, ruleSet ? /*#__PURE__*/external_React_default().createElement(SanitizedHtml/* default */.Z, {
        htmlString: header,
        ruleSet: ruleSet
      }) : header, header && description ? ': ' : '', ruleSet ? /*#__PURE__*/external_React_default().createElement(SanitizedHtml/* default */.Z, {
        htmlString: description,
        ruleSet: ruleSet
      }) : description), /*#__PURE__*/external_React_default().createElement(DialogActions_DialogActions, null, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: function onClick() {
          return _this2.setOpen(false);
        },
        color: "inherit"
      }, t('cancel')), button)));
    }
  }]);

  return WindowAuthenticationBar;
}(external_React_.Component);
WindowAuthenticationBar.defaultProps = {
  confirmButton: undefined,
  ConfirmProps: {},
  continueLabel: undefined,
  description: undefined,
  hasLogoutService: true,
  header: undefined,
  icon: undefined,
  ruleSet: 'iiif',
  status: undefined,
  t: function t(k) {
    return k;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WindowAuthenticationBar.js






/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var WindowAuthenticationBar_styles = function styles(theme) {
  return {
    buttonInvert: {
      '&:hover': {
        backgroundColor: (0,styles_colorManipulator/* fade */.U1)(theme.palette.secondary.contrastText, 1 - theme.palette.action.hoverOpacity)
      },
      backgroundColor: theme.palette.secondary.contrastText,
      marginLeft: theme.spacing(5),
      paddingBottom: 0,
      paddingTop: 0
    },
    expanded: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing()
    },
    failure: {
      backgroundColor: theme.palette.error.dark
    },
    fauxButton: {
      marginLeft: theme.spacing(2.5)
    },
    icon: {
      marginRight: theme.spacing(1.5),
      verticalAlign: 'text-bottom'
    },
    label: {
      lineHeight: 2.25
    },
    paper: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      cursor: 'pointer'
    },
    topBar: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'inherit',
      padding: theme.spacing(1),
      textTransform: 'none'
    }
  };
};

var WindowAuthenticationBar_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WindowAuthenticationBar_styles), (0,withPlugins/* withPlugins */.A)('WindowAuthenticationBar'));
/* harmony default export */ const containers_WindowAuthenticationBar = (WindowAuthenticationBar_enhance(WindowAuthenticationBar));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/IIIFAuthentication.js
function IIIFAuthentication_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IIIFAuthentication_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function IIIFAuthentication_createClass(Constructor, protoProps, staticProps) { if (protoProps) IIIFAuthentication_defineProperties(Constructor.prototype, protoProps); if (staticProps) IIIFAuthentication_defineProperties(Constructor, staticProps); return Constructor; }

function IIIFAuthentication_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) IIIFAuthentication_setPrototypeOf(subClass, superClass); }

function IIIFAuthentication_setPrototypeOf(o, p) { IIIFAuthentication_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IIIFAuthentication_setPrototypeOf(o, p); }

function IIIFAuthentication_createSuper(Derived) { var hasNativeReflectConstruct = IIIFAuthentication_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = IIIFAuthentication_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = IIIFAuthentication_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return IIIFAuthentication_possibleConstructorReturn(this, result); }; }

function IIIFAuthentication_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return IIIFAuthentication_assertThisInitialized(self); }

function IIIFAuthentication_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function IIIFAuthentication_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function IIIFAuthentication_getPrototypeOf(o) { IIIFAuthentication_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IIIFAuthentication_getPrototypeOf(o); }





/**
 * Opens a new window for click
 */

var IIIFAuthentication = /*#__PURE__*/function (_Component) {
  IIIFAuthentication_inherits(IIIFAuthentication, _Component);

  var _super = IIIFAuthentication_createSuper(IIIFAuthentication);

  /** */
  function IIIFAuthentication(props) {
    var _this;

    IIIFAuthentication_classCallCheck(this, IIIFAuthentication);

    _this = _super.call(this, props);
    _this.performLogout = _this.performLogout.bind(IIIFAuthentication_assertThisInitialized(_this));
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(IIIFAuthentication_assertThisInitialized(_this));
    return _this;
  }
  /** */


  IIIFAuthentication_createClass(IIIFAuthentication, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(payload) {
      var _this$props = this.props,
          authServiceId = _this$props.authServiceId,
          accessTokenServiceId = _this$props.accessTokenServiceId,
          resolveAccessTokenRequest = _this$props.resolveAccessTokenRequest;
      resolveAccessTokenRequest(authServiceId, accessTokenServiceId, payload);
    }
    /** */

  }, {
    key: "defaultAuthBarProps",
    value: function defaultAuthBarProps() {
      var _this$props2 = this.props,
          authServiceId = _this$props2.authServiceId,
          windowId = _this$props2.windowId,
          status = _this$props2.status,
          logoutServiceId = _this$props2.logoutServiceId;
      return {
        authServiceId: authServiceId,
        hasLogoutService: !!logoutServiceId,
        status: status,
        windowId: windowId
      };
    }
    /** handle the IIIF logout workflow */

  }, {
    key: "performLogout",
    value: function performLogout() {
      var _this$props3 = this.props,
          accessTokenServiceId = _this$props3.accessTokenServiceId,
          authServiceId = _this$props3.authServiceId,
          features = _this$props3.features,
          logoutServiceId = _this$props3.logoutServiceId,
          resetAuthenticationState = _this$props3.resetAuthenticationState,
          openWindow = _this$props3.openWindow;
      openWindow(logoutServiceId, undefined, features);
      resetAuthenticationState({
        authServiceId: authServiceId,
        tokenServiceId: accessTokenServiceId
      });
    }
    /** Render the auth bar for logged in users */

  }, {
    key: "renderLoggedIn",
    value: function renderLoggedIn() {
      var _this$props4 = this.props,
          isInteractive = _this$props4.isInteractive,
          logoutConfirm = _this$props4.logoutConfirm,
          t = _this$props4.t;
      if (!isInteractive) return null;
      return /*#__PURE__*/external_React_default().createElement(containers_WindowAuthenticationBar, Object.assign({
        confirmButton: logoutConfirm || t('logout'),
        onConfirm: this.performLogout
      }, this.defaultAuthBarProps()));
    }
    /** Render whatever shows up after the interactive login attempt fails */

  }, {
    key: "renderFailure",
    value: function renderFailure() {
      var _this$props5 = this.props,
          handleAuthInteraction = _this$props5.handleAuthInteraction,
          header = _this$props5.failureHeader,
          description = _this$props5.failureDescription,
          t = _this$props5.t,
          authServiceId = _this$props5.authServiceId,
          windowId = _this$props5.windowId;
      return /*#__PURE__*/external_React_default().createElement(containers_WindowAuthenticationBar, Object.assign({
        header: header,
        description: description,
        confirmButton: t('retry'),
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }
    /** Render the login bar after we're logging in */

  }, {
    key: "renderLoggingInCookie",
    value: function renderLoggingInCookie() {
      var _this$props6 = this.props,
          accessTokenServiceId = _this$props6.accessTokenServiceId,
          authServiceId = _this$props6.authServiceId,
          resolveAuthenticationRequest = _this$props6.resolveAuthenticationRequest,
          features = _this$props6.features;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, this.renderLogin(), /*#__PURE__*/external_React_default().createElement(NewWindow, {
        name: "IiifLoginSender",
        url: "".concat(authServiceId, "?origin=").concat(window.origin),
        features: features,
        onClose: function onClose() {
          return resolveAuthenticationRequest(authServiceId, accessTokenServiceId);
        }
      }));
    }
    /** Render the login bar after we're logging in */

  }, {
    key: "renderLoggingInToken",
    value: function renderLoggingInToken() {
      var accessTokenServiceId = this.props.accessTokenServiceId;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, this.renderLogin(), /*#__PURE__*/external_React_default().createElement(AccessTokenSender, {
        handleAccessTokenMessage: this.onReceiveAccessTokenMessage,
        url: accessTokenServiceId
      }));
    }
    /** Render a login bar */

  }, {
    key: "renderLogin",
    value: function renderLogin() {
      var _this$props7 = this.props,
          confirm = _this$props7.confirm,
          description = _this$props7.description,
          handleAuthInteraction = _this$props7.handleAuthInteraction,
          header = _this$props7.header,
          isInteractive = _this$props7.isInteractive,
          label = _this$props7.label,
          authServiceId = _this$props7.authServiceId,
          windowId = _this$props7.windowId;
      if (!isInteractive) return null;
      return /*#__PURE__*/external_React_default().createElement(containers_WindowAuthenticationBar, Object.assign({
        header: header,
        description: description,
        label: label,
        confirmButton: confirm,
        onConfirm: function onConfirm() {
          return handleAuthInteraction(windowId, authServiceId);
        }
      }, this.defaultAuthBarProps()));
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          authServiceId = _this$props8.authServiceId,
          status = _this$props8.status;
      if (!authServiceId) return null;
      if (status === null) return this.renderLogin();
      if (status === 'cookie') return this.renderLoggingInCookie();
      if (status === 'token') return this.renderLoggingInToken();
      if (status === 'failed') return this.renderFailure();
      if (status === 'ok') return this.renderLoggedIn();
      return null;
    }
  }]);

  return IIIFAuthentication;
}(external_React_.Component);
IIIFAuthentication.defaultProps = {
  confirm: undefined,
  description: undefined,
  failureDescription: undefined,
  failureHeader: undefined,
  features: 'centerscreen',
  header: undefined,
  isInteractive: true,
  label: undefined,
  logoutConfirm: undefined,
  logoutServiceId: undefined,
  openWindow: window.open,
  status: null,
  t: function t(k) {
    return k;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/IIIFAuthentication.js








/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */

var IIIFAuthentication_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var services = (0,selectors_auth/* selectCurrentAuthServices */.pB)(state, {
    windowId: windowId
  }); // TODO: get the most actionable auth service...

  var service = services[0];
  var accessTokenService = service && (Utils/* Utils.getService */.c.getService(service, 'http://iiif.io/api/auth/1/token') || Utils/* Utils.getService */.c.getService(service, 'http://iiif.io/api/auth/0/token'));
  var logoutService = service && (Utils/* Utils.getService */.c.getService(service, 'http://iiif.io/api/auth/1/logout') || Utils/* Utils.getService */.c.getService(service, 'http://iiif.io/api/auth/0/logout'));
  var authStatuses = (0,selectors_auth/* getAuth */.v0)(state);
  var authStatus = service && authStatuses[service.id];
  var accessTokens = (0,selectors_auth/* getAccessTokens */.f2)(state);
  var accessTokenStatus = accessTokenService && accessTokens[accessTokenService.id];
  var status = null;

  if (!authStatus) {
    status = null;
  } else if (authStatus.isFetching) {
    if (authStatus.windowId === windowId) status = 'cookie';
  } else if (accessTokenStatus && accessTokenStatus.isFetching) {
    if (authStatus.windowId === windowId) status = 'token';
  } else if (authStatus.ok) {
    status = 'ok';
  } else if (authStatus.ok === false) {
    status = 'failed';
  }

  var authProfiles = (0,selectors_auth/* getAuthProfiles */.CC)(state);
  var profile = service && service.getProfile();
  var isInteractive = authProfiles.some(function (config) {
    return config.profile === profile && !(config.external || config.kiosk);
  });
  return {
    accessTokenServiceId: accessTokenService && accessTokenService.id,
    authServiceId: service && service.id,
    confirm: service && service.getConfirmLabel(),
    description: service && service.getDescription(),
    failureDescription: service && service.getFailureDescription(),
    failureHeader: service && service.getFailureHeader(),
    header: service && service.getHeader(),
    isInteractive: isInteractive,
    label: service && service.getLabel()[0].value,
    logoutConfirm: logoutService && logoutService.getLabel()[0] && logoutService.getLabel()[0].value,
    logoutServiceId: logoutService && logoutService.id,
    profile: profile,
    status: status
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var IIIFAuthentication_mapDispatchToProps = {
  handleAuthInteraction: auth/* addAuthenticationRequest */.P0,
  resetAuthenticationState: auth/* resetAuthenticationState */.ZN,
  resolveAccessTokenRequest: auth/* resolveAccessTokenRequest */.zJ,
  resolveAuthenticationRequest: auth/* resolveAuthenticationRequest */.gk
};
var IIIFAuthentication_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(IIIFAuthentication_mapStateToProps, IIIFAuthentication_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('IIIFAuthentication'));
/* harmony default export */ const containers_IIIFAuthentication = (IIIFAuthentication_enhance(IIIFAuthentication));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/Window.js
function Window_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Window_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Window_createClass(Constructor, protoProps, staticProps) { if (protoProps) Window_defineProperties(Constructor.prototype, protoProps); if (staticProps) Window_defineProperties(Constructor, staticProps); return Constructor; }

function Window_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Window_setPrototypeOf(subClass, superClass); }

function Window_setPrototypeOf(o, p) { Window_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Window_setPrototypeOf(o, p); }

function Window_createSuper(Derived) { var hasNativeReflectConstruct = Window_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Window_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Window_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Window_possibleConstructorReturn(this, result); }; }

function Window_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Window_assertThisInitialized(self); }

function Window_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Window_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Window_getPrototypeOf(o) { Window_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Window_getPrototypeOf(o); }













/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */

var Window = /*#__PURE__*/function (_Component) {
  Window_inherits(Window, _Component);

  var _super = Window_createSuper(Window);

  /** */
  function Window(props) {
    var _this;

    Window_classCallCheck(this, Window);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /** */


  Window_createClass(Window, [{
    key: "wrappedTopBar",

    /**
     * wrappedTopBar - will conditionally wrap a WindowTopBar for needed
     * additional functionality based on workspace type
     */
    value: function wrappedTopBar() {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          workspaceType = _this$props.workspaceType,
          windowDraggable = _this$props.windowDraggable;
      var topBar = /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement(containers_WindowTopBar, {
        windowId: windowId,
        windowDraggable: windowDraggable
      }), /*#__PURE__*/external_React_default().createElement(containers_IIIFAuthentication, {
        windowId: windowId
      }));

      if (workspaceType === 'mosaic' && windowDraggable) {
        var mosaicWindowActions = this.context.mosaicWindowActions;
        return mosaicWindowActions.connectDragSource(topBar);
      }

      return topBar;
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          focusWindow = _this$props2.focusWindow,
          label = _this$props2.label,
          isFetching = _this$props2.isFetching,
          maximized = _this$props2.maximized,
          sideBarOpen = _this$props2.sideBarOpen,
          view = _this$props2.view,
          windowId = _this$props2.windowId,
          classes = _this$props2.classes,
          t = _this$props2.t,
          manifestError = _this$props2.manifestError;
      var _this$state = this.state,
          error = _this$state.error,
          hasError = _this$state.hasError;

      if (hasError) {
        return /*#__PURE__*/external_React_default().createElement(containers_MinimalWindow, {
          windowId: windowId
        }, /*#__PURE__*/external_React_default().createElement(containers_ErrorContent, {
          error: error,
          windowId: windowId
        }));
      }

      return /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        onFocus: focusWindow,
        component: "section",
        elevation: 1,
        id: windowId,
        className: classnames_default()(classes.window, (0,css_ns/* default */.Z)('window'), maximized ? classes.maximized : null),
        "aria-label": t('window', {
          label: label
        })
      }, this.wrappedTopBar(), manifestError && /*#__PURE__*/external_React_default().createElement(containers_ErrorContent, {
        error: {
          stack: manifestError
        },
        windowId: windowId
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.middle
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.middleLeft
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.primaryWindow
      }, /*#__PURE__*/external_React_default().createElement(containers_PrimaryWindow, {
        view: view,
        windowId: windowId,
        isFetching: isFetching,
        sideBarOpen: sideBarOpen
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.companionAreaBottom
      }, /*#__PURE__*/external_React_default().createElement(containers_CompanionArea, {
        windowId: windowId,
        position: "bottom"
      }))), /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.companionAreaRight
      }, /*#__PURE__*/external_React_default().createElement(containers_CompanionArea, {
        windowId: windowId,
        position: "right"
      }), /*#__PURE__*/external_React_default().createElement(containers_CompanionArea, {
        windowId: windowId,
        position: "far-right"
      }))), /*#__PURE__*/external_React_default().createElement(containers_CompanionArea, {
        windowId: windowId,
        position: "far-bottom"
      }), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        error: error,
        hasError: true
      };
    }
  }]);

  return Window;
}(external_React_.Component);
Window.contextType = contextTypes.MosaicWindowContext;
Window.defaultProps = {
  classes: {},
  focusWindow: function focusWindow() {},
  isFetching: false,
  label: null,
  manifestError: null,
  maximized: false,
  sideBarOpen: false,
  view: undefined,
  windowDraggable: null,
  workspaceType: null
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/Window.js








/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */

var Window_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    isFetching: (0,manifests/* getManifestStatus */.JK)(state, {
      windowId: windowId
    }).isFetching,
    label: (0,manifests/* getManifestTitle */.Yq)(state, {
      windowId: windowId
    }),
    manifestError: (0,manifests/* getManifestError */.P3)(state, {
      windowId: windowId
    }),
    maximized: ((0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }) || {}).maximized,
    sideBarOpen: ((0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }) || {}).sideBarOpen,
    thumbnailNavigationPosition: (0,companionWindows/* getThumbnailNavigationPosition */.js)(state, {
      windowId: windowId
    }),
    view: (0,windows/* getWindowViewType */.ys)(state, {
      windowId: windowId
    }),
    window: (0,getters/* getWindow */.Jj)(state, {
      windowId: windowId
    }),
    windowDraggable: (0,windows/* getWindowDraggability */.$h)(state, {
      windowId: windowId
    }),
    workspaceType: (0,workspace/* getWorkspaceType */.WM)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var Window_mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    focusWindow: function focusWindow() {
      return dispatch(actions_window/* focusWindow */.uG(windowId));
    }
  };
};
/**
 * @param theme
 */


var Window_styles = function styles(theme) {
  return {
    companionAreaBottom: {
      display: 'flex',
      flex: '0',
      flexBasis: 'auto',
      minHeight: 0
    },
    companionAreaRight: {
      display: 'flex',
      flex: '0 1 auto',
      minHeight: 0
    },
    maximized: {},
    middle: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      minHeight: 0
    },
    middleLeft: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      minHeight: 0
    },
    primaryWindow: {
      display: 'flex',
      flex: '1',
      height: '300px',
      minHeight: 0,
      position: 'relative'
    },
    thumbnailArea: {
      backgroundColor: theme.palette.shades.dark
    },
    thumbnailAreaBottom: {},
    thumbnailAreaRight: {
      minWidth: 100
    },
    window: {
      '&$maximized': {
        left: 0,
        position: 'absolute',
        top: 0,
        zIndex: theme.zIndex.modal - 1
      },
      backgroundColor: theme.palette.shades.dark,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    }
  };
};

var Window_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(Window_styles), (0,es/* connect */.$j)(Window_mapStateToProps, Window_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('Window'));
/* harmony default export */ const containers_Window = (Window_enhance(Window));
// EXTERNAL MODULE: ./node_modules/react-mosaic-component/lib/index.js
var react_mosaic_component_lib = __webpack_require__(57024);
// EXTERNAL MODULE: ./node_modules/lodash/difference.js
var difference = __webpack_require__(91966);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/MosaicRenderPreview.js


/**
 * MosaicRenderPreview is used to for the preview when dragging a mosaic window/tile
*/

function MosaicRenderPreview(props) {
  var t = props.t,
      title = props.title,
      windowId = props.windowId;
  return /*#__PURE__*/external_React_default().createElement(containers_MinimalWindow, {
    windowId: "".concat(windowId, "-preview"),
    label: t('previewWindowTitle', {
      title: title
    }),
    ariaLabel: false
  });
}
MosaicRenderPreview.defaultProps = {
  t: function t(k) {
    return k;
  },
  title: ''
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/MosaicRenderPreview.js
function MosaicRenderPreview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MosaicRenderPreview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MosaicRenderPreview_ownKeys(Object(source), true).forEach(function (key) { MosaicRenderPreview_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MosaicRenderPreview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MosaicRenderPreview_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** */

var MosaicRenderPreview_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    title: (0,manifests/* getManifestTitle */.Yq)(state, {
      windowId: windowId
    })
  };
};
/**
 *
 * @param theme
 */


var MosaicRenderPreview_styles = function styles(theme) {
  return {
    preview: MosaicRenderPreview_objectSpread({}, theme.typography.h4)
  };
};

var MosaicRenderPreview_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(MosaicRenderPreview_styles), (0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(MosaicRenderPreview_mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('MosaicRenderPreview'));
/* harmony default export */ const containers_MosaicRenderPreview = (MosaicRenderPreview_enhance(MosaicRenderPreview));
// EXTERNAL MODULE: ./node_modules/react-mosaic-component/lib/util/mosaicUpdates.js
var mosaicUpdates = __webpack_require__(3159);
// EXTERNAL MODULE: ./node_modules/react-mosaic-component/lib/util/mosaicUtilities.js
var mosaicUtilities = __webpack_require__(95275);
// EXTERNAL MODULE: ./node_modules/lodash/dropRight.js
var dropRight = __webpack_require__(43624);
var dropRight_default = /*#__PURE__*/__webpack_require__.n(dropRight);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/lib/MosaicLayout.js
function MosaicLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MosaicLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MosaicLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) MosaicLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) MosaicLayout_defineProperties(Constructor, staticProps); return Constructor; }




/** */

var MosaicLayout = /*#__PURE__*/function () {
  /** */
  function MosaicLayout(layout) {
    MosaicLayout_classCallCheck(this, MosaicLayout);

    this.layout = layout;
  }
  /** */


  MosaicLayout_createClass(MosaicLayout, [{
    key: "pathToCorner",
    value: function pathToCorner() {
      var corner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mosaicUtilities.Corner.TOP_RIGHT;
      return (0,mosaicUtilities.getPathToCorner)(this.layout, corner);
    }
    /** */

  }, {
    key: "pathToParent",
    value: function pathToParent(path) {
      return (0,mosaicUtilities.getNodeAtPath)(this.layout, dropRight_default()(path));
    }
    /** */

  }, {
    key: "nodeAtPath",
    value: function nodeAtPath(path) {
      return (0,mosaicUtilities.getNodeAtPath)(this.layout, path);
    }
    /**
     * addWindows - updates the layout with new windows using an algorithm ported
     * from the react-mosaic-components examples. Will always add to the Top Right
     * https://github.com/nomcopter/react-mosaic/blob/5081df8d1528d4c3b83a72763a46a30b3048fe95/demo/ExampleApp.tsx#L119-L154
     * @param {Array} addedWindowIds [description]
     */

  }, {
    key: "addWindows",
    value: function addWindows(addedWindowIds) {
      var _this = this;

      addedWindowIds.forEach(function (windowId, i) {
        var path = _this.pathToCorner();

        var parent = _this.pathToParent(path);

        var destination = _this.nodeAtPath(path);

        var direction = parent ? (0,mosaicUtilities.getOtherDirection)(parent.direction) : 'row';
        var first;
        var second;

        if (direction === 'row') {
          first = destination;
          second = addedWindowIds[i];
        } else {
          first = addedWindowIds[i];
          second = destination;
        }

        var update = {
          path: path,
          spec: {
            $set: {
              direction: direction,
              first: first,
              second: second
            }
          }
        }; // We cannot batch the updates together because we need to recalculate
        // the new location for each new window

        _this.layout = (0,mosaicUpdates.updateTree)(_this.layout, [update]);
      });
    }
    /**
     * removeWindows - Generate a set of "removeUpdates" to update layout binary
     * tree. Then update the layout.
     * @param  {Array} removedWindowIds
     * @param  {Object} windowPaths - a lookup table for window paths
     */

  }, {
    key: "removeWindows",
    value: function removeWindows(removedWindowIds, windowPaths) {
      var _this2 = this;

      var removeUpdates = removedWindowIds.map(function (windowId) {
        return (0,mosaicUpdates.createRemoveUpdate)(_this2.layout, windowPaths[windowId]);
      });
      this.layout = (0,mosaicUpdates.updateTree)(this.layout, removeUpdates);
    }
  }]);

  return MosaicLayout;
}();


;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceMosaic.js
function WorkspaceMosaic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceMosaic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceMosaic_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceMosaic_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceMosaic_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceMosaic_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceMosaic_setPrototypeOf(subClass, superClass); }

function WorkspaceMosaic_setPrototypeOf(o, p) { WorkspaceMosaic_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceMosaic_setPrototypeOf(o, p); }

function WorkspaceMosaic_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceMosaic_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceMosaic_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceMosaic_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceMosaic_possibleConstructorReturn(this, result); }; }

function WorkspaceMosaic_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceMosaic_assertThisInitialized(self); }

function WorkspaceMosaic_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceMosaic_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceMosaic_getPrototypeOf(o) { WorkspaceMosaic_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceMosaic_getPrototypeOf(o); }









/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceMosaic = /*#__PURE__*/function (_React$Component) {
  WorkspaceMosaic_inherits(WorkspaceMosaic, _React$Component);

  var _super = WorkspaceMosaic_createSuper(WorkspaceMosaic);

  /**
   */
  function WorkspaceMosaic(props) {
    var _this;

    WorkspaceMosaic_classCallCheck(this, WorkspaceMosaic);

    _this = _super.call(this, props);
    _this.tileRenderer = _this.tileRenderer.bind(WorkspaceMosaic_assertThisInitialized(_this));
    _this.mosaicChange = _this.mosaicChange.bind(WorkspaceMosaic_assertThisInitialized(_this));
    _this.determineWorkspaceLayout = _this.determineWorkspaceLayout.bind(WorkspaceMosaic_assertThisInitialized(_this));
    _this.zeroStateView = /*#__PURE__*/external_React_default().createElement("div", null);
    _this.windowPaths = {};
    _this.toolbarControls = [];
    _this.additionalControls = [];
    return _this;
  }
  /** */


  WorkspaceMosaic_createClass(WorkspaceMosaic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      var newLayout = this.determineWorkspaceLayout();
      if (newLayout) updateWorkspaceMosaicLayout(newLayout);
    }
    /** */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          windowIds = _this$props.windowIds,
          layout = _this$props.layout,
          updateWorkspaceMosaicLayout = _this$props.updateWorkspaceMosaicLayout;
      var prevWindows = prevProps.windowIds; // Handles when Windows are added (not via Add Resource UI) Could be a workspace import

      if (!windowIds.every(function (e) {
        return prevWindows.includes(e);
      })) {
        var newLayout = this.determineWorkspaceLayout();
        if (!isEqual_default()(newLayout, layout)) updateWorkspaceMosaicLayout(newLayout);
        return;
      } // Handles when Windows are removed from the state


      if (!prevWindows.every(function (e) {
        return windowIds.includes(e);
      })) {
        // There are no more remaining Windows, just return an empty layout
        if (windowIds.length === 0) {
          updateWorkspaceMosaicLayout(null);
          return;
        }

        var removedWindows = difference_default()(prevWindows, windowIds);

        var _newLayout = new MosaicLayout(layout);

        _newLayout.removeWindows(removedWindows, this.windowPaths);

        updateWorkspaceMosaicLayout(_newLayout.layout);
      }
    }
    /**
     * bookkeepPath - used to book keep Window's path's
     * @param  {String} windowId   [description]
     * @param  {Array} path [description]
     */

  }, {
    key: "bookkeepPath",
    value: function bookkeepPath(windowId, path) {
      this.windowPaths[windowId] = path;
    }
    /**
     * Used to determine whether or not a "new" layout should be autogenerated.
     */

  }, {
    key: "determineWorkspaceLayout",
    value: function determineWorkspaceLayout() {
      var _this$props2 = this.props,
          windowIds = _this$props2.windowIds,
          layout = _this$props2.layout;
      var leaveKeys = (0,react_mosaic_component_lib/* getLeaves */.fY)(layout); // Windows were added

      if (!windowIds.every(function (e) {
        return leaveKeys.includes(e);
      })) {
        // No current layout, so just generate a new one
        if (leaveKeys.length < 2) {
          return (0,react_mosaic_component_lib/* createBalancedTreeFromLeaves */.C4)(windowIds);
        } // Add new windows to layout


        var addedWindows = difference_default()(windowIds, leaveKeys);
        var newLayout = new MosaicLayout(layout);
        newLayout.addWindows(addedWindows);
        return newLayout.layout;
      } // Windows were removed (perhaps in a different Workspace). We don't have a
      // way to reconfigure.. so we have to random generate


      if (!leaveKeys.every(function (e) {
        return windowIds.includes(e);
      })) {
        return (0,react_mosaic_component_lib/* createBalancedTreeFromLeaves */.C4)(windowIds);
      }

      return layout;
    }
    /** */

  }, {
    key: "tileRenderer",

    /**
     * Render a tile (Window) in the Mosaic.
     */
    value: function tileRenderer(id, path) {
      var _this$props3 = this.props,
          windowIds = _this$props3.windowIds,
          workspaceId = _this$props3.workspaceId;
      if (!windowIds.includes(id)) return null;
      this.bookkeepPath(id, path);
      return /*#__PURE__*/external_React_default().createElement(react_mosaic_component_lib/* MosaicWindow */.h1, {
        toolbarControls: this.toolbarControls,
        additionalControls: this.additionalControls,
        path: path,
        windowId: id,
        renderPreview: WorkspaceMosaic.renderPreview
      }, /*#__PURE__*/external_React_default().createElement(containers_Window, {
        key: "".concat(id, "-").concat(workspaceId),
        windowId: id
      }));
    }
    /**
     * Update the redux store when the Mosaic is changed.
     */

  }, {
    key: "mosaicChange",
    value: function mosaicChange(newLayout) {
      var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
      updateWorkspaceMosaicLayout(newLayout);
    }
    /**
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          layout = _this$props4.layout,
          classes = _this$props4.classes;
      return /*#__PURE__*/external_React_default().createElement(react_mosaic_component_lib/* MosaicWithoutDragDropContext */.wB, {
        renderTile: this.tileRenderer,
        initialValue: layout || this.determineWorkspaceLayout(),
        onChange: this.mosaicChange,
        className: classnames_default()('mirador-mosaic', classes.root),
        zeroStateView: this.zeroStateView
      });
    }
  }], [{
    key: "renderPreview",
    value: function renderPreview(mosaicProps) {
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: "mosaic-preview",
        "aria-hidden": true
      }, /*#__PURE__*/external_React_default().createElement(containers_MosaicRenderPreview, {
        windowId: mosaicProps.windowId
      }));
    }
  }]);

  return WorkspaceMosaic;
}((external_React_default()).Component);
WorkspaceMosaic.defaultProps = {
  layout: undefined,
  windowIds: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/styles/react-mosaic-component.js
// Generated using jss convert node_modules/react-mosaic-component/react-mosaic-component.css > src/styles/react-mosaic-component.js
// .mosaic-blueprint-theme styles have also been removed
var globalReactMosaicStyles = {
  '@global': {
    '.mosaic': {
      height: '100%',
      width: '100%'
    },
    '.mosaic, .mosaic > *': {
      boxSizing: 'border-box'
    },
    '.mosaic .mosaic-zero-state': {
      position: 'absolute',
      top: 6,
      right: 6,
      bottom: 6,
      left: 6,
      width: 'auto',
      height: 'auto',
      zIndex: '1'
    },
    '.mosaic-root': {
      position: 'absolute',
      top: 3,
      right: 3,
      bottom: 3,
      left: 3
    },
    '.mosaic-split': {
      position: 'absolute',
      zIndex: '1',
      touchAction: 'none'
    },
    '.mosaic-split:hover': {
      background: 'black'
    },
    '.mosaic-split .mosaic-split-line': {
      position: 'absolute'
    },
    '.mosaic-split.-row': {
      marginLeft: -3,
      width: 6,
      cursor: 'ew-resize'
    },
    '.mosaic-split.-row .mosaic-split-line': {
      top: '0',
      bottom: '0',
      left: 3,
      right: 3
    },
    '.mosaic-split.-column': {
      marginTop: -3,
      height: 6,
      cursor: 'ns-resize'
    },
    '.mosaic-split.-column .mosaic-split-line': {
      top: 3,
      bottom: 3,
      left: '0',
      right: '0'
    },
    '.mosaic-tile': {
      position: 'absolute',
      margin: 3
    },
    '.mosaic-tile > *': {
      height: '100%',
      width: '100%'
    },
    '.mosaic-drop-target': {
      position: 'relative'
    },
    '.mosaic-drop-target.drop-target-hover .drop-target-container': {
      display: 'block'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.left': {
      right: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.right': {
      left: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.bottom': {
      top: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.top': {
      bottom: 'calc(100% -  10px )'
    },
    '.mosaic-drop-target .drop-target-container': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      display: 'none'
    },
    '.mosaic-drop-target .drop-target-container.-dragging': {
      display: 'block'
    },
    '.mosaic-drop-target .drop-target-container .drop-target': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      background: 'rgba(0, 0, 0, 0.2)',
      border: '2px solid black',
      opacity: '0',
      zIndex: '5'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.left': {
      right: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.right': {
      left: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.bottom': {
      top: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.top': {
      bottom: 'calc(100% -  30% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover': {
      opacity: '1'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.left': {
      right: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.right': {
      left: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.bottom': {
      top: 'calc(100% -  50% )'
    },
    '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.top': {
      bottom: 'calc(100% -  50% )'
    },
    '.mosaic-window, .mosaic-preview': {
      position: 'relative',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 0 1px rgba(0, 0, 0, 0.2)'
    },
    '.mosaic-window .mosaic-window-toolbar, .mosaic-preview .mosaic-window-toolbar': {
      zIndex: '4',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxPack: 'justify',
      justifyContent: 'space-between',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      flexShrink: '0',
      height: 30,
      background: 'white',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
    },
    '.mosaic-window .mosaic-window-toolbar.draggable, .mosaic-preview .mosaic-window-toolbar.draggable': {
      cursor: 'move'
    },
    '.mosaic-window .mosaic-window-title, .mosaic-preview .mosaic-window-title': {
      paddingLeft: 15,
      webkitBoxFlex: '1',
      flex: '1',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: 18
    },
    '.mosaic-window .mosaic-window-controls, .mosaic-preview .mosaic-window-controls': {
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      height: '100%'
    },
    '.mosaic-window .mosaic-window-controls .separator, .mosaic-preview .mosaic-window-controls .separator': {
      height: 20,
      borderLeft: '1px solid black',
      margin: '5px 4px'
    },
    '.mosaic-window .mosaic-window-body, .mosaic-preview .mosaic-window-body': {
      position: 'relative',
      webkitBoxFlex: '1',
      flex: '1',
      height: '0',
      background: 'white',
      zIndex: '1',
      overflow: 'hidden'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar, .mosaic-preview .mosaic-window-additional-actions-bar': {
      position: 'absolute',
      top: 30,
      right: '0',
      bottom: 'initial',
      left: '0',
      height: '0',
      overflow: 'hidden',
      background: 'white',
      webkitBoxPack: 'end',
      justifyContent: 'flex-end',
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      zIndex: '3'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button': {
      margin: '0'
    },
    '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button:after, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button:after': {
      display: 'none'
    },
    '.mosaic-window .mosaic-window-body-overlay, .mosaic-preview .mosaic-window-body-overlay': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      opacity: '0',
      background: 'white',
      display: 'none',
      zIndex: '2'
    },
    '.mosaic-window.additional-controls-open .mosaic-window-additional-actions-bar, .mosaic-preview.additional-controls-open .mosaic-window-additional-actions-bar': {
      height: 30
    },
    '.mosaic-window.additional-controls-open .mosaic-window-body-overlay, .mosaic-preview.additional-controls-open .mosaic-window-body-overlay': {
      display: 'block'
    },
    '.mosaic-window .mosaic-preview, .mosaic-preview .mosaic-preview': {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: '0',
      border: '1px solid black',
      maxHeight: 400
    },
    '.mosaic-window .mosaic-preview .mosaic-window-body, .mosaic-preview .mosaic-preview .mosaic-window-body': {
      display: 'flex',
      fallbacks: [{
        display: '-webkit-box'
      }],
      webkitBoxOrient: 'vertical',
      webkitBoxDirection: 'normal',
      flexDirection: 'column',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      webkitBoxPack: 'center',
      justifyContent: 'center'
    },
    '.mosaic-window .mosaic-preview h4, .mosaic-preview .mosaic-preview h4': {
      marginBottom: 10
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.close-button:before': {
      content: '\'Close\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.split-button:before': {
      content: '\'Split\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.replace-button:before': {
      content: '\'Replace\''
    },
    '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.expand-button:before': {
      content: '\'Expand\''
    }
  }
};
/* harmony default export */ const react_mosaic_component = (globalReactMosaicStyles);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceMosaic.js
function WorkspaceMosaic_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function WorkspaceMosaic_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WorkspaceMosaic_ownKeys(Object(source), true).forEach(function (key) { WorkspaceMosaic_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WorkspaceMosaic_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WorkspaceMosaic_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceMosaic_mapStateToProps = function mapStateToProps(state) {
  return {
    layout: (0,getters/* getWorkspace */.oq)(state).layout,
    windowIds: (0,getters/* getWorkspace */.oq)(state).windowIds,
    workspaceId: (0,getters/* getWorkspace */.oq)(state).id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var WorkspaceMosaic_mapDispatchToProps = {
  updateWorkspaceMosaicLayout: actions_workspace/* updateWorkspaceMosaicLayout */.w
};

var WorkspaceMosaic_styles = WorkspaceMosaic_objectSpread({
  root: {
    '& .mosaic-preview': {
      boxShadow: 'none'
    },
    '& .mosaic-tile': {
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .2), 0 2px 1px -1px rgba(0, 0, 0, .2)'
    },
    '& .mosaic-window': {
      boxShadow: 'none'
    },
    '& .mosaic-window-toolbar': {
      display: 'none !important'
    }
  }
}, react_mosaic_component);

var WorkspaceMosaic_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WorkspaceMosaic_styles), (0,es/* connect */.$j)(WorkspaceMosaic_mapStateToProps, WorkspaceMosaic_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceMosaic') // further HOC go here
);
/* harmony default export */ const containers_WorkspaceMosaic = (WorkspaceMosaic_enhance(WorkspaceMosaic));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/elasticLayout.js
var elasticLayout = __webpack_require__(31232);
// EXTERNAL MODULE: ./node_modules/react-rnd/lib/index.js + 2 modules
var react_rnd_lib = __webpack_require__(61090);
// EXTERNAL MODULE: ./node_modules/react-resize-observer/lib/ResizeObserver.js
var ResizeObserver = __webpack_require__(62893);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceElasticWindow.js
function WorkspaceElasticWindow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceElasticWindow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceElasticWindow_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceElasticWindow_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceElasticWindow_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceElasticWindow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceElasticWindow_setPrototypeOf(subClass, superClass); }

function WorkspaceElasticWindow_setPrototypeOf(o, p) { WorkspaceElasticWindow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceElasticWindow_setPrototypeOf(o, p); }

function WorkspaceElasticWindow_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceElasticWindow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceElasticWindow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceElasticWindow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceElasticWindow_possibleConstructorReturn(this, result); }; }

function WorkspaceElasticWindow_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceElasticWindow_assertThisInitialized(self); }

function WorkspaceElasticWindow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceElasticWindow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceElasticWindow_getPrototypeOf(o) { WorkspaceElasticWindow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceElasticWindow_getPrototypeOf(o); }





/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceElasticWindow = /*#__PURE__*/function (_React$Component) {
  WorkspaceElasticWindow_inherits(WorkspaceElasticWindow, _React$Component);

  var _super = WorkspaceElasticWindow_createSuper(WorkspaceElasticWindow);

  function WorkspaceElasticWindow() {
    WorkspaceElasticWindow_classCallCheck(this, WorkspaceElasticWindow);

    return _super.apply(this, arguments);
  }

  WorkspaceElasticWindow_createClass(WorkspaceElasticWindow, [{
    key: "render",

    /**
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          companionWindowDimensions = _this$props.companionWindowDimensions,
          focused = _this$props.focused,
          layout = _this$props.layout,
          workspace = _this$props.workspace,
          updateElasticWindowLayout = _this$props.updateElasticWindowLayout;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/external_React_default().createElement(react_rnd_lib/* Rnd */.s, {
        key: "".concat(layout.windowId, "-").concat(workspace.id),
        size: {
          height: layout.height + companionWindowDimensions.height,
          width: layout.width + companionWindowDimensions.width
        },
        position: {
          x: layout.x + offsetX,
          y: layout.y + offsetY
        },
        bounds: "parent",
        onDragStop: function onDragStop(e, d) {
          updateElasticWindowLayout(layout.windowId, {
            x: d.x - offsetX,
            y: d.y - offsetY
          });
        },
        onResize: function onResize(e, direction, ref, delta, position) {
          updateElasticWindowLayout(layout.windowId, {
            height: Number.parseInt(ref.style.height, 10) - companionWindowDimensions.height,
            width: Number.parseInt(ref.style.width, 10) - companionWindowDimensions.width,
            x: position.x - offsetX,
            y: position.y - offsetY
          });
        },
        dragHandleClassName: (0,css_ns/* default */.Z)('window-top-bar'),
        className: focused ? classes.focused : null
      }, /*#__PURE__*/external_React_default().createElement(containers_Window, {
        windowId: layout.windowId
      }));
    }
  }]);

  return WorkspaceElasticWindow;
}((external_React_default()).Component);

WorkspaceElasticWindow.defaultProps = {
  classes: {},
  companionWindowDimensions: {
    height: 0,
    width: 0
  },
  focused: false
};
/* harmony default export */ const components_WorkspaceElasticWindow = (WorkspaceElasticWindow);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceElasticWindow.js






/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceElasticWindow_mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    companionWindowDimensions: (0,companionWindows/* selectCompanionWindowDimensions */.mT)(state, {
      windowId: windowId
    }),
    focused: (0,workspace/* isFocused */.$Z)(state, {
      windowId: windowId
    }),
    layout: (0,workspace/* getElasticLayout */.Fr)(state)[windowId],
    workspace: (0,getters/* getWorkspace */.oq)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var WorkspaceElasticWindow_mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
      dispatch(elasticLayout/* updateElasticWindowLayout */.R(windowId, position));
    }
  };
};
/**
 * @param theme
 */


var WorkspaceElasticWindow_styles = function styles(theme) {
  return {
    focused: {
      zIndex: theme.zIndex.modal - 1
    }
  };
};

var WorkspaceElasticWindow_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WorkspaceElasticWindow_styles), (0,es/* connect */.$j)(WorkspaceElasticWindow_mapStateToProps, WorkspaceElasticWindow_mapDispatchToProps) // further HOC go here
);
/* harmony default export */ const containers_WorkspaceElasticWindow = (WorkspaceElasticWindow_enhance(components_WorkspaceElasticWindow));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceElastic.js
function WorkspaceElastic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceElastic_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceElastic_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceElastic_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceElastic_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceElastic_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceElastic_setPrototypeOf(subClass, superClass); }

function WorkspaceElastic_setPrototypeOf(o, p) { WorkspaceElastic_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceElastic_setPrototypeOf(o, p); }

function WorkspaceElastic_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceElastic_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceElastic_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceElastic_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceElastic_possibleConstructorReturn(this, result); }; }

function WorkspaceElastic_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceElastic_assertThisInitialized(self); }

function WorkspaceElastic_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceElastic_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceElastic_getPrototypeOf(o) { WorkspaceElastic_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceElastic_getPrototypeOf(o); }







/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var WorkspaceElastic = /*#__PURE__*/function (_React$Component) {
  WorkspaceElastic_inherits(WorkspaceElastic, _React$Component);

  var _super = WorkspaceElastic_createSuper(WorkspaceElastic);

  function WorkspaceElastic() {
    WorkspaceElastic_classCallCheck(this, WorkspaceElastic);

    return _super.apply(this, arguments);
  }

  WorkspaceElastic_createClass(WorkspaceElastic, [{
    key: "render",

    /**
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          workspace = _this$props.workspace,
          elasticLayout = _this$props.elasticLayout,
          setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions,
          setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition;
      var viewportPosition = workspace.viewportPosition;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return /*#__PURE__*/external_React_default().createElement("div", {
        style: {
          height: '100%',
          position: 'relative',
          width: '100%'
        }
      }, /*#__PURE__*/external_React_default().createElement(ResizeObserver/* default */.Z, {
        onResize: function onResize(rect) {
          setWorkspaceViewportDimensions(rect);
        }
      }), /*#__PURE__*/external_React_default().createElement(react_rnd_lib/* Rnd */.s, {
        size: {
          height: workspace.height,
          width: workspace.width
        },
        position: {
          x: -1 * viewportPosition.x - offsetX,
          y: -1 * viewportPosition.y - offsetY
        },
        enableResizing: {
          bottom: false,
          bottomLeft: false,
          bottomRight: false,
          left: false,
          right: false,
          top: false,
          topLeft: false,
          topRight: false
        },
        onDragStop: function onDragStop(e, d) {
          setWorkspaceViewportPosition({
            x: -1 * d.x - offsetX,
            y: -1 * d.y - offsetY
          });
        },
        cancel: ".".concat((0,css_ns/* default */.Z)('window')),
        className: classnames_default()(classes.workspace, (0,css_ns/* default */.Z)('workspace')),
        disableDragging: !workspace.draggingEnabled
      }, Object.keys(elasticLayout).map(function (windowId) {
        return /*#__PURE__*/external_React_default().createElement(containers_WorkspaceElasticWindow, {
          key: windowId,
          windowId: windowId
        });
      })));
    }
  }]);

  return WorkspaceElastic;
}((external_React_default()).Component);

/* harmony default export */ const components_WorkspaceElastic = (WorkspaceElastic);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceElastic.js







/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceElastic_mapStateToProps = function mapStateToProps(state) {
  return {
    elasticLayout: (0,workspace/* getElasticLayout */.Fr)(state),
    workspace: (0,getters/* getWorkspace */.oq)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var WorkspaceElastic_mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    setWorkspaceViewportDimensions: function setWorkspaceViewportDimensions(position) {
      dispatch(actions_workspace/* setWorkspaceViewportDimensions */.W3(position));
    },
    setWorkspaceViewportPosition: function setWorkspaceViewportPosition(position) {
      dispatch(actions_workspace/* setWorkspaceViewportPosition */.bj(position));
    },
    updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
      dispatch(elasticLayout/* updateElasticWindowLayout */.R(windowId, position));
    }
  };
};

var WorkspaceElastic_styles = {
  workspace: {
    boxSizing: 'border-box',
    margin: 0,
    position: 'absolute',
    transitionDuration: '.7s',
    // order matters
    // eslint-disable-next-line sort-keys
    '& .react-draggable-dragging': {
      transitionDuration: 'unset'
    }
  }
};
var WorkspaceElastic_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(WorkspaceElastic_styles), (0,es/* connect */.$j)(WorkspaceElastic_mapStateToProps, WorkspaceElastic_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceElastic') // further HOC go here
);
/* harmony default export */ const containers_WorkspaceElastic = (WorkspaceElastic_enhance(components_WorkspaceElastic));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/InsertDriveFileSharp.js
var InsertDriveFileSharp = __webpack_require__(26878);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/grey.js
var grey = __webpack_require__(88105);
// EXTERNAL MODULE: ./node_modules/mirador/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(53001);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var NativeTypes = __webpack_require__(42166);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js + 1 modules
var useDrop = __webpack_require__(22068);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/lib/readImageMetadata.js
/** Extract metadata from an image File */
function readImageMetadata(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      var image = new Image();
      image.addEventListener('load', function () {
        resolve({
          height: image.height,
          name: file.name,
          type: file.type,
          url: reader.result,
          width: image.width
        });
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/IIIFDropTarget.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || IIIFDropTarget_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function IIIFDropTarget_toConsumableArray(arr) { return IIIFDropTarget_arrayWithoutHoles(arr) || IIIFDropTarget_iterableToArray(arr) || IIIFDropTarget_unsupportedIterableToArray(arr) || IIIFDropTarget_nonIterableSpread(); }

function IIIFDropTarget_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function IIIFDropTarget_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return IIIFDropTarget_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return IIIFDropTarget_arrayLikeToArray(o, minLen); }

function IIIFDropTarget_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function IIIFDropTarget_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return IIIFDropTarget_arrayLikeToArray(arr); }

function IIIFDropTarget_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









/** */

var handleDrop = function handleDrop(item, monitor, props) {
  var onDrop = props.onDrop;

  if (item.urls) {
    item.urls.forEach(function (str) {
      var url = new URL(str);
      var manifestId = url.searchParams.get('manifest');
      var canvasId = url.searchParams.get('canvas');
      if (manifestId) onDrop({
        canvasId: canvasId,
        manifestId: manifestId
      }, props, monitor);
    });
  }

  if (item.files) {
    var manifestFiles = item.files.filter(function (f) {
      return f.type === 'application/json';
    });
    var manifestPromises = manifestFiles.map(function (file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          var manifestJson = reader.result;
          var manifestId = (0,v4/* default */.Z)();
          if (manifestJson) onDrop({
            manifestId: manifestId,
            manifestJson: manifestJson
          }, props, monitor);
          resolve();
        });
        reader.readAsText(file);
      });
    });
    var imageFiles = item.files.filter(function (_ref) {
      var type = _ref.type;
      return type.startsWith('image/');
    });
    var imagePromise;

    if (imageFiles.length > 0) {
      var id = (0,v4/* default */.Z)();
      var imageData = imageFiles.map(function (file) {
        return readImageMetadata(file);
      });
      imagePromise = Promise.all(imageData).then(function (images) {
        var manifestJson = {
          '@context': 'http://iiif.io/api/presentation/3/context.json',
          id: id,
          items: images.map(function (_ref2, index) {
            var name = _ref2.name,
                type = _ref2.type,
                width = _ref2.width,
                height = _ref2.height,
                url = _ref2.url;
            return {
              height: height,
              id: "".concat(id, "/canvas/").concat(index),
              items: [{
                id: "".concat(id, "/canvas/").concat(index, "/1"),
                items: [{
                  body: {
                    format: type,
                    id: url,
                    type: 'Image'
                  },
                  height: height,
                  id: "".concat(id, "/canvas/").concat(index, "/1/image"),
                  motivation: 'painting',
                  target: "".concat(id, "/canvas/").concat(index, "/1"),
                  type: 'Annotation',
                  width: width
                }],
                type: 'AnnotationPage'
              }],
              label: name,
              type: 'Canvas',
              width: width
            };
          }),
          label: images[0].name,
          type: 'Manifest'
        };
        var manifestId = (0,v4/* default */.Z)();
        if (manifestJson) onDrop({
          manifestId: manifestId,
          manifestJson: manifestJson
        }, props, monitor);
      });
    }

    return Promise.all([].concat(IIIFDropTarget_toConsumableArray(manifestPromises), [imagePromise]));
  }

  return undefined;
};
/** */

var IIIFDropTarget = function IIIFDropTarget(props) {
  var children = props.children,
      onDrop = props.onDrop;

  var _useDrop = (0,useDrop/* useDrop */.L)({
    accept: [NativeTypes.URL, NativeTypes.FILE],
    collect: function collect(monitor) {
      return {
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver()
      };
    },

    /** */
    drop: function drop(item, monitor) {
      if (!onDrop) return;
      handleDrop(item, monitor, props);
    }
  }),
      _useDrop2 = _slicedToArray(_useDrop, 2),
      _useDrop2$ = _useDrop2[0],
      canDrop = _useDrop2$.canDrop,
      isOver = _useDrop2$.isOver,
      drop = _useDrop2[1];
  /**
   * Safari reports drag+drop'ed urls as both a file and uri-list
   * which gets mis-classified by react-dnd.
   */


  var hackForSafari = function hackForSafari(e) {
    if (!window.safari || !onDrop || !e.dataTransfer) return;

    if (e.dataTransfer.types.includes('Files') && e.dataTransfer.types.includes('text/uri-list')) {
      var url = e.dataTransfer.getData('text/uri-list');
      if (!url) return;
      handleDrop({
        urls: [url]
      }, null, props);
    }
  };

  var isActive = canDrop && isOver;
  return /*#__PURE__*/external_React_default().createElement("div", {
    ref: drop,
    onDrop: hackForSafari,
    style: {
      height: '100%',
      width: '100%'
    }
  }, children, /*#__PURE__*/external_React_default().createElement(Backdrop_Backdrop, {
    open: isActive,
    style: {
      zIndex: 9999
    }
  }, /*#__PURE__*/external_React_default().createElement(InsertDriveFileSharp/* default */.Z, {
    style: {
      color: grey/* default.400 */.Z[400],
      fontSize: 256
    }
  })));
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/Workspace.js
function Workspace_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Workspace_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Workspace_createClass(Constructor, protoProps, staticProps) { if (protoProps) Workspace_defineProperties(Constructor.prototype, protoProps); if (staticProps) Workspace_defineProperties(Constructor, staticProps); return Constructor; }

function Workspace_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Workspace_setPrototypeOf(subClass, superClass); }

function Workspace_setPrototypeOf(o, p) { Workspace_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Workspace_setPrototypeOf(o, p); }

function Workspace_createSuper(Derived) { var hasNativeReflectConstruct = Workspace_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Workspace_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Workspace_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Workspace_possibleConstructorReturn(this, result); }; }

function Workspace_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Workspace_assertThisInitialized(self); }

function Workspace_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Workspace_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Workspace_getPrototypeOf(o) { Workspace_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Workspace_getPrototypeOf(o); }










/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */

var Workspace = /*#__PURE__*/function (_React$Component) {
  Workspace_inherits(Workspace, _React$Component);

  var _super = Workspace_createSuper(Workspace);

  /** */
  function Workspace(props) {
    var _this;

    Workspace_classCallCheck(this, Workspace);

    _this = _super.call(this, props);
    _this.handleDrop = _this.handleDrop.bind(Workspace_assertThisInitialized(_this));
    return _this;
  }
  /** */


  Workspace_createClass(Workspace, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var canvasId = _ref.canvasId,
          manifestId = _ref.manifestId,
          manifestJson = _ref.manifestJson;
      var _this$props = this.props,
          addWindow = _this$props.addWindow,
          allowNewWindows = _this$props.allowNewWindows;
      if (!allowNewWindows) return;
      addWindow({
        canvasId: canvasId,
        manifest: manifestJson,
        manifestId: manifestId
      });
    }
    /**
     * Determine which workspace to render by configured type
     */

  }, {
    key: "workspaceByType",
    value: function workspaceByType() {
      var _this$props2 = this.props,
          workspaceId = _this$props2.workspaceId,
          workspaceType = _this$props2.workspaceType,
          windowIds = _this$props2.windowIds;

      if (this.maximizedWindows()) {
        return this.maximizedWindows();
      }

      if (windowIds.length === 0) return this.zeroWindows();

      switch (workspaceType) {
        case 'elastic':
          return /*#__PURE__*/external_React_default().createElement(containers_WorkspaceElastic, null);

        case 'mosaic':
          return /*#__PURE__*/external_React_default().createElement(containers_WorkspaceMosaic, null);

        default:
          return windowIds.map(function (windowId) {
            return /*#__PURE__*/external_React_default().createElement(containers_Window, {
              key: "".concat(windowId, "-").concat(workspaceId),
              windowId: windowId
            });
          });
      }
    }
    /** */

  }, {
    key: "zeroWindows",
    value: function zeroWindows() {
      var t = this.props.t;
      return /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        alignItems: "center",
        container: true,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        xs: 12,
        item: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h1",
        component: "div",
        align: "center"
      }, t('welcome'))));
    }
    /**
     * Determine whether or not there are maximized windows
     */

  }, {
    key: "maximizedWindows",
    value: function maximizedWindows() {
      var _this$props3 = this.props,
          maximizedWindowIds = _this$props3.maximizedWindowIds,
          workspaceId = _this$props3.workspaceId;

      if (maximizedWindowIds.length > 0) {
        return maximizedWindowIds.map(function (windowId) {
          return /*#__PURE__*/external_React_default().createElement(containers_Window, {
            key: "".concat(windowId, "-").concat(workspaceId),
            windowId: windowId,
            className: classnames_default()((0,css_ns/* default */.Z)('workspace-maximized-window'))
          });
        });
      }

      return false;
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          isWorkspaceControlPanelVisible = _this$props4.isWorkspaceControlPanelVisible,
          t = _this$props4.t;
      return /*#__PURE__*/external_React_default().createElement(IIIFDropTarget, {
        onDrop: this.handleDrop
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: classnames_default()((0,css_ns/* default */.Z)('workspace-viewport'), isWorkspaceControlPanelVisible && (0,css_ns/* default */.Z)('workspace-with-control-panel'), isWorkspaceControlPanelVisible && classes.workspaceWithControlPanel, classes.workspaceViewport)
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorViewer')), this.workspaceByType()));
    }
  }]);

  return Workspace;
}((external_React_default()).Component);
Workspace.defaultProps = {
  addWindow: function addWindow() {},
  allowNewWindows: true,
  maximizedWindowIds: [],
  windowIds: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/Workspace.js








/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var Workspace_mapStateToProps = function mapStateToProps(state) {
  return {
    allowNewWindows: (0,config/* getConfig */.iE)(state).workspace.allowNewWindows,
    isWorkspaceControlPanelVisible: (0,config/* getConfig */.iE)(state).workspaceControlPanel.enabled,
    maximizedWindowIds: (0,windows/* getMaximizedWindowsIds */.lV)(state),
    windowIds: (0,getters/* getWindowIds */.BF)(state),
    workspaceId: (0,getters/* getWorkspace */.oq)(state).id,
    workspaceType: (0,workspace/* getWorkspaceType */.WM)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var Workspace_mapDispatchToProps = {
  addWindow: actions_window/* addWindow */.QX
};
/**
 * @param theme
 */

var Workspace_styles = function styles(theme) {
  return {
    workspaceViewport: {
      bottom: 0,
      left: 0,
      margin: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    },
    workspaceWithControlPanel: {
      paddingTop: 74
    },
    // injection order matters here
    // eslint-disable-next-line sort-keys
    '@media (min-width: 600px)': {
      workspaceWithControlPanel: {
        paddingLeft: 68,
        paddingTop: 0
      }
    }
  };
};

var Workspace_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(Workspace_styles), (0,es/* connect */.$j)(Workspace_mapStateToProps, Workspace_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('Workspace') // further HOC go here
);
/* harmony default export */ const containers_Workspace = (Workspace_enhance(Workspace));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/catalog.js
var catalog = __webpack_require__(80134);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(62822);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ManifestForm.js
function ManifestForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ManifestForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ManifestForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) ManifestForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) ManifestForm_defineProperties(Constructor, staticProps); return Constructor; }

function ManifestForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ManifestForm_setPrototypeOf(subClass, superClass); }

function ManifestForm_setPrototypeOf(o, p) { ManifestForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ManifestForm_setPrototypeOf(o, p); }

function ManifestForm_createSuper(Derived) { var hasNativeReflectConstruct = ManifestForm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ManifestForm_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ManifestForm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ManifestForm_possibleConstructorReturn(this, result); }; }

function ManifestForm_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ManifestForm_assertThisInitialized(self); }

function ManifestForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ManifestForm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ManifestForm_getPrototypeOf(o) { ManifestForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ManifestForm_getPrototypeOf(o); }





/**
 * Provides a form for user input of a manifest url
 * @prop {Function} fetchManifest
 */

var ManifestForm = /*#__PURE__*/function (_Component) {
  ManifestForm_inherits(ManifestForm, _Component);

  var _super = ManifestForm_createSuper(ManifestForm);

  /**
   * constructor -
   */
  function ManifestForm(props) {
    var _this;

    ManifestForm_classCallCheck(this, ManifestForm);

    _this = _super.call(this, props);
    _this.state = {
      formValue: ''
    };
    _this.inputRef = /*#__PURE__*/external_React_default().createRef();
    _this.formSubmit = _this.formSubmit.bind(ManifestForm_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(ManifestForm_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(ManifestForm_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   * @param {*} prevProps
   * @param {*} prevState
   */


  ManifestForm_createClass(ManifestForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var addResourcesOpen = this.props.addResourcesOpen;

      if (this.inputRef && this.inputRef.current && addResourcesOpen) {
        this.inputRef.current.focus();
      }
    }
    /**
     * Reset the form state
     */

  }, {
    key: "handleCancel",
    value: function handleCancel() {
      var onCancel = this.props.onCancel;
      onCancel();
      this.setState({
        formValue: ''
      });
    }
    /**
     * handleInputChange - sets state based on input change.
     * @param  {Event} event
     * @private
     */

  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var that = this;
      event.preventDefault();
      that.setState({
        formValue: event.target.value
      });
    }
    /**
     * formSubmit - triggers manifest update and sets lastRequested
     * @param  {Event} event
     * @private
     */

  }, {
    key: "formSubmit",
    value: function formSubmit(event) {
      var _this$props = this.props,
          addResource = _this$props.addResource,
          onSubmit = _this$props.onSubmit;
      var formValue = this.state.formValue;
      event.preventDefault();
      onSubmit();
      addResource(formValue);
      this.setState({
        formValue: ''
      });
    }
    /**
     * render
     * @return {String} - HTML markup for the component
     */

  }, {
    key: "render",
    value: function render() {
      var formValue = this.state.formValue;
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          onCancel = _this$props2.onCancel,
          t = _this$props2.t;
      return /*#__PURE__*/external_React_default().createElement("form", {
        onSubmit: this.formSubmit
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        spacing: 2
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 12,
        sm: 8,
        md: 9
      }, /*#__PURE__*/external_React_default().createElement(TextField/* default */.Z, {
        inputRef: this.inputRef,
        fullWidth: true,
        value: formValue,
        id: "manifestURL",
        type: "text",
        onChange: this.handleInputChange,
        variant: "filled",
        label: t('addManifestUrl'),
        helperText: t('addManifestUrlHelp'),
        InputLabelProps: {
          shrink: true
        },
        InputProps: {
          className: classes.input
        }
      })), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 12,
        sm: 4,
        md: 3,
        className: classes.buttons
      }, onCancel && /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: this.handleCancel
      }, t('cancel')), /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        id: "fetchBtn",
        type: "submit",
        variant: "contained",
        color: "primary"
      }, t('fetchManifest')))));
    }
  }]);

  return ManifestForm;
}(external_React_.Component);
ManifestForm.defaultProps = {
  classes: {},
  onCancel: null,
  onSubmit: function onSubmit() {},
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ManifestForm.js
function ManifestForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ManifestForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ManifestForm_ownKeys(Object(source), true).forEach(function (key) { ManifestForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ManifestForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ManifestForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */

var ManifestForm_mapDispatchToProps = {
  addResource: catalog/* addResource */.r
};
/**
 *
 * @param theme
 */

var ManifestForm_styles = function styles(theme) {
  return {
    buttons: ManifestForm_defineProperty({
      textAlign: 'right'
    }, theme.breakpoints.up('sm'), {
      textAlign: 'inherit'
    }),
    input: ManifestForm_objectSpread({}, theme.typography.body1)
  };
};

var ManifestForm_enhance = (0,redux/* compose */.qC)((0,withStyles/* default */.Z)(ManifestForm_styles), (0,withTranslation/* withTranslation */.Z)(), (0,es/* connect */.$j)(null, ManifestForm_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ManifestForm'));
/* harmony default export */ const containers_ManifestForm = (ManifestForm_enhance(ManifestForm));
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/actions/manifest.js
var manifest = __webpack_require__(83502);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(50998);
// EXTERNAL MODULE: ./node_modules/react-image/umd/index.js
var umd = __webpack_require__(13324);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ManifestListItemError.js
function ManifestListItemError_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ManifestListItemError_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ManifestListItemError_createClass(Constructor, protoProps, staticProps) { if (protoProps) ManifestListItemError_defineProperties(Constructor.prototype, protoProps); if (staticProps) ManifestListItemError_defineProperties(Constructor, staticProps); return Constructor; }

function ManifestListItemError_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ManifestListItemError_setPrototypeOf(subClass, superClass); }

function ManifestListItemError_setPrototypeOf(o, p) { ManifestListItemError_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ManifestListItemError_setPrototypeOf(o, p); }

function ManifestListItemError_createSuper(Derived) { var hasNativeReflectConstruct = ManifestListItemError_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ManifestListItemError_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ManifestListItemError_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ManifestListItemError_possibleConstructorReturn(this, result); }; }

function ManifestListItemError_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ManifestListItemError_assertThisInitialized(self); }

function ManifestListItemError_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ManifestListItemError_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ManifestListItemError_getPrototypeOf(o) { ManifestListItemError_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ManifestListItemError_getPrototypeOf(o); }






/**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/

var ManifestListItemError = /*#__PURE__*/function (_Component) {
  ManifestListItemError_inherits(ManifestListItemError, _Component);

  var _super = ManifestListItemError_createSuper(ManifestListItemError);

  function ManifestListItemError() {
    ManifestListItemError_classCallCheck(this, ManifestListItemError);

    return _super.apply(this, arguments);
  }

  ManifestListItemError_createClass(ManifestListItemError, [{
    key: "render",

    /**
     * Returns the rendered component
    */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          manifestId = _this$props.manifestId,
          onDismissClick = _this$props.onDismissClick,
          onTryAgainClick = _this$props.onTryAgainClick,
          t = _this$props.t;
      return /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        item: true,
        xs: 12,
        sm: 6
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 4,
        sm: 3
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        justify: "center"
      }, /*#__PURE__*/external_React_default().createElement(ErrorOutlineSharp/* default */.Z, {
        className: classes.errorIcon
      }))), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 8,
        sm: 9
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, null, t('manifestError')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        className: classes.manifestIdText
      }, manifestId)))), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        item: true,
        xs: 12,
        sm: 6,
        justify: "flex-end"
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true
      }, /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: function onClick() {
          onDismissClick(manifestId);
        }
      }, t('dismiss')), /*#__PURE__*/external_React_default().createElement(Button/* default */.Z, {
        onClick: function onClick() {
          onTryAgainClick(manifestId);
        }
      }, t('tryAgain'))))));
    }
  }]);

  return ManifestListItemError;
}(external_React_.Component);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ManifestListItemError.js







/** */

var ManifestListItemError_mapDispatchToProps = {
  onDismissClick: catalog/* removeResource */.q,
  onTryAgainClick: manifest/* fetchManifest */.eq
};
/**
 *
 * @param theme
 * @returns {{manifestIdText: {wordBreak: string},
 * errorIcon: {color: string, width: string, height: string}}}
 */

var ManifestListItemError_styles = function styles(theme) {
  return {
    errorIcon: {
      color: theme.palette.error.main,
      height: '2rem',
      width: '2rem'
    },
    manifestIdText: {
      wordBreak: 'break-all'
    }
  };
};

var ManifestListItemError_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(ManifestListItemError_styles), (0,es/* connect */.$j)(null, ManifestListItemError_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ManifestListItemError'));
/* harmony default export */ const containers_ManifestListItemError = (ManifestListItemError_enhance(ManifestListItemError));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/ManifestListItem.js
function ManifestListItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ManifestListItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ManifestListItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ManifestListItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ManifestListItem_defineProperties(Constructor, staticProps); return Constructor; }

function ManifestListItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ManifestListItem_setPrototypeOf(subClass, superClass); }

function ManifestListItem_setPrototypeOf(o, p) { ManifestListItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ManifestListItem_setPrototypeOf(o, p); }

function ManifestListItem_createSuper(Derived) { var hasNativeReflectConstruct = ManifestListItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ManifestListItem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ManifestListItem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ManifestListItem_possibleConstructorReturn(this, result); }; }

function ManifestListItem_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return ManifestListItem_assertThisInitialized(self); }

function ManifestListItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ManifestListItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ManifestListItem_getPrototypeOf(o) { ManifestListItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ManifestListItem_getPrototypeOf(o); }










/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */

var ManifestListItem = /*#__PURE__*/function (_React$Component) {
  ManifestListItem_inherits(ManifestListItem, _React$Component);

  var _super = ManifestListItem_createSuper(ManifestListItem);

  /** */
  function ManifestListItem(props) {
    var _this;

    ManifestListItem_classCallCheck(this, ManifestListItem);

    _this = _super.call(this, props);
    _this.handleOpenButtonClick = _this.handleOpenButtonClick.bind(ManifestListItem_assertThisInitialized(_this));
    return _this;
  }
  /** */


  ManifestListItem_createClass(ManifestListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fetchManifest = _this$props.fetchManifest,
          manifestId = _this$props.manifestId,
          ready = _this$props.ready,
          isFetching = _this$props.isFetching,
          error = _this$props.error,
          provider = _this$props.provider;
      if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
    }
    /**
     * Handling open button click
     */

  }, {
    key: "handleOpenButtonClick",
    value: function handleOpenButtonClick() {
      var _this$props2 = this.props,
          addWindow = _this$props2.addWindow,
          handleClose = _this$props2.handleClose,
          manifestId = _this$props2.manifestId;
      addWindow({
        manifestId: manifestId
      });
      handleClose();
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          active = _this$props3.active,
          buttonRef = _this$props3.buttonRef,
          manifestId = _this$props3.manifestId,
          ready = _this$props3.ready,
          title = _this$props3.title,
          thumbnail = _this$props3.thumbnail,
          manifestLogo = _this$props3.manifestLogo,
          size = _this$props3.size,
          classes = _this$props3.classes,
          provider = _this$props3.provider,
          t = _this$props3.t,
          error = _this$props3.error,
          isCollection = _this$props3.isCollection,
          isMultipart = _this$props3.isMultipart;
      var placeholder = /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        className: (0,css_ns/* default */.Z)('manifest-list-item'),
        spacing: 2
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 3,
        sm: 2
      }, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "rect",
        height: 80,
        width: 120
      })), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 9,
        sm: 6
      }, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 8,
        sm: 2
      }, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      }), /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 4,
        sm: 2
      }, /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
        className: classes.placeholder,
        variant: "rect",
        height: 60,
        width: 60
      })));

      if (error) {
        return /*#__PURE__*/external_React_default().createElement(ListItem/* default */.Z, {
          divider: true,
          className: classes.root,
          "data-manifestid": manifestId
        }, /*#__PURE__*/external_React_default().createElement(containers_ManifestListItemError, {
          manifestId: manifestId
        }));
      }

      return /*#__PURE__*/external_React_default().createElement(ListItem/* default */.Z, {
        divider: true,
        className: [classes.root, active ? classes.active : ''].join(' '),
        "data-manifestid": manifestId
      }, ready ? /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        className: (0,css_ns/* default */.Z)('manifest-list-item'),
        spacing: 2
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 12,
        sm: 6,
        className: classes.buttonGrid
      }, /*#__PURE__*/external_React_default().createElement(ButtonBase/* default */.Z, {
        ref: buttonRef,
        className: (0,css_ns/* default */.Z)('manifest-list-item-title'),
        style: {
          width: '100%'
        },
        onClick: this.handleOpenButtonClick
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        container: true,
        spacing: 2,
        className: classes.label,
        component: "span"
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 4,
        sm: 3,
        component: "span"
      }, /*#__PURE__*/external_React_default().createElement(umd.Img, {
        className: [classes.thumbnail, (0,css_ns/* default */.Z)('manifest-list-item-thumb')].join(' '),
        src: [thumbnail],
        alt: "",
        height: "80",
        unloader: /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
          variant: "rect",
          animation: false,
          className: classes.placeholder,
          height: 80,
          width: 120
        })
      })), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 8,
        sm: 9,
        component: "span"
      }, isCollection && /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        component: "div",
        variant: "overline"
      }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        component: "span",
        variant: "h6"
      }, title || manifestId))))), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 8,
        sm: 4
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        className: (0,css_ns/* default */.Z)('manifest-list-item-provider')
      }, provider || t('addedFromUrl')), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, null, t('numItems', {
        number: size
      }))), /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        item: true,
        xs: 4,
        sm: 2
      }, /*#__PURE__*/external_React_default().createElement(umd.Img, {
        src: [manifestLogo],
        alt: "",
        role: "presentation",
        className: classes.logo,
        unloader: /*#__PURE__*/external_React_default().createElement(Skeleton/* default */.Z, {
          variant: "rect",
          animation: false,
          className: classes.placeholder,
          height: 60,
          width: 60
        })
      }))) : placeholder);
    }
  }]);

  return ManifestListItem;
}((external_React_default()).Component);
ManifestListItem.defaultProps = {
  active: false,
  buttonRef: undefined,
  classes: {},
  error: null,
  handleClose: function handleClose() {},
  isCollection: false,
  isFetching: false,
  isMultipart: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: function t(key) {
    return key;
  },
  thumbnail: null,
  title: null
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/ManifestListItem.js
function ManifestListItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ManifestListItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ManifestListItem_ownKeys(Object(source), true).forEach(function (key) { ManifestListItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ManifestListItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ManifestListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/** */

var ManifestListItem_mapStateToProps = function mapStateToProps(state, _ref) {
  var manifestId = _ref.manifestId,
      provider = _ref.provider;
  var manifest = (0,getters/* getManifest */.WC)(state, {
    manifestId: manifestId
  }) || {};
  var manifesto = (0,manifests/* getManifestoInstance */.hi)(state, {
    manifestId: manifestId
  });
  var isCollection = (manifesto || {
    isCollection: function isCollection() {
      return false;
    }
  }).isCollection();
  var size = isCollection ? manifesto.getTotalItems() : (0,canvases/* getCanvases */.LU)(state, {
    manifestId: manifestId
  }).length;
  return {
    active: (0,getters/* getWindowManifests */.FU)(state).includes(manifestId),
    error: manifest.error,
    isCollection: isCollection,
    isFetching: manifest.isFetching,
    isMultipart: isCollection && (0,sequences/* getSequenceBehaviors */.rm)(state, {
      manifestId: manifestId
    }).includes('multi-part'),
    manifestLogo: (0,manifests/* getManifestLogo */.Fx)(state, {
      manifestId: manifestId
    }),
    provider: provider || (0,manifests/* getManifestProvider */.CA)(state, {
      manifestId: manifestId
    }),
    ready: !!manifest.json,
    size: size,
    thumbnail: (0,manifests/* getManifestThumbnail */._3)(state, {
      manifestId: manifestId
    }),
    title: (0,manifests/* getManifestTitle */.Yq)(state, {
      manifestId: manifestId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var ManifestListItem_mapDispatchToProps = {
  addWindow: actions_window/* addWindow */.QX,
  fetchManifest: manifest/* fetchManifest */.eq
};
/**
 *
 * @param theme
 * @returns {{root: {}, label: {textAlign: string, textTransform: string}}}
 */

var ManifestListItem_styles = function styles(theme) {
  return {
    active: {},
    buttonGrid: {},
    label: {
      textAlign: 'left',
      textTransform: 'initial'
    },
    logo: {
      height: '2.5rem',
      maxWidth: '100%',
      objectFit: 'contain',
      paddingRight: 8
    },
    placeholder: {
      backgroundColor: theme.palette.grey[300]
    },
    root: ManifestListItem_objectSpread(ManifestListItem_objectSpread({}, theme.mixins.gutters()), {}, {
      '&$active': {
        borderLeft: "4px solid ".concat(theme.palette.primary.main)
      },
      '&:hover,&:focus-within': {
        '&$active': {
          borderLeft: "4px solid ".concat(theme.palette.primary.main)
        },
        backgroundColor: theme.palette.action.hover,
        borderLeft: "4px solid ".concat(theme.palette.action.hover)
      },
      borderLeft: '4px solid transparent'
    }),
    thumbnail: {
      maxWidth: '100%',
      objectFit: 'contain'
    }
  };
};

var ManifestListItem_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(ManifestListItem_styles), (0,es/* connect */.$j)(ManifestListItem_mapStateToProps, ManifestListItem_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('ManifestListItem'));
/* harmony default export */ const containers_ManifestListItem = (ManifestListItem_enhance(ManifestListItem));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceAdd.js
function WorkspaceAdd_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WorkspaceAdd_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceAdd_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceAdd_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceAdd_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceAdd_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceAdd_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceAdd_setPrototypeOf(subClass, superClass); }

function WorkspaceAdd_setPrototypeOf(o, p) { WorkspaceAdd_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceAdd_setPrototypeOf(o, p); }

function WorkspaceAdd_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceAdd_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceAdd_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceAdd_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceAdd_possibleConstructorReturn(this, result); }; }

function WorkspaceAdd_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceAdd_assertThisInitialized(self); }

function WorkspaceAdd_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceAdd_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceAdd_getPrototypeOf(o) { WorkspaceAdd_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceAdd_getPrototypeOf(o); }



















/**
 * An area for managing manifests and adding them to workspace
 * @memberof Workspace
 * @private
 */

var WorkspaceAdd = /*#__PURE__*/function (_React$Component) {
  WorkspaceAdd_inherits(WorkspaceAdd, _React$Component);

  var _super = WorkspaceAdd_createSuper(WorkspaceAdd);

  /** */
  function WorkspaceAdd(props) {
    var _this;

    WorkspaceAdd_classCallCheck(this, WorkspaceAdd);

    _this = _super.call(this, props);
    _this.state = {
      addResourcesOpen: false
    };
    _this.ref = /*#__PURE__*/external_React_default().createRef();
    _this.onSubmit = _this.onSubmit.bind(WorkspaceAdd_assertThisInitialized(_this));
    _this.setAddResourcesVisibility = _this.setAddResourcesVisibility.bind(WorkspaceAdd_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(WorkspaceAdd_assertThisInitialized(_this));
    return _this;
  }
  /** */


  WorkspaceAdd_createClass(WorkspaceAdd, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var manifestId = _ref.manifestId,
          manifestJson = _ref.manifestJson;
      var addResource = this.props.addResource;

      if (manifestJson) {
        addResource(manifestId, manifestJson, {
          provider: 'file'
        });
      } else {
        addResource(manifestId);
      }

      this.scrollToTop();
    }
    /** @private */

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      this.setAddResourcesVisibility(false);
      this.scrollToTop();
    }
    /**
     * @private
     */

  }, {
    key: "setAddResourcesVisibility",
    value: function setAddResourcesVisibility(bool) {
      this.setState({
        addResourcesOpen: bool
      });
    }
    /** Scroll the list back to the top */

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      if (this.ref.current) {
        var el = this.ref.current;
        el.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0
        });
      }
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          catalog = _this$props.catalog,
          setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
          t = _this$props.t,
          classes = _this$props.classes;
      var addResourcesOpen = this.state.addResourcesOpen;
      var manifestList = catalog.map(function (resource, index) {
        return /*#__PURE__*/external_React_default().createElement(containers_ManifestListItem, Object.assign({}, index === 0 && {
          buttonRef: function buttonRef(ref) {
            return ref && ref.focus();
          }
        }, {
          key: resource.manifestId,
          manifestId: resource.manifestId,
          provider: resource.provider,
          handleClose: function handleClose() {
            return setWorkspaceAddVisibility(false);
          }
        }));
      });
      return /*#__PURE__*/external_React_default().createElement(IIIFDropTarget, {
        onDrop: this.handleDrop
      }, /*#__PURE__*/external_React_default().createElement("div", {
        ref: this.ref,
        className: classnames_default()((0,css_ns/* default */.Z)('workspace-add'), classes.workspaceAdd)
      }, catalog.length < 1 ? /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        alignItems: "center",
        container: true,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/external_React_default().createElement(Grid/* default */.Z, {
        xs: 12,
        item: true
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h1",
        component: "div",
        align: "center"
      }, t('emptyResourceList')))) : /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        className: classes.list
      }, /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorResources')), /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, this.props), /*#__PURE__*/external_React_default().createElement(List/* default */.Z, {
        disablePadding: true
      }, manifestList)), /*#__PURE__*/external_React_default().createElement(Fab_Fab, {
        variant: "extended",
        disabled: addResourcesOpen,
        className: classnames_default()(classes.fab, (0,css_ns/* default */.Z)('add-resource-button')),
        color: "primary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(true);
        }
      }, /*#__PURE__*/external_React_default().createElement(AddSharp/* default */.Z, null), t('addResource')), /*#__PURE__*/external_React_default().createElement(Drawer_Drawer, {
        className: classnames_default()(WorkspaceAdd_defineProperty({}, classes.displayNone, !addResourcesOpen)),
        classes: {
          paper: classes.paper
        },
        variant: "persistent",
        anchor: "bottom",
        open: addResourcesOpen,
        ModalProps: {
          disablePortal: true,
          hideBackdrop: true,
          style: {
            position: 'absolute'
          }
        }
      }, /*#__PURE__*/external_React_default().createElement(Paper/* default */.Z, {
        className: classes.form
      }, /*#__PURE__*/external_React_default().createElement(AppBar_AppBar, {
        position: "absolute",
        color: "primary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(false);
        }
      }, /*#__PURE__*/external_React_default().createElement(Toolbar/* default */.Z, {
        variant: "dense"
      }, /*#__PURE__*/external_React_default().createElement(MiradorMenuButton/* default */.Z, {
        "aria-label": t('closeAddResourceForm'),
        className: classes.menuButton,
        color: "inherit"
      }, /*#__PURE__*/external_React_default().createElement(ExpandMoreSharp/* default */.Z, null)), /*#__PURE__*/external_React_default().createElement(Typography/* default */.Z, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.typographyBody
      }, t('addResource')))), /*#__PURE__*/external_React_default().createElement(containers_ManifestForm, {
        addResourcesOpen: addResourcesOpen,
        onSubmit: this.onSubmit,
        onCancel: function onCancel() {
          return _this2.setAddResourcesVisibility(false);
        }
      })))));
    }
  }]);

  return WorkspaceAdd;
}((external_React_default()).Component);
WorkspaceAdd.defaultProps = {
  addResource: function addResource() {},
  catalog: [],
  classes: {},
  t: function t(key) {
    return key;
  }
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceAdd.js
function WorkspaceAdd_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function WorkspaceAdd_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WorkspaceAdd_ownKeys(Object(source), true).forEach(function (key) { containers_WorkspaceAdd_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WorkspaceAdd_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function containers_WorkspaceAdd_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var WorkspaceAdd_mapStateToProps = function mapStateToProps(state) {
  return {
    catalog: (0,getters/* getCatalog */.R4)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var WorkspaceAdd_mapDispatchToProps = {
  addResource: catalog/* addResource */.r,
  setWorkspaceAddVisibility: actions_workspace/* setWorkspaceAddVisibility */.B4
};
/**
 *
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: string},
 * form: {paddingBottom: number, paddingTop: number, marginTop: number},
 * fab: {bottom: number, position: string, right: number},
 * menuButton: {marginRight: number, marginLeft: number}}}
 */

var WorkspaceAdd_styles = function styles(theme) {
  return {
    displayNone: {
      display: 'none'
    },
    fab: {
      bottom: theme.spacing(2),
      position: 'absolute',
      right: theme.spacing(2)
    },
    form: WorkspaceAdd_objectSpread(WorkspaceAdd_objectSpread({}, theme.mixins.gutters()), {}, {
      left: '0',
      marginTop: 48,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      right: '0'
    }),
    list: {
      margin: '16px'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    paper: containers_WorkspaceAdd_defineProperty({
      borderTop: '0',
      left: '0'
    }, theme.breakpoints.up('sm'), {
      left: '65px'
    }),
    typographyBody: {
      flexGrow: 1
    },
    workspaceAdd: {
      boxSizing: 'border-box',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      paddingTop: 68
    },
    // injection order matters
    // eslint-disable-next-line sort-keys
    '@media (min-width: 600px)': {
      workspaceAdd: {
        paddingLeft: 68,
        paddingTop: 0
      }
    }
  };
};

var WorkspaceAdd_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceAdd_styles), (0,es/* connect */.$j)(WorkspaceAdd_mapStateToProps, WorkspaceAdd_mapDispatchToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceAdd'));
/* harmony default export */ const containers_WorkspaceAdd = (WorkspaceAdd_enhance(WorkspaceAdd));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/BackgroundPluginArea.js



/** invisible area where background plugins can add to */

var BackgroundPluginArea = function BackgroundPluginArea(props) {
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: (0,css_ns/* default */.Z)('background-plugin-area'),
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/external_React_default().createElement(PluginHook/* PluginHook */.M, props));
};
BackgroundPluginArea.defaultProps = {
  PluginComponents: []
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/BackgroundPluginArea.js


/* harmony default export */ const containers_BackgroundPluginArea = ((0,withPlugins/* withPlugins */.A)('BackgroundPluginArea')(BackgroundPluginArea));
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/WorkspaceArea.js
function WorkspaceArea_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkspaceArea_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkspaceArea_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkspaceArea_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkspaceArea_defineProperties(Constructor, staticProps); return Constructor; }

function WorkspaceArea_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkspaceArea_setPrototypeOf(subClass, superClass); }

function WorkspaceArea_setPrototypeOf(o, p) { WorkspaceArea_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkspaceArea_setPrototypeOf(o, p); }

function WorkspaceArea_createSuper(Derived) { var hasNativeReflectConstruct = WorkspaceArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WorkspaceArea_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WorkspaceArea_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WorkspaceArea_possibleConstructorReturn(this, result); }; }

function WorkspaceArea_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return WorkspaceArea_assertThisInitialized(self); }

function WorkspaceArea_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WorkspaceArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function WorkspaceArea_getPrototypeOf(o) { WorkspaceArea_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkspaceArea_getPrototypeOf(o); }









/**
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */

var WorkspaceArea = /*#__PURE__*/function (_Component) {
  WorkspaceArea_inherits(WorkspaceArea, _Component);

  var _super = WorkspaceArea_createSuper(WorkspaceArea);

  function WorkspaceArea() {
    WorkspaceArea_classCallCheck(this, WorkspaceArea);

    return _super.apply(this, arguments);
  }

  WorkspaceArea_createClass(WorkspaceArea, [{
    key: "render",

    /**
     * render
     * @return {String} - HTML markup for the component
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          controlPanelVariant = _this$props.controlPanelVariant,
          isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
          isWorkspaceControlPanelVisible = _this$props.isWorkspaceControlPanelVisible,
          lang = _this$props.lang,
          t = _this$props.t;
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, isWorkspaceControlPanelVisible && /*#__PURE__*/external_React_default().createElement(containers_WorkspaceControlPanel, {
        variant: controlPanelVariant
      }), /*#__PURE__*/external_React_default().createElement("main", {
        className: classnames_default()(classes.viewer, (0,css_ns/* default */.Z)('viewer')),
        lang: lang,
        "aria-label": t('workspace')
      }, isWorkspaceAddVisible ? /*#__PURE__*/external_React_default().createElement(containers_WorkspaceAdd, null) : /*#__PURE__*/external_React_default().createElement(containers_Workspace, null), /*#__PURE__*/external_React_default().createElement(containers_ErrorDialog, null), /*#__PURE__*/external_React_default().createElement(containers_BackgroundPluginArea, null)));
    }
  }]);

  return WorkspaceArea;
}(external_React_.Component);
WorkspaceArea.defaultProps = {
  controlPanelVariant: undefined,
  isWorkspaceAddVisible: false,
  lang: undefined
};
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/WorkspaceArea.js







/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */

var WorkspaceArea_mapStateToProps = function mapStateToProps(state) {
  return {
    controlPanelVariant: (0,getters/* getWorkspace */.oq)(state).isWorkspaceAddVisible || (0,getters/* getWindowIds */.BF)(state).length > 0 ? undefined : 'wide',
    isWorkspaceAddVisible: (0,getters/* getWorkspace */.oq)(state).isWorkspaceAddVisible,
    isWorkspaceControlPanelVisible: (0,config/* getConfig */.iE)(state).workspaceControlPanel.enabled,
    lang: (0,config/* getConfig */.iE)(state).language
  };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */


var WorkspaceArea_styles = function styles(theme) {
  var getBackgroundColor = theme.palette.type === 'light' ? colorManipulator/* darken */._j : colorManipulator/* lighten */.$n;
  return {
    viewer: {
      background: getBackgroundColor(theme.palette.shades.light, 0.1),
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0
    }
  };
};

var WorkspaceArea_enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(WorkspaceArea_styles), (0,es/* connect */.$j)(WorkspaceArea_mapStateToProps), (0,withPlugins/* withPlugins */.A)('WorkspaceArea'));
/* harmony default export */ const containers_WorkspaceArea = (WorkspaceArea_enhance(WorkspaceArea));

/***/ }),

/***/ 74300:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(63804));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(20640));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ 74855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(74300),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ 56941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ DropTargetMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28195);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrop = false;
var DropTargetMonitorImpl =
/*#__PURE__*/
function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

/***/ }),

/***/ 89026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ TargetConnector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15047);
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35214);
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62980);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TargetConnector =
/*#__PURE__*/
function () {
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck(this, TargetConnector);

    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  _createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();

/***/ }),

/***/ 33273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ registerTarget),
/* harmony export */   "w": () => (/* binding */ registerSource)
/* harmony export */ });
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

/***/ }),

/***/ 35214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ wrapConnectorHooks)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js



function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0,invariant_esm/* invariant */.k)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0,external_React_.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0,external_React_.cloneElement)(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js



function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0,external_React_.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

/***/ }),

/***/ 56319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useMonitorOutput)
/* harmony export */ });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48586);
/* harmony import */ var _useCollector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24974);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = (0,_useCollector__WEBPACK_IMPORTED_MODULE_0__/* .useCollector */ .r)(monitor, collect, onCollect),
      _useCollector2 = _slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* .useIsomorphicLayoutEffect */ .L)(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return undefined;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

/***/ }),

/***/ 22068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useDrop)
});

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
var useMonitorOutput = __webpack_require__(56319);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(48586);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(33273);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js
var useDragDropManager = __webpack_require__(75795);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(89026);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(56941);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useDropTargetMonitor() {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var monitor = (0,external_React_.useMemo)(function () {
    return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
  }, [manager]);
  var connector = (0,external_React_.useMemo)(function () {
    return new TargetConnector/* TargetConnector */.Y(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var handler = (0,external_React_.useMemo)(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;

        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;

        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function registerHandler() {
    var _registerTarget = (0,registration/* registerTarget */.n)(spec.current.accept, handler, manager),
        _registerTarget2 = _slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js
function useDrop_slicedToArray(arr, i) { return useDrop_arrayWithHoles(arr) || useDrop_iterableToArrayLimit(arr, i) || useDrop_nonIterableRest(); }

function useDrop_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function useDrop_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDrop_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = (0,external_React_.useRef)(spec);
  specRef.current = spec;
  (0,invariant_esm/* invariant */.k)(spec.accept != null, 'accept must be defined');

  var _useDropTargetMonitor = useDropTargetMonitor(),
      _useDropTargetMonitor2 = useDrop_slicedToArray(_useDropTargetMonitor, 2),
      monitor = _useDropTargetMonitor2[0],
      connector = _useDropTargetMonitor2[1];

  useDropHandler(specRef, monitor, connector);
  var result = (0,useMonitorOutput/* useMonitorOutput */.U)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = (0,external_React_.useMemo)(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}

/***/ }),

/***/ 71061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DndContext": () => (/* reexport */ DndContext/* DndContext */.L),
  "DndProvider": () => (/* reexport */ DndProvider/* DndProvider */.W),
  "DragLayer": () => (/* reexport */ DragLayer),
  "DragPreviewImage": () => (/* reexport */ DragPreviewImage),
  "DragSource": () => (/* reexport */ DragSource),
  "DropTarget": () => (/* reexport */ DropTarget),
  "createDndContext": () => (/* reexport */ DndContext/* createDndContext */.W),
  "useDrag": () => (/* reexport */ useDrag),
  "useDragLayer": () => (/* reexport */ useDragLayer/* useDragLayer */.f),
  "useDrop": () => (/* reexport */ useDrop/* useDrop */.L)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 30 modules
var DndContext = __webpack_require__(82514);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(89862);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DragPreviewImage.js

/*
 * A utility for rendering a drag preview image
 */

var DragPreviewImage = external_React_.memo(function (_ref) {
  var connect = _ref.connect,
      src = _ref.src;

  if (typeof Image !== 'undefined') {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return connect(img);
    };
  }

  return null;
});
DragPreviewImage.displayName = 'DragPreviewImage';
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/index.js



// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
var useMonitorOutput = __webpack_require__(56319);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(48586);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(33273);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js
var useDragDropManager = __webpack_require__(75795);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl =
/*#__PURE__*/
function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      (0,invariant_esm/* invariant */.k)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      (0,invariant_esm/* invariant */.k)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js + 1 modules
var wrapConnectorHooks = __webpack_require__(35214);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/isRef.js
var isRef = __webpack_require__(62980);
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
var shallowequal_esm = __webpack_require__(15047);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
function SourceConnector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SourceConnector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SourceConnector_createClass(Constructor, protoProps, staticProps) { if (protoProps) SourceConnector_defineProperties(Constructor.prototype, protoProps); if (staticProps) SourceConnector_defineProperties(Constructor, staticProps); return Constructor; }




var SourceConnector =
/*#__PURE__*/
function () {
  function SourceConnector(backend) {
    var _this = this;

    SourceConnector_classCallCheck(this, SourceConnector);

    this.hooks = (0,wrapConnectorHooks/* default */.Z)({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if ((0,isRef/* isRef */.d)(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if ((0,isRef/* isRef */.d)(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  SourceConnector_createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (!this.handlerId) {
        this.disconnectDragPreview();
      } else if (this.dragPreview && didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.disconnectDragPreview();
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !(0,shallowequal_esm/* shallowEqual */.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !(0,shallowequal_esm/* shallowEqual */.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function useDragSourceMonitor() {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var monitor = (0,external_React_.useMemo)(function () {
    return new DragSourceMonitorImpl(manager);
  }, [manager]);
  var connector = (0,external_React_.useMemo)(function () {
    return new SourceConnector(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var handler = (0,external_React_.useMemo)(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
            begin = _spec$current.begin,
            item = _spec$current.item;

        if (begin) {
          var beginResult = begin(monitor);
          (0,invariant_esm/* invariant */.k)(beginResult == null || _typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }

        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;

        if (end) {
          end(monitor.getItem(), monitor);
        }

        connector.reconnect();
      }
    };
  }, []);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function registerHandler() {
    var _registerSource = (0,registration/* registerSource */.w)(spec.current.item.type, handler, manager),
        _registerSource2 = _slicedToArray(_registerSource, 2),
        handlerId = _registerSource2[0],
        unregister = _registerSource2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js
function useDrag_slicedToArray(arr, i) { return useDrag_arrayWithHoles(arr) || useDrag_iterableToArrayLimit(arr, i) || useDrag_nonIterableRest(); }

function useDrag_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function useDrag_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDrag_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = (0,external_React_.useRef)(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  (0,invariant_esm/* invariant */.k)(spec.item != null, 'item must be defined');
  (0,invariant_esm/* invariant */.k)(spec.item.type != null, 'item type must be defined');

  var _useDragSourceMonitor = useDragSourceMonitor(),
      _useDragSourceMonitor2 = useDrag_slicedToArray(_useDragSourceMonitor, 2),
      monitor = _useDragSourceMonitor2[0],
      connector = _useDragSourceMonitor2[1];

  useDragHandler(specRef, monitor, connector);
  var result = (0,useMonitorOutput/* useMonitorOutput */.U)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = (0,external_React_.useMemo)(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = (0,external_React_.useMemo)(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js + 1 modules
var useDrop = __webpack_require__(22068);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDragLayer.js
var useDragLayer = __webpack_require__(79336);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/index.js



;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/js_utils.js
function js_utils_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { js_utils_typeof = function _typeof(obj) { return typeof obj; }; } else { js_utils_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return js_utils_typeof(obj); }

// cheap lodash replacements
function isFunction(input) {
  return typeof input === 'function';
}
function noop() {// noop
}

function isObjectLike(input) {
  return js_utils_typeof(input) === 'object' && input !== null;
}

function isPlainObject(input) {
  if (!isObjectLike(input)) {
    return false;
  }

  if (Object.getPrototypeOf(input) === null) {
    return true;
  }

  var proto = input;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(input) === proto;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/utils.js
function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;

  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}
function isClassComponent(Component) {
  return Component && Component.prototype && typeof Component.prototype.render === 'function';
}
function isRefForwardingComponent(C) {
  return C && C.$$typeof && C.$$typeof.toString() === 'Symbol(react.forward_ref)';
}
function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}
function checkDecoratorArguments(functionName, signature) {
  if (false) { var arg, i; }
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/disposables.js
function disposables_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function disposables_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function disposables_createClass(Constructor, protoProps, staticProps) { if (protoProps) disposables_defineProperties(Constructor.prototype, protoProps); if (staticProps) disposables_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */

var Disposable =
/*#__PURE__*/
function () {
  function Disposable(action) {
    disposables_classCallCheck(this, Disposable);

    this.isDisposed = false;
    this.action = isFunction(action) ? action : noop;
  }
  /**
   * Validates whether the given object is a disposable
   * @param {Object} Object to test whether it has a dispose method
   * @returns {Boolean} true if a disposable object, else false.
   */


  disposables_createClass(Disposable, [{
    key: "dispose",

    /** Performs the task of cleaning up resources. */
    value: function dispose() {
      if (!this.isDisposed) {
        this.action();
        this.isDisposed = true;
      }
    }
  }], [{
    key: "isDisposable",
    value: function isDisposable(d) {
      return d && isFunction(d.dispose);
    }
  }, {
    key: "_fixup",
    value: function _fixup(result) {
      return Disposable.isDisposable(result) ? result : Disposable.empty;
    }
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */

  }, {
    key: "create",
    value: function create(action) {
      return new Disposable(action);
    }
  }]);

  return Disposable;
}();
/**
 * Gets the disposable that does nothing when disposed.
 */

Disposable.empty = {
  dispose: noop
};
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */

var CompositeDisposable =
/*#__PURE__*/
function () {
  function CompositeDisposable() {
    disposables_classCallCheck(this, CompositeDisposable);

    this.isDisposed = false;

    for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    this.disposables = disposables;
  }
  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Any} item Disposable to add.
   */


  disposables_createClass(CompositeDisposable, [{
    key: "add",
    value: function add(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    }
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */

  }, {
    key: "remove",
    value: function remove(item) {
      var shouldDispose = false;

      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);

        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }

      return shouldDispose;
    }
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i = 0; _i < len; _i++) {
          currentDisposables[_i].dispose();
        }
      }
    }
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i2 = 0; _i2 < len; _i2++) {
          currentDisposables[_i2].dispose();
        }
      }
    }
  }]);

  return CompositeDisposable;
}();
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */

var SerialDisposable =
/*#__PURE__*/
function () {
  function SerialDisposable() {
    disposables_classCallCheck(this, SerialDisposable);

    this.isDisposed = false;
  }
  /**
   * Gets the underlying disposable.
   * @returns {Any} the underlying disposable.
   */


  disposables_createClass(SerialDisposable, [{
    key: "getDisposable",
    value: function getDisposable() {
      return this.current;
    }
  }, {
    key: "setDisposable",
    value: function setDisposable(value) {
      var shouldDispose = this.isDisposed;

      if (!shouldDispose) {
        var old = this.current;
        this.current = value;

        if (old) {
          old.dispose();
        }
      }

      if (shouldDispose && value) {
        value.dispose();
      }
    }
    /** Performs the task of cleaning up resources. */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = undefined;

        if (old) {
          old.dispose();
        }
      }
    }
  }]);

  return SerialDisposable;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js
function decorateHandler_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { decorateHandler_typeof = function _typeof(obj) { return typeof obj; }; } else { decorateHandler_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return decorateHandler_typeof(obj); }

function decorateHandler_slicedToArray(arr, i) { return decorateHandler_arrayWithHoles(arr) || decorateHandler_iterableToArrayLimit(arr, i) || decorateHandler_nonIterableRest(); }

function decorateHandler_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function decorateHandler_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function decorateHandler_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function decorateHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function decorateHandler_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function decorateHandler_createClass(Constructor, protoProps, staticProps) { if (protoProps) decorateHandler_defineProperties(Constructor.prototype, protoProps); if (staticProps) decorateHandler_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (decorateHandler_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









function decorateHandler(_ref) {
  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal_esm/* shallowEqual */.w : _options$arePropsEqua;
  var Decorated = DecoratedComponent;
  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DragDropContainer, _React$Component);

    function DragDropContainer(props) {
      var _this;

      decorateHandler_classCallCheck(this, DragDropContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropContainer).call(this, props));
      _this.decoratedRef = external_React_.createRef();

      _this.handleChange = function () {
        var nextState = _this.getCurrentState();

        if (!(0,shallowequal_esm/* shallowEqual */.w)(nextState, _this.state)) {
          _this.setState(nextState);
        }
      };

      _this.disposable = new SerialDisposable();

      _this.receiveProps(props);

      _this.dispose();

      return _this;
    }

    decorateHandler_createClass(DragDropContainer, [{
      key: "getHandlerId",
      value: function getHandlerId() {
        return this.handlerId;
      }
    }, {
      key: "getDecoratedComponentInstance",
      value: function getDecoratedComponentInstance() {
        (0,invariant_esm/* invariant */.k)(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
        return this.decoratedRef.current;
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !(0,shallowequal_esm/* shallowEqual */.w)(nextState, this.state);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.disposable = new SerialDisposable();
        this.currentType = undefined;
        this.receiveProps(this.props);
        this.handleChange();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!arePropsEqual(this.props, prevProps)) {
          this.receiveProps(this.props);
          this.handleChange();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.dispose();
      }
    }, {
      key: "receiveProps",
      value: function receiveProps(props) {
        if (!this.handler) {
          return;
        }

        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      }
    }, {
      key: "receiveType",
      value: function receiveType(type) {
        if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
          return;
        }

        if (type === this.currentType) {
          return;
        }

        this.currentType = type;

        var _registerHandler = registerHandler(type, this.handler, this.manager),
            _registerHandler2 = decorateHandler_slicedToArray(_registerHandler, 2),
            handlerId = _registerHandler2[0],
            unregister = _registerHandler2[1];

        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);
        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
          handlerIds: [handlerId]
        });
        this.disposable.setDisposable(new CompositeDisposable(new Disposable(unsubscribe), new Disposable(unregister)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.disposable.dispose();

        if (this.handlerConnector) {
          this.handlerConnector.receiveHandlerId(null);
        }
      }
    }, {
      key: "getCurrentState",
      value: function getCurrentState() {
        if (!this.handlerConnector) {
          return {};
        }

        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);

        if (false) {}

        return nextState;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return external_React_.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref2) {
          var dragDropManager = _ref2.dragDropManager;

          _this2.receiveDragDropManager(dragDropManager);

          if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(function () {
              return _this2.handlerConnector.reconnect();
            });
          }

          return external_React_.createElement(Decorated, Object.assign({}, _this2.props, _this2.getCurrentState(), {
            // NOTE: if Decorated is a Function Component, decoratedRef will not be populated unless it's a refforwarding component.
            ref: isRefable(Decorated) ? _this2.decoratedRef : null
          }));
        });
      }
    }, {
      key: "receiveDragDropManager",
      value: function receiveDragDropManager(dragDropManager) {
        if (this.manager !== undefined) {
          return;
        }

        (0,invariant_esm/* invariant */.k)(dragDropManager !== undefined, 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

        if (dragDropManager === undefined) {
          return;
        }

        this.manager = dragDropManager;
        this.handlerMonitor = createMonitor(dragDropManager);
        this.handlerConnector = createConnector(dragDropManager.getBackend());
        this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
      }
    }]);

    return DragDropContainer;
  }(external_React_.Component);

  DragDropContainer.DecoratedComponent = DecoratedComponent;
  DragDropContainer.displayName = "".concat(containerDisplayName, "(").concat(displayName, ")");
  return hoist_non_react_statics_cjs_default()(DragDropContainer, DecoratedComponent);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/isValidType.js
function isValidType_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isValidType_typeof = function _typeof(obj) { return typeof obj; }; } else { isValidType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isValidType_typeof(obj); }

function isValidType(type, allowArray) {
  return typeof type === 'string' || isValidType_typeof(type) === 'symbol' || !!allowArray && Array.isArray(type) && type.every(function (t) {
    return isValidType(t, false);
  });
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js
function createSourceFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createSourceFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createSourceFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) createSourceFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) createSourceFactory_defineProperties(Constructor, staticProps); return Constructor; }




var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

var SourceImpl =
/*#__PURE__*/
function () {
  function SourceImpl(spec, monitor, ref) {
    var _this = this;

    createSourceFactory_classCallCheck(this, SourceImpl);

    this.props = null;

    this.beginDrag = function () {
      if (!_this.props) {
        return;
      }

      var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);

      if (false) {}

      return item;
    };

    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  createSourceFactory_createClass(SourceImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      if (!this.props) {
        return false;
      }

      if (!this.spec.canDrag) {
        return true;
      }

      return this.spec.canDrag(this.props, this.monitor);
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }

      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }

      return this.spec.isDragging(this.props, this.monitor);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (!this.props) {
        return;
      }

      if (!this.spec.endDrag) {
        return;
      }

      this.spec.endDrag(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }]);

  return SourceImpl;
}();

function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  return function createSource(monitor, ref) {
    return new SourceImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DragSource.js









/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD options
 */

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  checkDecoratorArguments('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)(isValidType(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', type);

    getType = function getType() {
      return type;
    };
  }

  (0,invariant_esm/* invariant */.k)(isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', spec);
  var createSource = createSourceFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  return function decorateSource(DecoratedComponent) {
    return decorateHandler({
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: registration/* registerSource */.w,
      createConnector: function createConnector(backend) {
        return new SourceConnector(backend);
      },
      createMonitor: function createMonitor(manager) {
        return new DragSourceMonitorImpl(manager);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(89026);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(56941);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js
function createTargetFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createTargetFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createTargetFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) createTargetFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) createTargetFactory_defineProperties(Constructor, staticProps); return Constructor; }




var createTargetFactory_ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

var TargetImpl =
/*#__PURE__*/
function () {
  function TargetImpl(spec, monitor, ref) {
    createTargetFactory_classCallCheck(this, TargetImpl);

    this.props = null;
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  createTargetFactory_createClass(TargetImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "receiveMonitor",
    value: function receiveMonitor(monitor) {
      this.monitor = monitor;
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.spec.canDrop) {
        return true;
      }

      return this.spec.canDrop(this.props, this.monitor);
    }
  }, {
    key: "hover",
    value: function hover() {
      if (!this.spec.hover) {
        return;
      }

      this.spec.hover(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }, {
    key: "drop",
    value: function drop() {
      if (!this.spec.drop) {
        return undefined;
      }

      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);

      if (false) {}

      return dropResult;
    }
  }]);

  return TargetImpl;
}();

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(createTargetFactory_ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', createTargetFactory_ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', key, key, spec[key]);
  });
  return function createTarget(monitor, ref) {
    return new TargetImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DropTarget.js









function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  checkDecoratorArguments('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)(isValidType(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);

    getType = function getType() {
      return type;
    };
  }

  (0,invariant_esm/* invariant */.k)(isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
  var createTarget = createTargetFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  return function decorateTarget(DecoratedComponent) {
    return decorateHandler({
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: registration/* registerTarget */.n,
      createMonitor: function createMonitor(manager) {
        return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
      },
      createConnector: function createConnector(backend) {
        return new TargetConnector/* TargetConnector */.Y(backend);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DragLayer.js
function DragLayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DragLayer_typeof = function _typeof(obj) { return typeof obj; }; } else { DragLayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DragLayer_typeof(obj); }

function DragLayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DragLayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DragLayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) DragLayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) DragLayer_defineProperties(Constructor, staticProps); return Constructor; }

function DragLayer_possibleConstructorReturn(self, call) { if (call && (DragLayer_typeof(call) === "object" || typeof call === "function")) { return call; } return DragLayer_assertThisInitialized(self); }

function DragLayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DragLayer_getPrototypeOf(o) { DragLayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DragLayer_getPrototypeOf(o); }

function DragLayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DragLayer_setPrototypeOf(subClass, superClass); }

function DragLayer_setPrototypeOf(o, p) { DragLayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DragLayer_setPrototypeOf(o, p); }








function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  checkDecoratorArguments('DragLayer', 'collect[, options]', collect, options);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', collect);
  (0,invariant_esm/* invariant */.k)(isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', options);
  return function decorateLayer(DecoratedComponent) {
    var Decorated = DecoratedComponent;
    var _options$arePropsEqua = options.arePropsEqual,
        arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal_esm/* shallowEqual */.w : _options$arePropsEqua;
    var displayName = Decorated.displayName || Decorated.name || 'Component';

    var DragLayerContainer =
    /*#__PURE__*/
    function (_React$Component) {
      DragLayer_inherits(DragLayerContainer, _React$Component);

      function DragLayerContainer() {
        var _this;

        DragLayer_classCallCheck(this, DragLayerContainer);

        _this = DragLayer_possibleConstructorReturn(this, DragLayer_getPrototypeOf(DragLayerContainer).apply(this, arguments));
        _this.isCurrentlyMounted = false;
        _this.ref = external_React_.createRef();

        _this.handleChange = function () {
          if (!_this.isCurrentlyMounted) {
            return;
          }

          var nextState = _this.getCurrentState();

          if (!(0,shallowequal_esm/* shallowEqual */.w)(nextState, _this.state)) {
            _this.setState(nextState);
          }
        };

        return _this;
      }

      DragLayer_createClass(DragLayerContainer, [{
        key: "getDecoratedComponentInstance",
        value: function getDecoratedComponentInstance() {
          (0,invariant_esm/* invariant */.k)(this.ref.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
          return this.ref.current;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !(0,shallowequal_esm/* shallowEqual */.w)(nextState, this.state);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.isCurrentlyMounted = true;
          this.handleChange();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isCurrentlyMounted = false;

          if (this.unsubscribeFromOffsetChange) {
            this.unsubscribeFromOffsetChange();
            this.unsubscribeFromOffsetChange = undefined;
          }

          if (this.unsubscribeFromStateChange) {
            this.unsubscribeFromStateChange();
            this.unsubscribeFromStateChange = undefined;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return external_React_.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref) {
            var dragDropManager = _ref.dragDropManager;

            if (dragDropManager === undefined) {
              return null;
            }

            _this2.receiveDragDropManager(dragDropManager); // Let componentDidMount fire to initialize the collected state


            if (!_this2.isCurrentlyMounted) {
              return null;
            }

            return external_React_.createElement(Decorated, Object.assign({}, _this2.props, _this2.state, {
              ref: isRefable(Decorated) ? _this2.ref : null
            }));
          });
        }
      }, {
        key: "receiveDragDropManager",
        value: function receiveDragDropManager(dragDropManager) {
          if (this.manager !== undefined) {
            return;
          }

          this.manager = dragDropManager;
          (0,invariant_esm/* invariant */.k)(DragLayer_typeof(dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
          var monitor = this.manager.getMonitor();
          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
        }
      }, {
        key: "getCurrentState",
        value: function getCurrentState() {
          if (!this.manager) {
            return {};
          }

          var monitor = this.manager.getMonitor();
          return collect(monitor, this.props);
        }
      }]);

      return DragLayerContainer;
    }(external_React_.Component);

    DragLayerContainer.displayName = "DragLayer(".concat(displayName, ")");
    DragLayerContainer.DecoratedComponent = DecoratedComponent;
    return hoist_non_react_statics_cjs_default()(DragLayerContainer, DecoratedComponent);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/index.js



;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/index.js




/***/ }),

/***/ 62980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ isRef)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof(obj) === 'object' && obj.hasOwnProperty('current')
  );
}

/***/ }),

/***/ 6162:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mosaic = exports.MosaicWithoutDragDropContext = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var countBy_1 = __importDefault(__webpack_require__(49995));
var keys_1 = __importDefault(__webpack_require__(3674));
var pickBy_1 = __importDefault(__webpack_require__(35937));
var react_1 = __importDefault(__webpack_require__(63804));
var react_dnd_1 = __webpack_require__(71061);
var react_dnd_multi_backend_1 = __importDefault(__webpack_require__(95320));
var HTML5toTouch_1 = __importDefault(__webpack_require__(42790));
var uuid_1 = __webpack_require__(55877);
var contextTypes_1 = __webpack_require__(49801);
var MosaicRoot_1 = __webpack_require__(27060);
var MosaicZeroState_1 = __webpack_require__(96717);
var RootDropTargets_1 = __webpack_require__(92768);
var mosaicUpdates_1 = __webpack_require__(3159);
var mosaicUtilities_1 = __webpack_require__(95275);
var DEFAULT_EXPAND_PERCENTAGE = 70;
function isUncontrolled(props) {
    return props.initialValue != null;
}
var MosaicWithoutDragDropContext = /** @class */ (function (_super) {
    __extends(MosaicWithoutDragDropContext, _super);
    function MosaicWithoutDragDropContext() {
        var _a;
        var _this = _super.apply(this, arguments) || this;
        _this.state = {
            currentNode: null,
            lastInitialValue: null,
            mosaicId: (_a = _this.props.mosaicId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        };
        _this.updateRoot = function (updates, suppressOnRelease) {
            if (suppressOnRelease === void 0) { suppressOnRelease = false; }
            var currentNode = _this.getRoot() || {};
            _this.replaceRoot(mosaicUpdates_1.updateTree(currentNode, updates), suppressOnRelease);
        };
        _this.replaceRoot = function (currentNode, suppressOnRelease) {
            if (suppressOnRelease === void 0) { suppressOnRelease = false; }
            _this.props.onChange(currentNode);
            if (!suppressOnRelease && _this.props.onRelease) {
                _this.props.onRelease(currentNode);
            }
            if (isUncontrolled(_this.props)) {
                _this.setState({ currentNode: currentNode });
            }
        };
        _this.actions = {
            updateTree: _this.updateRoot,
            remove: function (path) {
                if (path.length === 0) {
                    _this.replaceRoot(null);
                }
                else {
                    _this.updateRoot([mosaicUpdates_1.createRemoveUpdate(_this.getRoot(), path)]);
                }
            },
            expand: function (path, percentage) {
                if (percentage === void 0) { percentage = DEFAULT_EXPAND_PERCENTAGE; }
                return _this.updateRoot([mosaicUpdates_1.createExpandUpdate(path, percentage)]);
            },
            getRoot: function () { return _this.getRoot(); },
            hide: function (path) { return _this.updateRoot([mosaicUpdates_1.createHideUpdate(path)]); },
            replaceWith: function (path, newNode) {
                return _this.updateRoot([
                    {
                        path: path,
                        spec: {
                            $set: newNode,
                        },
                    },
                ]);
            },
        };
        _this.childContext = {
            mosaicActions: _this.actions,
            mosaicId: _this.state.mosaicId,
        };
        return _this;
    }
    MosaicWithoutDragDropContext.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.mosaicId && prevState.mosaicId !== nextProps.mosaicId && "production" !== 'production') {
            throw new Error('Mosaic does not support updating the mosaicId after instantiation');
        }
        if (isUncontrolled(nextProps) && nextProps.initialValue !== prevState.lastInitialValue) {
            return {
                lastInitialValue: nextProps.initialValue,
                currentNode: nextProps.initialValue,
            };
        }
        return null;
    };
    MosaicWithoutDragDropContext.prototype.render = function () {
        var className = this.props.className;
        return (react_1.default.createElement(contextTypes_1.MosaicContext.Provider, { value: this.childContext },
            react_1.default.createElement("div", { className: classnames_1.default(className, 'mosaic mosaic-drop-target') },
                this.renderTree(),
                react_1.default.createElement(RootDropTargets_1.RootDropTargets, null))));
    };
    MosaicWithoutDragDropContext.prototype.getRoot = function () {
        if (isUncontrolled(this.props)) {
            return this.state.currentNode;
        }
        else {
            return this.props.value;
        }
    };
    MosaicWithoutDragDropContext.prototype.renderTree = function () {
        var root = this.getRoot();
        this.validateTree(root);
        if (root === null || root === undefined) {
            return this.props.zeroStateView;
        }
        else {
            var _a = this.props, renderTile = _a.renderTile, resize = _a.resize;
            return react_1.default.createElement(MosaicRoot_1.MosaicRoot, { root: root, renderTile: renderTile, resize: resize });
        }
    };
    MosaicWithoutDragDropContext.prototype.validateTree = function (node) {
        if (false) { var duplicates; }
    };
    MosaicWithoutDragDropContext.defaultProps = {
        onChange: function () { return void 0; },
        zeroStateView: react_1.default.createElement(MosaicZeroState_1.MosaicZeroState, null),
        className: 'mosaic-blueprint-theme',
    };
    return MosaicWithoutDragDropContext;
}(react_1.default.PureComponent));
exports.MosaicWithoutDragDropContext = MosaicWithoutDragDropContext;
var Mosaic = /** @class */ (function (_super) {
    __extends(Mosaic, _super);
    function Mosaic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mosaic.prototype.render = function () {
        return (react_1.default.createElement(react_dnd_1.DndProvider, { backend: react_dnd_multi_backend_1.default, options: HTML5toTouch_1.default },
            react_1.default.createElement(MosaicWithoutDragDropContext, __assign({}, this.props))));
    };
    return Mosaic;
}(react_1.default.PureComponent));
exports.Mosaic = Mosaic;
//# sourceMappingURL=Mosaic.js.map

/***/ }),

/***/ 35773:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicDropTarget = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var react_1 = __importDefault(__webpack_require__(63804));
var react_dnd_1 = __webpack_require__(71061);
var contextTypes_1 = __webpack_require__(49801);
var types_1 = __webpack_require__(40664);
var dropTarget = {
    drop: function (props, monitor, component) {
        if (component.context.mosaicId === (monitor.getItem() || {}).mosaicId) {
            return {
                path: props.path,
                position: props.position,
            };
        }
        else {
            return {};
        }
    },
};
var MosaicDropTargetClass = /** @class */ (function (_super) {
    __extends(MosaicDropTargetClass, _super);
    function MosaicDropTargetClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicDropTargetClass.prototype.render = function () {
        var _a = this.props, position = _a.position, isOver = _a.isOver, connectDropTarget = _a.connectDropTarget, draggedMosaicId = _a.draggedMosaicId;
        return connectDropTarget(react_1.default.createElement("div", { className: classnames_1.default('drop-target', position, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId,
            }) }));
    };
    MosaicDropTargetClass.contextType = contextTypes_1.MosaicContext;
    return MosaicDropTargetClass;
}(react_1.default.PureComponent));
exports.MosaicDropTarget = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedMosaicId: (monitor.getItem() || {}).mosaicId,
}); })(MosaicDropTargetClass);
//# sourceMappingURL=MosaicDropTarget.js.map

/***/ }),

/***/ 27060:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicRoot = void 0;
var flatten_1 = __importDefault(__webpack_require__(85564));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var Split_1 = __webpack_require__(25080);
var BoundingBox_1 = __webpack_require__(93942);
var mosaicUtilities_1 = __webpack_require__(95275);
var MosaicRoot = /** @class */ (function (_super) {
    __extends(MosaicRoot, _super);
    function MosaicRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onResize = function (percentage, path, suppressOnRelease) {
            _this.context.mosaicActions.updateTree([
                {
                    path: path,
                    spec: {
                        splitPercentage: {
                            $set: percentage,
                        },
                    },
                },
            ], suppressOnRelease);
        };
        return _this;
    }
    MosaicRoot.prototype.render = function () {
        var root = this.props.root;
        return react_1.default.createElement("div", { className: "mosaic-root" }, this.renderRecursively(root, BoundingBox_1.BoundingBox.empty(), []));
    };
    MosaicRoot.prototype.renderRecursively = function (node, boundingBox, path) {
        if (mosaicUtilities_1.isParent(node)) {
            var splitPercentage = node.splitPercentage == null ? 50 : node.splitPercentage;
            var _a = BoundingBox_1.BoundingBox.split(boundingBox, splitPercentage, node.direction), first = _a.first, second = _a.second;
            return flatten_1.default([
                this.renderRecursively(node.first, first, path.concat('first')),
                this.renderSplit(node.direction, boundingBox, splitPercentage, path),
                this.renderRecursively(node.second, second, path.concat('second')),
            ].filter(nonNullElement));
        }
        else {
            return (react_1.default.createElement("div", { key: node, className: "mosaic-tile", style: __assign({}, BoundingBox_1.BoundingBox.asStyles(boundingBox)) }, this.props.renderTile(node, path)));
        }
    };
    MosaicRoot.prototype.renderSplit = function (direction, boundingBox, splitPercentage, path) {
        var _this = this;
        var resize = this.props.resize;
        if (resize !== 'DISABLED') {
            return (react_1.default.createElement(Split_1.Split, __assign({ key: path.join(',') + 'splitter' }, resize, { boundingBox: boundingBox, splitPercentage: splitPercentage, direction: direction, onChange: function (percentage) { return _this.onResize(percentage, path, true); }, onRelease: function (percentage) { return _this.onResize(percentage, path, false); } })));
        }
        else {
            return null;
        }
    };
    MosaicRoot.contextType = contextTypes_1.MosaicContext;
    return MosaicRoot;
}(react_1.default.PureComponent));
exports.MosaicRoot = MosaicRoot;
function nonNullElement(x) {
    return x !== null;
}
//# sourceMappingURL=MosaicRoot.js.map

/***/ }),

/***/ 23698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicWindow = exports.SourceDropConnectedInternalMosaicWindow = exports.SourceConnectedInternalMosaicWindow = exports.InternalMosaicWindow = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var defer_1 = __importDefault(__webpack_require__(81629));
var dropRight_1 = __importDefault(__webpack_require__(43624));
var isEmpty_1 = __importDefault(__webpack_require__(41609));
var isEqual_1 = __importDefault(__webpack_require__(18446));
var values_1 = __importDefault(__webpack_require__(52628));
var react_1 = __importDefault(__webpack_require__(63804));
var react_dnd_1 = __webpack_require__(71061);
var defaultToolbarControls_1 = __webpack_require__(17370);
var Separator_1 = __webpack_require__(86971);
var contextTypes_1 = __webpack_require__(49801);
var internalTypes_1 = __webpack_require__(2497);
var MosaicDropTarget_1 = __webpack_require__(35773);
var types_1 = __webpack_require__(40664);
var mosaicUpdates_1 = __webpack_require__(3159);
var mosaicUtilities_1 = __webpack_require__(95275);
var OptionalBlueprint_1 = __webpack_require__(56607);
var InternalMosaicWindow = /** @class */ (function (_super) {
    __extends(InternalMosaicWindow, _super);
    function InternalMosaicWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            additionalControlsOpen: false,
        };
        _this.rootElement = null;
        _this.renderDropTarget = function (position) {
            var path = _this.props.path;
            return react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, { position: position, path: path, key: position });
        };
        _this.split = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.checkCreateNode();
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            var mosaicActions = _this.context.mosaicActions;
            var root = mosaicActions.getRoot();
            var direction = _this.rootElement.offsetWidth > _this.rootElement.offsetHeight ? 'row' : 'column';
            return Promise.resolve(createNode.apply(void 0, args)).then(function (second) {
                return mosaicActions.replaceWith(path, {
                    direction: direction,
                    second: second,
                    first: mosaicUtilities_1.getAndAssertNodeAtPathExists(root, path),
                });
            });
        };
        _this.swap = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.checkCreateNode();
            var mosaicActions = _this.context.mosaicActions;
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            return Promise.resolve(createNode.apply(void 0, args)).then(function (node) { return mosaicActions.replaceWith(path, node); });
        };
        _this.setAdditionalControlsOpen = function (additionalControlsOpen) {
            _this.setState({ additionalControlsOpen: additionalControlsOpen });
        };
        _this.getPath = function () { return _this.props.path; };
        _this.connectDragSource = function (connectedElements) {
            var connectDragSource = _this.props.connectDragSource;
            return connectDragSource(connectedElements);
        };
        _this.childContext = {
            mosaicWindowActions: {
                split: _this.split,
                replaceWithNew: _this.swap,
                setAdditionalControlsOpen: _this.setAdditionalControlsOpen,
                getPath: _this.getPath,
                connectDragSource: _this.connectDragSource,
            },
        };
        return _this;
    }
    InternalMosaicWindow.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, isOver = _a.isOver, renderPreview = _a.renderPreview, additionalControls = _a.additionalControls, connectDropTarget = _a.connectDropTarget, connectDragPreview = _a.connectDragPreview, draggedMosaicId = _a.draggedMosaicId;
        return (react_1.default.createElement(contextTypes_1.MosaicWindowContext.Provider, { value: this.childContext }, connectDropTarget(react_1.default.createElement("div", { className: classnames_1.default('mosaic-window mosaic-drop-target', className, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId,
                'additional-controls-open': this.state.additionalControlsOpen,
            }), ref: function (element) { return (_this.rootElement = element); } },
            this.renderToolbar(),
            react_1.default.createElement("div", { className: "mosaic-window-body" }, this.props.children),
            react_1.default.createElement("div", { className: "mosaic-window-body-overlay", onClick: function () { return _this.setAdditionalControlsOpen(false); } }),
            react_1.default.createElement("div", { className: "mosaic-window-additional-actions-bar" }, additionalControls),
            connectDragPreview(renderPreview(this.props)),
            react_1.default.createElement("div", { className: "drop-target-container" }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(this.renderDropTarget))))));
    };
    InternalMosaicWindow.prototype.getToolbarControls = function () {
        var _a = this.props, toolbarControls = _a.toolbarControls, createNode = _a.createNode;
        if (toolbarControls) {
            return toolbarControls;
        }
        else if (createNode) {
            return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION;
        }
        else {
            return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION;
        }
    };
    InternalMosaicWindow.prototype.renderToolbar = function () {
        var _a;
        var _this = this;
        var _b = this.props, title = _b.title, draggable = _b.draggable, additionalControls = _b.additionalControls, additionalControlButtonText = _b.additionalControlButtonText, path = _b.path, renderToolbar = _b.renderToolbar;
        var additionalControlsOpen = this.state.additionalControlsOpen;
        var toolbarControls = this.getToolbarControls();
        var draggableAndNotRoot = draggable && path.length > 0;
        var connectIfDraggable = draggableAndNotRoot ? this.props.connectDragSource : function (el) { return el; };
        if (renderToolbar) {
            var connectedToolbar = connectIfDraggable(renderToolbar(this.props, draggable));
            return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-toolbar', { draggable: draggableAndNotRoot }) }, connectedToolbar));
        }
        var titleDiv = connectIfDraggable(react_1.default.createElement("div", { title: title, className: "mosaic-window-title" }, title));
        var hasAdditionalControls = !isEmpty_1.default(additionalControls);
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-toolbar', { draggable: draggableAndNotRoot }) },
            titleDiv,
            react_1.default.createElement("div", { className: classnames_1.default('mosaic-window-controls', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON_GROUP')) },
                hasAdditionalControls && (react_1.default.createElement("button", { onClick: function () { return _this.setAdditionalControlsOpen(!additionalControlsOpen); }, className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('MORE'), (_a = {},
                        _a[OptionalBlueprint_1.OptionalBlueprint.getClasses('ACTIVE')] = additionalControlsOpen,
                        _a)) },
                    react_1.default.createElement("span", { className: "control-text" }, additionalControlButtonText))),
                hasAdditionalControls && react_1.default.createElement(Separator_1.Separator, null),
                toolbarControls)));
    };
    InternalMosaicWindow.prototype.checkCreateNode = function () {
        if (this.props.createNode == null) {
            throw new Error('Operation invalid unless `createNode` is defined');
        }
    };
    InternalMosaicWindow.defaultProps = {
        additionalControlButtonText: 'More',
        draggable: true,
        renderPreview: function (_a) {
            var title = _a.title;
            return (react_1.default.createElement("div", { className: "mosaic-preview" },
                react_1.default.createElement("div", { className: "mosaic-window-toolbar" },
                    react_1.default.createElement("div", { className: "mosaic-window-title" }, title)),
                react_1.default.createElement("div", { className: "mosaic-window-body" },
                    react_1.default.createElement("h4", null, title),
                    react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, { iconSize: 72, icon: "application" }))));
        },
        renderToolbar: null,
    };
    InternalMosaicWindow.contextType = contextTypes_1.MosaicContext;
    return InternalMosaicWindow;
}(react_1.default.Component));
exports.InternalMosaicWindow = InternalMosaicWindow;
var dragSource = {
    beginDrag: function (props, _monitor, component) {
        if (props.onDragStart) {
            props.onDragStart();
        }
        // TODO: Actually just delete instead of hiding
        // The defer is necessary as the element must be present on start for HTML DnD to not cry
        var hideTimer = defer_1.default(function () { return component.context.mosaicActions.hide(component.props.path); });
        return {
            mosaicId: component.context.mosaicId,
            hideTimer: hideTimer,
        };
    },
    endDrag: function (props, monitor, component) {
        var hideTimer = monitor.getItem().hideTimer;
        // If the hide call hasn't happened yet, cancel it
        window.clearTimeout(hideTimer);
        var ownPath = component.props.path;
        var dropResult = (monitor.getDropResult() || {});
        var mosaicActions = component.context.mosaicActions;
        var position = dropResult.position, destinationPath = dropResult.path;
        if (position != null && destinationPath != null && !isEqual_1.default(destinationPath, ownPath)) {
            mosaicActions.updateTree(mosaicUpdates_1.createDragToUpdates(mosaicActions.getRoot(), ownPath, destinationPath, position));
            if (props.onDragEnd) {
                props.onDragEnd('drop');
            }
        }
        else {
            // TODO: restore node from captured state
            mosaicActions.updateTree([
                {
                    path: dropRight_1.default(ownPath),
                    spec: {
                        splitPercentage: {
                            $set: null,
                        },
                    },
                },
            ]);
            if (props.onDragEnd) {
                props.onDragEnd('reset');
            }
        }
    },
};
var dropTarget = {};
// Each step exported here just to keep react-hot-loader happy
exports.SourceConnectedInternalMosaicWindow = react_dnd_1.DragSource(types_1.MosaicDragType.WINDOW, dragSource, function (connect, _monitor) { return ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
}); })(InternalMosaicWindow);
exports.SourceDropConnectedInternalMosaicWindow = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedMosaicId: (monitor.getItem() || {}).mosaicId,
}); })(exports.SourceConnectedInternalMosaicWindow);
var MosaicWindow = /** @class */ (function (_super) {
    __extends(MosaicWindow, _super);
    function MosaicWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicWindow.prototype.render = function () {
        return react_1.default.createElement(exports.SourceDropConnectedInternalMosaicWindow, __assign({}, this.props));
    };
    return MosaicWindow;
}(react_1.default.PureComponent));
exports.MosaicWindow = MosaicWindow;
//# sourceMappingURL=MosaicWindow.js.map

/***/ }),

/***/ 96717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicZeroState = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var noop_1 = __importDefault(__webpack_require__(50308));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var OptionalBlueprint_1 = __webpack_require__(56607);
var MosaicZeroState = /** @class */ (function (_super) {
    __extends(MosaicZeroState, _super);
    function MosaicZeroState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function () {
            return Promise.resolve(_this.props.createNode())
                .then(function (node) { return _this.context.mosaicActions.replaceWith([], node); })
                .catch(noop_1.default);
        }; // Swallow rejections (i.e. on user cancel)
        return _this;
    }
    MosaicZeroState.prototype.render = function () {
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-zero-state', OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE')) },
            react_1.default.createElement("div", { className: OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE_VISUAL') },
                react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, { iconSize: 120, icon: "applications" })),
            react_1.default.createElement("h4", { className: OptionalBlueprint_1.OptionalBlueprint.getClasses('HEADING') }, "No Windows Present"),
            react_1.default.createElement("div", null, this.props.createNode && (react_1.default.createElement("button", { className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD')), onClick: this.replace }, "Add New Window")))));
    };
    MosaicZeroState.contextType = contextTypes_1.MosaicContext;
    return MosaicZeroState;
}(react_1.default.PureComponent));
exports.MosaicZeroState = MosaicZeroState;
//# sourceMappingURL=MosaicZeroState.js.map

/***/ }),

/***/ 92768:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RootDropTargets = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var values_1 = __importDefault(__webpack_require__(52628));
var react_1 = __importDefault(__webpack_require__(63804));
var react_dnd_1 = __webpack_require__(71061);
var internalTypes_1 = __webpack_require__(2497);
var MosaicDropTarget_1 = __webpack_require__(35773);
var types_1 = __webpack_require__(40664);
var RootDropTargetsClass = /** @class */ (function (_super) {
    __extends(RootDropTargetsClass, _super);
    function RootDropTargetsClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootDropTargetsClass.prototype.render = function () {
        return (react_1.default.createElement("div", { className: classnames_1.default('drop-target-container', {
                '-dragging': this.props.isDragging,
            }) }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(function (position) { return (react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, { position: position, path: [], key: position })); })));
    };
    return RootDropTargetsClass;
}(react_1.default.PureComponent));
var dropTarget = {};
exports.RootDropTargets = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function (_connect, monitor) { return ({
    isDragging: monitor.getItem() !== null && monitor.getItemType() === types_1.MosaicDragType.WINDOW,
}); })(RootDropTargetsClass);
//# sourceMappingURL=RootDropTargets.js.map

/***/ }),

/***/ 25080:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Split = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var clamp_1 = __importDefault(__webpack_require__(74691));
var throttle_1 = __importDefault(__webpack_require__(23493));
var react_1 = __importDefault(__webpack_require__(63804));
var BoundingBox_1 = __webpack_require__(93942);
var RESIZE_THROTTLE_MS = 1000 / 30; // 30 fps
var TOUCH_EVENT_OPTIONS = {
    capture: true,
    passive: false,
};
var Split = /** @class */ (function (_super) {
    __extends(Split, _super);
    function Split() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElement = react_1.default.createRef();
        _this.listenersBound = false;
        _this.onMouseDown = function (event) {
            if (!isTouchEvent(event)) {
                if (event.button !== 0) {
                    return;
                }
            }
            event.preventDefault();
            _this.bindListeners();
        };
        _this.onMouseUp = function (event) {
            _this.unbindListeners();
            var percentage = _this.calculateRelativePercentage(event);
            _this.props.onRelease(percentage);
        };
        _this.onMouseMove = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.throttledUpdatePercentage(event);
        };
        _this.throttledUpdatePercentage = throttle_1.default(function (event) {
            var percentage = _this.calculateRelativePercentage(event);
            if (percentage !== _this.props.splitPercentage) {
                _this.props.onChange(percentage);
            }
        }, RESIZE_THROTTLE_MS);
        return _this;
    }
    Split.prototype.render = function () {
        var direction = this.props.direction;
        return (react_1.default.createElement("div", { className: classnames_1.default('mosaic-split', {
                '-row': direction === 'row',
                '-column': direction === 'column',
            }), ref: this.rootElement, onMouseDown: this.onMouseDown, style: this.computeStyle() },
            react_1.default.createElement("div", { className: "mosaic-split-line" })));
    };
    Split.prototype.componentDidMount = function () {
        this.rootElement.current.addEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
    };
    Split.prototype.componentWillUnmount = function () {
        this.unbindListeners();
        if (this.rootElement.current) {
            this.rootElement.current.ownerDocument.removeEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
        }
    };
    Split.prototype.bindListeners = function () {
        if (!this.listenersBound) {
            this.rootElement.current.ownerDocument.addEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.addEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.addEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.addEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = true;
        }
    };
    Split.prototype.unbindListeners = function () {
        if (this.rootElement.current) {
            this.rootElement.current.ownerDocument.removeEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.removeEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = false;
        }
    };
    Split.prototype.computeStyle = function () {
        var _a;
        var _b = this.props, boundingBox = _b.boundingBox, direction = _b.direction, splitPercentage = _b.splitPercentage;
        var positionStyle = direction === 'column' ? 'top' : 'left';
        var absolutePercentage = BoundingBox_1.BoundingBox.getAbsoluteSplitPercentage(boundingBox, splitPercentage, direction);
        return __assign(__assign({}, BoundingBox_1.BoundingBox.asStyles(boundingBox)), (_a = {}, _a[positionStyle] = absolutePercentage + "%", _a));
    };
    Split.prototype.calculateRelativePercentage = function (event) {
        var _a = this.props, minimumPaneSizePercentage = _a.minimumPaneSizePercentage, direction = _a.direction, boundingBox = _a.boundingBox;
        var parentBBox = this.rootElement.current.parentElement.getBoundingClientRect();
        var location = isTouchEvent(event) ? event.changedTouches[0] : event;
        var absolutePercentage;
        if (direction === 'column') {
            absolutePercentage = ((location.clientY - parentBBox.top) / parentBBox.height) * 100.0;
        }
        else {
            absolutePercentage = ((location.clientX - parentBBox.left) / parentBBox.width) * 100.0;
        }
        var relativePercentage = BoundingBox_1.BoundingBox.getRelativeSplitPercentage(boundingBox, absolutePercentage, direction);
        return clamp_1.default(relativePercentage, minimumPaneSizePercentage, 100 - minimumPaneSizePercentage);
    };
    Split.defaultProps = {
        onChange: function () { return void 0; },
        onRelease: function () { return void 0; },
        minimumPaneSizePercentage: 20,
    };
    return Split;
}(react_1.default.PureComponent));
exports.Split = Split;
function isTouchEvent(event) {
    return event.changedTouches != null;
}
//# sourceMappingURL=Split.js.map

/***/ }),

/***/ 10321:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpandButton = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var OptionalBlueprint_1 = __webpack_require__(56607);
var MosaicButton_1 = __webpack_require__(17960);
var ExpandButton = /** @class */ (function (_super) {
    __extends(ExpandButton, _super);
    function ExpandButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpandButton.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function (_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Expand', classnames_1.default('expand-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('MAXIMIZE')), _this.createExpand(mosaicActions));
        }));
    };
    ExpandButton.prototype.createExpand = function (mosaicActions) {
        var _this = this;
        return function () {
            mosaicActions.expand(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
    };
    ExpandButton.contextType = contextTypes_1.MosaicWindowContext;
    return ExpandButton;
}(react_1.default.PureComponent));
exports.ExpandButton = ExpandButton;
//# sourceMappingURL=ExpandButton.js.map

/***/ }),

/***/ 17960:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDefaultToolbarButton = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var react_1 = __importDefault(__webpack_require__(63804));
var OptionalBlueprint_1 = __webpack_require__(56607);
function createDefaultToolbarButton(title, className, onClick, text) {
    return (react_1.default.createElement("button", { title: title, onClick: onClick, className: classnames_1.default('mosaic-default-control', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), className) }, text && react_1.default.createElement("span", { className: "control-text" }, text)));
}
exports.createDefaultToolbarButton = createDefaultToolbarButton;
//# sourceMappingURL=MosaicButton.js.map

/***/ }),

/***/ 86653:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveButton = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var OptionalBlueprint_1 = __webpack_require__(56607);
var MosaicButton_1 = __webpack_require__(17960);
var RemoveButton = /** @class */ (function (_super) {
    __extends(RemoveButton, _super);
    function RemoveButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveButton.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function (_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Close Window', classnames_1.default('close-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('CROSS')), _this.createRemove(mosaicActions));
        }));
    };
    RemoveButton.prototype.createRemove = function (mosaicActions) {
        var _this = this;
        return function () {
            mosaicActions.remove(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) {
                _this.props.onClick();
            }
        };
    };
    RemoveButton.contextType = contextTypes_1.MosaicWindowContext;
    return RemoveButton;
}(react_1.default.PureComponent));
exports.RemoveButton = RemoveButton;
//# sourceMappingURL=RemoveButton.js.map

/***/ }),

/***/ 51970:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReplaceButton = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var noop_1 = __importDefault(__webpack_require__(50308));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var OptionalBlueprint_1 = __webpack_require__(56607);
var MosaicButton_1 = __webpack_require__(17960);
var ReplaceButton = /** @class */ (function (_super) {
    __extends(ReplaceButton, _super);
    function ReplaceButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function () {
            _this.context.mosaicWindowActions
                .replaceWithNew()
                .then(function () {
                if (_this.props.onClick) {
                    _this.props.onClick();
                }
            })
                .catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    ReplaceButton.prototype.render = function () {
        return MosaicButton_1.createDefaultToolbarButton('Replace Window', classnames_1.default('replace-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('EXCHANGE')), this.replace);
    };
    ReplaceButton.contextType = contextTypes_1.MosaicWindowContext;
    return ReplaceButton;
}(react_1.default.PureComponent));
exports.ReplaceButton = ReplaceButton;
//# sourceMappingURL=ReplaceButton.js.map

/***/ }),

/***/ 86971:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Separator = void 0;
var react_1 = __importDefault(__webpack_require__(63804));
var Separator = /** @class */ (function (_super) {
    __extends(Separator, _super);
    function Separator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Separator.prototype.render = function () {
        return react_1.default.createElement("div", { className: "separator" });
    };
    return Separator;
}(react_1.default.PureComponent));
exports.Separator = Separator;
//# sourceMappingURL=Separator.js.map

/***/ }),

/***/ 32757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplitButton = void 0;
var classnames_1 = __importDefault(__webpack_require__(94184));
var noop_1 = __importDefault(__webpack_require__(50308));
var react_1 = __importDefault(__webpack_require__(63804));
var contextTypes_1 = __webpack_require__(49801);
var OptionalBlueprint_1 = __webpack_require__(56607);
var MosaicButton_1 = __webpack_require__(17960);
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    function SplitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.split = function () {
            _this.context.mosaicWindowActions
                .split()
                .then(function () {
                if (_this.props.onClick) {
                    _this.props.onClick();
                }
            })
                .catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    SplitButton.prototype.render = function () {
        return MosaicButton_1.createDefaultToolbarButton('Split Window', classnames_1.default('split-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD_COLUMN_RIGHT')), this.split);
    };
    SplitButton.contextType = contextTypes_1.MosaicWindowContext;
    return SplitButton;
}(react_1.default.PureComponent));
exports.SplitButton = SplitButton;
//# sourceMappingURL=SplitButton.js.map

/***/ }),

/***/ 17370:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = exports.DEFAULT_CONTROLS_WITH_CREATION = void 0;
var react_1 = __importDefault(__webpack_require__(63804));
var ExpandButton_1 = __webpack_require__(10321);
var RemoveButton_1 = __webpack_require__(86653);
var ReplaceButton_1 = __webpack_require__(51970);
var SplitButton_1 = __webpack_require__(32757);
exports.DEFAULT_CONTROLS_WITH_CREATION = react_1.default.Children.toArray([
    react_1.default.createElement(ReplaceButton_1.ReplaceButton, null),
    react_1.default.createElement(SplitButton_1.SplitButton, null),
    react_1.default.createElement(ExpandButton_1.ExpandButton, null),
    react_1.default.createElement(RemoveButton_1.RemoveButton, null),
]);
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = react_1.default.Children.toArray([react_1.default.createElement(ExpandButton_1.ExpandButton, null), react_1.default.createElement(RemoveButton_1.RemoveButton, null)]);
//# sourceMappingURL=defaultToolbarControls.js.map

/***/ }),

/***/ 49801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicWindowContext = exports.MosaicContext = void 0;
var react_1 = __importDefault(__webpack_require__(63804));
exports.MosaicContext = react_1.default.createContext(undefined);
exports.MosaicWindowContext = react_1.default.createContext(undefined);
//# sourceMappingURL=contextTypes.js.map

/***/ }),

/***/ 57024:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
/**
 * @license
 * Copyright 2019 Kevin Verdieck, originally developed at Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mosaic_1 = __webpack_require__(6162);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return Mosaic_1.Mosaic; } });
Object.defineProperty(exports, "wB", ({ enumerable: true, get: function () { return Mosaic_1.MosaicWithoutDragDropContext; } }));
var types_1 = __webpack_require__(40664);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return types_1.MosaicDragType; } });
var contextTypes_1 = __webpack_require__(49801);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return contextTypes_1.MosaicContext; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return contextTypes_1.MosaicWindowContext; } });
var mosaicUpdates_1 = __webpack_require__(3159);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.buildSpecFromUpdate; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.createDragToUpdates; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.createExpandUpdate; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.createHideUpdate; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.createRemoveUpdate; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUpdates_1.updateTree; } });
var mosaicUtilities_1 = __webpack_require__(95275);
Object.defineProperty(exports, "C4", ({ enumerable: true, get: function () { return mosaicUtilities_1.createBalancedTreeFromLeaves; } }));
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.Corner; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.getAndAssertNodeAtPathExists; } });
Object.defineProperty(exports, "fY", ({ enumerable: true, get: function () { return mosaicUtilities_1.getLeaves; } }));
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.getNodeAtPath; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.getOtherBranch; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.getOtherDirection; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.getPathToCorner; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return mosaicUtilities_1.isParent; } });
var MosaicWindow_1 = __webpack_require__(23698);
Object.defineProperty(exports, "h1", ({ enumerable: true, get: function () { return MosaicWindow_1.MosaicWindow; } }));
var MosaicButton_1 = __webpack_require__(17960);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return MosaicButton_1.createDefaultToolbarButton; } });
var MosaicZeroState_1 = __webpack_require__(96717);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return MosaicZeroState_1.MosaicZeroState; } });
var Separator_1 = __webpack_require__(86971);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return Separator_1.Separator; } });
var ExpandButton_1 = __webpack_require__(10321);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return ExpandButton_1.ExpandButton; } });
var ReplaceButton_1 = __webpack_require__(51970);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return ReplaceButton_1.ReplaceButton; } });
var SplitButton_1 = __webpack_require__(32757);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return SplitButton_1.SplitButton; } });
var RemoveButton_1 = __webpack_require__(86653);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return RemoveButton_1.RemoveButton; } });
var defaultToolbarControls_1 = __webpack_require__(17370);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION; } });
__webpack_unused_export__ = ({ enumerable: true, get: function () { return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicDropTargetPosition = void 0;
exports.MosaicDropTargetPosition = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
};
//# sourceMappingURL=internalTypes.js.map

/***/ }),

/***/ 40664:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MosaicDragType = void 0;
/**
 * Used by `react-dnd`
 * @type {{WINDOW: string}}
 */
exports.MosaicDragType = {
    WINDOW: 'MosaicWindow',
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 93942:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoundingBox = void 0;
var assertNever_1 = __webpack_require__(7805);
var BoundingBox;
(function (BoundingBox) {
    function empty() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
    }
    BoundingBox.empty = empty;
    function split(boundingBox, relativeSplitPercentage, direction) {
        var absolutePercentage = getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction);
        if (direction === 'column') {
            return {
                first: __assign(__assign({}, boundingBox), { bottom: 100 - absolutePercentage }),
                second: __assign(__assign({}, boundingBox), { top: absolutePercentage }),
            };
        }
        else if (direction === 'row') {
            return {
                first: __assign(__assign({}, boundingBox), { right: 100 - absolutePercentage }),
                second: __assign(__assign({}, boundingBox), { left: absolutePercentage }),
            };
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.split = split;
    function getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return (height * relativeSplitPercentage) / 100 + top;
        }
        else if (direction === 'row') {
            var width = 100 - right - left;
            return (width * relativeSplitPercentage) / 100 + left;
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.getAbsoluteSplitPercentage = getAbsoluteSplitPercentage;
    function getRelativeSplitPercentage(boundingBox, absoluteSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return ((absoluteSplitPercentage - top) / height) * 100;
        }
        else if (direction === 'row') {
            var width = 100 - right - left;
            return ((absoluteSplitPercentage - left) / width) * 100;
        }
        else {
            return assertNever_1.assertNever(direction);
        }
    }
    BoundingBox.getRelativeSplitPercentage = getRelativeSplitPercentage;
    function asStyles(_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return {
            top: top + "%",
            right: right + "%",
            bottom: bottom + "%",
            left: left + "%",
        };
    }
    BoundingBox.asStyles = asStyles;
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {}));
//# sourceMappingURL=BoundingBox.js.map

/***/ }),

/***/ 56607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionalBlueprint = void 0;
var React = __importStar(__webpack_require__(63804));
var OptionalBlueprint;
(function (OptionalBlueprint) {
    var _a;
    var Classes;
    var IconNames;
    try {
        // Webpack is quieter about these errors
        // https://github.com/nomcopter/react-mosaic/issues/109
        /*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@blueprintjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        /*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@blueprintjs/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        (_a = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@blueprintjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), Classes = _a.Classes, OptionalBlueprint.Icon = _a.Icon);
        (IconNames = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@blueprintjs/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).IconNames);
    }
    catch (_b) {
        OptionalBlueprint.Icon = function (_a) {
            var icon = _a.icon;
            return React.createElement("span", null, icon);
        };
    }
    function getClasses() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        if (Classes) {
            return names.map(function (name) { return Classes[name]; }).join(' ');
        }
        return '';
    }
    OptionalBlueprint.getClasses = getClasses;
    function getIconClass(iconName) {
        if (Classes && IconNames) {
            return Classes.iconClass(IconNames[iconName]);
        }
        return '';
    }
    OptionalBlueprint.getIconClass = getIconClass;
})(OptionalBlueprint = exports.OptionalBlueprint || (exports.OptionalBlueprint = {}));
//# sourceMappingURL=OptionalBlueprint.js.map

/***/ }),

/***/ 7805:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertNever = void 0;
function assertNever(shouldBeNever) {
    throw new Error('Unhandled case: ' + JSON.stringify(shouldBeNever));
}
exports.assertNever = assertNever;
//# sourceMappingURL=assertNever.js.map

/***/ }),

/***/ 3159:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExpandUpdate = exports.createHideUpdate = exports.createDragToUpdates = exports.createRemoveUpdate = exports.updateTree = exports.buildSpecFromUpdate = void 0;
var immutability_helper_1 = __importDefault(__webpack_require__(7145));
var drop_1 = __importDefault(__webpack_require__(30731));
var dropRight_1 = __importDefault(__webpack_require__(43624));
var isEqual_1 = __importDefault(__webpack_require__(18446));
var last_1 = __importDefault(__webpack_require__(10928));
var set_1 = __importDefault(__webpack_require__(36968));
var take_1 = __importDefault(__webpack_require__(69572));
var internalTypes_1 = __webpack_require__(2497);
var mosaicUtilities_1 = __webpack_require__(95275);
/**
 * Used to prepare `update` for `immutability-helper`
 * @param mosaicUpdate
 * @returns {any}
 */
function buildSpecFromUpdate(mosaicUpdate) {
    if (mosaicUpdate.path.length > 0) {
        return set_1.default({}, mosaicUpdate.path, mosaicUpdate.spec);
    }
    else {
        return mosaicUpdate.spec;
    }
}
exports.buildSpecFromUpdate = buildSpecFromUpdate;
/**
 * Applies `updates` to `root`
 * @param root
 * @param updates
 * @returns {MosaicNode<T>}
 */
function updateTree(root, updates) {
    var currentNode = root;
    updates.forEach(function (mUpdate) {
        currentNode = immutability_helper_1.default(currentNode, buildSpecFromUpdate(mUpdate));
    });
    return currentNode;
}
exports.updateTree = updateTree;
/**
 * Creates a `MosaicUpdate<T>` to remove the node at `path` from `root`
 * @param root
 * @param path
 * @returns {{path: T[], spec: {$set: MosaicNode<T>}}}
 */
function createRemoveUpdate(root, path) {
    var parentPath = dropRight_1.default(path);
    var nodeToRemove = last_1.default(path);
    var siblingPath = parentPath.concat(mosaicUtilities_1.getOtherBranch(nodeToRemove));
    var sibling = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, siblingPath);
    return {
        path: parentPath,
        spec: {
            $set: sibling,
        },
    };
}
exports.createRemoveUpdate = createRemoveUpdate;
function isPathPrefixEqual(a, b, length) {
    return isEqual_1.default(take_1.default(a, length), take_1.default(b, length));
}
/**
 * Creates a `MosaicUpdate<T>` to split the _leaf_ at `destinationPath` into a node of it and the node from `sourcePath`
 * placing the node from `sourcePath` in `position`.
 * @param root
 * @param sourcePath
 * @param destinationPath
 * @param position
 * @returns {(MosaicUpdate<T>|{path: MosaicPath, spec: {$set: {first: MosaicNode<T>, second: MosaicNode<T>, direction: MosaicDirection}}})[]}
 */
function createDragToUpdates(root, sourcePath, destinationPath, position) {
    var destinationNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, destinationPath);
    var updates = [];
    var destinationIsParentOfSource = isPathPrefixEqual(sourcePath, destinationPath, destinationPath.length);
    if (destinationIsParentOfSource) {
        // Must explicitly remove source from the destination node
        destinationNode = updateTree(destinationNode, [
            createRemoveUpdate(destinationNode, drop_1.default(sourcePath, destinationPath.length)),
        ]);
    }
    else {
        // Can remove source normally
        updates.push(createRemoveUpdate(root, sourcePath));
        // Have to drop in the correct destination after the source has been removed
        var removedNodeParentIsInPath = isPathPrefixEqual(sourcePath, destinationPath, sourcePath.length - 1);
        if (removedNodeParentIsInPath) {
            destinationPath.splice(sourcePath.length - 1, 1);
        }
    }
    var sourceNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, sourcePath);
    var first;
    var second;
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.TOP) {
        first = sourceNode;
        second = destinationNode;
    }
    else {
        first = destinationNode;
        second = sourceNode;
    }
    var direction = 'column';
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.RIGHT) {
        direction = 'row';
    }
    updates.push({
        path: destinationPath,
        spec: {
            $set: { first: first, second: second, direction: direction },
        },
    });
    return updates;
}
exports.createDragToUpdates = createDragToUpdates;
/**
 * Sets the splitPercentage to hide the node at `path`
 * @param path
 * @returns {{path: T[], spec: {splitPercentage: {$set: number}}}}
 */
function createHideUpdate(path) {
    var targetPath = dropRight_1.default(path);
    var thisBranch = last_1.default(path);
    var splitPercentage;
    if (thisBranch === 'first') {
        splitPercentage = 0;
    }
    else {
        splitPercentage = 100;
    }
    return {
        path: targetPath,
        spec: {
            splitPercentage: {
                $set: splitPercentage,
            },
        },
    };
}
exports.createHideUpdate = createHideUpdate;
/**
 * Sets the splitPercentage of node at `path` and all of its parents to `percentage` in order to expand it
 * @param path
 * @param percentage
 * @returns {{spec: MosaicUpdateSpec<T>, path: Array}}
 */
function createExpandUpdate(path, percentage) {
    var _a;
    var spec = {};
    for (var i = path.length - 1; i >= 0; i--) {
        var branch = path[i];
        var splitPercentage = branch === 'first' ? percentage : 100 - percentage;
        spec = (_a = {
                splitPercentage: {
                    $set: splitPercentage,
                }
            },
            _a[branch] = spec,
            _a);
    }
    return {
        spec: spec,
        path: [],
    };
}
exports.createExpandUpdate = createExpandUpdate;
//# sourceMappingURL=mosaicUpdates.js.map

/***/ }),

/***/ 95275:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAndAssertNodeAtPathExists = exports.getNodeAtPath = exports.getLeaves = exports.getPathToCorner = exports.getOtherDirection = exports.getOtherBranch = exports.createBalancedTreeFromLeaves = exports.isParent = exports.Corner = void 0;
var clone_1 = __importDefault(__webpack_require__(66678));
var get_1 = __importDefault(__webpack_require__(27361));
function alternateDirection(node, direction) {
    if (direction === void 0) { direction = 'row'; }
    if (isParent(node)) {
        var nextDirection = getOtherDirection(direction);
        return {
            direction: direction,
            first: alternateDirection(node.first, nextDirection),
            second: alternateDirection(node.second, nextDirection),
        };
    }
    else {
        return node;
    }
}
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 1] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
})(Corner = exports.Corner || (exports.Corner = {}));
/**
 * Returns `true` if `node` is a MosaicParent
 * @param node
 * @returns {boolean}
 */
function isParent(node) {
    return node.direction != null;
}
exports.isParent = isParent;
/**
 * Creates a balanced binary tree from `leaves` with the goal of making them as equal area as possible
 * @param leaves
 * @param startDirection
 * @returns {MosaicNode<T>}
 */
function createBalancedTreeFromLeaves(leaves, startDirection) {
    if (startDirection === void 0) { startDirection = 'row'; }
    if (leaves.length === 0) {
        return null;
    }
    var current = clone_1.default(leaves);
    var next = [];
    while (current.length > 1) {
        while (current.length > 0) {
            if (current.length > 1) {
                next.push({
                    direction: 'row',
                    first: current.shift(),
                    second: current.shift(),
                });
            }
            else {
                next.unshift(current.shift());
            }
        }
        current = next;
        next = [];
    }
    return alternateDirection(current[0], startDirection);
}
exports.createBalancedTreeFromLeaves = createBalancedTreeFromLeaves;
/**
 * Gets the sibling of `branch`
 * @param branch
 * @returns {any}
 */
function getOtherBranch(branch) {
    if (branch === 'first') {
        return 'second';
    }
    else if (branch === 'second') {
        return 'first';
    }
    else {
        throw new Error("Branch '" + branch + "' not a valid branch");
    }
}
exports.getOtherBranch = getOtherBranch;
/**
 * Gets the opposite of `direction`
 * @param direction
 * @returns {any}
 */
function getOtherDirection(direction) {
    if (direction === 'row') {
        return 'column';
    }
    else {
        return 'row';
    }
}
exports.getOtherDirection = getOtherDirection;
/**
 * Traverses `tree` to find the path to the specified `corner`
 * @param tree
 * @param corner
 * @returns {MosaicPath}
 */
function getPathToCorner(tree, corner) {
    var currentNode = tree;
    var currentPath = [];
    while (isParent(currentNode)) {
        if (currentNode.direction === 'row' && (corner === Corner.TOP_LEFT || corner === Corner.BOTTOM_LEFT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        }
        else if (currentNode.direction === 'column' && (corner === Corner.TOP_LEFT || corner === Corner.TOP_RIGHT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        }
        else {
            currentPath.push('second');
            currentNode = currentNode.second;
        }
    }
    return currentPath;
}
exports.getPathToCorner = getPathToCorner;
/**
 * Gets all leaves of `tree`
 * @param tree
 * @returns {T[]}
 */
function getLeaves(tree) {
    if (tree == null) {
        return [];
    }
    else if (isParent(tree)) {
        return getLeaves(tree.first).concat(getLeaves(tree.second));
    }
    else {
        return [tree];
    }
}
exports.getLeaves = getLeaves;
/**
 * Gets node at `path` from `tree`
 * @param tree
 * @param path
 * @returns {MosaicNode<T>|null}
 */
function getNodeAtPath(tree, path) {
    if (path.length > 0) {
        return get_1.default(tree, path, null);
    }
    else {
        return tree;
    }
}
exports.getNodeAtPath = getNodeAtPath;
/**
 * Gets node at `path` from `tree` and verifies that neither `tree` nor the result are null
 * @param tree
 * @param path
 * @returns {MosaicNode<T>}
 */
function getAndAssertNodeAtPathExists(tree, path) {
    if (tree == null) {
        throw new Error('Root is empty, cannot fetch path');
    }
    var node = getNodeAtPath(tree, path);
    if (node == null) {
        throw new Error("Path [" + path.join(', ') + "] did not resolve to a node");
    }
    return node;
}
exports.getAndAssertNodeAtPathExists = getAndAssertNodeAtPathExists;
//# sourceMappingURL=mosaicUtilities.js.map

/***/ }),

/***/ 62893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _react = _interopRequireDefault(__webpack_require__(63804));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  visibility: 'hidden',
  pointerEvents: 'none'
};
var styleChild = {
  position: 'absolute',
  left: 0,
  top: 0,
  transition: '0s'
};

function isAncestor(node, ancestor) {
  var current = node.parentNode;

  while (current) {
    if (current === ancestor) {
      return true;
    }

    current = current.parentNode;
  }

  return false;
}

var ResizeObserver =
/*#__PURE__*/
function (_React$Component) {
  function ResizeObserver() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizeObserver)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_expandRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_shrinkRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_node", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastWidth", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastHeight", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastRect", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hasResize", false), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleScroll", function (event) {
      if ((_this.props.onPosition || _this.props.onReflow || _this.props.onResize) && (_this._globalScollTarget(event.target) || _this._refScrollTarget(event.target) || _this._ancestorScollTarget(event.target))) {
        _this._reflow();
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_globalScollTarget", function (target) {
      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && (target === document || target === document.documentElement || target === document.body);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_refScrollTarget", function (target) {
      if (target instanceof HTMLElement && (target === _this._expandRef || target === _this._shrinkRef)) {
        var width = target.offsetWidth;
        var height = target.offsetHeight;

        if (width !== _this._lastWidth || height !== _this._lastHeight) {
          _this._lastWidth = width;
          _this._lastHeight = height;

          _this._reset(_this._expandRef);

          _this._reset(_this._shrinkRef);

          return true;
        }
      }

      return false;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_ancestorScollTarget", function (target) {
      return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && _this._node && isAncestor(_this._node, target);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_reflow", function () {
      if (!_this._node || !(_this._node.parentNode instanceof Element)) return;

      var rect = _this._node.parentNode.getBoundingClientRect();

      var sizeChanged = true;
      var positionChanged = true;

      if (_this._lastRect) {
        sizeChanged = rect.width !== _this._lastRect.width || rect.height !== _this._lastRect.height;
        positionChanged = rect.top !== _this._lastRect.top || rect.left !== _this._lastRect.left;
      }

      _this._lastRect = rect;

      if (sizeChanged && _this.props.onResize) {
        _this.props.onResize(rect);
      }

      if (positionChanged && _this.props.onPosition) {
        _this.props.onPosition(rect);
      }

      if ((sizeChanged || positionChanged) && _this.props.onReflow) {
        _this.props.onReflow(rect);
      }
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleRef", function (node) {
      _this._node = node;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleExpandRef", function (node) {
      _this._reset(node);

      _this._expandRef = node;
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleShrinkRef", function (node) {
      _this._reset(node);

      _this._shrinkRef = node;
    }), _temp));
  }

  _createClass(ResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._reflow();

      window.addEventListener('scroll', this._handleScroll, true);

      if (this.props.onPosition || this.props.onReflow) {
        window.addEventListener('resize', this._reflow, true);
        this._hasResize = true;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if ((this.props.onPosition || this.props.onReflow) && !this._hasResize) {
        window.addEventListener('resize', this._reflow, true);
        this._hasResize = true;
      } else if (!(this.props.onPosition || this.props.onReflow) && this._hasResize) {
        window.removeEventListener('resize', this._reflow, true);
        this._hasResize = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._handleScroll, true);

      if (this._hasResize) {
        window.removeEventListener('resize', this._reflow, true);
      }
    }
  }, {
    key: "_reset",
    value: function _reset(node) {
      if (node) {
        node.scrollLeft = 100000;
        node.scrollTop = 100000;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.onResize || this.props.onReflow) {
        return _react.default.createElement("div", {
          style: style,
          ref: this._handleRef
        }, _react.default.createElement("div", {
          ref: this._handleExpandRef,
          style: style
        }, _react.default.createElement("div", {
          style: _objectSpread({}, styleChild, {
            width: 100000,
            height: 100000
          })
        })), _react.default.createElement("div", {
          ref: this._handleShrinkRef,
          style: style
        }, _react.default.createElement("div", {
          style: _objectSpread({}, styleChild, {
            width: '200%',
            height: '200%'
          })
        })));
      }

      return _react.default.createElement("noscript", {
        ref: this._handleRef
      });
    }
  }]);

  _inherits(ResizeObserver, _React$Component);

  return ResizeObserver;
}(_react.default.Component);

_defineProperty(ResizeObserver, "displayName", 'ResizeObserver');

var _default = ResizeObserver;
exports.Z = _default;
//# sourceMappingURL=ResizeObserver.js.map

/***/ }),

/***/ 11742:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 55877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(23570);
var v4 = __webpack_require__(71171);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 23570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(85217);
var bytesToUuid = __webpack_require__(45327);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ })

}]);
//# sourceMappingURL=981.mirador.js.map