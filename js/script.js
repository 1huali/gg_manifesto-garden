/**
Jardin Manifeso Garden
Wawa Li pour Galerie Galerie

*/

"use strict";
window.onload = (event) => {


// PARAMÈTRE pour BOUTONS HTML ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// manifesto button:
document.getElementById("manifesto-button").addEventListener("click", function(){
document.getElementById("manifesto-container").style.display="block"
});
document.getElementById("manifesto-container-close-button").addEventListener("click", function(){
    document.getElementById("manifesto-container").style.display="none"
});
// intro button:
    document.getElementById("intro-container-close-button").addEventListener("click", function(){
        document.getElementById("intro-container").style.display="none"
    });
//zoom buttons:
document.getElementById("zoomIn-button").addEventListener("click", function(){
    document.getElementById("bg-img").style.width= `200vw`;
    document.getElementById("bg-img").style.height= `200vh`;
});
document.getElementById("zoomOut-button").addEventListener("click", function(){
    console.log("zooming Out")
    document.getElementById("bg-img").style.width= `100vw`;
    document.getElementById("bg-img").style.height= `100vh`;
    //?? GET ALL THE POINT ON THE BG IMAGE; HAS TO MOVE WITH THE ZOOM
    });
//theme button:
let backgrounds=[
    {"src": "assets/images/cascade-img.jpeg","color":"white","theme":"default"},
    {"src": "assets/images/cascade2-img.jpeg","color":"fuchsia","theme":"cascade2"}
  ];
  let currentBg=0;
  document.getElementById("theme-button").addEventListener("click", changeBgPicture);
function changeBgPicture(){
    //changes theme array:
    if (currentBg >= backgrounds.length-1) {
        currentBg=0;
      }
      else {
        currentBg= currentBg+1;
        }
        //implements new bg image
        document.getElementById("bg-img").style.background= `url('../${backgrounds[currentBg].src}')`;
        document.getElementById("bg-img").style.width= `200vw`;
        document.getElementById("bg-img").style.height= `200vh`;
        document.getElementById("bg-img").style.backgroundSize= `100%`;
        document.getElementById("bg-img").style.backgroundRepeat= `no-repeat`;

        console.log(`url('../${backgrounds[currentBg].src}')`)
        document.getElementById("body").style.color= backgrounds[currentBg].color;
        document.getElementById("bg-theme").innerHTML=backgrounds[currentBg].theme;
}

//new Axis:
let axisArrayObj=[];
let name1="decolonialism";
let desc1= "hello this is axis1"
let name2="ecoresp";
let desc2= "hello this is axis2"
// let linkDescription=[
//     {descr0:"This document is intended to serve as a resource to white people and parents to deepen our anti-racism work. If you haven’t engaged in anti-racism work in the past, start now. Feel free to circulate this document on social media and with your friends, family, and colleagues.",
//     descr1:"description lien",
//     descr2:"description lienm"},
//     {descr0:"description lien",
//     descr1:"description lien",
//     descr2:"description lien",
//     descr3:"description lien",
//     descr4:"description lien",
//     descr5:"description lien"}];
    let linkList= [
        {lien0:"www.lien1.com",
        lien1:"www.lien2.com",
        lien2:"www.lien3.com"},
        {lien0:"www.lienA.com",
        lien1:"www.lienB.com",
        lien2:"www.lienC.com",
        lien3:"www.lienX.com",
        lien4:"www.lienY.com",
        lien5:"www.lienZ.com"}];
let chimeSound = document.getElementById("chimeSound");

let axisObj = new Axis(1,"✧༺✿༻✧",1007,450,name1,desc1,chimeSound,"axis1",linkList[0]);
let axisObj2 = new Axis(2,"⳾*⑅*❀⑅*❀⑅",100,600,name2,desc2,chimeSound,"axis2",linkList[1]);

console.log(axisArrayObj);

axisArrayObj.push(axisObj);
axisArrayObj.push(axisObj2);

axisObj.print();
axisObj2.print();

axisObj.generateSeeds(3);
axisObj2.generateSeeds(6);


}