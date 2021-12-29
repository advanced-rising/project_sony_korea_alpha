const esBoxDataCode = "../data/esBoxData.json";
fetch(esBoxDataCode)
.then((response)=> response.json())
.then((response)=>{
  const dataArr = [...response];
  const esBoxCode = `<a href="#">
    <div class="event_img"><span class="blind"></span></div></a>
    <div class="event_txt"><span class="put_in_btn"></span><p></p></div>`
  console.log(response)
})
// fetch(esBoxPath).then((response)=> { return response.json()}).then((response)=>{
//   const dataArr = [...response]
//   console.log(dataArr)
//   const esBoxCode =`<a href="#">
//     <div class="event_img"><span class="blind"></span></div></a>
//   <div class="event_txt"><span class="put_in_btn"></span><p></p></div>`
  
//   const makeLi = document.createElement('li');
// })

