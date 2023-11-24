class Links {
    constructor(icon,coord,link,indexNum,linkDescription,axisXpos,axisYpos) {
        this.link=link;
        this.indexNum=indexNum;
        this.linkDescription=this.linkDescription;
        this.icon=icon; //visual character
        this.coord=coord;
        this.xPos = coord.xpos_pixel;
        this.yPos = coord.ypos_pixel;
        this.axisXpos = axisXpos;
        this.axisYpos = axisYpos;
        this.element=null;

        //???CREATE LINK ELELEMNT
        // if (!this.element) {
        //     let div = document.createElement("div");
        //     div.id="linkEl"+this.indexNum;
        //     div.classList.add('linkEl');
        //     div.style.top=this.xPos+"px";
        //     div.style.left=this.yPos+"px";
        //     document.body.appendChild(div)
        //     this.element=div;
        //     console.log(this.element)
        //   }
        
        // this.element.style.color="white";
}
}