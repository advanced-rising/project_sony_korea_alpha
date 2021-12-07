var headBox = document.querySelector('#headBox');
var navigation = headBox.querySelector('#navigation');
var gnbBtn = navigation.querySelector('.gnb_btn');
var gnbClose = navigation.querySelector('.gnb_close');

var gnbArea = navigation.querySelector('.gnb');
var gnbUl = gnbArea.querySelector('ul');
var gnbLi = gnbUl.children;
var gnbLiArr = Array.prototype.slice.call(gnbLi);
var subArea = gnbArea.querySelectorAll('.sub_area');


console.log(subArea);

var VIEW_ON = 'on';
var ACTIVE_ON = 'active';


// navigation gnbBtn 클릭시 메뉴 오픈
gnbBtn.addEventListener('click', function(e){
  e.preventDefault();
  gnbArea.classList.toggle(VIEW_ON);
  gnbBtn.classList.toggle(ACTIVE_ON);
});


// 서브메뉴 목록이 없다면 a를 클릭 , 있다면 서브메뉴를 나타나게 하라 .

for(var i=0; i<gnbLiArr.length; i++){
  gnbLiArr[i].addEventListener('click', function(e){
    for(var j=0; j<gnbLiArr.length; j++){
      subArea.classList.add(VIEW_ON);
    };
    subArea.classList.remove(VIEW_ON);
  });
};

console.log(gnbLiArr.childNodes);