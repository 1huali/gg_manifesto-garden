class Links extends Axis {
    constructor(map, text, coord, link,id,description,xPosAxis,yPosAxis) {
        super(map, 0, text, 0, 0, "", "", [], ""); // Pass dummy values for axisNumber, xPos, yPos, info, title, linkArray, and resourceInfo
        this.link = link;
        // console.log(link);
        this.coord = coord;
        this.text=text; // visual
        // this.flowerPosition = flowerPosition; // Add the flower position variable
        this.linkId=id;
        this.clicked=false;
        // console.log(link)
        this.element;
        this.description=description;
        //need hover, sound, dropshadow
        // let pointXY = L.point(coord.xpos_pixel, coord.ypos_pixel);
        this.xPosAxis=xPosAxis;
        this.yPosAxis=yPosAxis;
        let pointXY = L.point(coord.xpos_pixel, coord.ypos_pixel);
        // Calculate the pixel coordinates based on the latitude and longitude
    // const pointLatLng = L.latLng(coord.lat, coord.lng);
    // const pointXY = map.project(pointLatLng);

    // Convert the pixel coordinates to map layer coordinates
    const pointLayer = map.layerPointToLatLng(pointXY);

    // Update the xPos and yPos properties with the map layer coordinates
    this.xPos = coord.xpos_pixel;
    this.yPos = coord.ypos_pixel;

  // Create the link element if it doesn't exist
  if (!this.element) {
    this.element = L.DomUtil.create("div", "linkEl", this.map._layers[this.mapLayerArray[0]]._container);
    this.element.setAttribute("id", "seed" + this.linkId);
  }
  this.element.style.top=this.yPos+"px";
this.element.style.left=this.xPos+"px"

this.element.style.color="white";
this.element.innerHTML=text;

//LINK OPEN :
let self=this;

//CREATE HOVER FUNCTION : 
         //creates the hover div element: 
          //  this.hoverDiv= document.createElement("div");
          //  this.hoverDiv.classList.add("linkDivHoverEl");
          //  this.hoverDiv.innerHTML=link+"<article>"+this.description;
          //  this.element.appendChild(this.hoverDiv);


//Hover function on the element that triggers:
  this.element.addEventListener("mouseover", function(){
    this.classList.add("linkUnderline");
    //at hover, little description NO NEED
    // self.hoverDiv.style.display= "block"
    // setTimeout(() => {
    //   self.hoverDiv.style.display= "none";
    // }, "5000");
  });
//post-hover, the element is not underlined anymore : 
  this.element.addEventListener("mouseleave", function(){
    if (self.clicked===false){
this.classList.remove("linkUnderline");
}
  });

  //create seedBox:
  //box child to the map tile layer:
      this.seedBox = L.DomUtil.create("div", "seedBoxEl", this.map._layers[this.mapLayerArray[0]]._container);
    this.seedBox.setAttribute("id", "seedBoxEl" + id);
    // console.log("id:"+this.linkId,"xAxis:"+this.xPosAxis,"yAxis:"+this.yPosAxis,"x:"+coord.xpos_pixel,"y:"+coord.ypos_pixel);
//seed box position of the x axis depends on its offset position from the axis position:
    if (coord.xpos_pixel>this.xPosAxis+100){
    document.getElementById("seedBoxEl"+id).style.top=coord.ypos_pixel+40+"px";
    document.getElementById("seedBoxEl"+id).style.left=coord.xpos_pixel+40+"px";
  } else {
    document.getElementById("seedBoxEl"+id).style.top=coord.ypos_pixel+40+"px";
    document.getElementById("seedBoxEl"+id).style.left=coord.xpos_pixel-200+"px";
  }

  
//coord.xpos_pixel, coord.ypos_pixel);
    let seedContainer = new DraggableBox(document.getElementById("seedBoxEl"+id));
    let parent = document.getElementById("seedBoxEl"+id);
    let header = document.createElement("div");
    let descDiv = document.createElement("div");
    let closeDiv = document.createElement("div");

    parent.appendChild(header);
    parent.appendChild(descDiv);
    parent.appendChild(closeDiv);
    header.innerHTML="seed: "+this.link;
    descDiv.innerHTML = this.description;
    closeDiv.innerHTML = "<CLICK TO OPEN>";


//at element click, the element opens the link associated with the element in another window and an underline stays:
  this.element.addEventListener("click", function(){
    // element stays underlined at click:
    //?? doesnt stay clicked

    self.clicked = true;
    if (self.clicked===true){
      this.classList.add("linkUnderline");
    }
    document.getElementById("seedBoxEl"+self.linkId).style.display="block";
    });

    document.getElementById("seedBoxEl"+this.linkId).addEventListener("click", function(){
      window.open(self.link, '_blank');
      document.getElementById("seedBoxEl"+self.linkId).style.display="none";
    });

    } //end constructor
}