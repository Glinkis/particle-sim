const canvas = document.getElementById('canvas') as HTMLCanvasElement

function resizeCanvas() {
  const dpi = window.devicePixelRatio
  canvas.width = window.innerWidth * dpi
  canvas.height = window.innerHeight * dpi
}

resizeCanvas()
addEventListener('resize', resizeCanvas)

export { canvas }
