class InfoBox{
  constructor(axis,link,description,linkNum,author,type,date,title,linkXpos,linkYpos,linkImage,titre){
      this.link=link;
      this.description=description,
      this.axis=axis;
      this.linkNum=linkNum;
      this.boxIsDragging =false;
      this.author=author;
      this.type=type;
      this.date=date;
      this.title=title;
      this.titre=titre;
      this.xPos=linkXpos;
      this.yPos=linkYpos;
      this.linkImage=linkImage;
      console.log(linkImage)
      this.titleBarContainer=null;


      if (linkImage === "null"){
        let randomNumber = Math.floor(Math.random() * 10)+1;
        this.linkImage = `assets/images/flowerPix/flower${randomNumber}.png`;
      }

      this.el = document.createElement("div");
      this.el.classList.add("seed-container");
      this.el.classList.add("window");
      document.querySelector("#map").appendChild(this.el); //parent
      this.el.style.top=this.yPos+53+"px";
      this.el.style.left=this.xPos+29+"px";
      this.el.style.display = "none";
      
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
      this.titleBarContainer.classList.add("title-bar-seed-container");
      this.titleBarContainer.style.top= this.yPos+30+"px";
      this.titleBarContainer.style.left= this.xPos+30+"px";
      this.titleBarText=document.createElement("div");
      this.titleBarText.classList.add("title-bar-text");
      this.titleBarText.innerHTML=this.title;
      this.titleBarContainer.appendChild(this.titleBarText);
      this.buttonEl = document.createElement("input");
      this.buttonEl.type = "button";
      this.buttonEl.classList.add("close-buttons");
      this.buttonEl.value = "X";
      this.titleBarContainer.appendChild(this.buttonEl);
      document.getElementById("map").appendChild(this.titleBarContainer);
      this.titleBarContainer.style.display = "none";


      // self=this;
      //creating seed content div : 
      this.column1= document.createElement("div");
      this.column1.classList.add("seed-column");
      this.column2= document.createElement("div");
      this.column2.classList.add("seed-column2");
      this.spanColumn = document.createElement("div");
      this.spanColumn.classList.add("span-column");


      this.seedContent =  document.createElement("div");
      this.seedContent.classList.add("seedBox-content");
      this.el.appendChild(this.seedContent);
      this.seedContent.appendChild(this.column1);
      this.seedContent.appendChild(this.column2);
      this.seedContent.appendChild(this.spanColumn);
      //creating seed link div : 
      this.linkAxis =  document.createElement("div");
      this.column1.appendChild(this.linkAxis);
      this.linkAxis.innerHTML = "<i>"+ this.axis +"</i>";
      //creating seed title div : 
      this.linkTitle =  document.createElement("div");
      this.column1.appendChild(this.linkTitle);
      // this.column1 = appendChild(this.linkTitle);
      this.linkTitle.innerHTML="✿ " + `<a href="${this.link}">` + this.title + `</a>`;
      //implementing author link : 
      this.linkAuthor=  document.createElement("div");
      this.column1.appendChild(this.linkAuthor);
      // this.column1 = appendChild(this.linkAuthor);
      this.linkAuthor.innerHTML = this.author;
      //implementing year : 
      this.linkYear=  document.createElement("div");
      this.column1.appendChild(this.linkYear);
      // this.column1 = appendChild(this.linkYear);
      this.linkYear.innerHTML = "✿ Date: " + this.date;
      //implementing type:
      this.linkType =  document.createElement("div");
      this.column1.appendChild(this.linkType);
      this.linkType.innerHTML = "✿ Type: "+this.type;
          //implementing seed link thumbnail img : 
          this.linkImg=  document.createElement("div");
          this.column2.appendChild(this.linkImg);
          this.linkImg.innerHTML = `<img class="seed-thumbnail" src="../gg_manifesto-garden/assets/images/seeds_img/${this.linkImage}">`;
          // this.linkImg.innerHTML = `<img class="seed-thumbnail" src="../gg_manifesto-garden/assets/images/seeds_img/img1_axe1.png">`;
      //implementing seed description in the div : 
      this.linkDesc =  document.createElement("div");
      this.spanColumn.appendChild(this.linkDesc);
      this.linkDesc.innerHTML= this.description;


      let self=this;

      //close seedbox on button click:
      this.buttonEl.addEventListener("click", function(){
          self.el.style= "display: none;"
          self.titleBarContainer.style= "display: none;"
       });
      }
  

  openSeedbox(){
      let self = this;
  
      this.el.style.display ="block";
      this.titleBarContainer.style.display= "flex";
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

    removeMe(){
      this.el.remove();
      this.titleBarContainer.remove();
    }
}