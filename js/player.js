class Player {
  constructor(left, top, width, height, myCarImg) {
    this.gameScreen = document.getElementById("game-screen");
    this.left = left; //
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    // Initialize the car image element
    this.car = document.createElement("img");
    this.car.src = myCarImg;
    this.car.style.position = "absolute";

    // Set up the default car's property values
    this.car.style.width = `${width}px`;
    this.car.style.height = `${height}px`;
    this.car.style.left = `${left}px`;
    this.car.style.top = `${top}px`;

    this.gameScreen.appendChild(this.car);
    //the car is a fixed condition set for the Player object - is not supposed to change
  }
  move() {
    this.left = this.left + this.directionX;
    this.top = this.top + this.directionY; ///It 3.7.1

    if (this.left < 0) {
      this.left = 0;
    }
    if (this.left > this.gameScreen.width - this.car.width) {
      this.left = this.gameScreen.width - this.car.width;
    }
    if (this.top < 0) {
      this.top = 0;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height) {
      this.top = this.gameScreen.offsetHeight - this.height;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.car.style.left = `${this.left}px`;
    this.car.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.car.getBoundingClientRect();
    const obstacleRect = obstacle.carObstacle.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
