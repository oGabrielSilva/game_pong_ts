const keyboard = {
  a: false,
  d: false,
  left: false,
  right: false,
}

export const keyUp = (event: KeyboardEvent) => {
  switch (event.key.toLowerCase()) {
    case 'a':
      keyboard.a = false
      break
    case 'd':
      keyboard.d = false
      break
    case 'arrowleft':
      keyboard.left = false
      break
    case 'arrowright':
      keyboard.right = false
      break
    default:
      break
  }
}

export const keyDown = (event: KeyboardEvent) => {
  switch (event.key.toLowerCase()) {
    case 'a':
      keyboard.a = true
      break
    case 'd':
      keyboard.d = true
      break

    case 'arrowleft':
      keyboard.left = true
      break
    case 'arrowright':
      keyboard.right = true
      break
    default:
      break
  }
}

export default keyboard
