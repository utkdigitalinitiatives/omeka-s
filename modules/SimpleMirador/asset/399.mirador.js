(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[399],{

/***/ 54399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_VideoViewer)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(37703);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/withTranslation.js + 2 modules
var withTranslation = __webpack_require__(87217);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 6 modules
var withStyles = __webpack_require__(49353);
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/extend/withPlugins.js
var withPlugins = __webpack_require__(11196);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(63804);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/VideoViewer.js
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



/** */
var VideoViewer = /*#__PURE__*/function (_Component) {
  _inherits(VideoViewer, _Component);

  var _super = _createSuper(VideoViewer);

  function VideoViewer() {
    _classCallCheck(this, VideoViewer);

    return _super.apply(this, arguments);
  }

  _createClass(VideoViewer, [{
    key: "render",

    /* eslint-disable jsx-a11y/media-has-caption */

    /** */
    value: function render() {
      var _this$props = this.props,
          captions = _this$props.captions,
          classes = _this$props.classes,
          videoResources = _this$props.videoResources;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.container
      }, /*#__PURE__*/external_React_default().createElement("video", {
        controls: true,
        className: classes.video
      }, videoResources.map(function (video) {
        return /*#__PURE__*/external_React_default().createElement(external_React_.Fragment, {
          key: video.id
        }, /*#__PURE__*/external_React_default().createElement("source", {
          src: video.id,
          type: video.getFormat()
        }));
      }), captions.map(function (caption) {
        return /*#__PURE__*/external_React_default().createElement(external_React_.Fragment, {
          key: caption.id
        }, /*#__PURE__*/external_React_default().createElement("track", {
          src: caption.id,
          label: caption.getLabel(),
          srcLang: caption.getProperty('language')
        }));
      })));
    }
    /* eslint-enable jsx-a11y/media-has-caption */

  }]);

  return VideoViewer;
}(external_React_.Component);
VideoViewer.defaultProps = {
  captions: [],
  videoResources: []
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/canvases.js + 1 modules
var canvases = __webpack_require__(49455);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/VideoViewer.js







/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    captions: (0,canvases/* getVisibleCanvasCaptions */.U$)(state, {
      windowId: windowId
    }) || [],
    videoResources: (0,canvases/* getVisibleCanvasVideoResources */.e0)(state, {
      windowId: windowId
    }) || []
  };
};
/** */


var styles = function styles() {
  return {
    container: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    },
    video: {
      maxHeight: '100%',
      width: '100%'
    }
  };
};

var enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(styles), (0,es/* connect */.$j)(mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('VideoViewer'));
/* harmony default export */ const containers_VideoViewer = (enhance(VideoViewer));

/***/ })

}]);
//# sourceMappingURL=399.mirador.js.map