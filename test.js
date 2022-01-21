const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");

navToggle.addEventListener('click',function(){
    // console.log(links.classList.contains("random")); --just for checking purpose
    // console.log(links.classList.contains("links")); --just for checking purpose
// if(links.classList.contains("show-links")){
//     links.classList.remove("show-links");
// }
// else{
//     links.classList.add("show-links");
// }     -- alternative way of toggle method(line no 13)
links.classList.toggle("show-links");

})