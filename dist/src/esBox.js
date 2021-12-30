const eventBoxDataPath = "../data/eventBoxData.json";
fetch(eventBoxDataPath)
  .then((response) => response.json())
  .then((response) => {
    const dataArr = [...response];
    const dataLen = dataArr.length;
    const eventPart = document.querySelector(".event_part");
    for (let i = 0; i < dataLen; i++) {
      const esBoxCode = `<a href="#">
      <div class="event_img">
      <img src="${dataArr[i].imgUrl}" alt="${dataArr[i].imgName}">
      </div></a>
      <div class="event_txt"><span class="put_in_btn">${dataArr[i].apply}</span>
      <p>${dataArr[i].contentText}</p></div>`;
      const makEsLi = document.createElement("li");
      makEsLi.innerHTML = esBoxCode;
      eventPart.append(makEsLi);
    }
    const selectBtn = document.querySelectorAll(".put_in_btn");
    for (let i = 0; i < selectBtn.length; i++) {
      if (selectBtn[i].innerText === "신청가능") {
        selectBtn[i].classList.add("apply");
      } else {
        selectBtn[i].classList.add("not_apply");
      }
    }
  });

const seminarBoxDataPath = "../data/seminarBoxData.json";
fetch(seminarBoxDataPath)
  .then((response) => response.json())
  .then((response) => {
    const dataArr = [...response];
    const dataLen = dataArr.length;
    const seminarPart = document.querySelector(".seminar_part");
    for (let i = 0; i < dataLen; i++) {
      const esBoxCode = `<a href="#">
    <div class="seminar_img">
    <img src="${dataArr[i].imgUrl}" alt="${dataArr[i].imgName}">
    </div></a>
    <div class="seminar_txt"><span class="put_in_btn">${dataArr[i].apply}</span>
    <p>${dataArr[i].contentText}</p></div>`;
      const makEsLi = document.createElement("li");
      makEsLi.innerHTML = esBoxCode;
      seminarPart.append(makEsLi);
    }
    const selectBtn = document.querySelectorAll(".put_in_btn");
    for (let i = 0; i < selectBtn.length; i++) {
      if (selectBtn[i].innerText === "신청가능") {
        selectBtn[i].classList.add("apply");
      } else {
        selectBtn[i].classList.add("not_apply");
      }
    }
  });
