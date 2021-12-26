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