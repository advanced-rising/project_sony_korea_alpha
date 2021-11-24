// footBox.js

var familySelector = document.querySelector('.family_site');
var familyBtn = familySelector.querySelector('button');
var subFamily = document.querySelector('.sub_family');
var checkBtnName = 'active';

familyBtn.addEventListener('click',function(event){
  event.preventDefault();

  var isActive = subFamily.classList.contains(checkBtnName);

  if(!isActive){
    subFamily.classList.add(checkBtnName);
  }else{
    subFamily.classList.remove(checkBtnName);
  }
});