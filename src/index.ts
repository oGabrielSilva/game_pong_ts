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
  ball.move(player1, player2)

  if (ball.posX < -100) {
    ball.posX = center().X - 10
    ball.posY = center().Y - 10
    ball.dir = 1
    player2.score += 1
  } else if (ball.posX > canvas.width + 100) {
    ball.posX = center().X - 10
    ball.posY = center().Y - 10
    ball.dir = -1
    player1.score += 1
  }
}

setInterval(main, 1)
