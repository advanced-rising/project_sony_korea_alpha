// const esBoxPath = "../data/esBoxData.json";
// fetch(esBoxPath)

// // fetch(esBoxPath).then((response)=> { return response.json()}).then((response)=>{
// //   const dataArr = [...response]
// //   console.log(dataArr)
// //   const esBoxCode =`<a href="#">
// //     <div class="event_img"><span class="blind"></span></div></a>
// //   <div class="event_txt"><span class="put_in_btn"></span><p></p></div>`
  
// //   const makeLi = document.createElement('li');
// // })


const eventUl = document.querySelector('.event_part');
const eventLi = eventUl.querySelectorAll('li');
const eventArr = [...eventLi]
let eventUlWidth = eventUl.clientWidth;
console.log(eventUlWidth)
let eventLeftData = parseInt(eventUl.style.left)
console.log(eventLeftData)


const seminarUl = document.querySelector('.seminar_part');
const seminarLi = seminarUl.querySelectorAll('li');
const seminarArr = [...seminarLi]


