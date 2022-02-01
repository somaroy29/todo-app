const date=document.getElementById("date")
const navToggle=document.querySelector(".nav-toggle")
const linksContainer=document.querySelector(".links-container")
const links=document.querySelector(".links")

navToggle.addEventListener("click",function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight=linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight=links.getBoundingClientRect().height;
    // console.log(linksHeight)
    if(containerHeight === 0){
        linksContainer.style.height=`${linksHeight}px`;
    }
    else{
        linksContainer.style.height=0;
    }
});

//***************** FIXED NAVBAR ********************//
const navbar=document.getElementById("nav");
const topLink=document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
    // console.log(scrollHeight);
    // console.log(navHeight);
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight>500){
        topLink.classList.add("show-links")
    }else{
        topLink.classList.remove("show-links")
    }
});





