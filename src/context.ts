import { canvas } from './canvas.js'
import { createProgram } from './createProgram.js'
import { createShader } from './createShader.js'
import { fetchShaders } from './fetchShaders.js'
import { tick } from './index.js'

export const gl = canvas.getContext('webgl', {
  alpha: false,
  antialias: false,
  stencil: false,
  preserveDrawingBuffer: false
}) as WebGLRenderingContext

const aspect = canvas.width / canvas.height

// prettier-ignore
const vertices = new Float32Array([
  // Triangle 1
  -0.5,  0.5 * aspect,
   0.5,  0.5 * aspect,
   0.5, -0.5 * aspect,
  // Triangle 2
  -0.5,  0.5 * aspect,
   0.5, -0.5 * aspect,
  -0.5, -0.5 * aspect
])

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

export function render() {
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2)
}

fetchShaders().then(([vert, frag]) => {
  const vertShader = createShader(vert, gl.VERTEX_SHADER, gl)
  const fragShader = createShader(frag, gl.FRAGMENT_SHADER, gl)

  const program = createProgram([vertShader, fragShader], gl)

  gl.useProgram(program)

  const position = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

  requestAnimationFrame(tick)
})
