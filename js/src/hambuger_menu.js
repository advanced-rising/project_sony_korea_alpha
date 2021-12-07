var headBox = document.querySelector('#headBox');
var navigation = headBox.querySelector('#navigation');
var gnbBtn = navigation.querySelector('.gnb_btn');
var gnbClose = navigation.querySelector('.gnb_close');

var naviArea = navigation.querySelector('.navi_area');
var gnbUl = naviArea.querySelector('ul');
var gnbLi = gnbUl.children;
var gnbLiArr = Array.prototype.slice.call(gnbLi);
var subArea = naviArea.querySelectorAll('.sub_area');


var VIEW_ON = 'on';
var ACTIVE_ON = 'active';


// navigation gnbBtn 클릭시 메뉴 오픈
gnbBtn.addEventListener('click', function(e){
  e.preventDefault();
  var VIEW_ON = 'on';
  var isActive = naviArea.classList.contains(VIEW_ON);
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
var i = 0;
var j = 0;
var len = gnbLiArr.length;
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

var viewBox = document.querySelector('#viewBox');
var viewArea = viewBox.querySelector('.view_area');
var viewUl = viewArea.querySelector('ul');
var viewLi = viewUl.querySelectorAll('.viewBox_img');
console.log(viewLi);

var viewIndicator = viewBox.querySelector('.view_indicator');
var viewIndicatorUl = viewIndicator.querySelector('ul');
var viewIndicatorLi = viewIndicatorUl.querySelectorAll('li');
console.log(viewIndicatorLi);

var slideLength = viewLi.length;
// 광고슬라이드 영역할 준비