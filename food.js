function Food(x, y) {
  this.x = x
  this.y = y

  this.draw = function() {
    var snakeCell = document.querySelector(`.row${this.y} .col${this.x}`)
    snakeCell.classList.add('food')
  }
}

export { Food }