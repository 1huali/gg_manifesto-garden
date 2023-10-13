class Links extends Axis {
    constructor(map, text, coord, link,id) {
        super(map, 0, text, 0, 0, "", "", [], ""); // Pass dummy values for axisNumber, xPos, yPos, info, title, linkArray, and resourceInfo
        this.link = link;
        this.coord = coord;
        this.text=text;
        // this.flowerPosition = flowerPosition; // Add the flower position variable
        this.linkId=id;
        this.element;
        //need hover, sound, dropshadow
        // let pointXY = L.point(coord.xpos_pixel, coord.ypos_pixel);
        let pointXY = L.point(coord.xpos_pixel, coord.ypos_pixel);
        console.log(pointXY);
        // Calculate the pixel coordinates based on the latitude and longitude
    // const pointLatLng = L.latLng(coord.lat, coord.lng);
    // const pointXY = map.project(pointLatLng);

    // Convert the pixel coordinates to map layer coordinates
    const pointLayer = map.layerPointToLatLng(pointXY);

    // Update the xPos and yPos properties with the map layer coordinates
    this.xPos = coord.xpos_pixel;
    this.yPos = coord.ypos_pixel;


//// NEW STUFFFF =========================================================

  // Create the link element if it doesn't exist
  if (!this.element) {
    this.element = L.DomUtil.create("div", "linkEl", this.map._layers[this.mapLayerArray[0]]._container);
    this.element.setAttribute("id", "seed" + this.linkId);
  }
  console.log(this.element);
  this.element.style.top=this.yPos+"px";
this.element.style.left=this.xPos+"px"


    }
}