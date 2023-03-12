# SnakeGame

Link to the app :- https://normal-snakeapp.netlify.app/

Main logic ;- 

// Display Snake

// Moving snake

for (let i = snake.length - 2; i >= 0; i--) { snake[i + 1] = { ...snake[i] } }
    snake[0].x = snake[0].x + inputDir.x;
    snake[0].y = snake[0].y + inputDir.y;
    
    
// When snake collides with food

