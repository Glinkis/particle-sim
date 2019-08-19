function createProgram(shaders: WebGLShader[], gl: WebGLRenderingContext) {
  const program = gl.createProgram()

  if (!program) {
    throw new Error('Could not create program')
  }

  for (const shader of shaders) {
    gl.attachShader(program, shader)
  }

  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program)
    throw new Error(message || '')
  }

  return program
}

export { createProgram }
