var picsName = ["pic1.png", "pic2.jpeg"];

var imgElement = document.createElement("img");

var index = Math.floor(Math.random() * picsName.length);

imgElement.setAttribute("src", picsName[0]);

imgElement.style.width = "100%";

var parentDiv = document.getElementById("pic");

parentDiv.appendChild(imgElement);

var logoHTml = document.getElementById("logo");
logoHTml.addEventListener("click",onLogoClick);

function onLogoClick(){
    var bodyHTML = document.getElementsByTagName("body")[0];
    bodyHTML.innerHTML = "";
    
var aHTML = document.createElement("a");
    aHTML.setAttribute("target","_self");
    aHTML.setAttribute("herf","logoIndex.html");
    bodyHTML.appendChild(aHTML);
    aHTML.click();
    
    
}