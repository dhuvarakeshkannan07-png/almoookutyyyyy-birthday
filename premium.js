// ==========================
// FLOATING STARS
// ==========================

for(let i=0;i<80;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

document.body.appendChild(star);
// ==========================
// FLOATING HEARTS
// ==========================

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

6+Math.random()*5+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

},1200);
// ==========================
// CONFETTI ENGINE
// ==========================

function confettiBlast(){

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.animationDelay=

Math.random()*2+"s";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

}
// ==========================
// PHOTO REVEAL
// ==========================

function revealPhoto(){

document.body.innerHTML=`

<div class="photoReveal">

<img id="memoryPhoto"

src="photo.jpg">

<h1>

❤️ Hidden Treasure ❤️

</h1>

<p>

Every smile...

Every memory...

Every second with you...

is priceless.

🥹

</p>

</div>

`;

setTimeout(()=>{

document
.querySelector(".photoReveal")
.classList.add("show");

confettiBlast();

},800);

}
// ==========================
// SHOOTING STARS
// ==========================

setInterval(()=>{

let star=document.createElement("div");

star.className="shootingStar";

star.style.left=Math.random()*60+"vw";

star.style.top=Math.random()*30+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

},5000);
// ==========================
// CURSOR SPARKLES
// ==========================

document.addEventListener("mousemove",(e)=>{

let s=document.createElement("div");

s.className="sparkle";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1000);

});

}
// ==========================
// ACHIEVEMENT
// ==========================

function unlockAchievement(title){

let card=document.createElement("div");

card.className="achievement";

card.innerHTML="🏆 "+title;

document.body.appendChild(card);

setTimeout(()=>{

card.remove();

},4000);

}