const btn = document.querySelector('button');

btn.addEventListener('mousedown', () => {
  btn.classList.add('btn--pressed');

  console.log('mousedown - OK!');
  
  document.addEventListener('mouseup', function() {
    btn.classList.remove('btn--pressed');
  });
});