import { Snake } from "./snake.js"
import { Food } from "./food.js"

var snake = new Snake(10, 10)
snake.draw()

var food = new Food(5, 3)
food.draw()

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
}