const months=[
    "january","february","march","april","may","june","july","august","spetember","october","november","december"
]
const weekdays=[
    "sunday","monday","tuesday","wednesday","thursday","friday","saturday"
]

const giveaway=document.querySelector(".giveaway")
const deadline=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h4");

//setting up date dynamically instead of writing manually
// console.log(items);
let futureDate=new Date(2022,1,7,14,4,0)
// console.log(futureDate);

const year=futureDate.getFullYear();
let month=futureDate.getMonth();
month=months[month];
const day=futureDate.getDate();
const hour=futureDate.getHours();
const min=futureDate.getMinutes();
const sec=futureDate.getSeconds();
const weekday= weekdays[futureDate.getDay()];
// console.log(weekday);
giveaway.textContent=`deal ends on this week ${weekday} ${year} ${month} ${day},   ${hour} : ${min} : ${sec} PM`; 

const futureTime=futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
    const today=new Date().getTime();
    const t=futureTime-today;
    // console.log(t);
    //1s=1000ms
    // 1m=60s
    // 1hr=60m
    // 1day=24hr

    // console.log(today);

    // values in ms
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMin=60*1000;
    // console.log(oneDay);

    //calculate all values :-
    let days=t/oneDay;
    days=Math.floor(days);
    console.log(days);

    let hrs=Math.floor((t%oneDay) / oneHour);
    let mins=Math.floor((t%oneHour) / oneMin);
    let sec=Math.floor((t%oneMin) / 1000);

    console.log(hrs);
    console.log(mins);
    console.log(sec);
 
    // let mins=t/oneMin
    // mins=Math.floor(mins);
    // console.log(mins);
    const values=[days, hrs, mins,sec]; //set values array
    console.log(values);

    function format(item){ //formatting the days,hrs,mins,sec. 
        if (item<10){
            return (item=`0${item}`);
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML=`<h1 class="exp">sorry :( the sale expired.</h1>` 
    }
}
//countdown for sale date
let countdown=setInterval(getRemainingTime,1000);

getRemainingTime();