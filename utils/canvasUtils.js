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
