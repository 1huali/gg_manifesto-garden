class Axis{
constructor(indexNum,icon,xPos,yPos,name,axisDescription,axeDescription,sound,indexNumMenu,linkList){

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
     // Create the flower element if it doesn't exist
  //if (!this.element) {
    let div = document.createElement("div");
    div.innerHTML=this.icon; 
    div.id="flowerEl"+this.indexNum;
    div.classList.add('flowerEl');
    // div.style.zIndex="1000";
    div.style.top=this.yPos+"px";
    div.style.left=this.xPos+"px";
    document.getElementById("bg-img").appendChild(div)
    this.element=div;
    // console.log(this.element)

}

      //calculate the position of the seeds in offset between themselves around a flower's center point
      calculatePosition(seedIndex, seedCount) {
    
        let elementWidth=this.element.getBoundingClientRect().width; //to make the center of the DIV from the center
        let elementHeight=this.element.getBoundingClientRect().height; //to make the center of the DIV from the center
        // let offsetRange=getRandomInt(3);
        let angleOffset = (2 * Math.PI) / seedCount;
        // let angleOffset=1+(Math.random()*3);
        // let angleOffset=10;

        let numElementPerLevel = 8;
        let angle = seedIndex * angleOffset;
        let radius = 20+(Math.random()*80);
        // let radiusLvlOffset=9;
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
        //Create the single link object: //!! CHANGE LINKS VARIABLES AND IMPLEMENT IN INFOBOX
          let link = new Links("✿", position, this.linkList[i].linkLink,this.indexNum+"_"+i,this.linkList[i].linkDescription,this.linkList[i].lienDescription,this.xPos,this.yPos,this.name,this.linkList[i].linkAuthor,this.linkList[i].linkType,this.linkList[i].linkYear,this.linkList[i].linkTitle,this.linkList[i].linkImage,this.linkList[i].lienTitre);
          // let link = new Links("✿", position, this.linkList[i].linkLink,this.indexNum+"_"+i,this.linkList[i].linkDescription,this.linkList[i].lienDescription,this.xPos,this.yPos,this.name);

          this.subAxisArray.push(link);
          console.log(link);
    
      }
}

axisSidebarDisplay(){

  //From the dropdown menu of the Axis menu, the description matching the user selection will print :
    document.getElementById("sidebar-menu-container").style.display= "block";
    this.reprintAxisContentSidebar();
}
//change of language setting for axis sidebar:
reprintAxisContentSidebar(){
  document.getElementById("axisTitle-sidebar").innerHTML=this.name;
  document.getElementById("axisContent-sidebar").innerHTML= this.description;
}

} //end class Axis