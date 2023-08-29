function Food(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    var snakeCell = document.querySelector(`.row${this.y} .col${this.x}`)
    snakeCell.classList.add('food')
  }

  this.respawn = function() {
    this.x = Math.ceil(Math.random() * 20)
    this.y = Math.ceil(Math.random() * 20)
    this.erase()
    this.draw()
  }

  this.erase = function() {
    var snakeCell = document.querySelector('.food')
    snakeCell.classList.remove('food')
  }
}

export { Food }