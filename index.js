import { Snake } from "./snake.js"
import { Food } from "./food.js"

var food = new Food(5, 3)
food.draw()

var snake = new Snake(10, 10, food)
snake.draw()

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'w':
      snake.direction = 'up'
      break
    case 'a':
      snake.direction = 'left'
      break
    case 's':
      snake.direction = 'down'
      break
    case 'd':
      snake.direction = 'right'
      break
  }
})

var timerId = setInterval(gameLoop, 100)

function gameLoop() {
  snake.updateCoords()
  snake.erase()
  snake.draw()
  snake.isEating()
}