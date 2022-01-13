function setUpEvents(){
    const content=document.getElementById("content");
    const btn=document.getElementById("btn");

    btn.onclick=function(){
        if(content.className=="open"){
            //shrink the box
            content.className="";
            btn.innerHTML="Show More";
        }else{
            content.className="open";
            btn.innerHTML="Show Less";
        }

    };
}

window.onload=function(){
    setUpEvents();
};