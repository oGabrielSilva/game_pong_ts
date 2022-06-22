import context from '../utils/canvas'
import Player from './Player'

class Abstract {
  public posX: number

  public posY: number

  public width: number

  public height: number

  public dir = 1

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

  public move(player1: Player, player2: Player): void {
    if (
      this.posY + this.height > player1.posY &&
      this.posY < player1.posY + player1.height &&
      this.posX < player1.posX + player1.width
    )
      this.dir *= -1
    else if (
      this.posY + this.height > player2.posY &&
      this.posY < player2.posY + player2.height &&
      this.posX > player2.posX - player2.width
    )
      this.dir *= -1

    this.posX += 1 * this.dir
  }
}

export default Abstract
