function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
/** Renders plugins */

export var PluginHook = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var PluginComponents = props.PluginComponents; // eslint-disable-line react/prop-types

  var classes = props.classes,
      otherProps = _objectWithoutProperties(props, ["classes"]); // eslint-disable-line react/prop-types


  return PluginComponents ? PluginComponents.map(function (PluginComponent, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-line react/prop-types
      React.createElement(PluginComponent, Object.assign({
        ref: ref
      }, otherProps, {
        key: index // eslint-disable-line react/no-array-index-key

      }))
    );
  }) : null;
});