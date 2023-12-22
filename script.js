let clickCount = 0;

function handleClick() {
  clickCount++;
  updateCounter();
  changeButtonColor();
}

function handleReset() {
  clickCount = 0;
  updateCounter();
  changeButtonColor();
}

function updateCounter() {
  document.getElementById('click-counter').innerText = clickCount;
}

function changeButtonColor() {
  const button = document.getElementById('click-button');
  
  // Define an array of colors
  const colors = ['#4CAF50', '#ff9800', '#d12747'];

  // Change the background color based on the click count
  button.style.backgroundColor = colors[clickCount % colors.length];
}


// Add click event listeners to the buttons
document.getElementById('click-button').addEventListener('click', handleClick);
document.getElementById('reset-button').addEventListener('click', handleReset);
