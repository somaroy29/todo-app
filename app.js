const text=[
    `a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.`,
    `Harry Potter was born in Surrey, England, United Kingdom. His parents, Lily and James Potter, were killed by an evil wizard named Lord Voldemort, while Voldemort was trying to kill Harry. ... He eventually discovers that there are many magical people, living secretly and hiding from non-wizards (known as "Muggles").`,
    `Generally, what's considered a magnificent sunset is a particularly colorful one, with hues of red, orange and pink streaked across the evening sky. And when it comes to color, the brighter the better.`,
    `Heavy rains destroy crops and cause floods. Children enjoy this season to the utmost, they take shower, float paper boats and dive in the water of rain. All water bodies often get full of water, the rivers that dry get plenty of water. All plants and trees become green and greenery makes the environment more beautiful.`,
    `sch is a second-level domain used by several countries, including Iran (. ... sch.uk. It is up to the individual countries whether to use this classification system, and whether a given organization qualifies as a school.`,
    `Shiva's wife was Parvati, often incarnated as Kali and Durga. She was in fact a reincarnation of Sati (or Dakshayani), the daughter of the god Daksha.`,
    `Short Stories · Raman the detective · The real mother · Agasthya drinks the ocean · The generosity of Rantideva · Krishna in Sudama's village · Krishna meets Sudama.`,
    `A cloud is water vapour in the atmosphere (sky) that has condensed into very small water droplets or ice crystals that appear in visible shapes or formations above the ground. ... The atmosphere always has some water vapour. Clouds form when the atmosphere can no longer hold all the invisible air vapor.`,
    `Birds are very special animals that have particular characteristics which are common amongst all of them. For instance, all of them have feathers, wings and two legs. Similarly, all birds lay eggs and are warm-blooded. They are very essential for our environment and exist in different breeds.`
]
// console.log(text.length);

const form=document.querySelector(".lorem-form");
const amount=document.getElementById("amount");
const result=document.querySelector(".lorem-text");

form.addEventListener("submit",function(e){
    console.log("hello");
    e.preventDefault(); //to prevent by default behaviour of any event
    const value=parseInt(amount.value); //parseInt-> it returns the exact data type. 
    console.log(value); //it is printing whatevr value we have in that "input box", be default input type will be string.
    console.log(isNaN(value));
    const random=Math.floor(Math.random()*text.length);
    console.log(random);

    //handling empty value, handling negative value and number bigger than 9 (total no of paragraph = 9) :
    if(isNaN(value) || value<0 || value>9){
            result.innerHTML=`<p class="result">${text[random]} </p>`;
    }
    //when users want to get the exact paragraph for their number input.
    else{
        let tempText=text.slice(0,value);
        // console.log(tempText);
        tempText=tempText.map(function(item){
            return `<p class="result">${item} </p>`;
            console.log();
        }).join("")
        result.innerHTML=tempText;
    }
})

