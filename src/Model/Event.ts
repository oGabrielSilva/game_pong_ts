import { keyDown, keyUp } from '../utils/keyboard'

class Event {
  public init() {
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
  }
}

export default Event
