window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  function handleKeyDown(keyPressed) {
    const key = keyPressed.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      keyPressed.preventDefault();
      // console.log("key down", key);
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeyDown);
};
