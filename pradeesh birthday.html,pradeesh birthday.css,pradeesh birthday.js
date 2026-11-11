<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday Pradeesh!</title>

<style>
* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
  background: linear-gradient(135deg,#ffe0ef,#e8dcff,#dff7ff);
  color: #44334e;
  padding: 25px 12px;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 28px 15px;
  background: #ffffffdf;
  border-radius: 28px;
  box-shadow: 0 12px 40px #9b76aa35;
}

h1 {
  color: #d34b91;
  font-size: 38px;
}

.subtitle { line-height: 1.6; }

.balloons {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin: 35px 0;
}

.balloon {
  width: 95px;
  height: 125px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  animation: float 2s infinite ease-in-out;
  box-shadow: inset -10px -8px 0 #00000015;
}

.balloon::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 1px;
  background: #999;
  top: 125px;
  left: 50%;
}

.pink { background: #ff75ae; }
.purple { background: #a58aff; animation-delay: .4s; }
.blue { background: #63c9ec; animation-delay: .8s; }

@keyframes float {
  50% { transform: translateY(-12px); }
}

.popped {
  animation: pop .35s forwards;
  pointer-events: none;
}

@keyframes pop {
  50% { transform: scale(1.4); opacity: .5; }
  100% { transform: scale(0); opacity: 0; }
}

.wish {
  display: none;
  padding: 20px;
  margin: 20px auto;
  max-width: 450px;
  border-radius: 20px;
  background: #fff0f7;
  line-height: 1.7;
  animation: appear .5s;
}

.wish.show { display: block; }

@keyframes appear {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

#bonus { display: none; margin-top: 25px; }

.star {
  font-size: 35px;
  padding: 12px;
  border: none;
  border-radius: 15px;
  background: white;
  cursor: pointer;
  margin: 5px;
}

#result {
  margin: 20px;
  font-weight: bold;
  color: #b34486;
}

.confetti {
  position: fixed;
  top: -20px;
  animation: fall 3s linear forwards;
  pointer-events: none;
}

@keyframes fall {
  to { transform: translateY(110vh) rotate(600deg); }
}

button:disabled { opacity: .5; }

</style>
</head>

<body>

<div class="container">

<h1>🎂 Happy 20th Birthday! 🎂</h1>

<h2>Dear Pradeesh 💗</h2>

<p class="subtitle">
Three balloons, three wishes and one special surprise!<br>
Tap each balloon to discover your birthday wishes. 🎈
</p>

<div class="balloons">
<button class="balloon pink" onclick="popBalloon(this,0)"></button>
<button class="balloon purple" onclick="popBalloon(this,1)"></button>
<button class="balloon blue" onclick="popBalloon(this,2)"></button>
</div>

<h3 id="instruction">Pop your first balloon! 🎈</h3>

<div class="wish" id="wish">
<h2 id="wishTitle"></h2>
<p id="wishText"></p>
</div>

<div id="bonus">

<h2>🎁 BONUS SURPRISE!</h2>
<p>You unlocked the mystery stars! Pick one! ⭐</p>

<button class="star" onclick="challenge(0,this)">⭐</button>
<button class="star" onclick="challenge(1,this)">🌟</button>
<button class="star" onclick="challenge(2,this)">✨</button>

<div id="result"></div>

</div>

</div>

<script>

const wishes = [
{
title: "💛 Wish 1 – Happiness",
text: "May your life always be filled with laughter, happiness and beautiful moments. Keep smiling!"
},
{
title: "🚀 Wish 2 – Success",
text: "May all your dreams come true. Keep chasing your goals and make your 20s amazing!"
},
{
title: "🫶 Wish 3 – Friendship",
text: "May you always have genuine friends, crazy adventures and unforgettable memories!"
}
];

const challenges = [
"😂 Challenge: Make three people laugh today!",
"🎤 Challenge: Sing your favourite song for 20 seconds!",
"📸 Challenge: Take a crazy birthday selfie!"
];

let count = 0;
let used = [];

function popBalloon(button,index) {

if (button.classList.contains("popped")) return;

button.classList.add("popped");
button.disabled = true;

count++;

document.getElementById("wishTitle").innerText =
wishes[index].title;

document.getElementById("wishText").innerText =
wishes[index].text;

const box = document.getElementById("wish");
box.classList.remove("show");
void box.offsetWidth;
box.classList.add("show");

confetti();

if(count === 3) {
document.getElementById("instruction").innerText =
"🎉 All three wishes unlocked!";

document.getElementById("bonus").style.display = "block";
} else {
document.getElementById("instruction").innerText =
"Yay! " + (3-count) + " more balloon(s) to pop!";
}
}

function challenge(index,button) {

if(used.length > 0) return;

used.push(index);
button.innerText = "🎉";

document.querySelectorAll(".star").forEach(b => {
b.disabled = true;
});

document.getElementById("result").innerText =
challenges[index];

confetti();
}

function confetti() {

const emojis = ["🎉","💗","✨","⭐","🎈"];

for(let i=0;i<25;i++) {

const item = document.createElement("span");

item.className = "confetti";
item.innerText = emojis[Math.floor(Math.random()*emojis.length)];

item.style.left = Math.random()*100 + "vw";
item.style.fontSize = "20px";
item.style.animationDelay = Math.random() + "s";

document.body.appendChild(item);

setTimeout(() => item.remove(),3500);
}
}

</script>

</body>
</html>