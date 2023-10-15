class Axis {
    constructor(map, axisNumber, img,titleIcon, xPos, yPos, description, name,linkArray) {
      this.map = map;
      this.img = img;
      this.xPos = xPos;
      this.yPos = yPos;
      this.titleIcon = titleIcon;
      this.name = name;
      this.description = description;
      this.linkArray = linkArray;
      this.subAxisArray = [];
      this.axisNumber= axisNumber;
      // this.resourceInfo= resourceInfo;
      // // console.log(this.name);
  
      this.currentText="NULLLLLL";
      this.fontSize = 10; // Initial font size
      let pointXY = L.point(this.xPos, this.yPos);
      let pointlatlng = map.unproject(pointXY);

    //   this.minBound = [pointlatlng.lat, pointlatlng.lng];
    //   this.maxBound = [pointlatlng.lat + 30, pointlatlng.lng + 70];
  
      this.mapLayerArray = Object.keys(this.map._layers);

      //features for marker
      let myIcon = L.icon({
        iconUrl: 'beam.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      });

}

reprint() {
  let self=this;
  // Create the flower element if it doesn't exist
  if (!this.element) {
    this.element = L.DomUtil.create("div", "flowerEl", this.map._layers[this.mapLayerArray[0]]._container);
    this.element.setAttribute("id", "flower" + this.axisNumber);
    // this.adjustFontSize();
  }


  // Update the position of the thought element
  this.element.style.left = `${this.xPos}px`;
  this.element.style.top = `${this.yPos}px`;

  // Set any other properties or update the element's content as needed
  this.element.innerHTML = "꧁✿ "; // Set the content to the flower symbol
this.hoverBox();
}

hoverBox(){
  let self=this;
         //creates the hover div element: 
           this.hoverDiv= document.createElement("div");
           // div.id=`favoriteButton${this.element.id}`;
           this.hoverDiv.classList.add("divHoverEl");
           this.hoverDiv.innerHTML=this.name+"<article>"+this.description;
           this.element.appendChild(this.hoverDiv);
    
          //  console.log(this.element);
  this.element.addEventListener("mouseover", function(){
    self.hoverDiv.style.display= "block"
    setTimeout(() => {
      self.hoverDiv.style.display= "none";
    }, "5000");
  });
}

axisFunction(desc){
  //??description doesnt get it
  this.element.addEventListener("click", function(){
    let self=this;
    document.getElementById("axis-sidebar").style.display= "block";
    // document.getElementById("sidebar-content-text").innerHTML= self.resourceInfo;
    document.getElementById("sidebar-content-text").innerHTML= desc;

console.log(self.resourceInfo)
  });
}

      //calculate the position of the seeds in offset between themselves around a flower's center point
calculatePosition(seedIndex, seedCount) {
        let elementWidth=this.element.getBoundingClientRect().width; //to make the center of the DIV from the center
        let elementHeight=this.element.getBoundingClientRect().height; //to make the center of the DIV from the center
        let offset = (2 * Math.PI) / seedCount;
        console.log(this.xPos,this.yPos)
        let angle = seedIndex * offset;
        let radius = 100;
        let xpos_pixel = (this.xPos+elementWidth/2)  + radius * Math.cos(angle);
        let ypos_pixel = (this.yPos+elementHeight/2) + radius * Math.sin(angle);
        return { xpos_pixel, ypos_pixel };
      }

generateSeeds(seedCount) {
  for (let i = 0; i < seedCount; i++) {
    let position = this.calculatePosition(i, seedCount);
    console.log(position);

    //Create the single link object:
      let link = new Links(this.map,"✿", position, this.linkArray[i],this.axisNumber+"_"+i);
      this.subAxisArray.push(link);

  }
}


}//end class