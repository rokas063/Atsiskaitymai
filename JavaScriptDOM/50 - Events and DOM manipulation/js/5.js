function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
  }
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.style.width = '50px';
  square.style.height = '50px';
  square.style.backgroundColor = 'grey';
});

const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.value = '#ff0000';
document.body.appendChild(colorPicker);
squares.forEach(square => {
    square.addEventListener('click', function() {
      square.style.backgroundColor = colorPicker.value;
    });
  });