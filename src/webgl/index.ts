/**
 * WebGLを初期化する
 * @param canvas
 */
export function initialize(
  canvas: HTMLCanvasElement
): WebGLRenderingContext | null {
  const gl = canvas.getContext('webgl');
  if (!gl) return null;

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  return gl;
}

/**
 * WebGLをリセットする
 * @param gl
 */
export function reset(gl: WebGLRenderingContext): void {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.clearDepth(1.0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
}
