import Mirador from "mirador";

// For annotations and storage adapters.
// Only local storage is managed automatically here.
// see https://github.com/ProjectMirador/mirador-annotations/blob/master/demo/src/index.js
import miradorAnnotationPlugins from 'mirador-annotations';
import miradorLocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter';
// import miradorAnnototAdapter from 'mirador-annotations/lib/AnnototAdapter';'

import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorImageDl from 'mirador-dl-plugin';
// import miradorRuler from 'mirador-ruler-plugin';
import miradorShare from 'mirador-share-plugin';
import miradorTextOverlay from 'mirador-textoverlay';

window.Mirador = Mirador;

window.miradorPlugins = [
  {name: "annotations", plugin: miradorAnnotationPlugins},
  {name: "image-tools", plugin: miradorImageToolsPlugin},
  {name: "dl", plugin: miradorImageDl},
  // {name: "ruler" , plugin: miradorRuler},
  {name: "share" , plugin: miradorShare},
  {name: "textoverlay", plugin: miradorTextOverlay},
];

// Endpoint of the external annotations.
// const endpointUrl = 'http://127.0.0.1:3000/annotations';

// Bridge to store annotations.
window.miradorAnnotationServerAdapter = function (canvasId) {
    return new miradorLocalStorageAdapter(`localStorage://?canvasId=${canvasId}`);
//     return new AnnototAdapter(canvasId, endpointUrl);
};
