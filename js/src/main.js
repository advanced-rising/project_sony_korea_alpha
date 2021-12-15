const headBox = document.querySelector('#headBox');
const navigation = headBox.querySelector('#navigation');
const gnbBtn = navigation.querySelector('.gnb_btn');
const gnbClose = navigation.querySelector('.gnb_close');

const naviArea = navigation.querySelector('.navi_area');
const fadeElement = document.querySelectorAll('.has-fade');
const gnbUl = naviArea.querySelector('ul');
let gnbLi = gnbUl.children;
let gnbLiArr = Array.prototype.slice.call(gnbLi);
const subArea = naviArea.querySelectorAll('.sub_area');



const viewBox = document.querySelector('#viewBox');
const viewArea = viewBox.querySelector('.view_area');
const viewUl = viewArea.querySelector('ul');
const viewLi = viewUl.querySelectorAll('.viewBox_img');

const viewIndicator = viewBox.querySelector('.view_indicator');
const viewIndicatorUl = viewIndicator.querySelector('ul');
const viewIndicatorLi = viewIndicatorUl.querySelectorAll('li');


let viewSlide = viewUl.querySelectorAll(".viewBox_img");
let indicatorBtn = viewIndicatorUl.querySelectorAll("li");


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

let slideLength = viewLi.length;
let videoLen = videoLi.length;
let countCheck = 0;
let afterCheck = countCheck;
const VIEW_ON = 'on';
const ACTIVE_ON = 'active';


let i;
let j;
let len = gnbLiArr.length;
// * ===================================
// navigation gnbBtn 클릭시 메뉴 오픈
fadeInFn = (element) => {
  element.forEach( (element) => {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  });
}
fadeOutFn = (element) => {
  element.forEach( (element) => {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  });
}

gnbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let isActive = gnbBtn.classList.contains(ACTIVE_ON);

  if(!isActive){
    gnbBtn.classList.add(ACTIVE_ON);
    // naviArea.classList.add(VIEW_ON);
    fadeInFn(fadeElement);
  }else{
    gnbBtn.classList.remove(ACTIVE_ON);
    // naviArea.classList.remove(VIEW_ON);
    resetViewOnFn(subArea);
    fadeOutFn(fadeElement);
  }
});
//  ! 네비게이션 버튼을 누르고 난 뒤 수행하는 함수를 만들어야 한다 .!!
// VIEW_ON 을 초기화 . because 메뉴를 클릭하고 난 뒤 선택을 없애야 하니까.
resetViewOnFn = (element) => {
  for(j = 0; j< element.length; j++){
    element[j].classList.remove(VIEW_ON);
  };
}
// * ===================================


// * ===================================
// on이 되면 메뉴 영역이 움직이면서 돌아오게 하라 !
// 결국엔 add 하는것을 함수로 써서 VIEW_ON이 되면서, 움직이는 효과까지 주게 하라 .

// menu 선택시 subArea 보이게 해주는 역할
for(i = 0; i < subArea.length ; i++){
  (function(k){
    subArea[k].parentNode.querySelector('a').addEventListener('click', function(e){
      e.preventDefault();
      for(j = 0; j< subArea.length; j++){
        subArea[j].classList.remove(VIEW_ON);
      };
      subArea[k].classList.add(VIEW_ON);
    });
  })(i);
};
// 아 .. 왜 ??? 안됨 ?? remove 안됨 ;';;; 아 됨 ㅎㅎ ㅋㅋ
// 변수 선언 안해줌 ㅋㅋ
// subArea의 parentNode 를 잡고, 그 부모요소의 바로 자식인 a tag를 childNode로 잡아서
// childeNode === node_element ... 
// * ===================================


// 광고슬라이드 영역할 준비
// 1. 다음 이미지가 오도록 하기
// 2. 다음 이미지가 올때 fade 효과주기
// 3. indicator 효과 주기

// 1. 일단 조건문으로 . n 번째라면에서 len이 같다면 0으로 만들어라
// 2. 같지 않다면, for문을 통해서 값을 늘려가라 .
// 3. 이 함수를 setTimeInterval을 통해 일정시간동안 함수를 수행하라.


// * ===================================
function autoSlides(n) {
  // let viewLen = viewLi.length;
  
  if ( ( n + 1 ) > slideLength) {
    countCheck = 0;
    n = 0;
  }
  // n이 viewLen 과 같지 않다면, for문을 실행하게 하라.
  for(i = 0; i < viewSlide.length; i++) {
    viewSlide[i].classList.remove(ACTIVE_ON);
  }
  for(i = 0; i < indicatorBtn.length; i++) {
    indicatorBtn[i].classList.remove(ACTIVE_ON);
  }
  viewSlide[n].classList.add(ACTIVE_ON);
  indicatorBtn[n].classList.add(ACTIVE_ON);
}
// onclick 로 하고 있지만... javascript로 바꿀수 있는 방안을 찾고 있음.
function currentSlide(n) {
  countCheck = n;
  autoSlides(countCheck);
}
// * ===================================
viewIndicatorLi.forEach((element,index)=>{
  let indicatorLink = element.querySelector('button');
  indicatorLink.addEventListener('click', (e)=>{
    e.preventDefault();
    countCheck = index;
    currentSlide(countCheck);
  })
})


// * ===================================
// window 창이 실행되는 순간 바로 실행하게 만들어라
window.onload = function(){
  autoSlides(countCheck);
  // countCheck는 초기값이 0으로 설정하게 해야한다.
  // 그 후 반복수행으로 계속 수행하게 한다.
  let setTimed = 3000;
  setInterval(function(){
    countCheck++;
    autoSlides(countCheck);
  }, setTimed);
}
// * ===================================

// has-fade를 주기 위해 . 사용하는 조건문. 
// 1023 이하 적용 . 1024 이후 적용 안함
function hasFadeFn(){
  if(matchMedia("screen and (max-width: 1023px)").matches){
    naviArea.classList.add('has-fade');
  }else if(matchMedia("screen and (min-width: 1024px)").matches){
    naviArea.classList.remove('has-fade');
  }
}
hasFadeFn();


// 비디오 ....
// 1번이 1첫번째로 오게되면, 5번째는 1번의 왼쪽으로 오고, 
// 다음버튼을 누르게되면, 1번은 2번자리에 오며, 5번째가 1번자리에 오게 해야함.
// 일단 다음 video 가 오게 만들어보자.

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