function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import flatten from 'lodash/flatten';
import flattenDeep from 'lodash/flattenDeep';
import { Canvas } from 'manifesto.js';
/**
 * MiradorCanvas - adds additional, testable logic around Manifesto's Canvas
 * https://iiif-commons.github.io/manifesto/classes/_canvas_.manifesto.canvas.html
 */

var MiradorCanvas = /*#__PURE__*/function () {
  /**
   * @param {MiradorCanvas} canvas
   */
  function MiradorCanvas(canvas) {
    _classCallCheck(this, MiradorCanvas);

    this.canvas = canvas;
  }
  /** */


  _createClass(MiradorCanvas, [{
    key: "getWidth",

    /** */
    value: function getWidth() {
      return this.canvas.getWidth();
    }
    /** */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.canvas.getHeight();
    }
    /**
     */

  }, {
    key: "resourceAnnotation",

    /**
     * Returns a given resource Annotation, based on a contained resource or body
     * id
     */
    value: function resourceAnnotation(id) {
      return this.resourceAnnotations.find(function (anno) {
        return anno.getResource().id === id || anno.getBody().id === id;
      });
    }
    /**
     * Returns the fragment placement values if a resourceAnnotation is placed on
     * a canvas somewhere besides the full extent
     */

  }, {
    key: "onFragment",
    value: function onFragment(id) {
      var resourceAnnotation = this.resourceAnnotation(id);
      if (!resourceAnnotation) return undefined;
      var fragmentMatch = resourceAnnotation.getProperty('on').match(/xywh=(.*)$/);
      if (!fragmentMatch) return undefined;
      return fragmentMatch[1].split(',').map(function (str) {
        return parseInt(str, 10);
      });
    }
    /** */

  }, {
    key: "getLabel",

    /**
     * Get the canvas label
     */
    value: function getLabel() {
      return this.canvas.getLabel().length > 0 ? this.canvas.getLabel().map(function (label) {
        return label.value;
      })[0] : String(this.canvas.index + 1);
    }
  }, {
    key: "id",
    get: function get() {
      return this.canvas.id;
    }
  }, {
    key: "aspectRatio",
    get: function get() {
      return this.canvas.getWidth() / this.canvas.getHeight();
    }
    /**
     * Fetches AnnotationList URIs from canvas's otherContent property
     *
     * Supported otherContent types:
     * - Objects having @type property of "sc:AnnotationList" and URI in @id
     * - Strings being the URIs
     */

  }, {
    key: "annotationListUris",
    get: function get() {
      return flatten(new Array(this.canvas.__jsonld.otherContent) // eslint-disable-line no-underscore-dangle
      ).filter(function (otherContent) {
        return otherContent && (typeof otherContent === 'string' || otherContent['@type'] === 'sc:AnnotationList');
      }).map(function (otherContent) {
        return typeof otherContent === 'string' ? otherContent : otherContent['@id'];
      });
    }
    /** */

  }, {
    key: "canvasAnnotationPages",
    get: function get() {
      return flatten(new Array(this.canvas.__jsonld.annotations) // eslint-disable-line no-underscore-dangle
      ).filter(function (annotations) {
        return annotations && annotations.type === 'AnnotationPage';
      });
    }
    /**
     * Will negotiate a v2 or v3 type of resource
     */

  }, {
    key: "imageResource",
    get: function get() {
      return this.imageResources[0];
    }
    /** */

  }, {
    key: "imageResources",
    get: function get() {
      var _this = this;

      var resources = flattenDeep([this.canvas.getImages().map(function (i) {
        return i.getResource();
      }), this.canvas.getContent().map(function (i) {
        return i.getBody();
      })]);
      return flatten(resources.map(function (resource) {
        switch (resource.getProperty('type')) {
          case 'oa:Choice':
            return new Canvas({
              images: flatten([resource.getProperty('default'), resource.getProperty('item')]).map(function (r) {
                return {
                  resource: r
                };
              })
            }, _this.canvas.options).getImages().map(function (i) {
              return i.getResource();
            });

          default:
            return resource;
        }
      }));
    }
    /** */

  }, {
    key: "resourceAnnotations",
    get: function get() {
      return flattenDeep([this.canvas.getImages(), this.canvas.getContent()]);
    }
  }, {
    key: "iiifImageResources",
    get: function get() {
      return this.imageResources.filter(function (r) {
        return r && r.getServices()[0] && r.getServices()[0].id;
      });
    }
    /** */

  }, {
    key: "imageServiceIds",
    get: function get() {
      return this.iiifImageResources.map(function (r) {
        return r.getServices()[0].id;
      });
    }
    /**
     * Get the canvas service
     */

  }, {
    key: "service",
    get: function get() {
      return this.canvas.__jsonld.service; // eslint-disable-line no-underscore-dangle
    }
  }]);

  return MiradorCanvas;
}();

export { MiradorCanvas as default };