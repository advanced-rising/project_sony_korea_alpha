const overseasDataPath = "../data/overseasData.json";
fetch(overseasDataPath)
  .then((response) => response.json())
  .then((response) => {
    const dataArr = [...response];
    const dataArrLen = dataArr.length;
    const proBox = document.querySelector("#proBox");
    const makeUl = document.createElement("ul");

    const domesticCode = `
    <div class="pro_img">
    </div><div class="pro_txt"><span></span></div><div class="pro_profile">
    <div class="profile_img"><a href="#"><span></span></a></div>
    <div class="img_txt"><a href="#"><p></p></a></div></div>`;
    proBox.append(makeUl);
    for (let i = 0; i < dataArrLen; i++) {
      const makeLi = document.createElement("li");
      makeLi.innerHTML = domesticCode;
      makeUl.append(makeLi);
    }
    function overseasSet(n) {
      let i = n;
      const proLi = makeUl.querySelectorAll("li");
      const proImg = proLi[i].querySelector(".pro_img");
      const proTxt = proLi[i].querySelector(".pro_txt span");
      const proFileImg = proLi[i].querySelector(".profile_img");
      const imgTxt = proLi[i].querySelector(".img_txt p");
      proImg.style.backgroundImage = "url(" + dataArr[i].proImg + ")";
      proTxt.innerText = dataArr[i].proTxt;
      proFileImg.style.backgroundImage = "url(" + dataArr[i].proFileImg + ")";
      imgTxt.innerText = dataArr[i].imgTxt;
    }
    dataArr.forEach(function (d, i) {
      overseasSet(i);
    });
  });
