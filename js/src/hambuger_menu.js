let headBox = document.querySelector('#headBox');
let navigation = headBox.querySelector('#navigation');
let gnbBtn = navigation.querySelector('.gnb_btn');
let gnbClose = navigation.querySelector('.gnb_close');

let naviArea = navigation.querySelector('.navi_area');
let gnbUl = naviArea.querySelector('ul');
let gnbLi = gnbUl.children;
let gnbLiArr = Array.prototype.slice.call(gnbLi);
let subArea = naviArea.querySelectorAll('.sub_area');


const VIEW_ON = 'on';
const ACTIVE_ON = 'active';

// * ===================================
// navigation gnbBtn 클릭시 메뉴 오픈
gnbBtn.addEventListener('click', function(e){
  e.preventDefault();
  let isActive = gnbBtn.classList.contains(ACTIVE_ON);
  if(!isActive){
    gnbBtn.classList.add(ACTIVE_ON);
    // naviArea.style.display = "block";
    naviArea.classList.add(VIEW_ON);
  }else{
    gnbBtn.classList.remove(ACTIVE_ON);
    // naviArea.style.display = "none";
    naviArea.classList.remove(VIEW_ON);
  }
});
//  ! 네비게이션 버튼을 누르고 난 뒤 수행하는 함수를 만들어야 한다 .!!
// 


// ! 수정할것 . 슬라이드 효과 
// setInterval(function(data){
//   let style = getComputedStyle(data).transform;
// });

// on이 되면 메뉴 영역이 움직이면서 돌아오게 하라 !
// 결국엔 add 하는것을 함수로 써서 VIEW_ON이 되면서, 움직이는 효과까지 주게 하라 .



// * ===================================
// 서브메뉴 목록이 없다면 a를 클릭 , 있다면 서브메뉴를 나타나게 하라 .
let i = 0;
let j = 0;
let len = gnbLiArr.length;

// * ===================================
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
let viewBox = document.querySelector('#viewBox');
let viewArea = viewBox.querySelector('.view_area');
let viewUl = viewArea.querySelector('ul');
let viewLi = viewUl.querySelectorAll('.viewBox_img');
console.log(viewLi);

let viewIndicator = viewBox.querySelector('.view_indicator');
let viewIndicatorUl = viewIndicator.querySelector('ul');
let viewIndicatorLi = viewIndicatorUl.querySelectorAll('li');
console.log(viewIndicatorLi);

let slideLength = viewLi.length;
console.log(slideLength);
// 광고슬라이드 영역할 준비
// 1. 다음 이미지가 오도록 하기
// 2. 다음 이미지가 올때 fade 효과주기
// 3. indicator 효과 주기




// 1. 일단 조건문으로 . n 번째라면에서 len이 같다면 0으로 만들어라
// 2. 같지 않다면, for문을 통해서 값을 늘려가라 .
// 3. 이 함수를 setTimeInterval을 통해 일정시간동안 함수를 수행하라.

let slideIndex = 0;
// * ===================================
function autoSlides(n) {
  let viewSlide = viewUl.querySelectorAll(".viewBox_img");
  let indicatorBtn = viewIndicatorUl.querySelectorAll("li");
  // let viewLen = viewLi.length;
  
  if ( ( n + 1 ) > slideLength) {
    slideIndex = 0;
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
// * ===================================

// * ===================================
// window 창이 실행되는 순간 바로 실행하게 만들어라
window.onload = function(){
  autoSlides(slideIndex);
  // slideIndex는 초기값이 0으로 설정하게 해야한다.
  // 그 후 반복수행으로 계속 수행하게 한다.
  let setTimed = 3000;
  setInterval(function(){
    slideIndex++;
    autoSlides(slideIndex);
  }, setTimed);
}
// * ===================================


// !!! 수정해야함 !!!!
// indicator click event
// viewIndicatorLi.forEach(function(element,index){
//   let viewIndicatorBtn = element.querySelector('button');
//   console.log(viewIndicatorBtn);
//   viewIndicatorBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     indexCheck = index;
//     viewIndicatorLi.forEach(function(data,index){
//       if(index !== indexCheck){
//         slideIndex = n;
//         showSlides(slideIndex);
//       }else {
//         slideIndex = n;
//         showSlides(slideIndex);
//       }
//     });
//   });
// });

// for(i = 0 ; i < slideLength ; i++){
//   let viewIndicatorBtn = viewIndicatorLi[i].querySelector('button');
//   viewIndicatorBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     function selectSlide(n){
//       slideIndex = n;
//       console.log(slideIndex);
//       autoSlides(slideIndex);
//     }
//   });
// }

