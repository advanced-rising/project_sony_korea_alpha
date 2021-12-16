const headBox = document.querySelector('#headBox');
const navigation = headBox.querySelector('#navigation');
const gnbBtn = navigation.querySelector('.gnb_btn');
const gnbClose = navigation.querySelector('.gnb_close');

const naviArea = navigation.querySelector('.navi_area');
const fadeElement = document.querySelectorAll('.has-fade');
const gnbUl = naviArea.querySelector('ul');
const gnbLi = gnbUl.children;
const gnbLiArr = Array.prototype.slice.call(gnbLi);
const subArea = naviArea.querySelectorAll('.sub_area');


let countCheck = 0;
let afterCheck = countCheck;
const VIEW_ON = 'on';
const ACTIVE_ON = 'active';


let i = 0;
let j = 0;
let len = gnbLiArr.length;
// * ===================================
resetOnFn = (element) => {
  for(j = 0; j< element.length; j++){
    element[j].classList.remove(VIEW_ON);
  };
}

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
    resetOnFn(subArea);
    fadeOutFn(fadeElement);
  }
});
//  ! 네비게이션 버튼을 누르고 난 뒤 수행하는 함수를 만들어야 한다 .!!

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

// * ===================================

// has-fade를 주기 위해 . 사용하는 조건문. 
// 1023 이하 적용 . 1024 이후 적용 안함
function hasFadeFn(){
  if(matchMedia("screen and (max-width: 1023px)").matches){
    naviArea.classList.add('has-fade');
    for(i=0;i<subArea.length;i++){
      subArea[i].classList.add('has-fade');
    }
  }else if(matchMedia("screen and (min-width: 1024px)").matches){
    naviArea.classList.remove('has-fade');
    for(i=0;i<subArea.length;i++){
      subArea[i].classList.remove('has-fade');
    }
  }
}
hasFadeFn();





