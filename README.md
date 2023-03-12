# SnakeGame

Link to the app :- https://normal-snakeapp.netlify.app/

Main logic ;- 

// Display Snake

board.innerHTML = "";
    snake.forEach((element, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);

    })
    
// Moving snake

for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] };

    }
    snake[0].x = snake[0].x + inputDir.x;
    snake[0].y = snake[0].y + inputDir.y;
    
    
// When snake collides with food
Append new element in snake array at zero index and generate food at different location using random.

// When snake collide with wall that means apply conditions on snake head
if (snake[0].x >= 16 || snake[0].x <= 0 || snake[0].y >= 16 || snake[0].y <= 0) {
        return true;
    }
    
// when snake bump into itself
for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
