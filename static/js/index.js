const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let painting = false;

function startPosition() {
  painting = true;
  draw(e);
}

function finishedPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';

  // Adjust the coordinates based on canvas position
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
document.addEventListener('mousemove', draw);
