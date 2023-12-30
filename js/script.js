/**
Jardin Manifeso Garden
Wawa Li pour Galerie Galerie

*/

"use strict";
window.onload = (event) => {

//   // Function to log mouse coordinates
// function logMousePosition(event) {
//   console.log("Mouse X: " + event.clientX + ", Mouse Y: " + event.clientY);
// }
// // Add event listener to the document
// document.addEventListener("mousedown", logMousePosition);

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
        console.log(parsedJSON);
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
        url: "../retrieveLinksNew.php", //file taht activate the retrieval of the data from the db
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
//when user click on enter, all buttons appears:
    document.getElementById("intro-container-close-button").addEventListener("click", function(){
    document.getElementById("intro-container").style.display="none";
    document.getElementById("buttons-container").style.display="block";
    document.getElementById("data-container").style.display="block";
    document.querySelectorAll(".flowerEl").forEach(element => {
      element.style.display="block"
    });
    document.querySelectorAll(".linkEl").forEach(element => {
      element.style.display="block"
    });
    document.getElementById("sidebar-button").style.display="block";
    });

    let scaler= 1;
//zoom buttons:
document.getElementById("zoomIn-button").addEventListener("click", function(){
    scaler+= 0.08;
    if (scaler < 4) {
        document.querySelector(
            "#bg-img"
          ).style.transform = `scale(${scaler})`;

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

let language= "eng";
//translation button:
document.getElementById("language-button").addEventListener("click", function(){
  if (language === "eng"){
    language = "fr";
    document.getElementById("language-button").value="Français";
    document.getElementById("manifesto-button").value="The Manifesto";
    document.getElementById("share-button").value="Share";
    document.getElementById("update").innerHTML="Last Update";

    //CHANGE BUTTONS VALUES to english
  } else {
    language= "eng";
    document.getElementById("language-button").value="English";
    document.getElementById("manifesto-button").value="Le Manifeste";
    document.getElementById("share-button").value="Partager";
    document.getElementById("update").innerHTML="Mise à jour";



        //CHANGE BUTTONS VALUES to french

  };

  for (let j=0;j < axisArrayObj.length;j++){
//axis values to english : 
    if (language === "eng"){
    axisArrayObj[j].description = axisArrayObj[j].axeDescription;
    axisArrayObj[j].reprintAxisContentSidebar();
   axisArrayObj[j].switchLangOfLinksToFr();
  } else {
    axisArrayObj[j].description = axisArrayObj[j].axisDescription;
    axisArrayObj[j].reprintAxisContentSidebar();
   axisArrayObj[j].switchLangOfLinksToEng();
  }
  }
});

//theme button:
// let backgrounds=[
//     {"src": "assets/images/cascade-img.jpeg","color":"white","theme":"default"},
//     {"src": "assets/images/cascade2-img.jpeg","color":"fuchsia","theme":"cascade2"},
//     {"src": "assets/images/frozen-cascade.jpg","color":"white","theme":"frozenCascade"}
//   ];
//   let currentBg=0;
//   document.getElementById("theme-button").addEventListener("click", changeBgPicture);
// function changeBgPicture(){
//     //changes theme array:
//     if (currentBg >= backgrounds.length-1) {
//         currentBg=0;
//       }
//       else {
//         currentBg= currentBg+1;
//         }
//         //implements new bg image
//         document.getElementById("bg-img").style.background= `url('../${backgrounds[currentBg].src}')`;
//         document.getElementById("bg-img").style.width= `${100*scaler}vw`;
//         document.getElementById("bg-img").style.height= `${100*scaler}vh`;
//         document.getElementById("bg-img").style.backgroundSize= `100%`;
//         document.getElementById("bg-img").style.backgroundRepeat= `no-repeat`;

//         console.log(`url('../${backgrounds[currentBg].src}')`)
//         document.getElementById("body").style.color= backgrounds[currentBg].color;
//         document.getElementById("bg-theme").innerHTML=backgrounds[currentBg].theme;
// }
//dropdown menu:
let backgrounds = [
  { "src": "bgPix/assets/images/cascade-img.jpeg", "color": "white", "theme": "default" },
  { "src": "bgPix/assets/images/cascade2-img.jpeg", "color": "fuchsia", "theme": "cascade2" },
  { "src": "bgPix/assets/images/frozen-cascade.jpg", "color": "white", "theme": "frozenCascade" }
];

// Set the initial background theme
let currentBg = 0;
applyBackgroundTheme(currentBg);

// Event listener for theme dropdown change
document.getElementById("theme-dropdown").addEventListener("change", function () {
  // Find the selected option
  let selectedTheme = this.value;

  // Find the index of the selected theme in the backgrounds array
  let selectedBgIndex = backgrounds.findIndex(bg => bg.theme === selectedTheme);

  // Apply the new background theme
  applyBackgroundTheme(selectedBgIndex);
});

// Function to apply the background theme
function applyBackgroundTheme(bgIndex) {
  // Update currentBg
  currentBg = bgIndex;

  // Implement new bg image
  document.getElementById("bg-img").style.background = `url('../${backgrounds[currentBg].src}')`;
  document.getElementById("bg-img").style.width = `${100 * scaler}vw`;
  document.getElementById("bg-img").style.height = `${100 * scaler}vh`;
  document.getElementById("bg-img").style.backgroundSize = `100%`;
  document.getElementById("bg-img").style.backgroundRepeat = `no-repeat`;

  console.log(`url('../${backgrounds[currentBg].src}')`)
  document.getElementById("body").style.color = backgrounds[currentBg].color;
  document.getElementById("bg-theme").innerHTML = backgrounds[currentBg].theme;
}


// NEW AXIS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
let axisArrayObj=[];
let chimeSound = document.getElementById("chimeSound");

// parsedJSON contains an axis object where the axisId is referenced in the links..
for (let i = 0; i < parsedJSON.length; i++) {

  //console.log(parsedJSON[i].axisID);
  // make your axis objects...
  //get the array of linkObjects that have the SAME refID as the current axisObject
  let filteredArrayOfCurrentAxisObject = parsedLinksJSON.filter(function(el){return(el.localAxisID ===parsedJSON[i].axisID)});
console.log(parsedLinksJSON)
  let axisObj = new Axis(parsedJSON[i].axisID,parsedJSON[i].axisIcon,parsedJSON[i].axisXpos,parsedJSON[i].axisYpos,parsedJSON[i].axisTitle,parsedJSON[i].axisDescription,parsedJSON[i].axeDescription,chimeSound,`axis${i+1}`,filteredArrayOfCurrentAxisObject); 
   axisArrayObj.push(axisObj);

}

    //Select menu for axis sidebar menu:
    let axisMenuSelect = document.getElementById("drpMenu-axe");
    let selectedAxis= null;
    let axisIndex=null;

for(let i=0; i<axisArrayObj.length;i++){
  // console.log(axisArrayObj[i])
  axisArrayObj[i].print();
  axisArrayObj[i].generateSeeds(axisArrayObj[i].linkList.length);
} //end of for loop

    //Sets and traverses thru JS the list selection in the HTML:
    axisMenuSelect.addEventListener("change", function(){
      //pan user view to the selection:
    axisIndex = parseInt(axisMenuSelect.value.substring(4,axisMenuSelect.value.length));

   selectedAxis = axisMenuSelect.value;
   if (axisIndex !=0){
   let selectedAxisObj = axisArrayObj[axisIndex-1]
   console.log(selectedAxisObj)
    selectedAxisObj.axisSidebarDisplay();
    panToPosition(selectedAxisObj.xPos, selectedAxisObj.yPos);
  } else {
          document.getElementById("axisContent-sidebar").innerHTML="Voici le manifeste GG!! choisis une axe à explorer woohoo";
  }
  });
  

      // Function to pan the user view to a specific position
function panToPosition(x, y) {
  // Assuming you want to scroll the entire document
  window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth' // Optional: Use smooth scrolling
  });
}

} //initialize website end
}