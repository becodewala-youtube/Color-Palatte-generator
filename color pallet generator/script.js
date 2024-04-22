const colorsContainer = document.querySelector('.colors');
const generateBtn = document.querySelector('.generate-btn');

function generateColors() {
  colorsContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    colorsContainer.appendChild(colorDiv);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateColors();

generateBtn.addEventListener('click', generateColors);
