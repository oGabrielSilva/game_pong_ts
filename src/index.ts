import Artifice from './Model/Artifice'
import Event from './Model/Event'
import Player from './Model/Player'
import context, { canvas } from './utils/canvas'
import center from './utils/center'

const event = new Event()
event.init()
context.fillStyle = '#8b8b8b'

const player1 = new Player(80, center().Y - 50, 20, 100)
const player2 = new Player(canvas.width - 80, center().Y - 50, 20, 100, true)

const ball = new Artifice(center().X - 10, center().Y - 10, 20, 20)

context.font = '20px Arial'

const update = () => {
  player1.update()
  player2.update()
  ball.draw()
}

const main = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  update()
  ball.move(3)
}

setInterval(main, 10)
