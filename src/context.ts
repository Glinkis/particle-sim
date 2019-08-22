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

gl.clearDepth(1.0)
gl.enable(gl.DEPTH_TEST)
gl.depthFunc(gl.LEQUAL)
gl.viewport(0, 0, canvas.width, canvas.height)

export function render() {
  gl.clearColor(0, 0, 0.2, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
}

fetchShaders().then(([vert, frag]) => {
  const vertShader = createShader(vert, gl.VERTEX_SHADER, gl)
  const fragShader = createShader(frag, gl.FRAGMENT_SHADER, gl)

  const program = createProgram([vertShader, fragShader], gl)

  gl.useProgram(program)
})
