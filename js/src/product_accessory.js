const container = document.querySelector('#container');
const accessory = container.querySelector('.accessory');
const accUl = accessory.querySelector('ul');
const accLi = accUl.children;
const accLiArr = [...accLi];

const accBody = accUl.querySelector('.acc_body_area');
const accLens = accUl.querySelector('.acc_lens_area');
const accRxzv = accUl.querySelector('.acc_rxzv_area');
const accCommon = accUl.querySelector('.acc_common_area');

const accBodyBtnArea = accBody.querySelector('.accessoryBtn');
const accLensBtnArea = accLens.querySelector('.accessoryBtn');
const accRxzvBtnArea = accRxzv.querySelector('.accessoryBtn');
const accCommonBtnArea = accCommon.querySelector('.accessoryBtn');

const accBodyNextBtn = accBodyBtnArea.querySelector('.nextBtn');
const accBodyPrevBtn = accBodyBtnArea.querySelector('.prevBtn');
const accLensNextBtn = accLensBtnArea.querySelector('.nextBtn');
const accLensPrevBtn = accLensBtnArea.querySelector('.prevBtn');
const accRxzvNextBtn = accRxzvBtnArea.querySelector('.nextBtn');
const accRxzvPrevBtn = accRxzvBtnArea.querySelector('.prevBtn');
const accCommonNextBtn = accCommonBtnArea.querySelector('.nextBtn');
const accCommonPrevBtn = accCommonBtnArea.querySelector('.prevBtn');

const accBodyList = accBody.querySelector('.accessoryList');
const accLensList = accLens.querySelector('.accessoryList');
const accRxzvList = accRxzv.querySelector('.accessoryList');
const accCommonList = accCommon.querySelector('.accessoryList');

const accBodyListUl = accBodyList.querySelector('ul');
const accLensListUl = accLensList.querySelector('ul');
const accRxzvListUl = accRxzvList.querySelector('ul');
const accCommonListUl = accCommonList.querySelector('ul');

const accBodyLiLen =  accBodyListUl.querySelectorAll('li');
const accLensLiLen =  accLensListUl.querySelectorAll('li');
const accRxzvLiLen =  accRxzvListUl.querySelectorAll('li');
const accCommonLiLen =  accCommonListUl.querySelectorAll('li');

const accBodyIndi = accBody.querySelector('.accessoryIndicator');
const accLensIndi = accLens.querySelector('.accessoryIndicator');
const accRxzvIndi = accRxzv.querySelector('.accessoryIndicator');
const accCommonIndi = accCommon.querySelector('.accessoryIndicator');

const accBodyIndiUl = accBodyIndi.querySelector('ul');
const accLensIndiUl = accLensIndi.querySelector('ul');
const accRxzvIndiUl = accRxzvIndi.querySelector('ul');
const accCommonIndiUl = accCommonIndi.querySelector('ul');

const accBodyIndiLi = accBodyIndiUl.querySelectorAll('li');
const accLensIndiLi = accLensIndiUl.querySelectorAll('li');
const accRxzvIndiLi = accRxzvIndiUl.querySelectorAll('li');
const accCommonIndiLi = accCommonIndiUl.querySelectorAll('li');

const accBodyIndiLiArr = [...accBodyIndiLi];
const accLensIndiLiArr = [...accLensIndiLi];
const accRxzvIndiLiArr = [...accRxzvIndiLi];
const accCommonIndiLiArr = [...accCommonIndiLi];

let accBodyLen = Math.ceil(accBodyLiLen.length / 3);
let accLensLen = Math.ceil(accLensLiLen.length / 3);
let accRxzvLen = Math.ceil(accRxzvLiLen.length / 3);
let accCommonLen = Math.ceil(accCommonLiLen.length / 3);

const accBodyListWidth = getComputedStyle(accBodyList).width;
const accListWidthNum = accBodyListWidth.replace(/[^0-9]/g,'');

accBodyListUl.style.width = (parseInt(accListWidthNum)*accBodyLen)+'px';
accLensListUl.style.width = (parseInt(accListWidthNum)*accLensLen)+'px';
accRxzvListUl.style.width = (parseInt(accListWidthNum)*accRxzvLen)+'px';
accCommonListUl.style.width = (parseInt(accListWidthNum)*accCommonLen)+'px';

let countIndex = 0;
let countBody = 0;
let countLens = 0;
let countRxzv = 0;
let countCommon = 0;
let permission = true;

const bodyNextFn = (element,index,e)=>{
  if(countBody >= index){
    e.stopPropagation();
    countBody = index - 1;
  }else {
    element.style.left = (-100*countBody) +'%';
  }
}

const bodyPrevFn = (element,index,e)=>{
  if(countBody < 0){
    e.stopPropagation();
    countBody = 0 ;
  }else {
    element.style.left = (-100*countBody) +'%';
  }
}

const lensNextFn = (element,index,e)=>{
  if(countLens >= index){
    e.stopPropagation();
    countLens = index - 1;
  }else {
    element.style.left = (-100*countLens) +'%';
  }
}

const lensPrevFn = (element,index,e)=>{
  if(countLens < 0){
    e.stopPropagation();
    countLens = 0 ;
  }else {
    element.style.left = (-100*countLens) +'%';
  }
}

const rxzvNextFn = (element,index,e)=>{
  if(countRxzv >= index){
    e.stopPropagation();
    countRxzv = index - 1;
  }else {
    element.style.left = (-100*countRxzv) +'%';
  }
}

const rxzvPrevFn = (element,index,e)=>{
  if(countRxzv < 0){
    e.stopPropagation();
    countRxzv = 0 ;
  }else {
    element.style.left = (-100*countRxzv) +'%';
  }
}

const commonNextFn = (element,index,e)=>{
  if(countCommon >= index){
    e.stopPropagation();
    countCommon = index - 1;
  }else {
    element.style.left = (-100*countCommon) +'%';
  }
}

const commonPrevFn = (element,index,e)=>{
  if(countCommon < 0){
    e.stopPropagation();
    countCommon = 0 ;
  }else {
    element.style.left = (-100*countCommon) +'%';
  }
}


accBodyNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false
    setTimeout(()=>{
      countBody++;
      bodyNextFn(accBodyListUl,accBodyLen,e)
      permission = true;
    },100)
  }
})

accBodyPrevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    setTimeout(()=>{
      countBody--;
      bodyPrevFn(accBodyListUl,accBodyLen,e)
      permission =true;
    },100)
  }
})




accLensNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false
    setTimeout(()=>{
      countLens++;
      lensNextFn(accLensListUl,accLensLen,e)
      permission = true;
    },100)
  }
})

accLensPrevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    setTimeout(()=>{
      countLens--;
      lensPrevFn(accLensListUl,accLensLen,e)
      permission =true;
    },100)
  }
})


accRxzvNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false
    setTimeout(()=>{
      countRxzv++;
      rxzvNextFn(accRxzvListUl,accRxzvLen,e)
      permission = true;
    },100)
  }
})

accRxzvPrevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    setTimeout(()=>{
      countRxzv--;
      rxzvPrevFn(accRxzvListUl,accRxzvLen,e)
      permission =true;
    },100)
  }
})


accCommonNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false
    setTimeout(()=>{
      countCommon++;
      commonNextFn(accCommonListUl,accCommonLen,e)
      permission = true;
    },100)
  }
})

accCommonPrevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(permission){
    permission = false;
    setTimeout(()=>{
      countCommon--;
      commonPrevFn(accCommonListUl,accCommonLen,e)
      permission =true;
    },100)
  }
})