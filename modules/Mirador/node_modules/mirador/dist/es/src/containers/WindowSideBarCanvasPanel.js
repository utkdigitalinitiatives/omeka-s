import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import { WindowSideBarCanvasPanel } from '../components/WindowSideBarCanvasPanel';
import { getCompanionWindow, getDefaultSidebarVariant, getSequenceTreeStructure, getWindow, getManifestoInstance } from '../state/selectors';
/**
 * mapStateToProps - to hook up connect
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
      windowId = _ref.windowId;
  var treeStructure = getSequenceTreeStructure(state, {
    windowId: windowId
  });
  var window = getWindow(state, {
    windowId: windowId
  });
  var config = state.config;
  var companionWindow = getCompanionWindow(state, {
    companionWindowId: id
  });
  var collectionPath = window.collectionPath || [];
  var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
  return {
    collection: collectionId && getManifestoInstance(state, {
      manifestId: collectionId
    }),
    config: config,
    showToc: treeStructure && treeStructure.nodes && treeStructure.nodes.length > 0,
    variant: companionWindow.variant || getDefaultSidebarVariant(state, {
      windowId: windowId
    })
  };
};
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowSideBarCanvasPanel
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var id = _ref2.id,
      windowId = _ref2.windowId;
  return {
    setCanvas: function setCanvas() {
      return dispatch(actions.setCanvas.apply(actions, arguments));
    },
    showMultipart: function showMultipart() {
      return dispatch(actions.addOrUpdateCompanionWindow(windowId, {
        content: 'collection',
        position: 'right'
      }));
    },
    toggleDraggingEnabled: function toggleDraggingEnabled() {
      return dispatch(actions.toggleDraggingEnabled());
    },
    updateVariant: function updateVariant(variant) {
      return dispatch(actions.updateCompanionWindow(windowId, id, {
        variant: variant
      }));
    }
  };
};
/**
 *
 * @param theme
 */


var styles = function styles(theme) {
  return {
    collectionNavigationButton: {
      textTransform: 'none'
    },
    label: {
      paddingLeft: theme.spacing(1)
    },
    select: {
      '&:focus': {
        backgroundColor: theme.palette.background.paper
      }
    },
    selectEmpty: {
      backgroundColor: theme.palette.background.paper
    },
    variantTab: {
      minWidth: 'auto'
    }
  };
};

var enhance = compose(withTranslation(), withStyles(styles), connect(mapStateToProps, mapDispatchToProps), withPlugins('WindowSideBarCanvasPanel'));
export default enhance(WindowSideBarCanvasPanel);