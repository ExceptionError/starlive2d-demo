import {
  CubismFramework,
  LogLevel,
  Option,
} from '@cubism/live2dcubismframework';
import * as AppPixi from './app-pixi';
import * as AppWebGL from './app-webgl';

// このフラグを切り替えることでPixi版とWebGL版を切り替えます
// (yarn start前提で動的な切り替えとかは用意していないです)
const isPixi = false;

window.addEventListener('DOMContentLoaded', () => {
  initCubism();
  if (isPixi) {
    AppPixi.initPixi();
    AppPixi.runPixi();
  } else {
    AppWebGL.initWebGL();
    AppWebGL.runWebGL();
  }
});

window.addEventListener('beforeunload', () => {
  CubismFramework.dispose();
});

function initCubism() {
  const option: Option = {
    logFunction: console.log,
    loggingLevel: LogLevel.LogLevel_Verbose,
  };
  CubismFramework.startUp(option);
  CubismFramework.initialize();
}
