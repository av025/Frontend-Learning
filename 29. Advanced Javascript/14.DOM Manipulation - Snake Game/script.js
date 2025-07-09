//? The "DOMContentLoaded" event ensures that the DOM tree is fully built,
//? and all HTML elements (DOM nodes) are loaded into the browser's memory.


//! From tomorrow start from 1:50:00 minutes............ 
document.addEventListener('DOMContentLoaded', function eventHandler(){
  //* accessing div of id game-arena 
  const gameArena = document.getElementById('game-arena'); 
  const arenaSize = 600; 
  const cellSize = 20; 
  let score = 0; 
  let gameStarted = false; 
  let food = {x: 300, y:200}; 
  let snake = [{x:120, y:200}, {x:140, y:200}, {x:160, y:200}]; 

 function drawDiv(x, y , className) { 
   const divElement = document.createElement("div"); 
    divElement.classList.add(className); 
    divElement.style.top = `${y}px`; 
    divElement.style.left = `${x}px`; 

    return divElement; 

 }

function drawFoodAndSnake() {
    gameArena.innerHTML = ""; 
    snake.forEach((snakeCell) => {  
        const snakeElement = drawDiv(snakeCell.x , snakeCell.y, "snake"); 
        gameArena.appendChild(snakeElement); 


    })
    const foodElement = drawDiv(food.x, food.y, "food");  
    gameArena.appendChild(foodElement); 
}

  function runGame() {
    if(!gameStarted) {
        gameStarted = true; 
        drawFoodAndSnake();
        // gameLoop()
    }
  }

  function initiateGame() {
    const scoreBoard = document.createElement("div"); 
    scoreBoard.id = "score-board"; 
    document.body.insertBefore(scoreBoard , gameArena); 

    const startButton = document.createElement("button"); 
    startButton.textContent = "Start Game"; 
    startButton.classList.add("start-button"); 

    startButton.addEventListener("click", function eventHandler() {
        startButton.style.display = "none"; 
        runGame(); 
    }); 


    document.body.appendChild(startButton); 

  }; 

  initiateGame(); 
})



