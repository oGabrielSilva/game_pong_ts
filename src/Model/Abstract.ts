import context, { canvas } from '../utils/canvas'

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

  public move(x?: number, y?: number): void {
    if (this.posX >= canvas.width - 80) this.dir = -1
    else if (this.posX <= 80) this.dir = 1

    if (x) this.posX += x * this.dir
    if (y) this.posY += y * this.dir
  }
}

export default Abstract
