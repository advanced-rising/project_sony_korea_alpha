let gnbOpen = document.querySelector('.gnb_btn');
let gnbClose = document.querySelector('.gnb_close');

const headWrap = document.querySelector('.head_wrap');
const gnb = document.querySelector('.gnb');

gnbOpen.addEventListener('click',function(event){
  event.preventDefault();
  gnb.style.display = 'block';
  headWrap.style.height = '100vw';
  gnbOpen.style.display = 'none';
  gnbClose.style.display = 'block';
});
gnbClose.addEventListener('click', function(event){
  event.preventDefault();
  gnb.style.display = 'none';
  headWrap.style.height = 'auto';
  gnbOpen.style.display = 'block';
  gnbClose.style.display = 'none';
});