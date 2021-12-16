const viewBoxCode = "../temp/viewBox.html";
const productBoxCode = "../temp/productBox.html";
const magazineBoxCode = "../temp/magazineBox.html";
const videoBoxCode = "../temp/videoBox.html";
const esBoxCode = "../temp/esBox.html";
const supportBoxCode = "../temp/supportBox.html";
const scrollBoxCode = "../temp/scrollBox.html";

const body = document.querySelector('body');
const viewBoxHTML = document.querySelector('#viewBox');
const productBoxHTML = document.querySelector('#productBox');
const magazineBoxHTML = document.querySelector('#magazineBox');
const videoBoxHTML = document.querySelector('#videoBox');
const esBoxHTML = document.querySelector('#esBox');
const scrollBoxHTML = document.querySelector('#scroll_nav');
const supportBoxHTML =document.querySelector('#supportBox');

// function
function makeScriptFn(urlDataJs){
  const scriptFile = document.createElement('script');
  scriptFile.src = urlDataJs;
  body.append(scriptFile);
}
fetch(viewBoxCode)
.then((response)=>response.text())
.then((data)=>viewBoxHTML.innerHTML = data)
.then(()=>makeScriptFn("../dist/src/viewBox.js"))

fetch(productBoxCode)
.then((response)=>response.text())
.then((data)=>productBoxHTML.innerHTML = data)

fetch(magazineBoxCode)
.then((response)=>response.text())
.then((data)=>magazineBoxHTML.innerHTML = data)

fetch(videoBoxCode)
.then((response)=>response.text())
.then((data)=>videoBoxHTML.innerHTML = data)
.then(()=>makeScriptFn("../dist/src/videoBox.js"))

fetch(esBoxCode)
.then((response)=>response.text())
.then((data)=>esBoxHTML.innerHTML = data)

fetch(scrollBoxCode)
.then((response)=>response.text())
.then((data)=>scrollBoxHTML.innerHTML = data);

fetch(supportBoxCode)
.then((response)=>response.text())
.then((data)=>supportBoxHTML.innerHTML = data)





