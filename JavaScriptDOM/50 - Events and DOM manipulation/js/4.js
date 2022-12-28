(function() {
    const square4 = document.querySelector('.js-square-4');
    const button4 = document.querySelector('.js-btn-4');
  
    button4.addEventListener('click', function() {
        if (square4.style.backgroundColor === 'gray') {
          } else if (square4.style.backgroundColor === 'yellow') {
            square4.style.backgroundColor = 'green';
          } else if (square4.style.backgroundColor === 'green') {
            square4.style.backgroundColor = 'red';
          } else if (square4.style.backgroundColor === 'red') {
            square4.style.backgroundColor = 'gray';
          } else {
            square4.style.backgroundColor = 'yellow';
          }
          
});
})();