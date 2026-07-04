// =====================================
// WHEEL OF SURPRISES - PART 1
// =====================================

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const popup = document.getElementById("popup");

let firstSpin = true;
let spinning = false;

spinBtn.addEventListener("click", spinWheel);

function spinWheel(){

    if(spinning) return;

    spinning = true;

    spinBtn.disabled = true;

    // Random spins for premium effect
    const totalRotation = 360 * 8 + 25;

    wheel.style.transition =
    "transform 5s cubic-bezier(.17,.67,.18,1)";

    wheel.style.transform =
    `rotate(${totalRotation}deg)`;

    setTimeout(() => {

        if(firstSpin){

            firstSpin = false;

            showBetterLuck();

        }

    },5200);

}

function showBetterLuck(){

    popup.style.display="flex";

    popup.animate([

        {
            opacity:0,
            transform:"scale(.8)"
        },

        {
            opacity:1,
            transform:"scale(1)"
        }

    ],{

        duration:500,
        fill:"forwards"

    });

    setTimeout(()=>{

        popup.style.display="none";

        showSystemError();

    },2500);

}

// Next function
// (Will be added in Part 4.3B)

function showSystemError(){

}
⚠ SYSTEM ERROR

This result
cannot be assigned

to

Sureemmaaaa ❤️

Reason

She deserves
something much better...

██████████

100%
🫷 WAIT...

WAIT...

😂

Avlo seekirama
unna vitruvena?

Today's adventure
ippo dhaan
start aagudhu ❤️
// =====================================
// PART 2
// SYSTEM ERROR + WAIT SCREEN
// =====================================

function showSystemError(){

    document.body.innerHTML = `

    <div class="system-screen">

        <div class="system-card">

            <h1>⚠</h1>

            <h2>SYSTEM ERROR</h2>

            <p>

            This result

            <br><br>

            cannot be assigned to

            <br><br>

            <b>Sureemmaaaa ❤️</b>

            </p>

            <br>

            <p>

            Reason

            <br><br>

            She deserves

            something

            much better...

            </p>

            <br>

            <div class="progress">

                <div class="progress-bar"></div>

            </div>

            <h3>

            Recalculating Rewards...

            </h3>

        </div>

    </div>

    `;

    setTimeout(showWaitScreen,4500);

}

function showWaitScreen(){

    document.body.innerHTML=`

    <div class="wait-screen">

        <div class="wait-card">

            <h1>

            🫷😂

            </h1>

            <h2>

            WAIT...

            WAIT...

            </h2>

            <p>

            Avlo seekirama

            unna vitruvena?

            </p>

            <br>

            <p>

            😂

            </p>

            <br>

            <p>

            Idhu just prank.

            </p>

            <br>

            <h3>

            Today's real adventure

            starts now...

            ❤️

            </h3>

            <button id="continueBtn">

            🎁 Continue

            </button>

        </div>

    </div>

    `;

    document
    .getElementById("continueBtn")
    .addEventListener("click",goRewardWheel);

}

function goRewardWheel(){

    window.location.href="reward.html";

}