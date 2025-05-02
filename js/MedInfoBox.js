class MedInfoBox{
  constructor(axis,descriptionENG,descriptionFR){
      this.axis=axis;
      this.descriptionENG=descriptionENG;
      this.descriptionFR=descriptionFR;
      // console.log(this.axis,this.descriptionENG, this.descriptionFR);
      
      this.boxIsDragging =false;

      this.el = document.createElement("div");
      this.el.classList.add("axis-container");
      this.el.classList.add("window");
      // this.el.classList.add("text-lg");
      document.querySelector("#map").appendChild(this.el); //parent
      //active draggable functionality:
      // this.setAsDraggableElement(this.el);
     this.print();
    }

// MAKE SEPERATE INFO BOX INSTANCES FOR EACH SEED:
      //create element:
      print()
      {
      
      this.el.innerHTML = "";
      //create close button
      this.titleBarContainer=document.createElement("div");
      this.titleBarContainer.classList.add("title-bar");
      this.titleBarText=document.createElement("div");
      this.titleBarText.classList.add("title-bar-text");
      this.titleBarText.innerHTML=this.axis;
      this.titleBarContainer.appendChild(this.titleBarText);

      this.buttonEl = document.createElement("input");
      this.buttonEl.type = "button";
      this.buttonEl.classList.add("close-buttons");
      this.buttonEl.value = "X";
      this.titleBarContainer.appendChild(this.buttonEl);
      this.el.appendChild(this.titleBarContainer);

      //creating title div : 
      // this.axisTitleDiv =  document.createElement("div");
      // this.axisTitleDiv.classList.add("axisDiv-title");
      // this.axisTitleDiv.classList.add("text-lg");
      // this.el.appendChild(this.axisTitleDiv);
      // this.axisTitleDiv.innerHTML=this.axis;

      // self=this;
      //creating content div : 
      this.axisContent =  document.createElement("div");
      this.axisContent.classList.add("axisBox-content");
      this.axisContent.classList.add("text-lg");
      this.el.appendChild(this.axisContent);
      this.axisContent.innerHTML=this.descriptionENG;


      let self=this;

      //close seedbox on button click:
      this.buttonEl.addEventListener("click", function(){
          self.el.style= "display: none;"
       });
      }
  

      openBox(){

      let self = this;
      this.el.style.display ="block";
  }

  setAsDraggableElement(elmnt) {
      let self = this;
      let boxIsDragging = false;
      elmnt.addEventListener("mousedown", dragMouseDown);
    elmnt.addEventListener("mouseup", closeDragElement);
    elmnt.addEventListener("mousemove", elementDrag);
  
      function dragMouseDown(event) {
        // Add event as a parameter
        console.log(event.target);
        
       if(!(event.target===document.querySelector("#close-button"))){
        event.preventDefault();
  
        if (self.boxIsDragging === false ) {
          // console.log("here");
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