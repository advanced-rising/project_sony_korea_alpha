// videoBox.js
const videoData = [
  {
    "videoName" : "디지털 언패킹 a7 소개",
    "playName" : "디지털 언패킹 a7 소개 재생",
    "videoUrl" : "https://youtu.be/mh1WahTk3QA",
    "imgUrl" : "../../img/main/video/97_xomc.jpg",
  },
  {
    "videoName" : "인생에 남을 바디 프로필 촬영 프로젝트",
    "playName" : "인생에 남을 바디 프로필 촬영 프로젝트 재생",
    "videoUrl" : "https://youtu.be/GyoTAlB_nUo",
    "imgUrl" : "../../img/main/video/97_e08u.jpg",
  },
  {
    "videoName" : "디지털 언패킹 영상 슈팅 리포트",
    "playName" : "디지털 언패킹 영상 슈팅 리포트 재생",
    "videoUrl" : "https://youtu.be/pqTlqIhA7W4",
    "imgUrl" : "../../img/main/video/96_g2ry.jpg",
  },
  {
    "videoName" : "디지털 언패킹 사진 슈팅 리포트",
    "playName" : "디지털 언패킹 사진 슈팅 리포트 재생",
    "videoUrl" : "https://youtu.be/qUUwlsn7NU0",
    "imgUrl" : "../../img/main/video/95_g2ry.jpg",
  },
  {
    "videoName" : "시행 미생의 다리 출사 풍경 촬영법",
    "playName" : "시행 미생의 다리 출사 풍경 촬영법 재생",
    "videoUrl" : "https://youtu.be/WbXFk-2qZLc",
    "imgUrl" : "../../img/main/video/93_e77u.jpg",
  },
]
const videoBox = document.querySelector('#videoBox');
const videoArea = videoBox.querySelector('.video_list');

const videoPanel = ['next_btn','prev_btn'];
const videoBtn = videoArea.querySelector('.video_btn');
const videoNext = videoBtn.querySelector('.next_btn');
const videoPrev = videoBtn.querySelector('.prev_btn');
const videoUl = videoArea.querySelector('ul');
let videoLi = videoUl.querySelectorAll('li');
const videoIndicator = videoBox.querySelector('.video_indicator');
const videoIndicatorUl = videoIndicator.querySelector('ul');
const videoIndicatorLi = videoIndicatorUl.querySelectorAll('li');

const video00 = videoUl.querySelector('.video00');
const video01 = videoUl.querySelector('.video01');
const video02 = videoUl.querySelector('.video02');
const video03 = videoUl.querySelector('.video03');
const video04 = videoUl.querySelector('.video04');

let videoLiCvt = [...videoLi];

let videoLen = videoLi.length;
let permission = true;

// let countCheck = 0;
// let afterCheck = countCheck;
// const VIEW_ON = 'on';
// const ACTIVE_ON = 'active';
// let i = 0;
// let j = 0;

// ! 지우지 마시오
// video indicator 탭버튼
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
// ! ==============



// 비디오 ....
// 1번이 1첫번째로 오게되면, 5번째는 1번의 왼쪽으로 오고, 
// 다음버튼을 누르게되면, 1번은 2번자리에 오며, 5번째가 1번자리에 오게 해야함.
// 일단 다음 video 가 오게 만들어보자.
// 아마도 스타일을 줘서 만드는것이 편할거라 생각된다.

let videoCount = 0;

/**
 * ! 첫번째 목표.
 * videoNext 버튼을 클릭하였을때 1->2 , 2->3, 3->4, 4->5, 5->1 이런식으로. 
 * videoPrev 버튼을 클릭하였을때 1->5, 5->4, 4->3, 3->2 2->1 이런식으로.
 * videoLi는 배열로 되어있음. - > 배열이므로, pop shift unshift 등 사용할 수 잇음.
 * pop은 제일 끝 배열을 제거하고 그 값을 반환처리함. 
 * unshift는 값을 배열의 제일 앞으로 오게 해줌.
 * ? 그러면 
 * 
 * ! 두번째 목표 
 * videoLi의 배열의 순서가 바뀌므로, 해당순번에 .class 를 집어넣어 animation keyframe으로 .class를 넣어줌.
 * 이때, video 태그는 살려둬야함 . 그러므로 .className(video animation keyframe을 넣어줘야함 )
 * 
 * ? ex)
 * videoLi[0].className('video animationClass'); ....
 * insertBefore
 * append
 */
// video carousel slide 기능
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
videoLiCvt.forEach((el,i)=>{
  let vodIframe = `<iframe width="100%" height="100%" src="${videoData[i].videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  el.addEventListener('click',(e)=>{
    let target = e.target.classList.contains('video_play_btn')
    console.log(target)
    if(target){
      const vodArea = document.createElement('div');
      vodArea.className = 'vod_area';
      el.append(vodArea)  
      vodArea.innerHTML = vodIframe
    }
  })
  videoLiCvt = [...videoLi];
})
