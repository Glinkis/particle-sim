const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('webgl') as WebGLRenderingContext

function resizeCanvas() {
  const dpi = window.devicePixelRatio
  canvas.width = window.innerWidth * dpi
  canvas.height = window.innerHeight * dpi
}

resizeCanvas()
addEventListener('resize', resizeCanvas)

export { canvas, context }
