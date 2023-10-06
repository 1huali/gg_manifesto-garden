class Axis {
    constructor(map, axisNumber, img,titleIcon, xPos, yPos, description, name,linkArray, resourceInfo) {
      this.map = map;
      this.img = img;
      this.xPos = xPos;
      this.yPos = yPos;
      this.titleIcon = titleIcon;
      this.name = name;
      this.description = description;
      this.linkArray = linkArray;
      this.seedArray = [];
      this.axisNumber= axisNumber;
      this.resourceInfo= resourceInfo;
  
      this.currentText="NULLLLLL";
      this.fontSize = 10; // Initial font size
      let pointXY = L.point(this.xPos, this.yPos);
      let pointlatlng = map.unproject(pointXY);
      // console.log(pointlatlng.lat)
    //   this.minBound = [pointlatlng.lat, pointlatlng.lng];
    //   this.maxBound = [pointlatlng.lat + 30, pointlatlng.lng + 70];
  
      this.mapLayerArray = Object.keys(this.map._layers);
      console.log(this.map._layers);

      //features for marker
      let myIcon = L.icon({
        iconUrl: 'beam.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      });

      let marker = new L.marker([pointlatlng.lat, pointlatlng.lng], { opacity: 1.00 },{icon: myIcon}); //opacity may be set to zero
      marker.bindTooltip(this.title, {permanent: true, className: "my-leaflet-tool-tip-class", offset: [15, 70] });
      marker.addTo(map);
      console.log(marker);

      marker.on('click', () => {
        console.log("clicked on marker");
      });

}

reprint() {
//??DOESNT WORK; doesnt create element cos of map layer
  // Create the thought element if it doesn't exist
  if (!this.element) {
    //??DOESNT WORK
    this.element = L.DomUtil.create("div", "flowerEl", this.map._layers[this.mapLayerArray[0]]._container);
    this.element.setAttribute("id", "flower" + this.axisNumber);
    // this.adjustFontSize();
      console.log(this.element);

  }

  // Update the position of the thought element
  this.element.style.left = `${xPos}px`;
  this.element.style.top = `${yPos}px`;

  // Set any other properties or update the element's content as needed
  this.element.innerHTML = "꧁ ✿ ꧂"; // Set the content to the flower symbol
// this.hover();
}



}