const slider=document.querySelectorAll(".slide");
const nextBTN=document.querySelector(".nextBtn");
const prevBTN=document.querySelector(".prevBtn");

console.log(nextBTN);
console.log(prevBTN);

slider.forEach(function(slide,index){
    slide.style.left=`${index*100}%`;
});

let counter=0;

nextBTN.addEventListener("click",function(){
    counter++;
    sliding();
});

prevBTN.addEventListener("click",function(){
    counter--;
    sliding();
}); 

function sliding(){

    // Working with slides
    // if(counter===slider.length){
    //     counter=0;
    // }
    // if(counter<0){
    //     counter=slider.length-1;
    // }

    // Working with buttons
    //nextBtn
    if(counter<slider.length-1){
        nextBTN.style.display="block";
    }else{
        nextBTN.style.display="none";
    }
    //prevBtn
    if(counter>0){
        prevBTN.style.display="block";
    }else{
        prevBTN.style.display="none";
    }

    slider.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`;
    });
}
prevBTN.style.display="none";