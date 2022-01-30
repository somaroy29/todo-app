    //items
    const menu=[
        {
            id:1,
            title:"buttermilk pancake",
            catagory:"breakfast",
            price:21,
            img:"pancake.jfif",
            desc:"A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan."
        },
        {
            id:2,
            title:"chilli noodles",
            catagory:"eveningsnacks",
            price:31,
            img:"noodles.jfif",
            desc:"Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use."
        },
        {
            id:3,
            title:"Milkshake Drink",
            catagory:"shake",
            price:45,
            img:"shake.jpg",
            desc:"A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch."
        },
        {   id:4,
            title:"chicken pizza",
            catagory:"eveningsnacks",
            price:35,
            img:"pizza.jfif",
            desc:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."
        },
        {
            id:5,
            title:"mango shake",
            catagory:"shake",
            price:25,
            img:"mango.jfif",
            desc:"Mangoes - You'll need fresh ripe chopped mangoes to make this shake. You can also use frozen mango chunks or canned mango pulp."
        },
        {

            id:6,
            title:"fruit salad",
            catagory:"breakfast",
            price:15,
            img:"salad.jfif",
            desc:"Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their own juices or a syrup. In different forms."
        },
        {
            id:7,
            title:"fruit salad",
            catagory:"dinner",
            price:75,
            img:"meal.jfif",
            desc:"meal is an eating occasion that takes place at a certain time and includes prepared food. The names used for specific meals in English vary, depending on the speaker's culture."
        }
    ]
    const sectionCenter=document.querySelector(".section-center");
    const container=document.querySelector(".btn-container");
    // console.log(filterBtns);
    window.addEventListener("DOMContentLoaded",function(){
        displayMenuItems(menu);
        displayMenuBtns();
    });
        // console.log(displayMenu);
    //    filterBtns.forEach(function(btn){
    //        btn.addEventListener("click",function(e){
    //         const catagory=e.currentTarget.dataset.id;
    //         // console.log(catagory);
    //         const menuCatagory=menu.filter(function(menuItem){
    //             // console.log(menuItem.catagory)
    //             if(menuItem.catagory===catagory){
    //                 return menuItem;
    //             }
    //         });
    //         if(catagory==="All"){
    //             displayMenuItems(menu);
    //         }
    //         else{
    //             displayMenuItems(menuCatagory);
    //         }
    //    });
    // });

    function displayMenuItems(menuItems){
        // console.log(menuItems)
        let displayMenu=menuItems.map(function(item){
            // console.log(item);
            // return item;
            // return `<h1>${item.title}</h1>`;
            return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}/>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
            </article>`;
        });
        displayMenu=displayMenu.join("");
        sectionCenter.innerHTML=displayMenu;
    }
    function displayMenuBtns(){
        const catagories=menu.reduce(function(values,item){
            if(!values.includes(item.catagory)){
                values.push(item.catagory);
            }
           return values;
        },["all"]);
    console.log(catagories)
const catagoryBtns=catagories.map(function(catagory){
    return `<button class="filter-btn" type="button" data-id=${catagory.replace(/\s+/g, '')}>${catagory}</button>`;
})
.join("");
console.log(catagoryBtns);
container.innerHTML=catagoryBtns;
const filterBtns=document.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
     const catagory=e.currentTarget.dataset.id;
     // console.log(catagory);
     const menuCatagory=menu.filter(function(menuItem){
         // console.log(menuItem.catagory)
         if(menuItem.catagory===catagory){
             return menuItem;
         }
     });
     if(catagory==="all"){
         displayMenuItems(menu);
     }
     else{
         displayMenuItems(menuCatagory);
     }
});
});

    }