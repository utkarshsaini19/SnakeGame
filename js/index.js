console.log("Inside index.js");
let inputDir = { x: 0, y: 0 };
let lastTime = 0;
let speed = 300;
let snake = [{ x: 8, y: 8 }]
let food = { x: 4, y: 2 };
let point = 0;

// Loading music
let foodmusic = new Audio('../music/food.mp3')
let gameovermusic = new Audio('../music/gameover.mp3')
let movemusic = new Audio('../music/move.mp3')
let playmusic = new Audio('../music/music.mp3')


function isCollide() {
    // If you bump into yourself 
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 16 || snake[0].x <= 0 || snake[0].y >= 16 || snake[0].y <= 0) {
        return true;
    }

    return false;
}



function launch() {
    if (isCollide()) {
        playmusic.pause();
        gameovermusic.play();
        inputDir = { x: 0, y: 0 };
        point = 0;
        alert("Prss any key to restart");
        playmusic.play();
        score.innerHTML = "Score : " + point;
        snake = [{ x: 8, y: 8 }];

    }


    // When snake collides with food
    if (snake[0].x === food.x && snake[0].y === food.y) {
        point++;
        let value = JSON.parse(localStorage.getItem('point'));
        if (point>value) {
            localStorage.setItem('point',JSON.stringify(point));    
            highscore.innerHTML="HighScore : "+point;
            score.innerHTML = "Score : " + point;
        }
        else {
            score.innerHTML = "Score : " + point;
        }
        foodmusic.play();
        snake.unshift({ x: snake[0].x + inputDir.x, y: snake[0].y + inputDir.y }) // Unshift add element to start of array
        let a = 2;
        let b = 7;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }


    }

    //Move snake
    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] };

    }
    snake[0].x = snake[0].x + inputDir.x;
    snake[0].y = snake[0].y + inputDir.y;






    //Display snake and food
    // Display snake
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
    //Display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}


function main(currentTime) {

    if ((currentTime - lastTime) > speed) {
        lastTime = currentTime;
        launch();
    }
    requestAnimationFrame(main)

}

let pointer = localStorage.getItem('point');
if (!pointer) {
    localStorage.setItem('point', JSON.stringify(point));
}
else {
    highscore.innerHTML = "HighScore : "+JSON.parse(pointer);
}

playmusic.play();
window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
    instruct.innerHTML=""
    movemusic.play();
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
    
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
    
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
        
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})