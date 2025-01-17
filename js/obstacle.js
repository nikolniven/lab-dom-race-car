class Obstacle {
  constructor(width, height) {
    this.gameScreen = document.getElementById("game-screen");
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = width;
    this.height = height;

    // Initialize the carObstacle element
    this.carObstacle = document.createElement("img");
    this.carObstacle.src = "./images/redCar.png";
    this.carObstacle.style.position = "absolute";

    // Set up the default carObstacle's property values
    this.carObstacle.style.width = `${this.width}px`;
    this.carObstacle.style.height = `${this.height}px`;
    this.carObstacle.style.left = `${this.left}px`;
    this.carObstacle.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.carObstacle);
  }

  move() {
    this.top += 3; // Example movement logic
    this.carObstacle.style.top = `${this.top}px`;
  }
}
