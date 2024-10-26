// script.js
// Variables to control the movement and interval ID
let movementInterval;
let isMoving = false;

// Function to start the movement of the meme image
function startMovement() {
  // Disable Start button and enable Stop button
  document.getElementById('startButton').disabled = true;
  document.getElementById('stopButton').disabled = false;

  // Set the movement interval if not already moving
  if (!isMoving) {
    isMoving = true;
    movementInterval = setInterval(moveImage, 100); // Adjust interval as desired
  }
}

// Function to stop the movement of the meme image
function stopMovement() {
  // Disable Stop button and enable Start button
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;

  // Clear the interval to stop movement
  clearInterval(movementInterval);
  isMoving = false;
}

// Function to randomly position the meme image within the window
function moveImage() {
  const image = document.getElementById('memeImage');

  // Get random x and y positions
  const x = Math.floor(Math.random() * (window.innerWidth - image.width));
  const y = Math.floor(Math.random() * (window.innerHeight - image.height));

  // Apply the positions to the image
  image.style.position = 'absolute';
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
}
