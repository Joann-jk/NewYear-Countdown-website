const daye1=document.getElementById("day");
const houre1=document.getElementById("hour");
const mine1=document.getElementById("minute");
const sece1=document.getElementById("second");

const newyeartime= new Date("Jan 1,2025 00:00:00").getTime();
update();
function update(){
    const now=new Date().getTime();
    const gap=newyeartime-now;
    const sec=1000;
    const min=sec*60;
    const hour=min*60;
    const day=hour*24;


    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/min);
    const s=Math.floor((gap%min)/sec);
    console.log(d);
    daye1.innerText=d;
    houre1.innerText=h;
    mine1.innerText=m;
    sece1.innerText=s;
setTimeout(update,1000);
} 

