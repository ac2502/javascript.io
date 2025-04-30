// hakee pallon id avulla
const ball = document.getElementById('ball');

let isDragging = false; // muuttuja kertoo vedetäänkö palloa
let offsetX, offsetY;

ball.addEventListener('mousedown', function(event) { //hiiri ppallon päällä, aloita veto
  isDragging = true;
  offsetX = event.clientX - ball.offsetLeft;
  offsetY = event.clientY - ball.offsetTop;
  ball.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    ball.style.left = (event.clientX - offsetX) + 'px'; //pysyy hiiren kohdalla keskitetysti
    ball.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() { //irroitus ja loppuu veto
  isDragging = false;
  ball.style.cursor = 'grab';
});
