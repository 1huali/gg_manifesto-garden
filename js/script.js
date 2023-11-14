/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// let boxIsDragging = false;
window.onload = (event) => {
  //set dropdown menu at 0 at opening:
  document.getElementById("drpMenu-axe").value = "axis0";
  document.getElementById("drpMenu-axe").dispatchEvent(new Event("change")); //not sure what this does

   //MAP SETTING ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// Set the maximum and minimum zoom levels
    let maxZoomLevel = 5;
    let minZoomLevel = 2;
    if (L.Browser.mobile) {
        maxZoomLevel = 5;
        minZoomLevel = 4;
        }
        
// Define the bounds of the map
const southWest = L.latLng(-90, -180); // Bottom-left corner of the world
const northEast = L.latLng(90, 180);   // Top-right corner of the world
const bounds = L.latLngBounds(southWest, northEast);
let currentTileLayer=null;

let backgrounds=[
  {"src": "assets/images/neurenoir-tiles/neuronoire-tile", "num":"63","color":"greenyellow","theme":"default"},
  {"src": "assets/images/black-tiles/black-tile", "num":"35","color":"fuchsia","theme":"theme#"},
  {"src": "assets/images/ascii-blanc/ascii-tile", "num":"125","color":"red","theme":"white"}
  // {"src": "assets/images/grass-tiles/grass-tile", "num":"163","color":"white","theme":"grass"}

];
let currentBg=0;

  document.getElementById("theme-button").addEventListener("click", changeBgPicture);

    // Initialize the map with minZoom and maxZoom options
let map = L.map("map", {
    minZoom: minZoomLevel,
    maxZoom: maxZoomLevel,
    maxBounds: bounds, // Restrict the map view to the specified bounds
  // }).setView([0, -90], 5); //sabine's settings
   zoomControl: false 
  }).setView([51.505, -0.09], 4); //old settings
    
  new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

  // Define the tile layer with the appropriate URL template and options
  let tileImgArray = [];
  for (let i = 1; i <= backgrounds[currentBg].num; i++) {
    let tileImg = new Image();
      tileImg.src = backgrounds[currentBg].src+i+".png";

    tileImgArray.push(tileImg);
  }

// code for a randomized tile : 
  L.TileLayer.Custom = L.TileLayer.extend({
    getTileUrl: function (coords) {
      let i = Math.floor(Math.random() * tileImgArray.length);
      return tileImgArray[i].src;
    },
    options: {
      tileSize: 150, // Adjust the tile size according to your images
      attribution: "for Galerie Galerie © OpenStreetMap contributors and internet ppl - THANK U",
    },
  });

  L.tileLayer.custom = function () {
    return new L.TileLayer.Custom();
  };

  currentTileLayer= L.tileLayer.custom();
  // Define the tile layer with the appropriate URL template and options
  currentTileLayer.addTo(map);


     //ALL FUNCTIONS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
     //BOXES:
     let axisSidebar = document.getElementById("axis-sidebar");
     let aboutContainer = new DraggableBox(document.getElementById("about-container"));
     //NO need
     //aboutContainer.dragElement(document.getElementById("about-container")); // You need to call the dragElement method


     

     //BUTTON FUNCTION :
    //  document.getElementById("axis-button").addEventListener("click", function() {
        if (axisSidebar.style.display === "block" || axisSidebar.style.display === "") {
            axisSidebar.style.display = "none";
        } else {
            axisSidebar.style.display = "block";
            //sets back axis dropDown menu at default 0
            document.getElementById("drpMenu-axe").value = "axis0";
            document.getElementById("drpMenu-axe").dispatchEvent(new Event("change"));
        }        
    // });

    document.getElementById("close-button-axis").addEventListener("click", function(){
      axisSidebar.style.display = "none";
    });

    document.getElementById("about-button").addEventListener("click", function() {

     // console.log(document.getElementById("about-container"));
        if (document.getElementById("about-container").style.display === "block" 
        || document.getElementById("about-container").style.display === "") {
            document.getElementById("about-container").style.display = "none";
        } else {
            document.getElementById("about-container").style.display = "block";
        }                        
    });

    document.getElementById("close-button").addEventListener("click", function(){
      console.log("clicked-close");
      document.getElementById("about-container").style.display = "none";
    });

    document.getElementById("language-button").addEventListener("click", function() {
        console.log("clicked on eng/fr button")
                
    });
// CHANGE BG THEME FUNCTION : 
  function changeBgPicture() {

if (currentBg >= backgrounds.length-1) {
  currentBg=0;
}
else {
  currentBg= currentBg+1;
  }
  document.getElementById("body").style.color= backgrounds[currentBg].color;
  document.getElementById("bg-theme").innerHTML=backgrounds[currentBg].theme;

  //tile function:
  // Define the tile layer with the appropriate URL template and options
  map.removeLayer(currentTileLayer);

  let tileImgArray = [];
  for (let i =1; i <= backgrounds[currentBg].num; i++) {
    let tileImg = new Image();
      tileImg.src = backgrounds[currentBg].src+i+".png";
    tileImgArray.push(tileImg);
  }
// code for a randomized tile : 
  L.TileLayer.Custom = L.TileLayer.extend({
    getTileUrl: function (coords) {
      let i = Math.floor(Math.random() * tileImgArray.length);
      return tileImgArray[i].src;
    },
    options: {
      tileSize: 150, // Adjust the tile size according to your images
      attribution: "for Galerie Galerie © OpenStreetMap contributors and internet ppl - THANK U",
    },
  });
  L.tileLayer.custom = function () {
    return new L.TileLayer.Custom();
  };

  // Define the tile layer with the appropriate URL template and options
    currentTileLayer = L.tileLayer.custom();
  currentTileLayer.addTo(map);
  axisObj.reprint();
  axisObj2.reprint();
  axisObj3.reprint();


  axisObj.generateSeeds(3);
  axisObj2.generateSeeds(6);
  axisObj3.generateSeeds(5);


}

    //settings for dropdown menu:
    let currentAxis = "axis0";
    let axisArray = [];
    axisArray.push(`axis1`);
    axisArray.push(`axis2`);
    axisArray.push(`axis3`);
    axisArray.push(`axis4`);
    axisArray.push(`axis5`);
    axisArray.push(`axis6`);

    // asciiArray.push(` ♡ `);
    // asciiArray.push(` ♫ `);
    let subAxisArray=[];

//object creation:
    let axisArrayObj=[];
    let desc1="En tant qu'organismes et espaces de dialogue, de création, de diffusion d'idées et de culture vitales, nous avons la responsabilité, en tant qu'organismes artistiques montréalais, de nous lancer dans la lutte. Cette lutte pour une société plus juste où la vie des Noir-e-s et des Autochtones serait florissante et où leurs voix seraient portées et entendues ici ainsi que sur la scène internationale. Il est impératif d’aller au-delà des simples déclarations de solidarité et d’entreprendre des changements organisationnels activement auto-critiques et durablesde se réinvestir, dans un véritable travail structurel pour devenir des organisations antiracistes.  L’organisme s’engage à soutenir les luttes contre la domination coloniale, le sexisme, le racisme et la discrimination avec des gestes concrets : partages de ressources; diffusion des discours liés à ces luttes; mise sur pied de projets structurants pour stimuler la rencontre entre artistes autochtones et allochtones; attention portée à la mise en valeur des langues et traditions autochtones, reconnaissance du territoire. Soutien à la diversité des créateur·trice·s web et à leur agentivité en ligne.";
    let desc2="La gravité des changements climatiques est une réalité indéniable. L’internet est à la fois un outil de partage de connaissance cruciale [tutoriel écologique, solidarité, observation] et un problème [entreposage, pollution, chaleur, dépense énergétique]. Face à cette contradiction Galerie Galerie souhaite s’inscrire dans une approche éco responsable visant à réduire son empreinte écologique de manière globale et à encourager ses pairs du milieu culturel à en faire autant. Contrer un manque d'information généraliser concernant les bonnes pratiques et reflexe dans notre utilisation quoditienne des technologie et du web ainsi qu’un manque d’accès à des solution simple et efficace de dépense énergétique. Soutenir les actions gouvernemental et entrepreneurial écoresponsable contre désuetude technologique, low-tech et high-tech ainsi que les innovations en entreposage de données et rechauffement climatique.";
    let desc3="Soutenir et contribuer à la mise en commun et la distribution accessible du savoir et des outils technologique dans une vision de bien commun. Favoriser et encourager l'apprentissage par les pairs en tant que stratégie et méthode d'apprentissage tout au long de la vie. Logiciel, contenu éducatif et technique, l’internet facilite l’échange rapide de connaissance et Galerie Galerie croit que la mise en commun du savoir et le partage entre pair et une des clés pour un avenirs plus juste et équitable. Favoriser l’intelligence individuelle et collective au dépend du gain capitale pour une meilleur qualité de vie. ";
    let desc4="Devant l'évolution incontrôlable de la technologie web, la complexité croissante de la nature des documents produits et la perte irréversible de certains contenus (Harries 1999, LeFugy 2001, Day 2003, Phillips 2003, Barry 2004, Pennock et Kelly 2006), plusieurs initiatives d'archivage du web sont en cours tant à l'échelle régionale et nationale qu'à l'échelle internationale. Elles sont essentiellement menées par des institutions de mémoire ou résultent d'alliances entre diverses institutions. Adoptant de plus en plus des approches distinctes, ces projets se multiplient et se diversifient, indiquant ainsi d'une part l'urgence de telles interventions et, d'autre part, la difficulté d'établir un cadre de référence unique et commun.";
    let desc5="Tout est fait pour être obsolete (durer 10 ans max)” - où on se situe là-dessus";
    let desc6="Genre droit à la déconnexion, Contre cyber bullying ";
    let linkList= [
      {lien0:"www.lien1.com",
      lien1:"www.lien2.com",
      lien2:"www.lien3.com"},
      {lien0:"www.lienA.com",
      lien1:"www.lienB.com",
      lien2:"www.lienC.com",
      lien3:"www.lienX.com",
      lien4:"www.lienY.com",
      lien5:"www.lienZ.com"},
    {lien0:"lien5.0",
    lien1:"lien5.2",
    lien2:"lien5.3",
    lien3:"lien5.4",
    line4:"lien5.1"
    },
    {
      n0:"seed4name",
      n1:"seed4name",
      n2:"seed4name",
      n3:"seed4name",
      n4:"seed4name",
      n5:"seed4name",
      n6:"seed4name",
      n7:"seed4name"
    },
    {
      n0:"no seed rn",
    },
    {
      name0:"no seed rn",
    }]; //create object w links
    let linkDescription=[
      {descr0:"This document is intended to serve as a resource to white people and parents to deepen our anti-racism work. If you haven’t engaged in anti-racism work in the past, start now. Feel free to circulate this document on social media and with your friends, family, and colleagues.",
      descr1:"description lien",
      descr2:"description lienm"},
      {descr0:"description lien",
      descr1:"description lien",
      descr2:"description lien",
      descr3:"description lien",
      descr4:"description lien",
      descr5:"description lien"},
    {
      descr0:"allo voici descri 5.1",
      descr2:"allo voici descri 5.2",
      descr3:"allo voici descri 5.3",
      descr4:"allo voici descri 5.4",
      descr1:"allo voici descri 5.5"
    },
    {
      descr0:"allo voici descri 5.1",
      descr1:"allo voici descri 5.2",
      descr2:"allo voici descri 5.3",
      descr3:"allo voici descri 5.4",
      descr4:"allo voici descri 5.5",
      descr5:"allo voici descri 5.2",
      descr6:"allo voici descri 5.3",
      descr7:"allo voici descri 5.4"
    },
    {
      descr0:"no seed rn",
    },
    {
      descr0:"no seed rn",
    } //create object w descri
    ]
    let name1="DÉCOLONISATION";
    let name2="ÉCORESPONSABILITÉ"
    let name3="OPEN SOURCE"
    let name4="ARCHIVAGE";
    let name5="VALEUR";
    let name6="HEALTH SECURITY";

    let sound = document.getElementById("chimeSound");
    let axisIndex=null;

      // Create the Axis object:
      let axisObj = new Axis(map,1,"assets/images/beam.png","✿$",1650,450,desc1,name1,linkList[0],sound, "axis1",linkDescription[0]);
      let axisObj2 = new Axis(map,2,"assets/images/beam.png","✿$",10,600,desc2,name2,linkList[1],sound, "axis2",linkDescription[1]);
      let axisObj3 = new Axis(map,3,"assets/images/beam.png","✿$",10,100,desc3,name3,linkList[2],sound, "axis3",linkDescription[2]);
      let axisObj4 = new Axis(map,4,"assets/images/beam.png","✿$",500,1500,desc4,name4,linkList[3],sound, "axis3",linkDescription[3]);
      let axisObj5 = new Axis(map,5,"assets/images/beam.png","✿$",200,1050,desc5,name5,linkList[4],sound, "axis3",linkDescription[4]);
      let axisObj6 = new Axis(map,6,"assets/images/beam.png","✿$",1100,1400,desc6,name6,linkList[5],sound, "axis3",linkDescription[5]);


      axisArrayObj.push(axisObj);
      axisArrayObj.push(axisObj2);
      axisArrayObj.push(axisObj3);
      axisArrayObj.push(axisObj4);
      axisArrayObj.push(axisObj5);
      axisArrayObj.push(axisObj6);
//!! should change sxisArray to axisArrayDropdownMenu
      axisObj.reprint();
      axisObj2.reprint();
      axisObj3.reprint();
      axisObj4.reprint();
      axisObj5.reprint();
      axisObj6.reprint();

      axisObj.generateSeeds(3);
      axisObj2.generateSeeds(6);
      axisObj3.generateSeeds(5);
      axisObj4.generateSeeds(8);
      axisObj5.generateSeeds(1);
      axisObj6.generateSeeds(1);


    //Select menu for axis sidebar menu:
    let axisMenuSelect = document.getElementById("drpMenu-axe")
    let selectedAxis= null;
//TO-DO: SET AND RESET INITIAL AXIS TO ARRAY 0 ALWAYS AT CLOSE
//??not sure axisArrayObj
for (let i=0;i<axisArrayObj.length;i++ ){
  // console.log(axisArrayObj[i].selected)
  axisArrayObj[i].selected===false;
 }
    //Sets and traverses thru JS the list selection in the HTML:
    axisMenuSelect.addEventListener("change", function(){
      //pan user view to the selection:
    //  axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length))-1;
    axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length));
     if (axisIndex >=1){
    panViewToCurrentFlower(axisIndex);
  }
   selectedAxis = axisMenuSelect.value;

        if (axisMenuSelect.value === "axis1"){
          selectedAxis = axisMenuSelect.value;
          axisObj.axisFunction();
        } else if (axisMenuSelect.value === "axis2"){
          selectedAxis = axisMenuSelect.value;
          axisObj2.axisFunction();

        } else if (axisMenuSelect.value === "axis3"){
          axisObj3.axisFunction();

        } else if (axisMenuSelect.value === "axis4"){
          axisObj4.axisFunction();

        }
        else if (axisMenuSelect.value === "axis5"){
          axisObj5.axisFunction();

        } else if (axisMenuSelect.value === "axis6"){
          axisObj6.axisFunction();

        } else if (axisMenuSelect.value === "axis0"){
          document.getElementById("sidebar-content-text").innerHTML="Bienvenu dans le manifeste GG!! choisis une axe à explorer woohoo"
        }

  });


