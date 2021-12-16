(()=>{
const supportHeadBoxCode = "../temp/support_headBox.html";
const footBoxCode = '../temp/footBox.html';
const body = document.querySelector('body');
const wrap = document.querySelector('#wrap');
const supportHeadBox = wrap.querySelector('#support_headBox');
const footBox = wrap.querySelector('#footBox');

// function
function makeScriptFn(urlDataJs){
  const scriptFile = document.createElement('script');
  scriptFile.src = urlDataJs;
  body.append(scriptFile);
}

// header
fetch(supportHeadBoxCode)
.then((response)=>response.text())
.then((data)=>supportHeadBox.innerHTML = data)

// footer
fetch(footBoxCode)
.then((response) =>response.text())
.then((data)=>footBox.innerHTML = data)

})()