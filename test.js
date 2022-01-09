const Clrchanger=document.getElementById("colurChange")
const colourList=["red","blue","pink","yellow"];
let counter = 0;
function colourChanger(){
    console.log(counter,counter%4);
    Clrchanger.style.background=colourList[counter%4];
    counter++;
    
}
var stopthis=setInterval(colourChanger,2000);

Clrchanger.onclick= function stopplaying(){
    clearInterval(stopthis);
    Clrchanger.innerHTML="stopped dislaying this, exit."

}
