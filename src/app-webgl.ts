import { CubismMatrix44 } from '@cubism/math/cubismmatrix44';
import { Model, Priority, Viewport } from 'starlive2d';

import * as Shader from './shader';
import * as Ticker from './ticker';
import * as WebGL from './webgl';

let canvas: HTMLCanvasElement | null;
let gl: WebGLRenderingContext | null;
let shader: WebGLProgram;
let model: Model;
let intervalId: number;

/**
 * WebGLの初期化
 */
export function initWebGL() {
  canvas = document.getElementsByTagName('canvas')[0];
  gl = WebGL.initialize(canvas);
  shader = Shader.initialize(gl);
}

/**
 * WebGLでのレンダリング開始
 */
export async function runWebGL() {
  // モデル読み込み
  const url = './Haru/Haru.model3.json';
  model = await Model.create(url, gl, {});

  // レンダリングループ
  Ticker.tick();
  requestAnimationFrame(loopWebgl);

  // 表情とモーションをランダムに実行
  intervalId = window.setInterval(() => {
    model.setRandomExpression();
    model.startRandomRandomMotion(Priority.Force);
  }, 2000);
}

/**
 * レンダリングループ
 */
function loopWebgl(): void {
  if (!canvas || !gl) return;
  // 時間経過とリセット
  Ticker.tick();
  WebGL.reset(gl);
  gl.useProgram(shader);
  gl.flush();

  // モデルの更新と描画
  const { width, height } = canvas;
  const projection = new CubismMatrix44();
  const scale = 2.8;
  projection.scale(scale, (scale * width) / height);
  projection.translate(0, 0);
  const viewport: Viewport = [0, 0, canvas.width, canvas.height];
  model.update(Ticker.dt());
  model.draw(gl, projection, viewport);

  requestAnimationFrame(loopWebgl);
}
