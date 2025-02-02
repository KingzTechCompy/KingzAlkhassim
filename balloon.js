// script.js
document.addEventListener('DOMContentLoaded', () => {
  const balloonContainer = document.getElementById('balloon-container');
  let balloonInterval;

  // Balloon colors
  const colors = ['#ff6b6b', '#ffdd57', '#6bcf63', '#57a6ff', '#d785ff'];

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const balloonCircle = document.createElement('div');
    balloonCircle.classList.add('balloon-circle');

    const rope = document.createElement('div');
    rope.classList.add('rope');

    // Assign random color to the balloon
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloonCircle.style.background = `radial-gradient(circle at 50% 40%, ${color}, ${shadeColor(color, -30)})`;

    // Random horizontal position
    const position = Math.random() * 100; // Random position between 0 and 100
    balloon.style.left = `${position}vw`;

    // Append the circle and rope to the balloon
    balloon.appendChild(balloonCircle);
    balloon.appendChild(rope);

    // Add the balloon to the container
    balloonContainer.appendChild(balloon);

    // Remove the balloon after it floats out of view
    setTimeout(() => balloon.remove(), 5000); // Matches the animation duration
  }

  // Helper function to shade colors
  function shadeColor(color, percent) {
    const num = parseInt(color.slice(1), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return `rgb(${Math.min(255, Math.max(0, R))}, ${Math.min(255, Math.max(0, G))}, ${Math.min(255, Math.max(0, B))})`;
  }

  // Start generating balloons every 200ms
  balloonInterval = setInterval(createBalloon, 200);

  // Stop creating balloons after 3 seconds
  setTimeout(() => {
    clearInterval(balloonInterval); // Stop creating new balloons
    setTimeout(() => {
      // Make all remaining balloons fly up and disappear
      document.querySelectorAll('.balloon').forEach((balloon) => {
        balloon.style.animation = 'floatUp 3s linear forwards';
      });
    }, 500); // Wait a bit before flying up the remaining balloons
  }, 3000); // Stop balloon creation after 3 seconds
});