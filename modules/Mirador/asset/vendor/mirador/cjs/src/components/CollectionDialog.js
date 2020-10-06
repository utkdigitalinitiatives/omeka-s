"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _ArrowBackSharp = _interopRequireDefault(require("@material-ui/icons/ArrowBackSharp"));

var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));

var _LabelValueMetadata = require("./LabelValueMetadata");

var _CollapsibleSection = _interopRequireDefault(require("../containers/CollapsibleSection"));

var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));

var _ManifestInfo = _interopRequireDefault(require("../containers/ManifestInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
function asArray(value) {
  if (!Array.isArray(value)) {
    return [value];
  }

  return value;
}
/**
 * a simple dialog providing the possibility to switch the theme
 */


var CollectionDialog = /*#__PURE__*/function (_Component) {
  _inherits(CollectionDialog, _Component);

  var _super = _createSuper(CollectionDialog);

  _createClass(CollectionDialog, null, [{
    key: "getUseableLabel",

    /** */
    value: function getUseableLabel(resource, index) {
      return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().map(function (label) {
        return label.value;
      })[0] : String(index + 1);
    }
    /** */

  }]);

  function CollectionDialog(props) {
    var _this;

    _classCallCheck(this, CollectionDialog);

    _this = _super.call(this, props);
    _this.state = {
      filter: null
    };
    return _this;
  }
  /** */


  _createClass(CollectionDialog, [{
    key: "setFilter",
    value: function setFilter(filter) {
      this.setState({
        filter: filter
      });
    }
    /** */

  }, {
    key: "selectCollection",
    value: function selectCollection(c) {
      var _this$props = this.props,
          collectionPath = _this$props.collectionPath,
          manifestId = _this$props.manifestId,
          showCollectionDialog = _this$props.showCollectionDialog,
          windowId = _this$props.windowId;
      showCollectionDialog(c.id, [].concat(_toConsumableArray(collectionPath), [manifestId]), windowId);
    }
    /** */

  }, {
    key: "goToPreviousCollection",
    value: function goToPreviousCollection() {
      var _this$props2 = this.props,
          collectionPath = _this$props2.collectionPath,
          showCollectionDialog = _this$props2.showCollectionDialog,
          windowId = _this$props2.windowId;
      showCollectionDialog(collectionPath[collectionPath.length - 1], collectionPath.slice(0, -1), windowId);
    }
    /** */

  }, {
    key: "selectManifest",
    value: function selectManifest(m) {
      var _this$props3 = this.props,
          addWindow = _this$props3.addWindow,
          collectionPath = _this$props3.collectionPath,
          hideCollectionDialog = _this$props3.hideCollectionDialog,
          manifestId = _this$props3.manifestId,
          setWorkspaceAddVisibility = _this$props3.setWorkspaceAddVisibility,
          updateWindow = _this$props3.updateWindow,
          windowId = _this$props3.windowId;

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

      hideCollectionDialog();
      setWorkspaceAddVisibility(false);
    }
    /** */

  }, {
    key: "placeholder",
    value: function placeholder() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          hideCollectionDialog = _this$props4.hideCollectionDialog;
      return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
        onClose: hideCollectionDialog,
        open: true
      }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
        className: classes.placeholder,
        variant: "text"
      })), /*#__PURE__*/_react["default"].createElement(_ScrollIndicatedDialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
        className: classes.placeholder,
        variant: "text"
      }), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
        className: classes.placeholder,
        variant: "text"
      })));
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          classes = _this$props5.classes,
          collection = _this$props5.collection,
          error = _this$props5.error,
          hideCollectionDialog = _this$props5.hideCollectionDialog,
          isMultipart = _this$props5.isMultipart,
          manifest = _this$props5.manifest,
          ready = _this$props5.ready,
          t = _this$props5.t;
      var filter = this.state.filter;
      if (error) return null;
      if (!ready) return this.placeholder();
      var rights = manifest && asArray(manifest.getProperty('rights') || manifest.getProperty('license'));
      var requiredStatement = manifest && asArray(manifest.getRequiredStatement()).filter(function (l) {
        return l.getValue();
      }).map(function (labelValuePair) {
        return {
          label: labelValuePair.getLabel(),
          values: labelValuePair.getValues()
        };
      });
      var collections = manifest.getCollections();
      var currentFilter = filter || (collections.length > 0 ? 'collections' : 'manifests');
      return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
        onClose: hideCollectionDialog,
        open: true
      }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, {
        id: "select-collection",
        disableTypography: true
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        component: "div",
        variant: "overline"
      }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "h3"
      }, CollectionDialog.getUseableLabel(manifest))), /*#__PURE__*/_react["default"].createElement(_ScrollIndicatedDialogContent["default"], {
        className: classes.dialogContent
      }, collection && /*#__PURE__*/_react["default"].createElement(_core.Button, {
        startIcon: /*#__PURE__*/_react["default"].createElement(_ArrowBackSharp["default"], null),
        onClick: function onClick() {
          return _this2.goToPreviousCollection();
        }
      }, CollectionDialog.getUseableLabel(collection)), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.collectionMetadata
      }, /*#__PURE__*/_react["default"].createElement(_ManifestInfo["default"], {
        manifestId: manifest.id
      }), /*#__PURE__*/_react["default"].createElement(_CollapsibleSection["default"], {
        id: "select-collection-rights",
        label: t('attributionTitle')
      }, requiredStatement && /*#__PURE__*/_react["default"].createElement(_LabelValueMetadata.LabelValueMetadata, {
        labelValuePairs: requiredStatement,
        defaultLabel: t('attribution')
      }), rights && rights.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "subtitle2",
        component: "dt"
      }, t('rights')), rights.map(function (v) {
        return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          variant: "body1",
          component: "dd"
        }, /*#__PURE__*/_react["default"].createElement(_core.Link, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: v
        }, v));
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.collectionFilter
      }, manifest.getTotalCollections() > 0 && /*#__PURE__*/_react["default"].createElement(_core.Chip, {
        clickable: true,
        color: currentFilter === 'collections' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('collections');
        },
        label: t('totalCollections', {
          count: manifest.getTotalCollections()
        })
      }), manifest.getTotalManifests() > 0 && /*#__PURE__*/_react["default"].createElement(_core.Chip, {
        clickable: true,
        color: currentFilter === 'manifests' ? 'primary' : 'default',
        onClick: function onClick() {
          return _this2.setFilter('manifests');
        },
        label: t('totalManifests', {
          count: manifest.getTotalManifests()
        })
      })), currentFilter === 'collections' && /*#__PURE__*/_react["default"].createElement(_core.MenuList, null, collections.map(function (c) {
        return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
          key: c.id,
          onClick: function onClick() {
            _this2.selectCollection(c);
          }
        }, CollectionDialog.getUseableLabel(c));
      })), currentFilter === 'manifests' && /*#__PURE__*/_react["default"].createElement(_core.MenuList, null, manifest.getManifests().map(function (m) {
        return /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
          key: m.id,
          onClick: function onClick() {
            _this2.selectManifest(m);
          }
        }, CollectionDialog.getUseableLabel(m));
      }))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        onClick: hideCollectionDialog
      }, t('close'))));
    }
  }]);

  return CollectionDialog;
}(_react.Component);

exports.CollectionDialog = CollectionDialog;
CollectionDialog.defaultProps = {
  collection: null,
  collectionPath: [],
  error: null,
  isMultipart: false,
  ready: false,
  windowId: null
};