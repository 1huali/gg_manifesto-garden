class Links {
    constructor(icon,coord,link,axisNum,linkDescription,axisXpos,axisYpos) {
        this.link=link;
        this.axisNum=axisNum;
        this.linkDescription=this.linkDescription;
        this.icon=icon; //visual character
        this.coord=coord;
        this.xPos = coord.xpos_pixel;
        this.yPos = coord.ypos_pixel;
        this.axisXpos = axisXpos;
        this.axisYpos = axisYpos;
        this.element=null;

        if (this.element===null) {
            let div = document.createElement("div");
            div.id="linkEl"+this.axisNum;
            div.classList.add('linkEl');
            div.style.top=this.yPos+"px";
            div.style.left=this.xPos+"px";
            document.body.appendChild(div)
            this.element=div;
            console.log(this.element)
            div.innerHTML=this.icon;
          }
        
        // this.element.style.color="white";
}
}