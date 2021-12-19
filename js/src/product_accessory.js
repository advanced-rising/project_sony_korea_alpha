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

countIndex = 0;

accBodyNextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  countIndex++;
  leftFn(accBodyListUl,accBodyLen,e)
})
const leftFn = (element,index,e)=>{
  if(countIndex >= index){
    e.stopPropagation();
  }else {
    element.style.left = (-100*countIndex) +'%';
  }
}
