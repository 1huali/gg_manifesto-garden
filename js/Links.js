class Links extends Axis {
    constructor(map, text, coord, link,id,description) {
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
           this.hoverDiv= document.createElement("div");
           this.hoverDiv.classList.add("linkDivHoverEl");
           this.hoverDiv.innerHTML=link+"<article>"+this.description;
           this.element.appendChild(this.hoverDiv);

            //creates the seed div element: 
            // this.linkDiv= document.createElement("div");
            // this.linkDiv.classList.add("linkDivEl");
            // // this.classList.add("linkUnderline");
            // this.element.appendChild(this.linkDiv);
            // console.log(this.linkDiv);

//Hover function on the element that triggers:
  this.element.addEventListener("mouseover", function(){
    this.classList.add("linkUnderline");
    self.hoverDiv.style.display= "block"
    setTimeout(() => {
      self.hoverDiv.style.display= "none";
    }, "5000");
  });
//post-hover, the element is not underlined anymore : 
  this.element.addEventListener("mouseleave", function(){
    if (self.clicked===false){
      // console.log("not lcickd")
this.classList.remove("linkUnderline");
}
  });
//at element click, the element opens the link associated with the element in another window and an underline stays:
  this.element.addEventListener("click", function(){
    // element stays underlined at click:
    //?? doesnt stay clicked

    self.clicked = true;
    if (self.clicked===true){
      this.classList.add("linkUnderline");
    }
      window.open(self.link, '_blank');
    });

    } //end constructor
}