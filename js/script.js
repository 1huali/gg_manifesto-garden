/**
Jardin Manifeso Garden
Wawa Li pour Galerie Galerie

*/

"use strict";
window.onload = (event) => {

    //retrieve data from db :
//on window load, we are retrieving the data from the db. It goes to retreiveData.php, to the script.js.
    $.ajax({
        type: "POST",
        enctype: 'text/plain',
        url: "../retrieveData.php", //file taht activate the retrieval of the data from the db
        data: "",
        processData: false,//prevents from converting into a query string
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
        // console.log(response);
        //use the JSON .parse function to convert the JSON string into a Javascript object
        let parsedAxisJSON = JSON.parse(response);
        // console.log(parsedJSON);
        retrieveLinks(parsedAxisJSON);
       },
       error:function(){
      console.log("error occurred");
    }
  });

  function retrieveLinks (parsedAxisJSON){
    $.ajax({
        type: "POST",
        enctype: 'text/plain',
        url: "../retrieveLinks.php", //file taht activate the retrieval of the data from the db
        data: "",
        processData: false,//prevents from converting into a query string
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
        // console.log(response);
        //use the JSON .parse function to convert the JSON string into a Javascript object
        let parsedLinksJSON = JSON.parse(response);
        // console.log(parsedJSON);
        initializeWebsite(parsedAxisJSON,parsedLinksJSON);
       },
       error:function(){
      console.log("error occurred");
    }
  });
  }

function initializeWebsite(parsedJSON,parsedLinksJSON){
console.log(parsedJSON, parsedLinksJSON);

document.getElementById("ggLogo").addEventListener("click", function(){
    window.open("https://www.galeriegalerieweb.com");
});


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
    let scaler= 1;
//zoom buttons:
document.getElementById("zoomIn-button").addEventListener("click", function(){
    scaler+= 0.08;
    if (scaler < 4) {
        document.querySelector(
            "#bg-img"
          ).style.transform = `scale(${scaler})`;

        // document.getElementById("bg-img").style.width= `${100*scaler}vw`;
        // document.getElementById("bg-img").style.height= `${100*scaler}vh`;
        // //ZOOM : CHANGE ACCORDING TO ALL ZOOM LEVELS
        // document.querySelectorAll(".linkEl").forEach(element => {
        //     element.style.fontSize= `${20*scaler}px`;
        // });
        // document.querySelectorAll(".flowerEl").forEach(element => {
        //     element.style.fontSize= `${20*scaler}px`;
        // });
        // console.log("moving in",scaler);
    }
});
document.getElementById("zoomOut-button").addEventListener("click", function(){
    scaler -= 0.08;
    if (scaler >= 1) {
        document.querySelector(
            "#bg-img"
          ).style.transform = `scale(${scaler})`;

    // document.getElementById("bg-img").style.width= `${100*scaler}vw`;
    // document.getElementById("bg-img").style.height= `${100*scaler}vh`;
    // //ZOOM : CHANGE ACCORDING TO ALL ZOOM LEVELS
    // document.querySelectorAll(".linkEl").forEach(element => {
    //     element.style.fontSize= `${20*scaler}px`;
    // });
    // document.querySelectorAll(".flowerEl").forEach(element => {
    //     element.style.fontSize= `${20*scaler}px`;
    // });
    // console.log("moving out",scaler);

}
    });
document.getElementById("pdf-button").addEventListener("click", function(){
    window.open("https://docs.google.com/document/d/1SpPcLye8aMRYhOnwYdLKXy3-3o8QxTmRbJG_FlBLaM0/edit");
    });
document.getElementById("sidebar-button").addEventListener("click", function(){
    document.getElementById("sidebar-menu-container").style= "display:block;"
});
document.getElementById("sidebar-container-close-button").addEventListener("click", function(){
    document.getElementById("sidebar-menu-container").style= "display:none;"
});
//theme button:
let backgrounds=[
    {"src": "assets/images/cascade-img.jpeg","color":"white","theme":"default"},
    {"src": "assets/images/cascade2-img.jpeg","color":"fuchsia","theme":"cascade2"},
    {"src": "assets/images/frozen-cascade.jpg","color":"white","theme":"frozenCascade"}
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
        document.getElementById("bg-img").style.width= `${100*scaler}vw`;
        document.getElementById("bg-img").style.height= `${100*scaler}vh`;
        document.getElementById("bg-img").style.backgroundSize= `100%`;
        document.getElementById("bg-img").style.backgroundRepeat= `no-repeat`;

        console.log(`url('../${backgrounds[currentBg].src}')`)
        document.getElementById("body").style.color= backgrounds[currentBg].color;
        document.getElementById("bg-theme").innerHTML=backgrounds[currentBg].theme;
}


//new Axis: ----------
let axisArrayObj=[];
let name1="DÉCOLONISATION";
let desc1= "En tant qu'organismes et espaces de dialogue, de création, de diffusion d'idées et de culture vitales, nous avons la responsabilité, en tant qu'organismes artistiques montréalais, de nous lancer dans la lutte. Cette lutte pour une société plus juste où la vie des Noir-e-s et des Autochtones serait florissante et où leurs voix seraient portées et entendues ici ainsi que sur la scène internationale. Il est impératif d’aller au-delà des simples déclarations de solidarité et d’entreprendre des changements organisationnels activement auto-critiques et durablesde se réinvestir, dans un véritable travail structurel pour devenir des organisations antiracistes.  L’organisme s’engage à soutenir les luttes contre la domination coloniale, le sexisme, le racisme et la discrimination avec des gestes concrets : partages de ressources; diffusion des discours liés à ces luttes; mise sur pied de projets structurants pour stimuler la rencontre entre artistes autochtones et allochtones; attention portée à la mise en valeur des langues et traditions autochtones, reconnaissance du territoire. Soutien à la diversité des créateur·trice·s web et à leur agentivité en ligne."
let name2="ÉCORESPONSABILITÉ";
let desc2= "La gravité des changements climatiques est une réalité indéniable. L’internet est à la fois un outil de partage de connaissance cruciale [tutoriel écologique, solidarité, observation] et un problème [entreposage, pollution, chaleur, dépense énergétique]. Face à cette contradiction Galerie Galerie souhaite s’inscrire dans une approche éco responsable visant à réduire son empreinte écologique de manière globale et à encourager ses pairs du milieu culturel à en faire autant. Contrer un manque d'information généraliser concernant les bonnes pratiques et reflexe dans notre utilisation quoditienne des technologie et du web ainsi qu’un manque d’accès à des solution simple et efficace de dépense énergétique. Soutenir les actions gouvernemental et entrepreneurial écoresponsable contre désuetude technologique, low-tech et high-tech ainsi que les innovations en entreposage de données et rechauffement climatique. "
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
        lien5:"www.lienZ.com",
        lien6:"www.lienZ.com",
        lien7:"www.lienZ.com",
        lien8:"www.lienZ.com",
        lien9:"www.lienZ.com"}];
