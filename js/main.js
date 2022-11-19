var elBody = document.querySelector('body');
var elMode = document.querySelector('.mode-btn');

elMode.addEventListener('click', function(){
  elBody.classList.toggle('dark');
});