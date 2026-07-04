// =============================
// REWARD ENGINE - PART 1
// =============================

const rewardWheel = document.getElementById("rewardWheel");
const rewardSpin = document.getElementById("rewardSpin");
const counter = document.getElementById("counter");

let collected = 0;
let spinning = false;

const rewards = [
"QUEEN",
"CRIME",
"GARDEN",
"FUTURE",
"DOG",
"LIBRARY",
"TREASURE",
"HEART"
];

let unlocked = [];

rewardSpin.addEventListener("click",spinReward);

function spinReward(){

if(spinning) return;

if(collected==8){

showFinalReward();

return;

}

spinning=true;

rewardSpin.disabled=true;

let rotation=(360*8)+Math.floor(Math.random()*360);

rewardWheel.style.transform=
`rotate(${rotation}deg)`;

setTimeout(()=>{

chooseReward();

},5200);

}

function chooseReward(){

let available=rewards.filter(r=>!unlocked.includes(r));

let random=
available[
Math.floor(Math.random()*available.length)
];

unlocked.push(random);

collected++;

counter.innerHTML=
collected+" / 8";

spinning=false;

rewardSpin.disabled=false;

openReward(random);

}