let chimeSound = document.getElementById("chimeSound");

let axis1LinksArray=[];
let axis2LinksArray=[];


for (let i = 0; i < parsedJSON.length; i++) {
  // console.log(parsedLinksJSON[i].localAxisID);

  // Check if parsedLinksJSON has an element at index i
  if (parsedLinksJSON[i]) {
      // Check if linkList is defined for the current object
      if (parsedLinksJSON[i].linkList !== undefined) {
          console.log(parsedLinksJSON[i].linkList);
      } else {
          console.log("linkList is undefined for the object at index " + i);
      }

      if (parsedLinksJSON[i].localAxisID === "1") {
            //populate link array for deolonialism
          axis1LinksArray.push(parsedLinksJSON[i].linkLink);
      }
  } else if (parsedLinksJSON[i].localAxisID === "2") {
    //populate link array for ecoresponsability
    axis2LinksArray.push(parsedLinksJSON[i].linkLink);
} else {
      console.log("parsedLinksJSON is undefined or does not have an element at index " + i);
  }
}


console.log(axis1LinksArray);
console.log(axis2LinksArray);

//creating objects
let axisObj1 = new Axis(parsedJSON[0].axisID,parsedJSON[0].axisIcon,parsedJSON[0].axisXpos,parsedJSON[0].axisYpos,parsedJSON[0].axisTitle,parsedJSON[0].axisDescription,chimeSound,"axis1",axis1LinksArray); // decolonisation axis object
let axisObj2 = new Axis(parsedJSON[1].axisID,parsedJSON[1].axisIcon,parsedJSON[1].axisXpos,parsedJSON[1].axisYpos,parsedJSON[1].axisTitle,parsedJSON[1].axisDescription,chimeSound,"axis2",axis2LinksArray); // ecoresponsability axis object

axisArrayObj.push(axisObj1);
axisArrayObj.push(axisObj2);
console.log(axisObj1, axisObj2)

axisObj1.print();
axisObj2.print();

//!! CHECK FILTER JS FUNCTION (SEE NOTES)
// axisObj.generateSeeds(3); //change to number of seeds
// axisObj2.generateSeeds(10);

    //Select menu for axis sidebar menu:
    let axisMenuSelect = document.getElementById("drpMenu-axe");
    let selectedAxis= null;
    let axisIndex=null;
    //Sets and traverses thru JS the list selection in the HTML:
    axisMenuSelect.addEventListener("change", function(){
        //pan user view to the selection:
    //    axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length))-1;
      axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length));
       if (axisIndex >=1){
      panViewToCurrentFlower(axisIndex);
    }
     selectedAxis = axisMenuSelect.value;
  
          if (axisMenuSelect.value === "axis1"){
            selectedAxis = axisMenuSelect.value;
            axisObj.axisSidebarDisplay();
          } else if (axisMenuSelect.value === "axis2"){
            selectedAxis = axisMenuSelect.value;
            axisObj2.axisSidebarDisplay();
  
        //   } else if (axisMenuSelect.value === "axis3"){
        //     axisObj3.axisSidebarDisplay();
  
        //   } else if (axisMenuSelect.value === "axis4"){
        //     axisObj4.axisSidebarDisplay();
  
        //   }
        //   else if (axisMenuSelect.value === "axis5"){
        //     axisObj5.axisSidebarDisplay();
  
        //   } else if (axisMenuSelect.value === "axis6"){
        //     axisObj6.axisSidebarDisplay();
  
          } else if (axisMenuSelect.value === "axis0"){
            document.getElementById("axisContent-sidebar").innerHTML="Voici le manifeste GG!! choisis une axe à explorer woohoo"
          }
  
    });

    function panViewToCurrentFlower(selection){
        // console.log(selection)
        let x = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length)-1);
        console.log(x)
      }

}
}