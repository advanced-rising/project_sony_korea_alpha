{
  const headBox = document.querySelector("#headBox");
  const navigation = headBox.querySelector("#navigation");
  const gnbBtn = navigation.querySelector(".gnb_btn");

  const openBtn = document.querySelector(".search_open_btn");
  const closeBtn = document.querySelector(".search_close_btn");
  const searchModal = document.querySelector(".search_modal");

  const naviArea = navigation.querySelector(".navi_area");
  const gnbUl = naviArea.querySelector("ul");
  const gnbLi = gnbUl.children;
  const gnbLiArr = [...gnbLi];

  const familySelector = document.querySelector(".family_site");
  const familyBtn = familySelector.querySelector("a");
  const subFamily = document.querySelector(".sub_family");

  let countCheck = 0;
  let afterCheck = countCheck;
  const VIEW_ON = "on";
  const ACTIVE_ON = "active";
  let PERMISSION = true;

  let i = 0;
  let j = 0;
  let len = gnbLiArr.length;
  // * ===================================
  // 메뉴 클릭 버튼 함수
  gnbLiArr.forEach((el, index) => {
    el.addEventListener("mouseenter", (e) => {
      const target = e.target;
      target.classList.add(VIEW_ON);
    });
    el.addEventListener("mouseleave", (e) => {
      const target = e.target;
      target.classList.remove(VIEW_ON);
    });
    const targetALink = el.querySelector("a");
    targetALink.addEventListener("focus", (e) => {
      for (let i = 0; i < gnbLiArr.length; i++) {
        if (i !== index) {
          gnbLiArr[i].classList.remove(VIEW_ON);
        } else {
          gnbLiArr[i].classList.add(VIEW_ON);
        }
      }
    });
  });

  // 마우스 클릭버전
  // subArea.forEach((element,i)=>{
  //   const selectParent = element.parentNode;
  //   selectParent.querySelector('a').addEventListener('click',(e)=>{
  //     e.preventDefault();
  //     (subArea[i].style.display === 'block')
  //     ? upSlide(subArea,subMenu,i,50)
  //     : downSlide(subArea,subMenu,i,50)
  //   })
  // })

  // 메뉴 다운 슬라이드 아래로
  function downSlide(parent, element, i, timed) {
    parent[i].style.display = "block";
    setTimeout((timed) => {
      element[i].style.transform = "translateY(0%)";
    }, timed);
  }

  // 메뉴 업 슬라이드 위에로
  function upSlide(parent, element, i, timed) {
    element[i].style.transform = "translateY(-100%)";
    setTimeout((timed) => {
      parent[i].style.display = "none";
    }, timed);
  }

  // 메뉴 이외의 클릭시 메뉴 닫기
  // document.addEventListener('click',(e)=>{
  //   let selectDocument = e.target;
  //   for(i = 0; i < subArea.length ; i++){
  //   if(selectDocument !== subArea[i].parentNode.querySelector('a'))
  //     if(subArea[i].style.display === 'block'){
  //       upSlide(subArea,subMenu,i,50)
  //     }
  //   }
  // })

  // navigation gnbBtn 클릭시 메뉴 오픈
  gnbBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isActive = gnbBtn.classList.contains(ACTIVE_ON);
    if (PERMISSION) {
      PERMISSION = false;
      if (!isActive) {
        gnbBtn.classList.add(ACTIVE_ON);
        naviArea.style.display = "block";
        setTimeout(() => {
          naviArea.style.transform = "translateY(0)";
        }, 10);
      } else {
        gnbBtn.classList.remove(ACTIVE_ON);
        naviArea.style.transform = "translateY(-100%)";
        setTimeout(() => {
          naviArea.style.display = "none";
        }, 300);
      }
      setTimeout(() => {
        PERMISSION = true;
      }, 100);
    }
  });

  // * ===================================

  // * ===================================

  // 반응형시 새로고침을 해야하는 경우를 위한 함수 이벤트
  // 1023 이하 적용 . 1024 이후 적용 안함
  const deviceSizeData = [
    { type: "mobile-v", size: 479 },
    { type: "mobile-h", size: 767 },
    { type: "tablet", size: 1023 },
    { type: "laptop", size: 1279 },
    { type: "pc1280", size: 1439 },
    { type: "pc1440", size: 1919 },
    { type: "pc1920", size: 2559 },
    { type: "pc2560" },
  ];
  const mediaArray = [];
  for (let i = 0; i < deviceSizeData.length; i += 1) {
    let matchCode;
    if (i === 0) {
      matchCode = window.matchMedia(
        `screen and (max-width:${deviceSizeData[i].size}px)`
      );
    } else if (i === deviceSizeData.length - 1) {
      matchCode = window.matchMedia(
        `screen and (min-width:${deviceSizeData[i - 1].size + 1}px)`
      );
    } else {
      matchCode = window.matchMedia(
        `screen and (min-width:${
          deviceSizeData[i - 1].size + 1
        }px) and (max-width:${deviceSizeData[i].size}px)`
      );
    }
    mediaArray.push(matchCode);
  }
  const naviUnb = navigation.querySelector(".unb");
  const naviUnbUl = naviUnb.querySelector("ul");
  const naviMenuBtnCode = `<li class="mob_menu">
  <button type="button" class="gnb_btn">
    <span class="blind">global menu</span>
  </button>
</li>`;
  const mobSize = `screen and (max-width:1023px)`;
  const mobMatches = window.matchMedia(mobSize);

  mobMatches.addEventListener("change", (e) => {
    location.reload(true);
  });

  // unb - search button
  // search 모달창이 작동되었을때 바깥 스크롤을 막는 방법
  openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchModal.style.display = "block";
    closeBtn.focus();
    window.onscroll = () => {
      window.scrollTo(0, 0);
    };
  });
  closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchModal.style.display = "none";
    window.onscroll = () => {
      window.scrollTo();
    };
  });

  // footBox - family button
  familyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const isActive = subFamily.classList.contains(VIEW_ON);
    if (!isActive) {
      subFamily.classList.add(VIEW_ON);
      familyBtn.classList.add(ACTIVE_ON);
    } else {
      subFamily.classList.remove(VIEW_ON);
      familyBtn.classList.remove(ACTIVE_ON);
    }
  });
  // footBox 외 클릭시 subFamily 사라지게 하기
  document.addEventListener("click", (e) => {
    if (e.target !== familyBtn) {
      subFamily.classList.remove(VIEW_ON);
      familyBtn.classList.remove(ACTIVE_ON);
    }
  });
}
