const videoBox = document.querySelector('#videoBox');
const videoArea = videoBox.querySelector('.video_list');
const videoBtn = videoArea.querySelector('.video_btn');
const videoNext = videoBtn.querySelector('.next_btn');
const videoPrev = videoBtn.querySelector('.prev_btn');
const videoUl = videoArea.querySelector('ul');
let videoLi = videoUl.querySelectorAll('li');
const videoIndicator = videoBox.querySelector('.video_indicator');
const videoIndicatorUl = videoIndicator.querySelector('ul');
const videoIndicatorLi = videoIndicatorUl.querySelectorAll('li');

let videoLiCvt = [...videoLi];

let videoLen = videoLi.length;
let permission = true;

// let countCheck = 0;
// let afterCheck = countCheck;
// const VIEW_ON = 'on';
// const ACTIVE_ON = 'active';
// let i = 0;
// let j = 0;
const videoPath = "../data/_videoMovie.json"
fetch(videoPath)
.then((response)=>{
  return response.json()
})
.then((response)=>{
  const dataArr = [...response]
  for(let i=0; i<dataArr.length;i++){
    const makeVideoLi = document.createElement('li');
    makeVideoLi.classList.add('video')
    makeVideoLi.classList.add(`video${i}`)
    videoUl.append(makeVideoLi)
    let videoCode =
    `<span class="blind">${dataArr[0].videoName}</span>
      <button class="video_play_btn">
        <span class="blind">${dataArr[1].playName}</span>
      </button>`  
    makeVideoLi.innerHTML = videoCode
    
  }
  for(let i=0; i<dataArr.length; i++){
    const makeVideoIndi = document.createElement('li')
    videoIndicatorUl.append(makeVideoIndi)
    const videoIndiCode = `<a href="#">
    <span class="blind">${dataArr[2].indiButton}</span></a>`
    makeVideoIndi.innerHTML = videoIndiCode
  }
})
.then(()=>{
  const selectVideoLi = videoUl.querySelectorAll('li');
  const selectLiArr = [...selectVideoLi]
  selectLiArr[0].classList.add('active')

  const selectIndiLi = videoIndicatorUl.querySelectorAll('li');
  const selectIndiLiArr = [...selectIndiLi];
  selectIndiLi[0].classList.add('active');
})


{

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
}
