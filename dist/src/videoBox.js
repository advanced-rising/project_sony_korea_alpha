// videoBox.js
const videoData = [
  {
    "imgUrl" : "../../img/main/video/97_xomc.jpg",
  },
  {
    "imgUrl" : "../../img/main/video/97_e08u.jpg",
  },
  {
    "imgUrl" : "../../img/main/video/96_g2ry.jpg",
  },
  {
    "imgUrl" : "../../img/main/video/95_g2ry.jpg",
  },
  {
    "imgUrl" : "../../img/main/video/93_e77u.jpg",
  },
]
const videoBox = document.querySelector('#videoBox');
const videoArea = videoBox.querySelector('.video_list');

const videoPanel = ['next_btn','prev_btn'];
const videoBtn = videoArea.querySelector('.video_btn');
const videoNext = videoBtn.querySelector('.next_btn');
const videoPrev = videoBtn.querySelector('.prev_btn');
let videoUl = videoArea.querySelector('ul');
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

console.log(videoLiCvt);
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
function videoUlCopy(){
  videoUl = videoArea.querySelector('ul');
  videoLi = videoArea.querySelectorAll('li');
  videoLiCvt = [...videoLi];
}
videoNext.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    videoUl.prepend(videoLiCvt.at(-1));
    videoUlCopy();
    setTimeout(()=>{
      permission = true;
    },10)
  }
})

videoPrev.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    videoUl.append(videoLiCvt.at(0));
    videoUlCopy();
    setTimeout(()=>{
      permission = true;
    },10)
  }
})



