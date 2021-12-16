(()=>{


const headBoxCode = '../temp/headBox.html';
const footBoxCode = '../temp/footBox.html';

const body = document.querySelector('body');
const wrap = document.querySelector('#wrap');
const headBox = wrap.querySelector('#headBox');
const footBox = wrap.querySelector('#footBox');

// function
function makeScriptFn(urlDataJs){
  const scriptFile = document.createElement('script');
  scriptFile.src = urlDataJs;
  body.append(scriptFile);
}

// header
fetch(headBoxCode)
.then((response)=> response.text())
.then((data)=> headBox.innerHTML = data)
.then(()=>makeScriptFn("../dist/src/common.js"))

// footer
fetch(footBoxCode)
.then((response) =>response.text())
.then((data)=>footBox.innerHTML = data)


})()