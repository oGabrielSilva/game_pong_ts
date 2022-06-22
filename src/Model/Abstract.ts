import context, { canvas } from '../utils/canvas'
import Player from './Player'

class Abstract {
  public posX: number

  public posY: number

  public width: number

  public height: number

  public dir = 1

  private dirY = 0

  constructor(posX: number, posY: number, width: number, height: number) {
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
  }

  public draw(): void {
    context.fillRect(this.posX, this.posY, this.width, this.height)
    this.fillText()
  }

  public fillText(): void {}

  private moveY(): void {
    this.dirY = 1
  }

  public move(player1: Player, player2: Player): void {
    if (
      this.posY + this.height > player1.posY &&
      this.posY < player1.posY + player1.height &&
      this.posX < player1.posX + player1.width
    ) {
      this.dir *= -1
      this.moveY()
    } else if (
      this.posY + this.height > player2.posY &&
      this.posY < player2.posY + player2.height &&
      this.posX > player2.posX - player2.width
    ) {
      this.dir *= -1
      this.moveY()
    }

    if (this.posY < 0 || this.posY + this.height > canvas.height)
      this.dirY *= -1

    this.posX += 1 * this.dir
    this.posY += 1 * this.dirY
  }
}

export default Abstract
