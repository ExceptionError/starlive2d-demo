const vertexShaderCode = `
    precision mediump float;
    attribute vec3 position;
    attribute vec2 uv;
    varying vec2 vuv;
    void main(void) {
        gl_Position = vec4(position, 1.0);
        vuv = uv;
    }
`;

const fragmentShaderCode = `
    precision mediump float;
    varying vec2 vuv;
    uniform sampler2D texture;
    void main(void) {
        gl_FragColor = texture2D(texture, vuv);
    }
`;

function compile(
  gl: WebGLRenderingContext,
  type: GLenum,
  source: string
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

/**
 * シェーダーの初期化
 * @param gl
 */
export function initialize(gl: WebGLRenderingContext): WebGLProgram | null {
  const programId = gl.createProgram();
  if (!programId) return null;

  const vertexShader = compile(gl, gl.VERTEX_SHADER, vertexShaderCode);
  const fragmentShader = compile(gl, gl.FRAGMENT_SHADER, fragmentShaderCode);
  if (!vertexShader || !fragmentShader) return null;

  gl.attachShader(programId, vertexShader);
  gl.deleteShader(vertexShader);
  gl.attachShader(programId, fragmentShader);
  gl.deleteShader(fragmentShader);
  gl.linkProgram(programId);
  gl.useProgram(programId);

  return programId;
}
