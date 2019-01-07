class XYZ {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  add (xyz) {
    return new XYZ(xyz.x + this.x, xyz.y + this.y)
  }
  substr (xyz) {
    let nPoint = new XYZ(this.x - xyz.x, this.y - xyz.y)
    return nPoint
  }
  center (xyz) {
    return new XYZ((xyz.x + this.x) / 2, (xyz.y + this.y) / 2)
  }
  length () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.x, 2))
  }
  speed (length) {
    let x = this.x / length
    let y = this.y / length
    return new XYZ(x, y)
  }
  multipl (len) {
    let x = this.x * len
    let y = this.y * len
    return new XYZ(x, y)
  }
  normalize () {
    this.x = this.x / this.length
    this.y = this.y / this.length
    return this
  }
  moveTo (speed, len) {
    return this.add(speed.multipl(len))
  }
  moveToBy (xyz, speed, by) {
    let direction = xyz.substr(this)
    let sp = direction.speed(speed)
    return this.moveTo(sp, by)
  }
}

class Line {
  constructor (line) {
    this.line = line
  }
  get p1 () {
    return new XYZ(Number(this.line.getAttribute('x1')), Number(this.line.getAttribute('y1')))
  }
  set p1 (par) {
    this.line.setAttribute('x1', par.x)
    this.line.setAttribute('y1', par.y)
  }
  get p2 () {
    return new XYZ(Number(this.line.getAttribute('x2')), Number(this.line.getAttribute('y2')))
  }
  set p2 (par) {
    this.line.setAttribute('x2', par.x)
    this.line.setAttribute('y2', par.y)
  }
}

class Path {
  constructor (path) {
    this.line = path
    let d = path.getAttribute('d')
    let arr = d.split(' ')
    this.x1 = Number(arr[0].replace(/[a-zA-Z]+/g, ''))
    this.y1 = Number(arr[1].replace(/[a-zA-Z]+/g, ''))
    this.x2 = Number(arr[2].replace(/[a-zA-Z]+/g, ''))
    this.y2 = Number(arr[3].replace(/[a-zA-Z]+/g, ''))
  }
  setPath () {
    this.line.setAttribute('d', 'M' + String(this.x1) + ' ' + String(this.y1) + ' l' + String(this.x2) + ' ' + String(this.y2))
  }
  set path (par) {
    if (par.x1) {
      this.x1 = par.x1
    }
    if (par.x2) {
      this.x2 = par.x2
    }
    if (par.y1) {
      this.y1 = par.y1
    }
    if (par.y2) {
      this.y2 = par.y2
    }
    this.setPath()
  }
}

export {XYZ, Line, Path}
