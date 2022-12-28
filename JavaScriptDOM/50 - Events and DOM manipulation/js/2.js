(function() {
const square = 7;
(() => {
    const square = document.querySelector('.js-square-2');
    const btn = document.querySelector('.js-btn-2');
    
    const changeSquareColor = () => {
      square.style.background = 'blue';
    }
    
    btn.addEventListener('click', changeSquareColor);
  })()
  const button2 = document.querySelector('.js-btn-2');

button1.addEventListener('click', function() {
});
})();