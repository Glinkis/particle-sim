import { canvas } from './canvas.js'
import { createShader } from './createShader.js'
import { createProgram } from './createProgram.js'

export const gl = canvas.getContext('webgl', {
  alpha: false,
  antialias: false,
  stencil: false,
  preserveDrawingBuffer: false
}) as WebGLRenderingContext

gl.viewport(0, 0, canvas.width, canvas.height)
gl.clear(gl.COLOR_BUFFER_BIT)

const toText = (response: Response) => response.text()

const vert = fetch('./shaders/vertex.hlsl').then(toText)
const frag = fetch('./shaders/fragment.hlsl').then(toText)

Promise.all([vert, frag]).then(([vert, frag]) => {
  const vertShader = createShader(vert, gl.VERTEX_SHADER, gl)
  const fragShader = createShader(frag, gl.FRAGMENT_SHADER, gl)

  const program = createProgram([vertShader, fragShader], gl)
  console.log(vertShader, fragShader, program)

  gl.useProgram(program)
})
