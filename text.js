const colors=["green","pink","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn');
const clr=document.querySelector(".color");

btn.addEventListener('click',function(){
const randomNumber=getRanNum();
console.log(randomNumber);
document.body.style.backgroundColor=colors[randomNumber];
clr.textContent=colors[randomNumber];
});

function getRanNum(){
    return Math.floor(Math.random()*colors.length);
}

