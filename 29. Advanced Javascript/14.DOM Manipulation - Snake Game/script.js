document.addEventListener("DOMContentLoaded", function eventHandler() {
  const gameArena = document.getElementById("game-arena");
  const arenaSize = 600;
  const cellSize = 20;
  let score = 0; //* Score of the game
  let gameStarted = false;
  let food = { x: 300, y: 200 };
  let snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];

  let dx = cellSize;
  let dy = 0;
  let intervalId;
  let gameSpeed = 200; 

  function moveFood() {
    let newX, newY;

    do {
      newX = Math.floor(Math.random() * 30) * cellSize;
      newY = Math.floor(Math.random() * 30) * cellSize;
    } while (snake.some((snakeCell) => snakeCell.x === newX && snakeCell.y === newY));

    food = { x: newX, y: newY };
  }

  function changeDirection(event) {
    const isGoingDown = dy === cellSize;
    const isGoingUp = dy === -cellSize;
    const isGoingLeft = dx === -cellSize;
    const isGoingRight = dx === cellSize;

    if (event.code === "ArrowUp" && !isGoingDown) {
      dx = 0;
      dy = -cellSize;
    } else if (event.code === "ArrowDown" && !isGoingUp) {
      dx = 0;
      dy = cellSize;
    } else if (event.code === "ArrowLeft" && !isGoingRight) {
      dx = -cellSize;
      dy = 0;
    } else if (event.code === "ArrowRight" && !isGoingLeft) {
      dx = cellSize;
      dy = 0;
    }
  }

  function updateSnake() {
    const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
      score += 5;
      moveFood();

     if(gameSpeed > 50) { 

      clearInterval(intervalId); 
      gameSpeed -= 2; 
      gameLoop(); 

     }

    } else {
      snake.pop();
    }
  }

  function drawDiv(x, y, className) {
    const divElement = document.createElement("div");
    divElement.classList.add(className);
    divElement.style.top = `${y}px`;
    divElement.style.left = `${x}px`;

    return divElement;
  }

  function drawFoodAndSnake() {
    gameArena.innerHTML = "";
    // clear previous things from our gameArena

    snake.forEach((snakeCell) => {
      const snakeElement = drawDiv(snakeCell.x, snakeCell.y, "snake");
      gameArena.appendChild(snakeElement);
    });

    const foodElement = drawDiv(food.x, food.y, "food");
    gameArena.appendChild(foodElement);
  }

  function isGameOver() {
    for (let i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        return true;
      }
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > arenaSize - cellSize;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > arenaSize - cellSize;

    return hitBottomWall || hitLeftWall || hitRightWall || hitTopWall;
  } 

  function drawScoreBoard() {
    const scoreBoard = document.getElementById('score-board'); 
    scoreBoard.textContent = `Score : ${score}`; 
  }

  function gameLoop() {
    intervalId = setInterval(() => {
      if (isGameOver()) {
        clearInterval(intervalId);
        gameStarted = false;
        alert('Game Over' + '\n' + `Your Score ${score}`); 
        return;
      }
      updateSnake();
      drawScoreBoard(); 
      drawFoodAndSnake();
    }, gameSpeed);
  }

  function runGame() {
    if (!gameStarted) {
      gameStarted = true;
      document.addEventListener("keydown", changeDirection);
      drawFoodAndSnake();
      gameLoop();
    }
  }

  function initiateGame() {
    const scoreboard = document.createElement("div");
    scoreboard.id = "score-board";
    document.body.insertBefore(scoreboard, gameArena);

    const startButton = document.createElement("button");
    startButton.textContent = "Start Button";
    startButton.classList.add("start-button");

    startButton.addEventListener("click", function startGame() {
      startButton.style.display = "none";
      runGame();
    });

    document.body.appendChild(startButton);
  }

  initiateGame();
});
