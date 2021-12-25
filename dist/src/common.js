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
const gnbLiArr = [...gnbLi];
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
subArea.forEach((element,i)=>{
  const selectParent = element.parentNode;
  selectParent.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
    (subArea[i].style.display === 'block')
      ? upSlide(subArea,subMenu,i,50)
      : downSlide(subArea,subMenu,i,50)
    
  })  
})
function downSlide(parent,element,i,timed){
  parent[i].style.display = 'block';
  setTimeout((timed)=>{
    element[i].style.transform = 'translateY(0%)';
    element[i].style.transition = 'transform 100ms linear';
  },timed)
  return downSlide;
}

function upSlide(parent,element,i,timed){
  element[i].style.transform = 'translateY(-100%)';
  element[i].style.transition = 'transform 100ms linear';
  setTimeout((timed)=>{
    parent[i].style.display = 'none';
  },timed)
  return upSlide;
}
// 서브메뉴 display block 다른영역 클릭시 해당 기능 사라지게하기.
// document.addEventListener('click',()=>{
//   for(let i = 0; i < subArea.length ; i++){
//     if(gnbLiArr[i] === true){
//       if(subArea[i].style.display === 'block'){
//         console.log('확인');
//         upSlide(subArea,subMenu,i,500);
//       }
//     }
//   }
// })

document.addEventListener('click',()=>{
  for(i = 0; i < subArea.length ; i++){
      
    if(subArea[i].style.display === 'block'){
      subMenu[i].style.transform = 'translateY(-100%)';
      subMenu[i].style.transition = 'transform 100ms linear';
    }
    if(subMenu[i].style.transform === 'translateY(0)'){
      subArea[i].style.display = 'none'; 
    }
  }
})
// ! 다른영역 클릭시 , display block 에서 none으로 처리가 안되는점 해결하기 .....

resetOnFn = (element) => {
  for(j = 0; j< element.length; j++){
    element[j].classList.remove(VIEW_ON);
  };
}

// navigation gnbBtn 클릭시 메뉴 오픈
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
    }else{
      gnbBtn.classList.remove(ACTIVE_ON);
      naviArea.style.transform = 'translateY(-100%)'
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

// has-fade를 주기 위해 . 사용하는 조건문. 
// 1023 이하 적용 . 1024 이후 적용 안함
const deviceSizeData = [
  { type : 'mobile-v', size : 479 },
  { type : 'mobile-h', size : 767 },
  { type : 'tablet', size : 1023 },
  { type : 'laptop', size : 1279 },
  { type : 'pc1280', size : 1439 },
  { type : 'pc1440', size : 1919 },
  { type : 'pc1920', size : 2559 },
  { type : 'pc2560' }
]
const mediaArray = [];
for(let i=0; i<deviceSizeData.length; i+=1){
  let matchCode;
  if(i === 0){
    matchCode = window.matchMedia(`screen and (max-width:${deviceSizeData[i].size}px)`);
  }else if( i === deviceSizeData.length - 1){
    matchCode = window.matchMedia(`screen and (min-width:${deviceSizeData[i-1].size + 1}px)`);
  }else{
    matchCode = window.matchMedia(`screen and (min-width:${deviceSizeData[i-1].size + 1}px) and (max-width:${deviceSizeData[i].size}px)`);
  }
  mediaArray.push(matchCode);
}
mediaArray.forEach((data,index)=>{
  data.addEventListener('change',(e)=>{
    if(data.matches === true){
      location.reload(true);
    }
  })
})


// unb - search button
// search 모달창이 작동되었을때 바깥 스크롤을 막는 방법
openBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchModal.style.display = 'block';
  closeBtn.focus();
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