//??? to fix, positions defficients
 function panViewToCurrentFlower(selection){
  // console.log(selection)
  let x = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length)-1);
  console.log(x)


}


//The zoomObj function increases the font size of elements with the classes" based on the current zoom level of a map. 
function zoomObj(){
  //make sure the initial font size on flowerEl css sheet matches the number at the proper zoom level.
  //in this case, axisObj fontSize is 54 for linkObj 27, the initial at window open is 5 out of 6 increment). 
  //in case  of changeuse the log to play with zoom values
  // console.log(zoomOp, zoomOpSeeds);
  let fontSize= 30; 
  let fontSizeSeeds=3;
  let zoomSize= map.getZoom();
  let zoomOp = fontSize + (zoomSize*8);
  let zoomOpSeeds = fontSizeSeeds + (zoomSize*8);
   let x= document.getElementsByClassName("flowerEl");
   let y= document.getElementsByClassName("linkEl");
   for (let i=0; i<x.length; i++){
      x[i].style.fontSize = zoomOp+"px";
      // y[i].style.fontSize = zoomOpSeeds+"px"; //activate when reprint linkEl created 
      //?? DIV HOVER EL TO WORK ON TOO
   }
  }
//function that links the zoom control to the function:
  map.on('moveend', function() {
   for (let i=0;i< axisArrayObj.length; i++){
        // reprint at every zoom : 
        axisArrayObj[i].reprint();
        // axisArrayObj[i].reprint(); //??CHECK TO REPRINT LINK OBJECTS
   }
        zoomObj();
});

    }; //end windown on load
