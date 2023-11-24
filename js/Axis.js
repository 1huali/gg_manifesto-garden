class Axis{
constructor(indexNum,icon,xPos,yPos,name,description,sound,indexNumMenu,linkList){

    this.indexNum= indexNum;
    this.icon= icon;
    this.xPos= xPos;
    this.yPos= yPos;
    this.name= name;
    this.description= description;
    this.sound= sound;
    this.drpdownMenuIndex= indexNumMenu;
    this.linkList=linkList;
    this.element=null;
    this.subAxisArray = [];
}

print(){
     // Create the flower element if it doesn't exist
  //if (!this.element) {
    let div = document.createElement("div");
    // let newContent = document.createTextNode(this.icon);
    div.innerHTML=this.icon; //either or??
    div.id="flowerEl"+this.indexNum;
    div.classList.add('flowerEl');
    div.style.zIndex="1000";
    div.style.top=this.xPos+"px";
    div.style.left=this.yPos+"px";
    document.body.appendChild(div)
    this.element=div;
    console.log(this.element)
    // div.appendChild(newContent);

    //deleted:
//     this.element = document.createElement("div");
//     this.element.setAttribute("id", "flower" + this.axisNumber);
//     this.element.innerHTML=this.icon;
//     console.log(element);
}

      //calculate the position of the seeds in offset between themselves around a flower's center point
      calculatePosition(seedIndex, seedCount) {
        let elementWidth=this.element.getBoundingClientRect().width; //to make the center of the DIV from the center
        let elementHeight=this.element.getBoundingClientRect().height; //to make the center of the DIV from the center
        // let offsetRange=getRandomInt(3);
        let offset = (2 * Math.PI) / seedCount;
        // console.log(this.xPos,this.yPos)
        let angle = seedIndex * offset;
        let radius = 100;
        let xpos_pixel = (this.xPos+elementWidth/2)  + radius * Math.cos(angle);
        let ypos_pixel = (this.yPos+elementHeight/2) + radius * Math.sin(angle);
        return { xpos_pixel, ypos_pixel };
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

generateSeeds(seedCount){
    for (let i = 0; i < seedCount; i++) {
        // console.log(this.linkArray["lien"+i])
        let position = this.calculatePosition(i, seedCount);
        //Create the single link object:
       // console.log("lien"+seedCount);
          let link = new Links("✿", position, this.linkList["lien"+i],this.axisNumber+"_"+i,this.description["descr"+i],this.xPos,this.yPos);
          this.subAxisArray.push(link);
          console.log(link);
    
      }
}

} //end class Axis