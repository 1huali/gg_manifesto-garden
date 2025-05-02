/**
Jardin Manifeso Garden
Wawa Li pour Galerie Galerie

*/

"use strict";
window.onload = async (event) => {
console.log(window.innerWidth);
//   // Function to log mouse coordinates
// function logMousePosition(event) {
//   console.log("Mouse X: " + event.clientX + ", Mouse Y: " + event.clientY);
// }
// // Add event listener to the document
// document.addEventListener("mousedown", logMousePosition);

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
document.getElementById("manifesto-button").addEventListener("click", function(){
  document.getElementById("manifesto-container").style.display="block";
  document.getElementById("title-bar-manifesto-container").style.display="flex";
});
document.getElementById("manifesto-container-close-button").addEventListener("click", function(){
  document.getElementById("manifesto-container").style.display="none"
  document.getElementById("title-bar-manifesto-container").style.display="none";
  });

//click on "contribute" button:
document.getElementById("contribute-button").addEventListener("click", function(){
 console.log("clicked on contribute button")
});


// intro button:
//when user click on enter, all buttons appears:
    document.getElementById("intro-container-close-button").addEventListener("click", function(){
      console.log(window.innerWidth);

    document.getElementById("intro-container").style.display="none";
document.getElementById("map").style.display="block";
document.getElementsByTagName("header")[0].style.display="block";
console.log(parsedLinksJSON[1]);
// NEW AXIS  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
// parsedJSON contains an axis object where the axisId is referenced in the links..
for (let i = 0; i < parsedJSON.length; i++) {

  // console.log(parsedJSON[i].axisID);
 
  // make your axis objects...
  //get the array of linkObjects that have the SAME refID as the current axisObject
  // let filteredArrayOfCurrentAxisObject = parsedLinksJSON.filter(function(el){return(parseInt(el.localAxisID) ===parsedJSON[i].axisID)});
  let filteredArrayOfCurrentAxisObject = parsedLinksJSON.filter(function(el){
    return(parseInt(el.localAxisID) === parseInt(parsedJSON[i].axisID))

  }); 
  console.log(filteredArrayOfCurrentAxisObject);
console.log(parsedLinksJSON)
  let axisObj = new Axis(parsedJSON[i].axisID,parsedJSON[i].axisIcon,parsedJSON[i].axisXpos,parsedJSON[i].axisYpos,parsedJSON[i].axisTitle,parsedJSON[i].axisDescription,parsedJSON[i].axeDescription,chimeSound,`axis${i+1}`,filteredArrayOfCurrentAxisObject, parsedJSON[i].axisImage); 
   axisArrayObj.push(axisObj);
}

  // GÉNÉRATION DE SEEDS ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀  ❀ 
  for(let i=0; i<axisArrayObj.length;i++){
    axisArrayObj[i].generateSeeds(axisArrayObj[i].linkList.length);
  } //end of for loop
  
    document.getElementsByTagName("footer")[0].style.display="flex";
    });

    console.log(window.innerWidth);


let language= "eng";
//translation button:
document.getElementById("language-button").addEventListener("click", function(){
  if (language === "eng"){
    language = "fr";
    document.getElementById("language-button").value="Français";
    document.getElementById("contribute-button").value="Contribute";
    document.getElementById("update").innerHTML="Last Update";
    document.getElementById("footnote-title").innerHTML="Footnotes";
    document.getElementById("scrolling-message").innerHTML= "Stroll through the garden and fall down the rabbit hole! Hophop! 🐇";
    //change content to French & disabling English content to french
    document.getElementById("manifesto-content-eng").style.display="none";
    document.getElementById("manifesto-content-fr").style.display="block";

  } else {
    language= "eng";
        //CHANGE BUTTONS VALUES to english
    document.getElementById("language-button").value="English";
    // document.getElementById("share-button").value="Partager";
    // document.getElementById("manifesto-button").value="Manifeste";
    document.getElementById("contribute-button").value="Contribuer";
    document.getElementById("update").innerHTML="Mise à jour";
    document.getElementById("footnote-title").innerHTML="Notes en bas de page";
    document.getElementById("scrolling-message").innerHTML= "Flânez dans le jardin et SIOUPLAIT, tombez dans le trou du lapin! 🐇";
    //change content to english & disabling french content to french
    document.getElementById("manifesto-content-fr").style.display="none";
    document.getElementById("manifesto-content-eng").style.display="block";

  };

  for (let j=0;j < axisArrayObj.length;j++){
//axis values to english : 
    if (language === "eng"){
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
    let selectedBackground= null;
    let backgroundIndex=null;

    //theme button: (from the theme button section below)
    let backgrounds = [
      { "src": "gg_manifesto-garden/assets/images/bgPix/haloBlack.jpeg", "color": "white", "theme": "theme0","class":"haloClass", "background":"radial-gradient(black, #9198e5)", symbol: "✿" },
      { "src": "gg_manifesto-garden/assets/images/bgPix/halo.png", "color": "white", "theme": "theme1","class":"haloClass", "background":"radial-gradient(white, pink)", symbol: "❀"},
      { "src": "gg_manifesto-garden/assets/images/bgPix/grass.jpg", "color": "white", "theme": "theme2","class":"haloClass", "background":"radial-gradient(black, pink)", symbol: "✿" },
      { "src": "gg_manifesto-garden/assets/images/bgPix/paper.jpg", "color": "white", "theme": "theme3","class":"haloClass", "background":"radial-gradient(crimson, orange)", symbol: "★"},
    ];
    document.querySelectorAll(".buttons").forEach(function(el){
      el.classList.add(backgrounds[0].class);
    })
    //Sets and traverses thru JS the list selection in the HTML:
    backgroundMenuSelect.addEventListener("change", function(){
      backgroundIndex = parseInt(backgroundMenuSelect.value.substring(5,backgroundMenuSelect.value.length));

   let selectedBackground = backgrounds[backgroundIndex]
  //  console.log(selectedBackground)

  // implements new title [add image here as an "or" statement]
  if (backgroundIndex===1){
    document.getElementById("main-title-container").innerHTML= `<a href="#" id="zine-title" class="text-xxxl"> JARDIN MANIFESTO GARDEN </a>`;
  } else{
    document.getElementById("main-title-container").innerHTML= `<a href="#" id="default-title" class="text-xxl"> JARDIN MANIFESTO GARDEN </a>`;
  }

  //ADDED - CHANGE THE ASCII SYMBOL:
    for (let i=0; i< axisArrayObj.length; i++){
      console.log(axisArrayObj[i])
      axisArrayObj[i].axisAscii = selectedBackground.symbol;
  
    // update axis display:
    let axisEl = document.getElementById("axisElIcon" + axisArrayObj[i].indexNum);
    if (axisEl) {
      axisEl.innerHTML = axisArrayObj[i].axisAscii;
    }
  
    // update seeds/links:
      for (let j=0;j <axisArrayObj[i].subAxisArray.length; j++){
      axisArrayObj[i].subAxisArray[j].icon = selectedBackground.symbol;
  
      let linkEl = document.getElementById("linkEl" + axisArrayObj[i].subAxisArray[j].axisNum);
      console.log(linkEl);
      if (linkEl) {
        linkEl.innerHTML = axisArrayObj[i].subAxisArray[j].icon;
      }
    }
  }

  //changes the background-color:
  document.getElementById("bg-img").style.background=selectedBackground["background"];
  console.log(selectedBackground["background"])
    //implements new bg image
        // document.getElementById("bg-img").style.background= `url('../${selectedBackground.src}')`;
        // document.getElementById("bg-img").style.backgroundSize= `100% 100%`;
        // document.getElementById("bg-img").style.backgroundRepeat= `no-repeat`;
    //changes background color:
        document.getElementById("body").style.color= selectedBackground.color;
        document.querySelectorAll(".buttons").forEach(function(el){
          console.log(el)
          for (let i=0;i<backgrounds.length;i++){
            el.classList.remove(backgrounds[i].class);
          }
          el.classList.add(selectedBackground.class);
        });

  });

window.onresize = async (event) => {

  for(let i=0; i<axisArrayObj.length;i++){
    axisArrayObj[i].removeLinks();
    axisArrayObj[i].subAxisArray=[];
    // console.log(axisArrayObj[i].subAxisArray);

    axisArrayObj[i].generateSeeds(axisArrayObj[i].linkList.length);

  } //end of for loop
  
}


} //initialize website end
}