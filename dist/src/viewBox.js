// viewBox.js
{
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
    const viewBoxIndicatoCode =
    `<button type="button">
      <span></span>
    </button>`

    for(let i=0; i<dataArrLen;i++){
      const makeViewLi = document.createElement('li');
      makeViewLi.setAttribute('class','viewBox_img');
      makeViewLi.innerHTML = viewBoxCode;
      makeViewUl.append(makeViewLi);
      makeViewLi.style.backgroundImage = 'url('+dataArr[i].img+')'
    }
    for(let i=0; i<dataArrLen;i++){
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
      const viewDtSpan = makeViewLiArr[i].querySelectorAll('dt>span');
      viewDtSpan[0].innerText = dataArr[i].title1; 
      viewDtSpan[1].innerText = dataArr[i].title2; 
      viewDtSpan[2].innerText = dataArr[i].title3;

      const viewDdSpan = makeViewLiArr[i].querySelector('dd>span');
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


  let countCheck = 0;
  let afterCheck = countCheck;
  const VIEW_ON = 'on';
  const ACTIVE_ON = 'active';
  let i = 0;
  let j = 0;

  let slideLength = viewLi.length;
  // VIEW_ON 을 초기화 . because 메뉴를 클릭하고 난 뒤 선택을 없애야 하니까.
  resetViewOnFn = (element) => {
    for(j = 0; j< element.length; j++){
      element[j].classList.remove(VIEW_ON);
    };
  }
  // 슬라이드 구현 하기 위한 함수
  function autoSlides(n) {
    if ( ( n + 1 ) > slideLength) {
      countCheck = 0;
      n = 0;
    }
    for(i = 0; i < viewSlide.length; i++) {
      viewSlide[i].style.display = 'none';
      viewSlide[i].style.zIndex = -1;
      viewSlide[i].style.opacity = .8;
    }
    for(i = 0; i < indicatorBtn.length; i++) {
      indicatorBtn[i].classList.remove(ACTIVE_ON);
    }
    viewSlide[n].style.display = 'block';
    viewSlide[n].style.zIndex = 10;
    setTimeout(()=>{
      viewSlide[n].style.opacity = 1;
    },100)
    indicatorBtn[n].classList.add(ACTIVE_ON);
  }
  // 인디케이터 슬라이드를 확인하기 위한 함수
  function currentSlide(n) {
    countCheck = n;
    autoSlides(countCheck);
  }
  // 인디케이터 클릭할 경우에 해당 슬라이드로 이동
  viewIndicatorLi.forEach((element,index)=>{
    let indicatorLink = element.querySelector('button');
    indicatorLink.addEventListener('click', (e)=>{
      e.preventDefault();
      countCheck = index;
      currentSlide(countCheck);
    })
  })
  // 오토 슬라이드 이벤트
  const autoSlidesFn = function(){
    autoSlides(countCheck);
    // countCheck는 초기값이 0으로 설정하게 해야한다.
    // 그 후 반복수행으로 계속 수행하게 한다.
    let setTimed = 5000;
    const slideInterval = setInterval(function(){
        countCheck++;
        autoSlides(countCheck);
    }, setTimed);
  }
  autoSlidesFn();

  // ! 미사용
  // function opacityFn(){
    // viewLi[afterCheck].style.opacity = 0;
    // setTimeout(()=>{
      // viewLi[afterCheck].removeAttribute('style');
      // viewLi[afterCheck].classList.remove(ACTIVE_ON);
      // viewLi[countCheck].classList.add(ACTIVE_ON);
      // afterCheck = countCheck
    // },100);
  // }

})// fetch
}
