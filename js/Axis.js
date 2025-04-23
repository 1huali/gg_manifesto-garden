class Axis{
constructor(indexNum,icon,xPos,yPos,name,axisDescription,axeDescription,sound,indexNumMenu,linkList,axisImage){

    this.indexNum= indexNum;
    this.icon= icon;
    this.xPos= parseFloat(xPos);
    this.yPos= parseFloat(yPos);
    this.name= name;
    this.axisDescription= axisDescription;
    this.axeDescription=axeDescription;
    this.description=axisDescription; //english as default language
    this.sound= sound;
    this.drpdownMenuIndex= indexNumMenu;
    this.linkList=linkList;
    this.element=null;
    this.subAxisArray = [];
    this.axisImagePath= axisImage;
    this.print();
    // this.axisImagePath="../gg_manifesto-garden/assets/images/flowerPix/flower1.png"
}
//change of language setting for links:
switchLangOfLinksToEng(){
  //pass all english properties :
  for(let i=0; i<this.subAxisArray.length;i++){
    this.subAxisArray[i].seedbox.description =this.subAxisArray[i].linkDescription;
    this.subAxisArray[i].seedbox.title =this.subAxisArray[i].linkTitle;
    this.subAxisArray[i].seedbox.print();
  }
}

switchLangOfLinksToFr(){
  for(let i=0; i<this.subAxisArray.length;i++){
    this.subAxisArray[i].seedbox.description =this.subAxisArray[i].lienDescription;
    this.subAxisArray[i].seedbox.title =this.subAxisArray[i].lienTitre;
    console.log(this.subAxisArray[i].lienTitre);
    this.subAxisArray[i].seedbox.print();
  }
}

print(){
  let divContainer = document.createElement("div");
  this.element = divContainer;
  divContainer.id="flowerEl-container"+this.indexNum;
  divContainer.classList.add('flowerEl-container');
  divContainer.style.top=this.yPos+"%";
  divContainer.style.left=this.xPos+"%";
  document.getElementById("map").appendChild(divContainer);
  this.createAxisImage(divContainer);


     // Create the flower element if it doesn't exist
  //if (!this.element) {
    let div = document.createElement("div");
    div.innerHTML=this.icon; 
    div.id="flowerEl"+this.indexNum;
    div.classList.add('flowerEl');
    // console.log(this.element)
    divContainer.appendChild(div);

    
}

      //calculate the position of the seeds in offset between themselves around a flower's center point
      calculatePosition(seedIndex, seedCount) {
    
        let elementWidth=this.element.getBoundingClientRect().width; //to make the center of the DIV from the center
        let elementHeight=this.element.getBoundingClientRect().height; //to make the center of the DIV from the center
        let elementXpos=this.element.getBoundingClientRect().x; //to make the center of the DIV from the center
        let elementYpos=this.element.getBoundingClientRect().y; //to make the center of the DIV from the center
       
        console.log(this.element.getBoundingClientRect());

        // let offsetRange=getRandomInt(3);
        let angleOffset = (2 * Math.PI) / seedCount;
        // let angleOffset=1+(Math.random()*3);
        // let angleOffset=10;

        let numElementPerLevel = 8;
        let angle = seedIndex * angleOffset;
        let windowWidthScale = window.innerWidth/100*7;
        let radius = windowWidthScale;
        // let radiusLvlOffset=9;
        let xpos_pixel = (elementXpos+elementWidth/2)  + radius * Math.cos(angle);
        let ypos_pixel = (elementYpos+elementHeight/2) + radius * Math.sin(angle);
        return { xpos_pixel, ypos_pixel };
      }

      getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

generateSeeds(seedCount){
    for (let i = 0; i < seedCount; i++) {
        // console.log(this.linkArray["lien"+i])
        let position = this.calculatePosition(i, seedCount);
        console.log(position);
        //Create the single link object: //!! CHANGE LINKS VARIABLES AND IMPLEMENT IN INFOBOX
          let link = new Links("✿", position, this.linkList[i].linkLink,this.indexNum+"_"+i,this.linkList[i].linkDescription,this.linkList[i].lienDescription,this.xPos,this.yPos,this.name,this.linkList[i].linkAuthor,this.linkList[i].linkType,this.linkList[i].linkYear,this.linkList[i].linkTitle,this.linkList[i].linkImage,this.linkList[i].lienTitre);

          this.subAxisArray.push(link);
          console.log(link);
    
      }
}

removeLinks(){
  for (let i = 0; i < this.subAxisArray.length; i++) {
    this.subAxisArray[i].removeMe();
}
}
// openLinks(){
//   for (let i = 0; i < this.subAxisArray.length; i++) {
//     this.subAxisArray[i].removeMe();
// }
// }

createAxisImage(divContainer){
//if (!this.element) {
  let div = document.createElement("div");
  // div.innerHTML=this.axisImagePath; 
  div.id="flowerElImg"+this.indexNum;
  div.classList.add('flowerElImg');
  // div.style.zIndex="1000";
  // div.style.top=this.yPos-150+"px";
  // div.style.left=this.xPos+10+"px";
  div.style.top=this.yPos+"%";
  div.style.left=this.xPos+"%";
  let img= document.createElement("img");
  div.appendChild(img);
  img.src=this.axisImagePath;
  //div appends to the background:
  divContainer.appendChild(div)

  // console.log(this.element)
  let self=this;

  this.medInfoBox=new MedInfoBox(self.name, self.axisDescription,self.axeDescription);

  img.addEventListener("click", function(){
    self.medInfoBox.openBox();
  });

}

} //end class Axis