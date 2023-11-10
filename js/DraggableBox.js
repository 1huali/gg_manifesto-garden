class DraggableBox {
  constructor(divContainer) {
    console.log("this");
    this.boxIsDragging =false;
    // Activates the parent function:
    this.setAsDraggableElement(divContainer);
  }
  

 setAsDraggableElement(elmnt) {
    let self = this;
//     let boxIsDragging = false;
    elmnt.addEventListener("mousedown", dragMouseDown);
  elmnt.addEventListener("mouseup", closeDragElement);
  document.addEventListener("mousemove", elementDrag);

    function dragMouseDown(event) {
      // Add event as a parameter
      console.log(event);
      event.preventDefault();
      if (self.boxIsDragging === false) {
        console.log("here");
        self.boxIsDragging = true;
       
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
} //end of class
