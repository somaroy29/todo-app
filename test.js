const reviews=[
    {
    id: 1,
    name:"Brad Jonson",
    job:"UX Designer",
    img:"./man1.jfif",
    text:"User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function."
},
    {
    id: 2,
    name:"Sara Jomes",
    job:"Senior Developer",
    img:"./woman1.jfif",
    text: "Also known as a software engineer, a senior developer performs various development duties, such as coding and web development. "
},
    {
    id: 3,
    name:"Sid Steven",
    job:"Content Writer",
    img:"./man2.jpg",
    text: "Content Writer is a creative professional that writes copy for websites, blogs, social media, whitepapers, ebooks and many other platforms."
},
    {
    id: 4,
    name:"Paula Brad",
    job:"Intern",
    img:"./woman2.jpg",
    text: "A software engineer intern is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software. "
}

];
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item=reviews[currentItem];
    img.src=item.img;
    info.innerHTML=item.text;
    job.innerHTML=item.job;
    author.innerHTML=item.name;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
currentItem=0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})
randomBtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});