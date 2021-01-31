import { Application } from 'pixi.js';
import { PixiModel, ModelFactoryOptions, Priority } from 'starlive2d';

let app: Application;
let model: PixiModel;
let intervalId: number;

/**
 * Pixiの初期化
 */
export function initPixi() {
  const canvas = document.getElementsByTagName('canvas')[0];
  app = new Application({
    width: canvas.width,
    height: canvas.height,
    view: canvas,
    autoStart: true,
  });
}

/**
 * Pixiでのレンダリング開始
 */
export async function runPixi() {
  // モデル読み込み
  const url = './Haru/Haru.model3.json';
  model = await PixiModel.create(url, app.renderer.gl, {});
  model.x = app.renderer.width / 2;
  model.y = app.renderer.height / 2;
  model.scale.set(1.5);
  app.stage.addChild(model);

  // PixiのTickerの処理としてLive2Dモデルの更新を登録
  app.ticker.add(() => {
    model.update(app.ticker.deltaMS);
  });

  // 表情とモーションをランダムに実行
  intervalId = window.setInterval(() => {
    model.baseModel.setRandomExpression();
    model.baseModel.startRandomRandomMotion(Priority.Force);
  }, 5000);
}
