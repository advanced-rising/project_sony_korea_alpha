// viewBox.js

const viewBoxDataCode = "../data/mainViewBoxData.json";

fetch(viewBoxDataCode)
  .then((response)=>{
    return response.json();
  })
  .then((response)=>{
    const dataArr = [...response];
    const dataArrLen = dataArr.length;
    const viewBoxH3 = viewBox.querySelector('#viewBox h3');
    const makeViewArea = document.createElement('div');
    makeViewArea.setAttribute('class','view_area');
    const makeViewUl = document.createElement('ul');
    viewBoxH3.after(makeViewArea);
    makeViewArea.append(makeViewUl);
    const viewBoxCode = 
    `<dl>
      <dt>
        <span></span>
        <span></span>
        <span></span>
      </dt>
      <dd><span></span></dd>
    </dl>`
    const makeViewIndicator = document.createElement('div');
    makeViewIndicator.setAttribute('class','view_indicator');
    makeViewArea.after(makeViewIndicator);
    const makeViewIndiUl = document.createElement('ul');
    makeViewIndicator.append(makeViewIndiUl);
    const viewBoxIndicatoCode = `<button type="button"><span></span></button>`

    for(let i=0; i<dataArrLen;i++){
      const makeViewLi = document.createElement('li');
      makeViewLi.setAttribute('class','viewBox_img');
      makeViewLi.innerHTML = viewBoxCode;
      makeViewUl.append(makeViewLi);
      makeViewLi.style.backgroundImage = 'url('+dataArr[i].img+')'

      const makeIndiLi = document.createElement('li');
      makeIndiLi.innerHTML = viewBoxIndicatoCode;
      makeViewIndiUl.append(makeIndiLi);
      const viewIndiLi = makeViewIndiUl.querySelectorAll('li');
      const viewIndiSpan = viewIndiLi[i].querySelector('span');
      viewIndiSpan.innerText = dataArr[i].buttonTxt;
    }
    const makeViewLi = makeViewUl.querySelectorAll('li');
    const makeViewLiArr = [...makeViewLi];
    
    for(let i=0;i<dataArrLen;i++){
      let viewDtSpan = makeViewLiArr[i].querySelectorAll('dt>span');
      viewDtSpan[0].innerText = dataArr[i].title1; 
      viewDtSpan[1].innerText = dataArr[i].title2; 
      viewDtSpan[2].innerText = dataArr[i].title3;

      let viewDdSpan = makeViewLiArr[i].querySelector('dd>span');
      viewDdSpan.innerText = dataArr[i].comment;
    }
  })
  .then(()=>{

const viewBox = document.querySelector('#viewBox');
const viewArea = viewBox.querySelector('.view_area');
const viewUl = viewArea.querySelector('ul');
const viewLi = viewUl.querySelectorAll('.viewBox_img');
const viewIndicator = viewBox.querySelector('.view_indicator');
const viewIndicatorUl = viewIndicator.querySelector('ul');
const viewIndicatorLi = viewIndicatorUl.querySelectorAll('li');
const viewSlide = viewUl.querySelectorAll(".viewBox_img");
const indicatorBtn = viewIndicatorUl.querySelectorAll("li");

let slideLength = viewLi.length;

// let countCheck = 0;
// let afterCheck = countCheck;
// const VIEW_ON = 'on';
// const ACTIVE_ON = 'active';
// let i = 0;
// let j = 0;

// VIEW_ON 을 초기화 . because 메뉴를 클릭하고 난 뒤 선택을 없애야 하니까.
resetViewOnFn = (element) => {
  for(j = 0; j< element.length; j++){
    element[j].classList.remove(VIEW_ON);
  };
}
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
    viewSlide[i].style.display = 'none';
    viewSlide[i].classList.remove("view-fade");
    viewSlide[i].style.zIndex = -1;
  }
  for(i = 0; i < indicatorBtn.length; i++) {
    indicatorBtn[i].classList.remove(ACTIVE_ON);
  }
  viewSlide[n].style.display = 'block';
  viewSlide[n].classList.add('view-fade');
  viewSlide[n].style.zIndex = 10;

  
  indicatorBtn[n].classList.add(ACTIVE_ON);
}

function currentSlide(n) {
  countCheck = n;
  autoSlides(countCheck);
}

viewIndicatorLi.forEach((element,index)=>{
  let indicatorLink = element.querySelector('button');
  indicatorLink.addEventListener('click', (e)=>{
    e.preventDefault();
    countCheck = index;
    currentSlide(countCheck);
  })
})

// window 창이 실행되는 순간 바로 실행하게 만들어라
window.onload = function(){
  autoSlides(countCheck);
  // countCheck는 초기값이 0으로 설정하게 해야한다.
  // 그 후 반복수행으로 계속 수행하게 한다.
  let setTimed = 5000;
  const slideInterval = setInterval(function(){
      countCheck++;
      autoSlides(countCheck);
  }, setTimed);
}

function opacityFn(){
  viewLi[afterCheck].style.opacity = 0;
  setTimeout(()=>{
    viewLi[afterCheck].removeAttribute('style');
    viewLi[afterCheck].classList.remove(ACTIVE_ON);
    viewLi[countCheck].classList.add(ACTIVE_ON);
    afterCheck = countCheck
  },100);
}

})// fetch
