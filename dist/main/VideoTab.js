// 비디오 인디케이터 버튼
const videoIndiFn = function(){
  for(i=0;i<videoLen;i++){
    ((k)=>{
      videoIndicatorLi[k].addEventListener('click',(e)=>{
        e.preventDefault();
        for(j=0;j<videoLen;j++){
          videoIndicatorLi[j].classList.remove(ACTIVE_ON);
          videoLi[j].classList.remove(ACTIVE_ON);
        }
        videoIndicatorLi[k].classList.add(ACTIVE_ON);
        videoLi[k].classList.add(ACTIVE_ON);
      })
    })(i)
  }
}
videoIndiFn();

