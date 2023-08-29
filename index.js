import { Snake } from "./snake.js"
import { Food } from "./food.js"

var music = new Audio('./assets/music/music.mp3')
music.volume = 0.03
music.play()
var eatSound = new Audio('./assets/music/eat.wav')
eatSound.volume = 0.2

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

var gameSpeed = 200
var timerId = setInterval(gameLoop, gameSpeed)

function gameLoop() {
  snake.updateCoords()
  snake.erase()
  snake.draw()
  if(food.x === snake.cells[0].x && food.y === snake.cells[0].y) {
    console.log('ÑAM ÑAM ÑAM!!')
    snake.isEating = true
    food.respawn()
    eatSound.play()
    clearInterval(timerId)
    gameSpeed *= 0.8
    timerId = setInterval(gameLoop, gameSpeed)
  }
  if(snake.isDead) {
    alert('Game Over')
  }
}