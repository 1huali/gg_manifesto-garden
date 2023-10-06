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
    axisSidebar.addEventListener("click", function(){
        axisSidebar.style.display = "none"
     });

     

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
    let currentAxis = "";
    let axisArray = [];
    axisArray.push(` Axe1 `);
    axisArray.push(` Axe2 `);
    axisArray.push(` Axe3 `);
    // asciiArray.push(` ♡ `);
    // asciiArray.push(` ♫ `);


let axisMenu= document.getElementById("drpMenu-axe");
    axisMenu.addEventListener('change', function(event){

        let userSelection = axisMenu.value;

        currentAxis = axisMenu[userSelection]
        console.log(currentAxis);
        console.log(userSelection);

    });

    }; //end windown on load