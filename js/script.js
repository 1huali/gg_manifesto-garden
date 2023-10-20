/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let boxIsDragging = false;

window.onload = (event) => {

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
  for (let i = 1; i <= 63; i++) {
    let tileImg = new Image();
    // tileImg.src = `assets/images/black-tiles/black-tile${i}.png`;
        tileImg.src = `assets/images/neurenoir-tiles/neuronoire-tile${i}.png`;

    tileImgArray.push(tileImg);
  }

//code for a randomized tile : 
  L.TileLayer.Custom = L.TileLayer.extend({
    getTileUrl: function (coords) {
      let i = Math.floor(Math.random() * tileImgArray.length);
      return tileImgArray[i].src;
    },
    options: {
      tileSize: 150, // Adjust the tile size according to your images
      attribution: "Wawa Li for Galerie Galerie © OpenStreetMap contributors and internet ppl - THANK U",
    },
  });

  L.tileLayer.custom = function () {
    return new L.TileLayer.Custom();
  };


  // Define the tile layer with the appropriate URL template and options
  L.tileLayer.custom().addTo(map);


     //ALL FUNCTIONS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
     //BOXES:
     let axisSidebar = document.getElementById("axis-sidebar");
     let aboutContainer = new DraggableBox(document.getElementById("about-container"));
     aboutContainer.dragElement(document.getElementById("about-container")); // You need to call the dragElement method
    //click on axisSidebar window to close it
    //??PUT CLOSE BUTTON
    // axisSidebar.addEventListener("click", function(){
    //     axisSidebar.style.display = "none"
    //  });

     

     //BUTTON FUNCTION :
     document.getElementById("axis-button").addEventListener("click", function() {
        if (axisSidebar.style.display === "block" || axisSidebar.style.display === "") {
            axisSidebar.style.display = "none";
        } else {
            axisSidebar.style.display = "block";
            document.getElementById("drpMenu-axe").value = "axis0";
            document.getElementById("drpMenu-axe").dispatchEvent(new Event("change"));
            //!! cahnge description too

        }        
    });

    document.getElementById("about-button").addEventListener("click", function() {
        if (document.getElementById("about-container").style.display === "block" || document.getElementById("about-container").style.display === "") {
            document.getElementById("about-container").style.display = "none";
        } else {
            document.getElementById("about-container").style.display = "block";
        }                        
    });

    document.getElementById("language-button").addEventListener("click", function() {
        console.log("clicked on eng/fr button")
                
    });

let backgrounds=["theme1","theme2"];
let currentBg=0;
// backgrounds[0]=`assets/images/black-tiles/black-tile${i}.png`;
// backgrounds[1]=`assets/images/neurenoir-tiles/neuronoire-tile${i}.png`;
console.log(backgrounds);

  document.getElementById("theme-button").addEventListener("click", changeBgPicture);
  function changeBgPicture() {
      console.log(currentBg);

if (currentBg >= backgrounds.length-1) {
  currentBg=0;
//   room.src = rooms[currentRoom]
}
else {
  currentBg= currentBg+1;
//     room.src = rooms[currentRoom]
  }
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
    console.log(subAxisArray);

//object creation:
    let axisObjArray=[];
    let desc1="hello this is first axis";
    let desc2="hi this is snd axis"
    let name1="name1";
    let name2="name2"
    let linkList= ["link1","link2","link3"];
    let sound = document.getElementById("chimeSound");

    let axisIndex=null;

      // Create the Axis object:
      let axisObj = new Axis(map,1,"assets/images/beam.png","✿$",350,200,desc1,name1,linkList[0],sound, "axis1");
      let axisObj2 = new Axis(map,2,"assets/images/beam.png","✿$",600,600,desc2,name2,linkList[1],sound, "axis2");

      axisArray.push(axisObj);
      axisArray.push(axisObj2);

      axisObj.reprint();
      axisObj2.reprint();

      axisObj.generateSeeds(3);
      axisObj2.generateSeeds(6);


    //Select menu for axis sidebar menu:
    let axisMenuSelect = document.getElementById("drpMenu-axe")
    let selectedAxis= null;
//TO-DO: SET AND RESET INITIAL AXIS TO ARRAY 0 ALWAYS AT CLOSE

for (let i=0;i>axisArray.length;i++ ){
  console.log(axisArray[i].selected)
  axisArray[i].selected===false;
 }
    //Sets and traverses thru JS the list selection in the HTML:
    axisMenuSelect.addEventListener("change", function(){
      //pan user view to the selection:
     axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length))-1;

     if (axisIndex >=0){
    panViewToCurrentFlower(axisIndex);
  }

   selectedAxis = axisMenuSelect.value;

   console.log( selectedAxis);

        if (axisMenuSelect.value === "axis1"){
          selectedAxis = axisMenuSelect.value;
          axisObj.axisFunction();
        } else if (axisMenuSelect.value === "axis2"){
          selectedAxis = axisMenuSelect.value;
          axisObj2.axisFunction();

        } else if (axisMenuSelect.value === "axis3"){
          selectedAxis = axisMenuSelect.value;

        } else if (axisMenuSelect.value === "axis0"){
          selectedAxis = axisMenuSelect.value;
        }

  });


//???
 function panViewToCurrentFlower(selection){
  console.log(selection)
   map.panTo(axisArray[selection].pointlatlng);
}



//The zoomObj function increases the font size of elements with the class "thoughtEl" based on the current zoom level of a map. 
//The savedListButton event listener triggers the appendToSaveList function when the button is clicked, which appends saved thoughts to the modal.
function zoomObj(){
  let fontSize= 30;
  let zoomSize= map.getZoom();
  let zoomOp = fontSize + (zoomSize*5);
   let x= document.getElementsByClassName("flowerEl");
   for (let i=0; i<x.length; i++){
      x[i].style.fontSize = zoomOp+"px";
   }
  }

  map.on('moveend', function() {

   // for (let i=0;i< axisArray.length; i++){
        //reprint at every zoom : 
        //axisArray[i].reprint();
   // }
        zoomObj();
});

    }; //end windown on load