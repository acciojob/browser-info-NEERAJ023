//your JS code here. If required.
let browserName= navigator.appName;
let version=navigator.appVersion;

let div=document.querySelector("#browser-info");
let content=document.createTextNode("You are using " + browserName + " version " + version);
div.appendChild(content);