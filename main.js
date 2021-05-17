var picsName = ["pic/pic1.jpeg","pic/pic2.jpeg"];

var imgElement = document.createElement("img");

var index = Math.floor(Math.random() * picsName.length);

imgElement.setAttribute("src",picsName[index]);

imgElement.style.width = "100%";

var parentDiv = document.getElementById("pic");

parentDiv.appendChild(imgElement);

var logoHTML = document.getElementById("logo");
logoHTML.addEventListener("click",onLogoClick);

function onLogoClick(){
    var bodyHTML = document.getElementsByTagName("body")[0];
    bodyHTML.innerHTML = "";
    
/*var aHTML = document.createElement("a");
    aHTML.setAttribute("target","_self");
    aHTML.setAttribute("href","logoIndex.html");
    bodyHTML.appendChild(aHTML);
    aHTML.click();*/
    
    var names = ["ART","DESIGN","MUSIC"];
    
    for(var i=0;i<2;i++){
        var rowDivHTML = document.createElement("div");
        rowDivHTML.setAttribute("class","row");
        for(var j=0;j<3;j++){
            var imageDivHTML = createImageDiv(names[j]);
            rowDivHTML.appendChild(imageDivHTML);
        }
        bodyHTML.appendChild(rowDivHTML);
    }
    
}

function createImageDiv(name){
    var url = "pic/" + name + ".png";
    
    var imgHTML = document.createElement("img");
    imgHTML.setAttribute("src",url);
    
    var imgDivHTML = document.createElement("div");
    imgDivHTML.appendChild(imgHTML);
    
    var columnDivHTML = document.createElement("div");
    columnDivHTML.setAttribute("class","column");
    columnDivHTML.appendChild(imgDivHTML);
    
    return columnDivHTML;
}