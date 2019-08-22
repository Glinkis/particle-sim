import './context.js'
import { render } from './context.js'

export const meta = {
  currTime: 0,
  lastTime: 0,
  deltaTime: 0
}

function tick(timestamp: number) {
  meta.deltaTime = meta.currTime - meta.lastTime
  meta.lastTime = timestamp

  render()
  requestAnimationFrame(tick)
}

tick(0)
