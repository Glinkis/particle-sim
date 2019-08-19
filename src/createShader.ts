function createShader(source: string, type: number, gl: WebGLRenderingContext) {
  const shader = gl.createShader(type)

  if (!shader) {
    throw new Error('Could not create shader')
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader)
    throw new Error(message || '')
  }

  return shader
}

export { createShader }
