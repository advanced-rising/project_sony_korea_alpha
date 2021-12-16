// videoBox.js
const videoBox = document.querySelector('#videoBox');
const videoArea = videoBox.querySelector('.video_list');
const videoBtn = videoArea.querySelector('.video_btn');
const videoNext = videoBtn.querySelector('.next_btn');
const videoPrev = videoBtn.querySelector('.prev_btn');
const videoUl = videoArea.querySelector('ul');
const videoLi = videoUl.querySelectorAll('li');
const videoIndicator = videoBox.querySelector('.video_indicator');
const videoIndicatorUl = videoIndicator.querySelector('ul');
const videoIndicatorLi = videoIndicatorUl.querySelectorAll('li');


let videoLen = videoLi.length;

// let countCheck = 0;
// let afterCheck = countCheck;
// const VIEW_ON = 'on';
// const ACTIVE_ON = 'active';
// let i = 0;
// let j = 0;


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

// 비디오 ....
// 1번이 1첫번째로 오게되면, 5번째는 1번의 왼쪽으로 오고, 
// 다음버튼을 누르게되면, 1번은 2번자리에 오며, 5번째가 1번자리에 오게 해야함.
// 일단 다음 video 가 오게 만들어보자.
// 아마도 스타일을 줘서 만드는것이 편할거라 생각된다.