import { canvas } from './canvas.js'
import { createProgram } from './createProgram.js'
import { createShader } from './createShader.js'
import { fetchShaders } from './fetchShaders.js'

export const gl = canvas.getContext('webgl', {
  alpha: false,
  antialias: false,
  stencil: false,
  preserveDrawingBuffer: false
}) as WebGLRenderingContext

var aspect = canvas.width / canvas.height

var vertices = new Float32Array([
  -0.5,
  0.5 * aspect,
  0.5,
  0.5 * aspect,
  0.5,
  -0.5 * aspect, // Triangle 1
  -0.5,
  0.5 * aspect,
  0.5,
  -0.5 * aspect,
  -0.5,
  -0.5 * aspect // Triangle 2
])

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

export function render() {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLES, 0, 6)
}

fetchShaders().then(([vert, frag]) => {
  const vertShader = createShader(vert, gl.VERTEX_SHADER, gl)
  const fragShader = createShader(frag, gl.FRAGMENT_SHADER, gl)

  const program = createProgram([vertShader, fragShader], gl)

  gl.useProgram(program)

  const position = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
})
