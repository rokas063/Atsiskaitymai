(function() {
  const square3 = document.querySelector('.js-square-3');
  const button3 = document.querySelector('.js-btn-3');

  button3.addEventListener('click', function() {
    if (square3.style.backgroundColor === 'gray') {
      square3.style.backgroundColor = 'pink';
    } else {
      square3.style.backgroundColor = 'gray';
    }
  });
})();
