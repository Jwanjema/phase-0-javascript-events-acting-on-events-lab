// ...existing code...

function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  let left = parseInt(dodger.style.left, 10);
  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  let left = parseInt(dodger.style.left, 10);
  if (left < 360) { // 400 - 40 (game width - dodger width)
    dodger.style.left = `${left + 4}px`;
  }
}

// Make functions available globally for tests
window.moveDodgerLeft = moveDodgerLeft;
window.moveDodgerRight = moveDodgerRight;

// ...existing code...
