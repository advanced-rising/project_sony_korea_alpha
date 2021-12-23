const headBox = document.querySelector('#headBox');
const navigation = headBox.querySelector('#navigation');
const gnbBtn = navigation.querySelector('.gnb_btn');
const gnbClose = navigation.querySelector('.gnb_close');

const openBtn = document.querySelector('.search_open_btn');
const closeBtn = document.querySelector('.search_close_btn')
const searchModal = document.querySelector('.search_modal');

const naviArea = navigation.querySelector('.navi_area');
const fadeElement = document.querySelectorAll('.has-fade');
const gnbUl = naviArea.querySelector('ul');
const gnbLi = gnbUl.children;
const gnbLiArr = Array.prototype.slice.call(gnbLi);
const subArea = naviArea.querySelectorAll('.sub_area');
const subMenu = naviArea.querySelectorAll('.sub_menu');

const familySelector = document.querySelector('.family_site');
const familyBtn = familySelector.querySelector('button');
const subFamily = document.querySelector('.sub_family');



let countCheck = 0;
let afterCheck = countCheck;
const VIEW_ON = 'on';
const ACTIVE_ON = 'active';
let PERMISSION = true;

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
  if(PERMISSION){
    PERMISSION = false;
    if(!isActive){
      gnbBtn.classList.add(ACTIVE_ON);
      naviArea.style.display = 'block';
      setTimeout(()=>{
        naviArea.style.transform = 'translateY(0)'
      },10)
      // fadeInFn(fadeElement);
    }else{
      gnbBtn.classList.remove(ACTIVE_ON);
      naviArea.style.transform = 'translateY(-100%)'
      // resetOnFn(subArea);
      // fadeOutFn(fadeElement);
      setTimeout(()=>{
        naviArea.style.display = 'none';
      },300)
    }
    setTimeout(()=>{
      PERMISSION = true;
    },100)
  }
  
});
//  ! 네비게이션 버튼을 누르고 난 뒤 수행하는 함수를 만들어야 한다 .!!

// * ===================================


// * ===================================
// on이 되면 메뉴 영역이 움직이면서 돌아오게 하라 !
// 결국엔 add 하는것을 함수로 써서 VIEW_ON이 되면서, 움직이는 효과까지 주게 하라 .

// menu 선택시 subArea 보이게 해주는 역할
const menuSelectFn = function(){
  for(i = 0; i < subArea.length ; i++){
    (function(k){
      subArea[k].parentNode.querySelector('a').addEventListener('click', function(e){
        e.preventDefault();
        for(j = 0; j< subArea.length; j++){
          upSlide(subMenu,j);
          setTimeout(()=>{
            subArea[j].removeAttribute('style');
            subArea[j].style.display = 'none';
          },10)
        };
        subArea[k].style.display = 'block';
        setTimeout(()=>{
          downSlide(subMenu,k);
        },50);
        return true;
      });
    })(i);
  };
}
menuSelectFn();
// 아 .. 왜 ??? 안됨 ?? remove 안됨 ;';;; 아 됨 ㅎㅎ ㅋㅋ
// 변수 선언 안해줌 ㅋㅋ
// subArea의 parentNode 를 잡고, 그 부모요소의 바로 자식인 a tag를 childNode로 잡아서
// childeNode === node_element ... 


// 특정영역 클릭시 해당 기능 사라지게하기.
document.addEventListener('click',()=>{
  for(i = 0; i < subArea.length ; i++){
    if(subArea[i].style.display === 'block'){
      upSlide(subMenu,i);
      setTimeout(()=>{
        subMenu[i].removeAttribute('style');
      },10)
    }
  }
})

// document.addEventListener('click',(e)=>{
//   e.preventDefault();
//   if(subFamily.classList.contains(ACTIVE_ON) === true){
//     if(subMenu){
//       subFamily.classList.remove(ACTIVE_ON);
//     }
//   }
// })

// * ===================================

// * ===================================

// has-fade를 주기 위해 . 사용하는 조건문. 
// 1023 이하 적용 . 1024 이후 적용 안함

function matchFn(){
  if(matchMedia("screen and (max-width: 1023px)").matches){
    
    // location.reload();
  }else if(matchMedia("screen and (min-width: 1024px)").matches){
    menuSelectFn();
  }
}
matchFn();

// unb - search button
// search 모달창이 작동되었을때 바깥 스크롤을 막는 방법
openBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchModal.style.display = 'block';

  window.onscroll = ()=>{
    window.scrollTo(0, 0);
  };
});
closeBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchModal.style.display = 'none';
  window.onscroll = ()=>{
    window.scrollTo()
  };
});

// footBox - family button
familyBtn.addEventListener('click',function(event){
  event.preventDefault();

  const isActive = subFamily.classList.contains(ACTIVE_ON);

  if(!isActive){
    subFamily.classList.add(ACTIVE_ON);
  }else{
    subFamily.classList.remove(ACTIVE_ON);
  }
});

function downSlide(element,i){
  element[i].style.transform = 'translateY(0%)';
  element[i].style.transition = 'transform 100ms linear';
}

function upSlide(element,i){
  element[i].style.transform = 'translateY(-100%)';
  element[i].style.transition = 'transform 100ms linear';
}