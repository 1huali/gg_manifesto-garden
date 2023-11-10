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
  {"src": "assets/images/black-tiles/black-tile", "num":"35","color":"fuchsia","theme":"theme#"}
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
    // asciiArray.push(` ♡ `);
    // asciiArray.push(` ♫ `);
    let subAxisArray=[];

//object creation:
    let axisArrayObj=[];
    let desc1="hello this is first axis";
    let desc2="hi this is 2nd axis";
    let desc3="this is the description for the third axis";
    let name1="DÉCOLONISATION";
    let name2="ÉCORESPONSABILITÉ"
    let name3="OPEN SOURCE"
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
    }]; //create object w links
    let linkDescription=[
      {descr0:"description lien",
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
    } //create object w descri
    ]


    let sound = document.getElementById("chimeSound");

    let axisIndex=null;

      // Create the Axis object:
      let axisObj = new Axis(map,1,"assets/images/beam.png","✿$",350,200,desc1,name1,linkList[0],sound, "axis1",linkDescription[0]);
      let axisObj2 = new Axis(map,2,"assets/images/beam.png","✿$",1000,600,desc2,name2,linkList[1],sound, "axis2",linkDescription[1]);
      let axisObj3 = new Axis(map,3,"assets/images/beam.png","✿$",100,800,desc3,name3,linkList[2],sound, "axis3",linkDescription[2]);

      axisArrayObj.push(axisObj);
      axisArrayObj.push(axisObj2);
      axisArrayObj.push(axisObj3);
//!! should change sxisArray to axisArrayDropdownMenu
      axisObj.reprint();
      axisObj2.reprint();
      axisObj3.reprint();

      axisObj.generateSeeds(3);
      axisObj2.generateSeeds(6);
      axisObj3.generateSeeds(5);


    //Select menu for axis sidebar menu:
    let axisMenuSelect = document.getElementById("drpMenu-axe")
    let selectedAxis= null;
//TO-DO: SET AND RESET INITIAL AXIS TO ARRAY 0 ALWAYS AT CLOSE
//??not sure axisArrayObj
for (let i=0;i<axisArrayObj.length;i++ ){
  console.log(axisArrayObj[i].selected)
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