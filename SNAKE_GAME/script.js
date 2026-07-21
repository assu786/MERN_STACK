// ==============================
// Snake Game - script.js
// ==============================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const box = 20;

let snake;
let food;
let direction;
let score;
let game;
let speed = 120;
let isGameRunning = false;

// Load High Score
let highScore = localStorage.getItem("snakeHighScore") || 0;
highScoreElement.textContent = highScore;

// Initialize Game
function initGame() {
    snake = [
        { x: 10 * box, y: 10 * box }
    ];

    direction = "RIGHT";
    score = 0;
    scoreElement.textContent = score;

    generateFood();

    clearInterval(game);
    isGameRunning = false;

    draw();
}

// Generate Food
function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };

    for (let segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
            generateFood();
            return;
        }
    }
}

// Draw Game
function draw() {

    // Background
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = "#222";

    for (let i = 0; i < canvas.width; i += box) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    // Food
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(food.x + box / 2, food.y + box / 2, box / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "#3cff4d" : "#00c853";
        ctx.fillRect(part.x, part.y, box, box);

        ctx.strokeStyle = "#111";
        ctx.strokeRect(part.x, part.y, box, box);
    });
}

// Update Game
function update() {

    let headX = snake[0].x;
    let headY = snake[0].y;

    switch (direction) {
        case "LEFT":
            headX -= box;
            break;

        case "UP":
            headY -= box;
            break;

        case "RIGHT":
            headX += box;
            break;

        case "DOWN":
            headY += box;
            break;
    }

    // Wall Collision
    if (
        headX < 0 ||
        headY < 0 ||
        headX >= canvas.width ||
        headY >= canvas.height
    ) {
        gameOver();
        return;
    }

    // Self Collision
    for (let i = 0; i < snake.length; i++) {
        if (headX === snake[i].x && headY === snake[i].y) {
            gameOver();
            return;
        }
    }

    const newHead = {
        x: headX,
        y: headY
    };

    // Eat Food
    if (headX === food.x && headY === food.y) {

        score++;
        scoreElement.textContent = score;

        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem("snakeHighScore", highScore);
        }

        generateFood();

    } else {

        snake.pop();

    }

    snake.unshift(newHead);

    draw();
}

// Game Over Screen
function gameOver() {

    clearInterval(game);
    isGameRunning = false;

    draw();

    // Dark Overlay
    ctx.fillStyle = "rgba(0,0,0,0.75)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Game Over
    ctx.fillStyle = "#ff3333";
    ctx.font = "bold 42px Arial";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);

    // Score
    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.fillText("Score : " + score, canvas.width / 2, canvas.height / 2);

    // Restart Message
    ctx.fillStyle = "#00ff66";
    ctx.font = "20px Arial";
    ctx.fillText("Click Restart Button", canvas.width / 2, canvas.height / 2 + 40);

    ctx.textAlign = "start";
}

// Start Game
function startGame() {

    if (isGameRunning) return;

    draw();

    game = setInterval(update, speed);
    isGameRunning = true;
}

// Restart Game
function restartGame() {

    clearInterval(game);

    initGame();

    startGame();
}

// Keyboard Controls
document.addEventListener("keydown", function (e) {

    const key = e.key.toLowerCase();

    if ((key === "arrowleft" || key === "a") && direction !== "RIGHT") {
        direction = "LEFT";
    }

    if ((key === "arrowup" || key === "w") && direction !== "DOWN") {
        direction = "UP";
    }

    if ((key === "arrowright" || key === "d") && direction !== "LEFT") {
        direction = "RIGHT";
    }

    if ((key === "arrowdown" || key === "s") && direction !== "UP") {
        direction = "DOWN";
    }

});

// Buttons
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

// Initial Screen
initGame();