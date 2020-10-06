"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importState = importState;
exports.importConfig = importConfig;
exports.fetchCollectionManifests = fetchCollectionManifests;
exports["default"] = appSaga;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _uuid = require("uuid");

var _iiif = require("./iiif");

var _windows = require("./windows");

var _actions = require("../actions");

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(importState),
    _marked2 = /*#__PURE__*/_regenerator["default"].mark(importConfig),
    _marked3 = /*#__PURE__*/_regenerator["default"].mark(fetchCollectionManifests),
    _marked4 = /*#__PURE__*/_regenerator["default"].mark(appSaga);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** */
function importState(action) {
  return _regenerator["default"].wrap(function importState$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([].concat(_toConsumableArray(Object.entries(action.state.windows || {}).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                _ = _ref2[0],
                window = _ref2[1];

            return (0, _effects.call)(_windows.fetchWindowManifest, {
              id: window.id,
              payload: window
            });
          })), _toConsumableArray(Object.entries(action.state.manifests || {}).filter(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                _ = _ref4[0],
                manifest = _ref4[1];

            return !manifest.json;
          }).map(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                _ = _ref6[0],
                manifest = _ref6[1];

            return (0, _effects.call)(_iiif.fetchManifests, manifest.id);
          }))));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/** Add windows from the imported config */


function importConfig(_ref7) {
  var _ref7$config, thumbnailNavigation, windows, thunks;

  return _regenerator["default"].wrap(function importConfig$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref7$config = _ref7.config, thumbnailNavigation = _ref7$config.thumbnailNavigation, windows = _ref7$config.windows;

          if (!(!windows || windows.length === 0)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          _context2.next = 5;
          return (0, _effects.all)(windows.map(function (miradorWindow) {
            var windowId = "window-".concat((0, _uuid.v4)());
            var manifestId = miradorWindow.manifestId || miradorWindow.loadedManifest;
            return (0, _effects.call)(_actions.addWindow, _objectSpread({
              // these are default values ...
              id: windowId,
              manifestId: manifestId,
              thumbnailNavigationPosition: thumbnailNavigation && thumbnailNavigation.defaultPosition
            }, miradorWindow));
          }));

        case 5:
          thunks = _context2.sent;
          _context2.next = 8;
          return (0, _effects.all)(thunks.map(function (thunk) {
            return (0, _effects.put)(thunk);
          }));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/** */


function fetchCollectionManifests(action) {
  var collectionPath, manifestId;
  return _regenerator["default"].wrap(function fetchCollectionManifests$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          collectionPath = action.collectionPath, manifestId = action.manifestId;
          _context3.next = 3;
          return _effects.call.apply(void 0, [_iiif.fetchManifests, manifestId].concat(_toConsumableArray(collectionPath)));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/** */


function appSaga() {
  return _regenerator["default"].wrap(function appSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)([(0, _effects.takeEvery)(_actionTypes["default"].IMPORT_MIRADOR_STATE, importState), (0, _effects.takeEvery)(_actionTypes["default"].IMPORT_CONFIG, importConfig), (0, _effects.takeEvery)(_actionTypes["default"].SHOW_COLLECTION_DIALOG, fetchCollectionManifests)]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}