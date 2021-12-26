export function makeScriptFn(urlDataJs, append){
  const scriptFile = document.createElement('script');
  scriptFile.src = urlDataJs;
  append.append(scriptFile);
}