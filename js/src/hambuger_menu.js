let gnbOpen = document.querySelector('.gnb_btn');
let gnbClose = document.querySelector('.gnb_close');

const headWrap = document.querySelector('.head_wrap');
const gnb = document.querySelector('.gnb');

gnbOpen.addEventListener('click',function(event){
  event.preventDefault();
  gnb.style.display = 'block';
});
gnbClose.addEventListener('click', function(event){
  event.preventDefault();
  gnb.style.display = 'none';
});