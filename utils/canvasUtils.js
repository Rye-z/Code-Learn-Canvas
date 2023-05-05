let cnv = null
let cxt = null

export function getCanvasInstance(id) {
  cnv = document.getElementById(id)
  if (cnv) {
    cxt = cnv.getContext('2d')
    return cxt
  }
}

export function clearCanvas(delay = 0) {
  const doClear = () => cxt.clearRect(0, 0, cnv.width, cnv.height)
  delay ? setTimeout(doClear, delay) : doClear()
}

export const drawImage = (imgSrc) => {
  return new Promise((resolve) => {
    const image = new Image()
    image.src = imgSrc
    image.onload = () => resolve(image)
  })
}

export const drawSquare = (x, y, w, h) => {
  cxt.beginPath()
  cxt.moveTo(x, y)
  cxt.lineTo(x + w, y)
  cxt.lineTo(x + w, y + h)
  cxt.lineTo(x, y + h)
  cxt.lineTo(x, y)
  cxt.stroke()
}
