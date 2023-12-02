class InfoBox{
    constructor(link,description,axis,linkNum){
        this.link=link;
        this.description=description,
        this.axis=axis;
        this.linkNum=linkNum;
        this.element=null;

        let self=this;

        //close seedbox on button click:
        document.getElementById("close-seedbox-button").addEventListener("click", function(){
            document.getElementById("seedBoxDiv").style = "display: none;"
        });
    }
    openSeedbox(){
        // $("#talkBoxDialog").dialog('open');
        document.getElementById("seedBoxDiv").style = "display: block;"

        // if (this.element===null) {
        //     let div = document.createElement("div");
        //                 div.id="seedboxEl"+this.linkNum;
        //                 div.classList.add('seed-container');
        //                 document.body.appendChild(div)
        //                 this.element=div;
        //                 // console.log(this.element)
        //                 div.innerHTML="✿ Link: "+this.link;
        //                 div.innerHTML="✿ Description: "+self.description;
        //                 div.innerHTML="✿ Axis: "+this.axis;
        //               }

        // this.element.style = "display: block";

        document.getElementById("linkTitle").innerHTML="✿ Link: "+this.link;
        document.getElementById("linkDescription").innerHTML="✿ Description: "+self.description;
        document.getElementById("linkAxis").innerHTML="✿ Axis: "+this.axis;

        document.getElementById("linkOpen").addEventListener("click", function(){
            console.log(`${self.link}`); //?? GIVES UNDEFINED
            window.open(`${this.link}`);
        })
    }
}

