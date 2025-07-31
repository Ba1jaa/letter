const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heart = document.getElementById("heart");
const letter = document.getElementById("letter");
const emojiRain = document.getElementById("emojiRain");

const emojis = ["❤️", "😍", "💕", "💖", "💘", "💝", "💓", "❣️", "💗", "💞"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.animationDuration = (3 + Math.random() * 4) + "s";
  emoji.style.animationDelay = (Math.random() * 5) + "s";
  emojiRain.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, (parseFloat(emoji.style.animationDuration) + parseFloat(emoji.style.animationDelay)) * 1000);
}

let emojiInterval;

yesBtn.addEventListener("click", () => {
  document.querySelector("h1").textContent = "You said YES! 💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  heart.style.display = "block";

  emojiInterval = setInterval(() => {
    createEmoji();
    createEmoji();
    createEmoji();
  }, 300);

  setTimeout(() => {
    letter.style.display = "block";
    setTimeout(() => clearInterval(emojiInterval), 10000);
  }, 1500);
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 600 - 300; // wider horizontal range
  const y = Math.random() * 300 - 150; // taller vertical range
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  const x = Math.random() * 600 - 300;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
