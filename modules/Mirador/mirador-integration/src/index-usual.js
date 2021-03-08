import Mirador from "mirador";

import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorImageDl from 'mirador-dl-plugin';
// import miradorRuler from 'mirador-ruler-plugin';
import miradorShare from 'mirador-share-plugin';
import miradorTextOverlay from 'mirador-textoverlay';

window.Mirador = Mirador;

window.miradorPlugins = [
  {name: "image-tools", plugin: miradorImageToolsPlugin},
  {name: "dl", plugin: miradorImageDl},
  // {name: "ruler" , plugin: miradorRuler},
  {name: "share" , plugin: miradorShare},
  {name: "textoverlay", plugin: miradorTextOverlay},
];
