// 비디오 버튼 클릭시 비디오 iframe 재생하기, 그러나 iframe 이 안뜨네 ??
const videoPlay = function(e){
  e.forEach((el,i)=>{
    let vodIframe = `<iframe width="100%" height="100%" src="${videoData[i].videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    el.addEventListener('click',(e)=>{
      let target = e.target.classList.contains('video_play_btn')
      if(target){
        const vodArea = document.createElement('div');
        vodArea.className = 'vod_area';
        el.append(vodArea)  
        vodArea.innerHTML = vodIframe
      }
    })
    videoLiCvt = [...videoLi];
  })
}
videoPlay(videoLiCvt);