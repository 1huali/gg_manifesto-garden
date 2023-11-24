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
        console.log(backgrounds[currentBg].src);
        currentBg=0;
      }
      else {
        console.log(backgrounds[currentBg].src);
        currentBg= currentBg+1;
        }
        //implements new bg image
        document.getElementById("bg-img").style.background= "url(`../"+[currentBg].src+"`);"; //??doesnt work
        document.getElementById("body").style.color= backgrounds[currentBg].color;
        document.getElementById("bg-theme").innerHTML=backgrounds[currentBg].theme;
}

}