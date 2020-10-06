import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins';
import { IIIFThumbnail } from '../components/IIIFThumbnail';
import getThumbnail from '../lib/ThumbnailFactory';
/** */

function getLabel(resource) {
  return resource.getLabel().length > 0 ? resource.getLabel().map(function (label) {
    return label.value;
  })[0] : String(resource.index + 1);
}
/** */


var mapStateToProps = function mapStateToProps(state, _ref) {
  var label = _ref.label,
      labelled = _ref.labelled,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      resource = _ref.resource,
      thumbnail = _ref.thumbnail;
  return {
    image: thumbnail || getThumbnail(resource, {
      maxHeight: maxHeight,
      maxWidth: maxWidth
    }),
    label: labelled && (label || getLabel(resource))
  };
};
/**
 * Styles for withStyles HOC
 */


var styles = function styles(theme) {
  return {
    caption: {
      lineHeight: '1.5em',
      wordBreak: 'break-word'
    },
    insideCaption: {
      color: '#ffffff',
      lineClamp: '1',
      whiteSpace: 'nowrap'
    },
    insideLabel: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      bottom: '5px',
      boxSizing: 'border-box',
      left: '0px',
      padding: '4px',
      position: 'absolute',
      width: '100%'
    },
    insideRoot: {
      display: 'inline-block',
      height: 'inherit',
      position: 'relative'
    },
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    outsideCaption: {
      boxOrient: 'vertical',
      display: '-webkit-box',
      lineClamp: '2',
      maxHeight: '3em'
    },
    outsideLabel: {},
    outsideRoot: {}
  };
};

var enhance = compose(withStyles(styles), withTranslation(), connect(mapStateToProps), withPlugins('IIIFThumbnail'));
export default enhance(IIIFThumbnail);