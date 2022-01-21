const toggleBtn=document.querySelector(".sidebar-toggle");
const closeBtn=document.querySelector(".btn-close");
const sidebar=document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function(){
    console.log(sidebar.classList); //--just for checking purpose
    //method:1 -> long method of toggling
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar");
    // }
    // else{
    //     sidebar.classList.add("show-sidebar");
    // }
    //method:2 -> alternative and short method(one line method)
    sidebar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click",function(){
sidebar.classList.remove("show-sidebar");
})
