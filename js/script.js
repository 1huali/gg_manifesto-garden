/**
Jardin Manifeso Garden
Wawa Li pour Galerie Galerie

*/

"use strict";
window.onload = async (event) => {
console.log(window.innerWidth);
document.getElementById("theme-dropdown").value = "theme0";
document.getElementById("seed-dropdown").value = "seed0";
//   // Function to log mouse coordinates
// function logMousePosition(event) {
//   console.log("Mouse X: " + event.clientX + ", Mouse Y: " + event.clientY);
// }
// // Add event listener to the document
// document.addEventListener("mousedown", logMousePosition);

  // Update title class for mobile view
  function updateTitleForMobile() {
    let element = document.getElementById("main-title-container");
    let buttonElements = document.getElementById("buttons-container");
    let buttons = buttonElements.querySelectorAll(".buttons"); // Select by class
  
    console.log(buttons); // This should now log your button elements
  
    if (window.innerWidth <= 768) {
      element.classList.remove("text-xxl");
      buttonElements.classList.remove("text-md");
  
      // Loop through each button and remove "text-md" class
      buttons.forEach(function(button) {
        button.classList.remove("text-md");
      });
  
    } else {
      buttons.forEach(function(button) {
        button.classList.add("text-md");
      });
      element.classList.add("text-xxl"); // Reset for desktop view
    }
  }

  // Run once on load
  updateTitleForMobile();

  // Run on window resize
  window.addEventListener('resize', updateTitleForMobile);

// PARAMÈTRES pour DATABASE ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 

let response = await fetch("index.php?action=load")
let parsedAxisJSON   = await response.json();
// console.log(parsedAxisJSON);
retrieveLinks(parsedAxisJSON);

  function retrieveLinks (parsedAxisJSON){
    $.ajax({
        type: "POST",
        enctype: 'text/plain',
        url: "../retrieveLinksNew.php", //file taht activate the retrieval of the data from the db
        data: "",
        processData: false,//prevents from converting into a query string
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (response) {
     //  console.log(response);
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
// console.log(parsedJSON, parsedLinksJSON);

document.getElementById("logo").addEventListener("click", function(){
    window.open("https://www.galeriegalerieweb.com");
});

let axisArrayObj=[];
let chimeSound = document.getElementById("chimeSound");

// PARAMÈTRES pour BOUTONS HTML ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// click on "index" button:
document.getElementById("index-button").addEventListener("click", function(){
document.getElementById("index-container").style.display="block"
document.getElementById("title-bar-index-container").style.display="flex";
});
document.getElementById("index-container-close-button").addEventListener("click", function(){
document.getElementById("index-container").style.display="none"
document.getElementById("title-bar-index-container").style.display="none";
});

    //click on "manifesto" button:
    document
      .getElementById("manifesto-button")
      .addEventListener("click", function () {
        document.getElementById("manifesto-container").style.display = "block";
        document.getElementById("title-bar-manifesto-container").style.display =
          "flex";
      });
    document
      .getElementById("manifesto-container-close-button")
      .addEventListener("click", function () {
        document.getElementById("manifesto-container").style.display = "none";
        document.getElementById("title-bar-manifesto-container").style.display =
          "none";
      });

//click on "contribute" button:
document
.getElementById("contribute-button")
.addEventListener("click", function () {
  console.log("clicked on contribute button");
});

// intro button:
    //when user click on enter, all buttons appears:
    document
      .getElementById("intro-container-close-button")
      .addEventListener("click", function () {

        document.getElementById("intro-container").style.display = "none";
        document.getElementById("intro-garden-right").style.display = "none";
        document.getElementById("intro-garden-left").style.display = "none";
        document.getElementById("map").style.display = "block";
        document.getElementsByTagName("header")[0].style.display = "block";
        document.getElementById("intro-container-close-button").style.display= "none";
        console.log(parsedLinksJSON[1]);
// NEW AXIS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// parsedJSON contains an axis object where the axisId is referenced in the links..
for (let i = 0; i < parsedJSON.length; i++) {
  // console.log(parsedJSON[i].axisID);
 
          // make your axis objects...
          //get the array of linkObjects that have the SAME refID as the current axisObject
          // let filteredArrayOfCurrentAxisObject = parsedLinksJSON.filter(function(el){return(parseInt(el.localAxisID) ===parsedJSON[i].axisID)});
          let filteredArrayOfCurrentAxisObject = parsedLinksJSON.filter(
            function (el) {
              return (
                parseInt(el.localAxisID) === parseInt(parsedJSON[i].axisID)
              );
            }
          );
          console.log(filteredArrayOfCurrentAxisObject);
          console.log(parsedLinksJSON);
          let axisObj = new Axis(
            parsedJSON[i].axisID,
            parsedJSON[i].axisIcon,
            parsedJSON[i].axisXpos,
            parsedJSON[i].axisYpos,
            parsedJSON[i].axisTitle,
            parsedJSON[i].axisDescription,
            parsedJSON[i].axeDescription,
            chimeSound,
            `axis${i + 1}`,
            filteredArrayOfCurrentAxisObject,
            parsedJSON[i].axisImage
          );
          axisArrayObj.push(axisObj);
        }

  // GÉNÉRATION DE SEEDS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
  for(let i=0; i<axisArrayObj.length;i++){
    axisArrayObj[i].generateSeeds(axisArrayObj[i].linkList.length);
  } //end of for loop
  
  //** ENLEVER */
    // document.getElementsByTagName("footer")[0].style.display="flex";
    });

    console.log(window.innerWidth);

let language= "eng";
    //translation button:
    document
      .getElementById("language-button")
      .addEventListener("click", function () {
        if (language === "eng") {
          language = "fr";
          document.getElementById("language-button").value = "Français";
          document.getElementById("contribute-button").value = "Contribute";
          document.getElementById("update").innerHTML = "Last Update";
          document.getElementById("footnote-title").innerHTML = "Footnotes";
          document.getElementById("scrolling-message").innerHTML =
            "Stroll through the garden and fall down the rabbit hole! Hophop! 🐇";
          //change content to French & disabling English content to french
          document.getElementById("manifesto-content-eng").style.display =
            "none";
          document.getElementById("manifesto-content-fr").style.display =
            "block";
        } else {
          language = "eng";
          //CHANGE BUTTONS VALUES to english
          document.getElementById("language-button").value = "English";
          // document.getElementById("share-button").value="Partager";
          // document.getElementById("manifesto-button").value="Manifeste";
          document.getElementById("contribute-button").value = "Contribuer";
          document.getElementById("update").innerHTML = "Mise à jour";
          document.getElementById("footnote-title").innerHTML =
            "Notes en bas de page";
          document.getElementById("scrolling-message").innerHTML =
            "Flânez dans le jardin et SIOUPLAIT, tombez dans le trou du lapin! 🐇";
          //change content to english & disabling french content to french
          document.getElementById("manifesto-content-fr").style.display =
            "none";
          document.getElementById("manifesto-content-eng").style.display =
            "block";
        }

        for (let j = 0; j < axisArrayObj.length; j++) {
          //axis values to english :
          if (language === "eng") {
            axisArrayObj[j].description = axisArrayObj[j].axeDescription;
            axisArrayObj[j].switchLangOfLinksToFr();
          } else {
            axisArrayObj[j].description = axisArrayObj[j].axisDescription;
            axisArrayObj[j].switchLangOfLinksToEng();
          }
        }

        //index in English **TO-DO

  //manifesto in English **TO-DO
});

// PARAMÈTRES pour BACKGROUND/THÈME ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
//     //Select menu for axis sidebar menu:
    let backgroundMenuSelect = document.getElementById("theme-dropdown");
    let seedSymbolMenuSelect = document.getElementById("seed-dropdown");
    let selectedBackground= null;
    let selectedSeedSymbol=null;
    let backgroundIndex=null;
    let seedSymbolIndex=null;

    //seed symbol dropdown
    let seedSymbols=[
      {
        symbol:"✿",
        menuOpt: "seed0",
      },
      {
        symbol:"★",
        menuOpt: "seed1",
      },
      {
        symbol:"❀",
        menuOpt: "seed2",
      },
      {
        symbol:"♪",
        menuOpt: "seed3",
      },
      {
        symbol:"♥",
        menuOpt: "seed4",
      },
    ];
        //Sets and traverses thru JS the seed symbol list selection in the HTML:
        seedSymbolMenuSelect.addEventListener("change", function () {
          seedSymbolIndex = parseInt(
            seedSymbolMenuSelect.value.substring(
              4,
              seedSymbolMenuSelect.value.length
            )
          );
    
       let selectedSeedSymbol = seedSymbols[seedSymbolIndex]
       console.log(selectedSeedSymbol)

      //CHANGE THE ASCII SYMBOL:
      for (let i = 0; i < axisArrayObj.length; i++) {
        // console.log(axisArrayObj[i]);
        axisArrayObj[i].axisAscii = selectedSeedSymbol.symbol;

        // update axis display:
        let axisEl = document.getElementById(
          "axisElIcon" + axisArrayObj[i].indexNum
        );
        if (axisEl) {
          axisEl.innerHTML = axisArrayObj[i].axisAscii;
        }

        // update seeds/links:
        for (let j = 0; j < axisArrayObj[i].subAxisArray.length; j++) {
          axisArrayObj[i].subAxisArray[j].icon = selectedSeedSymbol.symbol;

          let linkEl = document.getElementById(
            "linkEl" + axisArrayObj[i].subAxisArray[j].axisNum
          );
          // console.log(linkEl);
          if (linkEl) {
            linkEl.innerHTML = axisArrayObj[i].subAxisArray[j].icon;
          }
        }
      }

});
    
    //theme dropdown: (from the theme button section below)
    let backgrounds = [
      {
        src: "gg_manifesto-garden/assets/images/bgPix/haloBlack.jpeg",//unused
        //font color variables:
        color: "#778077", //font color
        linkColor: "#fafcfd", // active link font color
        mainTitleColor: "#886cf6", // "Jardin Manifesto Garden" font color, active link font color
        //hoverColor:?? // on hover change color, used on: footnote, bibliography link and axis title
        theme: "theme0", //related to index.php dropdown option value
        class: "themeHoverClass", //changer de nom pour qqch comme bttn-hover-class
        background: "radial-gradient(circle,rgba(255,255,255,0.1)0%,rgba(54, 90, 240, 0.4) 5%, rgba(178, 160, 230, 0.7) 15%,rgba(255,255,255,1)80%);", //main background radial gradient
        //box variables:
        titleBar: "linear-gradient(90deg,#778077,#feffff);", //box title bar color 
        closeBtnClass: "blabalbaba", //box title close button color,
        windowColor: "#FFFFFF",
        //boxBgColor:?? //box background color
        //boxOutlineColor:?? // box outline color
      },
      {
        src: "gg_manifesto-garden/assets/images/bgPix/halo.png",
        color: "#778077",
        linkColor: "#FFFFFF", // active link font color in seedbox
        mainTitleColor: "#778077", // "Jardin Manifesto Garden" font color, active link font color
        theme: "theme1",
        class: "themeHoverClass", //hover colors
        background: "radial-gradient(circle,rgba(255, 255, 255, 1) 11%, rgba(245, 185, 248, 1) 40%);", //pink to white
        titleBar: "linear-gradient(90deg,#778077,#feffff);",
        closeBtnClass: "blabalbaba",
        windowColor: "#f5b9f8",
      },
      {
        src: "gg_manifesto-garden/assets/images/bgPix/grass.jpg",
        color: "#778077",
        linkColor: "#f5b9f8", // active link font color in seedbox
        mainTitleColor: "#778077", // "Jardin Manifesto Garden" font color, active link font color
        theme: "theme2",
        class: "themeHoverClass",
        background: "radial-gradient(circle,rgba(255, 255, 255, 0.74) 0%, rgba(119, 128, 119, 1) 11%, rgba(0, 0, 0, 1) 40%);", //black to khaki
        titleBar: "linear-gradient(90deg,#778077,#000);",
        closeBtnClass: "blabalbaba",
        windowColor: "#000000",
      },
      {
        src: "gg_manifesto-garden/assets/images/bgPix/paper.jpg",
        color: "#778077",
        linkColor: "#4dfafb", // active link font color in seedbox
        mainTitleColor: "#778077", // "Jardin Manifesto Garden" font color, , active link font color
        theme: "theme3",
        class: "themeHoverClass",
        background: "radial-gradient(circle,rgba(119, 128, 119, 0.9) 11%, rgba(255, 255, 255, 1) 40%);",
        titleBar: "linear-gradient(90deg,#4dfafb,silver);",
        closeBtnClass: "blabalbaba",
        windowColor: "#ffffff",
      },
    ];
    document.querySelectorAll(".buttons").forEach(function(el){
      el.classList.add(backgrounds[0].class);
    });
    //Sets and traverses thru JS the list selection in the HTML:
    backgroundMenuSelect.addEventListener("change", function () {
      backgroundIndex = parseInt(
        backgroundMenuSelect.value.substring(
          5,
          backgroundMenuSelect.value.length
        )
      );

   let selectedBackground = backgrounds[backgroundIndex]
      //changes the background-color:
      document.getElementById("bg-img").style.background =
        selectedBackground["background"];
      console.log(selectedBackground["background"]);
      //implements new bg image
      // document.getElementById("bg-img").style.background= `url('../${selectedBackground.src}')`;
      // document.getElementById("bg-img").style.backgroundSize= `100% 100%`;
      // document.getElementById("bg-img").style.backgroundRepeat= `no-repeat`;
      //changes background color:
      document.getElementById("body").style.color = selectedBackground.color;
      console.log(selectedBackground.color)
      document.querySelectorAll(".buttons").forEach(function (el) {
        console.log(el);
        for (let i = 0; i < backgrounds.length; i++) {
          el.classList.remove(backgrounds[i].class);
        }
        el.classList.add(selectedBackground.class);
      });

        //changes the main title "Jardin Manifesto Garden" font color:
        document.getElementById("default-title").style.color = selectedBackground.mainTitleColor;

        //changes the links color:
        document.querySelectorAll(".window a").forEach(function (el) {
          el.style.backgroundColor = selectedBackground.linkColor;
          el.style.color = selectedBackground.mainTitleColor;
        });

        //changes the boxes background color:
        document.querySelectorAll(".window").forEach(function (el) {
          el.style.backgroundColor = selectedBackground.windowColor;
        });

        //changes the axis title color:
        document.querySelectorAll(".flowerEl:hover").forEach(function (el) {
          el.style.backgroundColor = selectedBackground.linkColor;
          el.style.color = selectedBackground.mainTitleColor;
        });

        //changes the title-bar background color:
        document.querySelectorAll(".title-bar").forEach(function (el) {
          el.style.background = selectedBackground.titleBar;
        });

    });


    window.onresize = async (event) => {
      for (let i = 0; i < axisArrayObj.length; i++) {
        axisArrayObj[i].removeLinks();
        axisArrayObj[i].subAxisArray = [];
        // console.log(axisArrayObj[i].subAxisArray);

        axisArrayObj[i].generateSeeds(axisArrayObj[i].linkList.length);
      } //end of for loop
    };

/********************SABINE ADDED FOR DRAG AND DROP  -  to allow for the body to capture when an element is dropped*/
// let dropEl = document.querySelector(".target-drop");

// dropEl.addEventListener("dragover", (event) => {
//   event.preventDefault();
//   // console.log("beingsraggedOver")
// });

// dropEl.addEventListener("dragenter", (event) => {
//   event.preventDefault();
// });

// dropEl.addEventListener("drop", handleDrop);

// function handleDrop(e) {
//   console.log(e)
//   //e.stopPropagation();
//   e.preventDefault();
//   console.log("drop");
// }
} //initialize website end
};