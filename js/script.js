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


     //ALL FUNCTIONS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
     //BOXES:
     let axisSidebar = document.getElementById("axis-sidebar");
     let aboutContainer = new DraggableBox(document.getElementById("about-container"));
     aboutContainer.dragElement(document.getElementById("about-container")); // You need to call the dragElement method
    //  let aboutContainer = document.getElementById("about-container");
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

//object creation:
    let axisObjArray=[];
    let desc1="hello";
    let name1="name1";
    let link1="link1";

      // Create the Axis object:
      let axisObj = new Axis(map,1,"assets/images/beam.png","✿$",1500,2800,desc1,name1,link1, "this the first axis test grl");

      axisArray.push(axisObj);
      console.log(axisObj);

      axisObj.reprint();

let axisMenu= document.getElementById("drpMenu-axe");
    axisMenu.addEventListener('change', function(event){

        let userSelection = axisMenu.value;

        //menu associated to the array:
        currentAxis = axisArray[userSelection]
        console.log(currentAxis);
        console.log(userSelection);

    });

    }; //end windown on load