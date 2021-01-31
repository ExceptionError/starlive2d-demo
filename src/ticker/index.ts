let currentFrame = 0.0;
let lastFrame = 0.0;
let deltaTime = 0.0;

/**
 * 経過時間を返す
 */
export function dt(): number {
  return deltaTime;
}

/**
 * 時間を進める
 */
export function tick(): void {
  currentFrame = performance.now();
  deltaTime = currentFrame - lastFrame;
  lastFrame = currentFrame;
}
