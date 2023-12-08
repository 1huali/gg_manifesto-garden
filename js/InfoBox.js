class InfoBox{
    constructor(link,description,axis,linkNum){
        this.link=link;
        this.description=description,
        this.axis=axis;
        this.linkNum=linkNum;
        this.boxIsDragging =false;

// MAKE SEPERATE INFO BOX INSTANCES FOR EACH SEED:
        //create element:
        this.el = document.createElement("div");
        this.el.classList.add("seed-container");
        document.querySelector("#bg-img").appendChild(this.el);
        this.el.style.display = "none";
        //active draggable functionality:
        this.setAsDraggableElement(this.el);

        //create close button
        this.buttonEl = document.createElement("input");
        this.buttonEl.type = "button";
        this.buttonEl.classList.add("close-buttons");
        this.buttonEl.classList.add("buttons");
        this.buttonEl.value = "X";
        this.el.appendChild(this.buttonEl);

        //creating seed content div : 
        this.seedContent =  document.createElement("div");
        this.el.appendChild(this.seedContent);
        //creating seed title div : 
        this.linkTitle =  document.createElement("div");
        this.seedContent.appendChild(this.linkTitle)
        this.linkTitle.innerHTML="✿ Link: "+this.link;
        //implementing seed description in the div : 
        this.linkDesc =  document.createElement("div");
        this.seedContent.appendChild(this.linkDesc);
        this.linkDesc.innerHTML="✿ Description: "+this.description;
        //creating seed link div : 
        this.linkAxis =  document.createElement("div");
        this.seedContent.appendChild(this.linkAxis);
        this.linkAxis.innerHTML = "✿ Axis: "+ this.axis;
        //implementing seed link : 
        this.linkImg=  document.createElement("div");
        this.seedContent.appendChild(this.linkImg);
        this.linkImg.innerHTML = "✿ Img:";


        this.linkOpen =  document.createElement("div");
        this.seedContent.appendChild(this.linkOpen);
        this.linkOpen.innerHTML = "CLICK HERE TO ACCESS RESOURCE";


        let self=this;

        //close seedbox on button click:
        this.buttonEl.addEventListener("click", function(){
            self.el.style= "display: none;"
         });
    }

    openSeedbox(){

        let self = this;
        
        this.el.style.display ="block";

       this.linkOpen.addEventListener("click", function(){
            console.log(`${self.link}`); //?? GIVES UNDEFINED
            window.open(`${self.link}`);
        })
    }

    setAsDraggableElement(elmnt) {
        let self = this;
    //     let boxIsDragging = false;
        elmnt.addEventListener("mousedown", dragMouseDown);
      elmnt.addEventListener("mouseup", closeDragElement);
      elmnt.addEventListener("mousemove", elementDrag);
    
        function dragMouseDown(event) {
          // Add event as a parameter
          console.log(event.target);
          
         if(!(event.target===document.querySelector("#close-button"))){
          event.preventDefault();
    
          if (self.boxIsDragging === false ) {
            console.log("here");
            self.boxIsDragging = true;
           
          }
        }
        }
    
        function elementDrag(event) {
          if (self.boxIsDragging === true) {
            event.preventDefault();
            // calculate the new cursor position:
        ;
            // set the element's new position:
            elmnt.style.top = event.clientY - elmnt.getBoundingClientRect().height/2+ "px";
            elmnt.style.left = event.clientX - elmnt.getBoundingClientRect().width/2 + "px";
          }
        }
    
    
        function closeDragElement() {
          if (self.boxIsDragging === true) {
            console.log("up");
            self.boxIsDragging = false;
          }
        }
      } //end dragElement();
}

