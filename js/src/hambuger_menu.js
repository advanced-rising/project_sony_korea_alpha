let headBox = document.querySelector('#headBox');
let navigation = headBox.querySelector('#navigation');
let gnbBtn = navigation.querySelector('.gnb_btn');
let gnbClose = navigation.querySelector('.gnb_close');

let naviArea = navigation.querySelector('.navi_area');
let gnbUl = naviArea.querySelector('ul');
let gnbLi = gnbUl.children;
let gnbLiArr = Array.prototype.slice.call(gnbLi);
let subArea = naviArea.querySelectorAll('.sub_area');


let VIEW_ON = 'on';
let ACTIVE_ON = 'active';


// navigation gnbBtn 클릭시 메뉴 오픈
gnbBtn.addEventListener('click', function(e){
  e.preventDefault();
  let VIEW_ON = 'on';
  let isActive = naviArea.classList.contains(VIEW_ON);
  if(!isActive){
    naviArea.classList.add(VIEW_ON);
    gnbBtn.classList.add(ACTIVE_ON);
  }else{
    naviArea.classList.remove(VIEW_ON);
    gnbBtn.classList.remove(ACTIVE_ON);
    // gnbBtn = transition
  }
});

// 서브메뉴 목록이 없다면 a를 클릭 , 있다면 서브메뉴를 나타나게 하라 .
let i = 0;
let j = 0;
let len = gnbLiArr.length;
for(i = 0; i < subArea.length ; i++){
  (function(k){
    subArea[k].previousSibling.previousSibling.addEventListener('click', function(e){
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
// 광고슬라이드 영역할 준비