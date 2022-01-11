// import videoPlay from "../main/VideoPlay.js"
{
  let selectIndiUl;
  let selectVideoUl;
  const videoPath = "../data/videoMovieData.json";
  fetch(videoPath)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const dataArr = [...response];
      for (let i = 0; i < dataArr.length; i++) {
        const makeVideoLi = document.createElement("li");
        makeVideoLi.classList.add("video");
        makeVideoLi.classList.add(`video${i}`);
        selectVideoUl = document.querySelector(".video_part");
        selectVideoUl.append(makeVideoLi);
        let videoCode = `<span class="blind">${dataArr[i].videoName}</span>
      <button class="video_play_btn" tabindex="-1">
        <span class="blind">${dataArr[i].playName}</span>
      </button>`;
        makeVideoLi.innerHTML = videoCode;
      }
      let video0 = document.querySelector(".video0");
      let video1 = document.querySelector(".video1");
      let video2 = document.querySelector(".video2");
      let video3 = document.querySelector(".video3");
      let video4 = document.querySelector(".video4");
      video0.style.backgroundImage = `url(${dataArr[0].imgUrl})`;
      video1.style.backgroundImage = `url(${dataArr[1].imgUrl})`;
      video2.style.backgroundImage = `url(${dataArr[2].imgUrl})`;
      video3.style.backgroundImage = `url(${dataArr[3].imgUrl})`;
      video4.style.backgroundImage = `url(${dataArr[4].imgUrl})`;

      for (let i = 0; i < dataArr.length; i++) {
        const makeVideoIndi = document.createElement("li");
        selectIndiUl = document.querySelector(".indi_part");
        selectIndiUl.append(makeVideoIndi);
        const videoIndiCode = `<a href="#">
    <span class="blind">${dataArr[i].indiButton}</span></a>`;
        makeVideoIndi.innerHTML = videoIndiCode;
      }
      return response;
    })
    .then((response) => {
      selectVideoUl = document.querySelector(".video_part");
      const selectVideoLi = selectVideoUl.querySelectorAll("li");
      const selectLiArr = [...selectVideoLi];
      selectLiArr[0].classList.add("active");

      selectIndiUl = document.querySelector(".indi_part");
      const selectIndiLi = selectIndiUl.querySelectorAll("li");
      const selectIndiLiArr = [...selectIndiLi];
      selectIndiLi[0].classList.add("active");

      return response;
    })
    .then((response) => {
      const videoBox = document.querySelector("#videoBox");
      const videoArea = videoBox.querySelector(".video_list");
      const videoBtn = videoArea.querySelector(".video_btn");
      const videoNext = videoBtn.querySelector(".next_btn");
      const videoPrev = videoBtn.querySelector(".prev_btn");
      const videoUl = videoArea.querySelector("ul");
      let videoLi = videoUl.querySelectorAll("li");
      const videoIndicator = videoBox.querySelector(".video_indicator");
      const videoIndicatorUl = videoIndicator.querySelector("ul");
      const videoIndicatorLi = videoIndicatorUl.querySelectorAll("li");
      let videoLiCvt = [...videoLi];
      let videoLen = videoLi.length;
      let permission = true;
      let countCheck = 0;
      let afterCheck = countCheck;
      const VIEW_ON = "on";
      const ACTIVE_ON = "active";
      let i = 0;
      let j = 0;
      const videoData = [...response];
      // 비디오 슬라이드 기능
      const carouselSlide = function (e) {
        e.preventDefault();
        if (permission) {
          permission = false;
          let target = e.target.classList.contains("prev_btn");
          videoLiCvt = [...videoLi];
          let lastVideoLi = videoLiCvt[videoLiCvt.length - 1];
          let firstVideoLi = videoLiCvt[0];
          target ? videoUl.prepend(lastVideoLi) : videoUl.append(firstVideoLi);
          videoLi = videoUl.querySelectorAll("li");
          videoLiCvt.forEach((el, index) => {
            el.querySelector("button").setAttribute("tabindex", -1);
          });
          videoLiCvt[3].querySelector("button").setAttribute("tabindex", 0);
          setTimeout(() => {
            permission = true;
          }, 500);
        }
      };
      videoBtn.addEventListener("click", carouselSlide);
      // 비디오 플레이 버튼 클릭시 유튜브 화면 제공
      const videoPlay = function () {
        videoLiCvt.forEach((el, i) => {
          let vodIframe = `<iframe width="100%" height="100%" src="${videoData[i].videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          el.addEventListener("click", (e) => {
            let target = e.target.classList.contains("video_play_btn");
            if (target) {
              const vodArea = document.createElement("div");
              vodArea.className = "vod_area";
              el.append(vodArea);
              vodArea.innerHTML = vodIframe;
            }
            console.log(i);
            videoLiCvt = [...videoLi];
          });
        });
      };
      videoPlay();
      // 비디오 인디케이터 클릭시 해당 비디오로 이동
      const videoIndiFn = function () {
        for (i = 0; i < videoLen; i++) {
          ((k) => {
            videoIndicatorLi[k].addEventListener("click", (e) => {
              e.preventDefault();
              for (j = 0; j < videoLen; j++) {
                videoIndicatorLi[j].classList.remove(ACTIVE_ON);
                videoLi[j].classList.remove(ACTIVE_ON);
              }
              videoIndicatorLi[k].classList.add(ACTIVE_ON);
              videoLi[k].classList.add(ACTIVE_ON);
            });
          })(i);
        }
      };
      videoIndiFn();
    });
}
