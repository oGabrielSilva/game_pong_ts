export const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d') as CanvasRenderingContext2D

canvas.width = innerWidth - 100
canvas.height = innerHeight - 100

export default context
