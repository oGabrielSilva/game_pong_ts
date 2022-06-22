import context, { canvas } from '../utils/canvas'
import keyboard from '../utils/keyboard'
import Abstract from './Abstract'

class Player extends Abstract {
  public score = 0

  private isPlayer2

  private velocity = 3

  constructor(
    posX: number,
    posY: number,
    width: number,
    height: number,
    isPlayer2 = false,
  ) {
    super(posX, posY, width, height)
    this.isPlayer2 = isPlayer2
  }

  public fillText(): void {
    context.fillText(
      `Score: ${this.score}`,
      (!this.isPlayer2 && 100) || canvas.width - 200,
      50,
    )
  }

  public move(): void {
    if (this.isPlayer2) {
      if (keyboard.right && this.posY < canvas.height - this.height)
        this.posY += this.velocity
      else if (keyboard.left && this.posY > 0) this.posY += this.velocity * -1
    } else if (keyboard.d && this.posY < canvas.height - this.height)
      this.posY += this.velocity
    else if (keyboard.a && this.posY > 0) this.posY += this.velocity * -1
  }

  public update(): void {
    this.draw()
    this.move()
  }
}

export default Player
