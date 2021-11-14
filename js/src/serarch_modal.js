
let openhBtn = document.querySelector('.search_open_btn');
let closeBtn = document.querySelector('.search_close_btn')
let searchModal = document.querySelector('.search_modal');

openhBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchModal.style.display = 'block';
});

closeBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchModal.style.display = 'none';
});