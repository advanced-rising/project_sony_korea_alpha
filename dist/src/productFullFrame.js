const fullFrameData = "../data/productFullFrameData.json";

fetch(fullFrameData)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const dataArr = [...response];

    const productBox = document.querySelector(".productBox");
    const productBoxUl = productBox.querySelector("ul");
    const productListUl = document.querySelector(".productList>ul");

    for (let i = 0; i < dataArr.length; i++) {
      const makeLi = document.createElement("li");
      makeLi.setAttribute("class", "preview_fullframe");
      const productListCode = `<button type="button"><span class="blind">${dataArr[i].productName}</span></button>`;
      makeLi.style.backgroundImage = `url("${dataArr[i].img}")`;
      makeLi.innerHTML = productListCode;
      productListUl.append(makeLi);
    }

    const productListLi = document.querySelectorAll(".preview_fullframe");

    productListLi.forEach((element, index) => {
      element.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("확인:", index);
        const productImgCode = ` <ul>
    <li class="product_img product_fullframe"><span></span></li>
    <li class="product_txt"><div class="product_title"><span>${dataArr[index].productName}</span></div>
      <ul class="clearfix">
        <li><span class="info_name">용도별</span><div class="info_product"><span>${dataArr[index].usage}</span></div></li>
        <li><span class="info_name">유효화소</span><div class="info_product"><span>${dataArr[index].ablePixel}</span></div></li>
        <li><span class="info_name">화질엔진</span><div class="info_product"><span>${dataArr[index].engine}</span></div></li>
        <li><span class="info_name">화면화소</span><div class="info_product"><span>${dataArr[index].screenPixel}</span></div></li>
        <li><span class="info_name">뷰파인더 방식</span><div class="info_product"><span>${dataArr[index].viewFinder}</span></div></li>
        <li><span class="info_name">확장</span><div class="info_product"><span>${dataArr[index].expand}</span></div></li>
        <li><span class="info_name">품목</span><div class="info_product"><span>${dataArr[index].category}</span></div></li>
        <li><span class="info_name">CMOS</span><div class="info_product"><span>${dataArr[index].cmos}</span></div></li>
        <li><span class="info_name">특징</span><div class="info_product"><span>${dataArr[index].point}</span></div></li>
        <li><span class="info_name">화면크기</span><div class="info_product"><span>${dataArr[index].screenSize}</span></div></li>
        <li><span class="info_name">ISO</span><div class="info_product"><span>${dataArr[index].iso}</span></div></li>
        <li><span class="info_name">초점방식</span><div class="info_product"><span>${dataArr[index].focus}</span></div></li>
      </ul>
      <div class="product_store"><a href="#"><span>해당 제품 보러가기</span></a></div>
    </li>
    </ul>`;
        productBoxUl.remove();
        productBox.innerHTML = productImgCode;
        const productFullFrameImg = document.querySelector(".product_img");
        console.log(productFullFrameImg);
        productFullFrameImg.style.backgroundImage = `url("${dataArr[index].img}")`;
      });
    });
  });
