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
  for (let i = 1; i <= 35; i++) {
    let tileImg = new Image();
    tileImg.src = `assets/images/black-tiles/black-tile${i}.png`;
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

    document.getElementById("theme-button").addEventListener("click", function() {
        console.log("clicked on theme button")
                
    });
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

      // Create the Axis object:
      let axisObj = new Axis(map,1,"assets/images/beam.png","✿$",350,200,desc1,name1,linkList[0]);
      let axisObj2 = new Axis(map,2,"assets/images/beam.png","✿$",600,600,desc2,name2,linkList[1]);

      axisArray.push(axisObj);
      axisArray.push(axisObj2);

      // console.log(axisObj);
      axisObj.reprint();
      axisObj2.reprint();

      axisObj.generateSeeds(3);
      axisObj2.generateSeeds(6);

      axisObj.axisFunction(desc1);
      axisObj2.axisFunction(desc2);



let axisMenu= document.getElementById("drpMenu-axe");
    axisMenu.addEventListener('change', function(event){

        let userSelection = axisMenu.value;
        //menu associated to the array:
        currentAxis = axisArray[userSelection]
        console.log(currentAxis);
        console.log(userSelection);

    });

    }; //end windown on load