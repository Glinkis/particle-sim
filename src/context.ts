import { canvas } from './canvas.js'
import { createShader } from './createShader.js'
import { createProgram } from './createProgram.js'

const context = canvas.getContext('webgl', {
  alpha: true,
  antialias: true,
  powerPreference: 'high-performance',
  stencil: false,
  preserveDrawingBuffer: false
}) as WebGLRenderingContext

context.viewport(0, 0, canvas.width, canvas.height)
context.clear(context.COLOR_BUFFER_BIT)

const toText = (response: Response) => response.text()

const vertex = fetch('./shaders/vertex.hlsl').then(toText)
const fragment = fetch('./shaders/fragment.hlsl').then(toText)

Promise.all([vertex, fragment]).then(([vertex, fragment]) => {
  const { VERTEX_SHADER, FRAGMENT_SHADER } = context

  const vertexShader = createShader(vertex, VERTEX_SHADER, context)
  const fragmentShader = createShader(fragment, FRAGMENT_SHADER, context)

  const program = createProgram([vertexShader, fragmentShader], context)
  console.log(program)

  context.useProgram(program)
})

export { context }
