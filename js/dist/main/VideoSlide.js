// video carousel slide 기능
// video indicator 탭버튼

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

// 비디오 버튼 클릭시 비디오 iframe 재생하기, 그러나 iframe 이 안뜨네 ??
const videoPlay = function(e){
  e.forEach((el,i)=>{
    let vodIframe = `<iframe width="100%" height="100%" src="${videoData[i].videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    el.addEventListener('click',(e)=>{
      let target = e.target.classList.contains('video_play_btn')
      if(target){
        const vodArea = document.createElement('div');
        vodArea.className = 'vod_area';
        el.append(vodArea)  
        vodArea.innerHTML = vodIframe
      }
    })
    videoLiCvt = [...videoLi];
  })
}
videoPlay(videoLiCvt);
