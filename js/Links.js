class Links {
    constructor(icon,coord,link,axisNum,linkDescription,lienDescription,axisXpos,axisYpos,axis,linkAuthor,linkType,linkYear,linkTitle,linkImage,lienTitre,renderedAxisX,renderedAxisY) {
        this.link=link;
        this.axisNum=axisNum;
        this.linkDescription=linkDescription;
        this.lienDescription=lienDescription;
        this.displayDescription = this.linkDescription; //sets default language
        this.icon=icon; //visual character
        this.coord=coord;
        this.xPos = coord.xpos_pixel;
        this.yPos = coord.ypos_pixel;
        this.axisXpos = axisXpos;
        this.axisYpos = axisYpos;
        this.axis= axis;
        this.linkTitle=linkTitle;
        this.lienTitre=lienTitre;
        this.linkType=linkType;
        this.linkAuthor=linkAuthor;
        this.linkYear=linkYear;
        this.linkImage=linkImage;
        this.element=null;
        this.seedbox= new InfoBox(this.axis,this.link,this.displayDescription,this.axisNum,this.linkAuthor,this.linkType,this.linkYear,this.linkTitle,this.xPos,this.yPos,this.linkImage,this.lienTitre,renderedAxisX, renderedAxisY);
// console.log(this.seedbox);

//Creates the link element:
        if (this.element===null) {
            let div = document.createElement("div");
            div.id="linkEl"+this.axisNum;
            div.classList.add('linkEl');
            div.classList.add('text-xxl');
            div.style.top=this.yPos+"px";
            div.style.left=this.xPos+"px";
            document.getElementById("map").appendChild(div)
            this.element=div;
            // console.log(this.element)
            div.innerHTML=this.icon;
          }
        
          let self=this;
          this.clicked=false;

          //Hover function on the element that triggers:
  this.element.addEventListener("mouseover", function(){
    this.classList.add("linkElHoverDecoration");
  });
  //post-hover, the element is not underlined anymore : 
  this.element.addEventListener("mouseleave", function(){
    if (self.clicked===false){
this.classList.remove("linkElHoverDecoration");
}
  });

  //at element click, the element opens the link associated with the element in another window and an underline stays:
  this.element.addEventListener("click", function(){
    // element stays underlined at click:
    //?? doesnt stay clicked
    self.clicked = true;
    if (self.clicked===true){
      this.classList.add("linkElHoverDecoration");
    }
    //open seed box
    // document.getElementById("seedBoxEl"+self.linkId).style.display="block";
    self.seedbox.openSeedbox();
    });
}

removeMe(){

this.seedbox.removeMe();
 this.element.remove();

}

}