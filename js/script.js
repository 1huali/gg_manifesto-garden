/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

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


     //FUNCTIONS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 

     //BUTTON FUNCTION :

     document.getElementById("axis-button").addEventListener("click", function() {
        let aboutSidebar = document.getElementById("about-sidebar");
        if (aboutSidebar.style.display === "block" || aboutSidebar.style.display === "") {
            aboutSidebar.style.display = "none";
        } else {
            aboutSidebar.style.display = "block";
        }        
    });

    document.getElementById("about-button").addEventListener("click", function() {
        console.log("clicked on about button")
                
    });

    document.getElementById("language-button").addEventListener("click", function() {
        console.log("clicked on eng/fr button")
                
    });

    document.getElementById("theme-button").addEventListener("click", function() {
        console.log("clicked on theme button")
                
    });

    }; //end windown on load