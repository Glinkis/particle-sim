const canvas = document.getElementById('canvas') as HTMLCanvasElement

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resizeCanvas()
addEventListener('resize', resizeCanvas)

export { canvas }
