class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(200, 500, 100, 150, "./images/car.png");
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = // empty? iteration 0
      this.gameLoopFrecuency = 1000 / 60;
  }
  start() {
    // this func is updating the values  in the Game class everytime its executed
    this.gameScreen.style.height = `${this.height}px`; //written like that cause we are setting it to css - template literals + this value
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop(); //is declared right after
    }, this.gameLoopFrecuency);
  }
  gameLoop() {
    this.update();
    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
      console.log("Interval cleared");
    }

    if (!this.obstacles.length) {
      this.obstacles.push(new Obstacle(200, 200));
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Check for collision
      if (this.player.didCollide(obstacle)) {
        obstacle.carObstacle.remove();

        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      }

      if (this.height < obstacle.top) {
        this.score++;
        this.obstacles.splice(i, 1);
        obstacle.carObstacle.remove();
        i--;
      }
      if (this.lives === 0) {
        this.endGame();
      }
    }
  }
  update() {
    console.log("updating");
    this.player.move();
  }
  endGame() {
    this.player.car.remove();
    this.obstacles.forEach((obstacle) => obstacle.carObstacle.remove());

    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
