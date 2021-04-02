(self["webpackChunksimple_mirador"] = self["webpackChunksimple_mirador"] || []).push([[149],{

/***/ 37149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_AudioViewer)
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
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/components/AudioViewer.js
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
var AudioViewer = /*#__PURE__*/function (_Component) {
  _inherits(AudioViewer, _Component);

  var _super = _createSuper(AudioViewer);

  function AudioViewer() {
    _classCallCheck(this, AudioViewer);

    return _super.apply(this, arguments);
  }

  _createClass(AudioViewer, [{
    key: "render",

    /* eslint-disable jsx-a11y/media-has-caption */

    /** */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          audioResources = _this$props.audioResources;
      return /*#__PURE__*/external_React_default().createElement("div", {
        className: classes.container
      }, /*#__PURE__*/external_React_default().createElement("audio", {
        controls: true,
        className: classes.audio
      }, audioResources.map(function (audio) {
        return /*#__PURE__*/external_React_default().createElement(external_React_.Fragment, {
          key: audio.id
        }, /*#__PURE__*/external_React_default().createElement("source", {
          src: audio.id,
          type: audio.getFormat()
        }));
      })));
    }
    /* eslint-enable jsx-a11y/media-has-caption */

  }]);

  return AudioViewer;
}(external_React_.Component);
AudioViewer.defaultProps = {
  audioResources: []
};
// EXTERNAL MODULE: ./node_modules/mirador/dist/es/src/state/selectors/canvases.js + 1 modules
var canvases = __webpack_require__(49455);
;// CONCATENATED MODULE: ./node_modules/mirador/dist/es/src/containers/AudioViewer.js







/** */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    audioResources: (0,canvases/* getVisibleCanvasAudioResources */.Ul)(state, {
      windowId: windowId
    }) || []
  };
};
/** */


var styles = function styles() {
  return {
    audio: {
      width: '100%'
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      width: '100%'
    }
  };
};

var enhance = (0,redux/* compose */.qC)((0,withTranslation/* withTranslation */.Z)(), (0,withStyles/* default */.Z)(styles), (0,es/* connect */.$j)(mapStateToProps, null), (0,withPlugins/* withPlugins */.A)('AudioViewer'));
/* harmony default export */ const containers_AudioViewer = (enhance(AudioViewer));

/***/ })

}]);
//# sourceMappingURL=149.mirador.js.map