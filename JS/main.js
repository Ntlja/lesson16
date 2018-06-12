console.log("hi")

var ball = document.getElementById('ball')
var ballXPos = 0
var ballXSpeed = 3
var ballYPos = 0
var ballYSpeed = 3
var ballXDirection = 1
var ballYDirection = 1
var ballSize = 300

var ball2 = document.getElementById('ball2')
var ball2XPos = 0
var ball2XSpeed = 3
var ball2YPos = 0
var ball2YSpeed = 5
var ball2XDirection = 1
var ball2YDirection = 1
var ball2Size = 100

ball.style.width = ballSize + 'px'
ball.style.height = ballSize + 'px'

ball2.style.width = ball2Size + 'px'
ball2.style.height = ball2Size + 'px'

// ball.style.background = 'lightblue'
// console.log(ball)

bounceBall()

function bounceBall(){
  ballYPos = ballYPos + (ballYSpeed * ballYDirection)
  ballXPos = ballXPos + (ballXSpeed * ballXDirection)
  console.log('running bounce ball')
  ball.style.left = ballXPos + 'px'
  ball.style.top = ballYPos + 'px'

  if(ballXPos >= window.innerWidth - ballSize){
    ballXDirection = -1
  } else if (ballXPos <= 0){
    ballXDirection = 1
  }
  if(ballYPos >= window.innerHeight - ballSize){
    ballYDirection = -1
  } else if (ballYPos <= 0){
    ballYDirection = 1
  }

window.requestAnimationFrame(bounceBall)
}

  bounceBall2()

  function bounceBall2(){
    ball2YPos = ball2YPos + (ball2YSpeed * ball2YDirection)
    ball2XPos = ball2XPos + (ball2XSpeed * ball2XDirection)
    console.log('running bounce ball2')
    ball2.style.right = ball2XPos + 'px'
    ball2.style.bottom = ball2YPos + 'px'

    if(ball2XPos >= window.innerWidth - ball2Size){
      ball2XDirection = -1
    } else if (ball2XPos <= 0){
      ball2XDirection = 1
    }
    if(ball2YPos >= window.innerHeight - ball2Size){
      ball2YDirection = -1
    } else if (ball2YPos <= 0){
      ball2YDirection = 1
    }

  window.requestAnimationFrame(bounceBall2)
}
