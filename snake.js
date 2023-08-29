function Snake(x, y, food) {
  this.cells = [{x: x, y: y}]
  this.direction = null // up, left, down, right
  this.isEating = false
  this.isDead = false

  this.draw = function() {
    this.cells.forEach(function(cell) {
      var snakeCell = document.querySelector(`.row${cell.y} .col${cell.x}`)
      snakeCell.classList.add('snake')
    })
  }

  this.updateCoords = function() {
    var copyOfFirstCell = {x: this.cells[0].x, y: this.cells[0].y} 
    this.cells.unshift(copyOfFirstCell)
    var firstCell = this.cells[0]
    switch (this.direction) {
      case 'up':
        if(firstCell.y === 1) {
          firstCell.y = 20
        } else {
          firstCell.y--
        }
      break
    case 'left':
      if(firstCell.x === 1) {
        firstCell.x = 20
      } else {
        firstCell.x--
      }
      break
    case 'down':
      if(firstCell.y === 20) {
        firstCell.y = 1
      } else {
        firstCell.y++
      }
      break
    case 'right':
      if(firstCell.x === 20) {
        firstCell.x = 1
      } else {
        firstCell.x++
      }
      break
    }
    if(!this.isEating) {
      this.cells.pop()
    } else {
      this.isEating = false
    }
    this.checkOverlap()
  }

  this.erase = function() {
    var snakeCells = document.querySelectorAll('.snake')
    snakeCells.forEach(function(snakeCell) {
      snakeCell.classList.remove('snake')
    })
  }

  this.checkOverlap = function() {
    var head = this.cells[0]
    for(let i = 1; i< this.cells.length; i++) {
      if (head.x === this.cells[i].x && head.y === this.cells[i].y) {
        this.isDead = true
      }
    }
  }
}

export { Snake }