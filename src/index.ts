import './context.js'

let lastTimestamp = 0

function deltaTick(deltaTime: number) {}

function tick(timestamp: number) {
  deltaTick(timestamp - lastTimestamp)
  lastTimestamp = timestamp
  requestAnimationFrame(tick)
}

tick(0)
