// 비디오 next prev 버튼으로 carousel 슬라이드 방식
const carouselSlide = function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    let target = e.target.classList.contains('prev_btn');
    videoLiCvt = [...videoLi];
    target ? videoUl.prepend(videoLiCvt.at(-1)) : videoUl.append(videoLiCvt.at(0))
    videoLi = videoUl.querySelectorAll('li');
    setTimeout(()=>{
      permission = true;
    },500)
  }
}
videoBtn.addEventListener('click',carouselSlide)