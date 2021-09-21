const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', startSwitchColor);
stopBtn.addEventListener('click', stopSwitchColor);

let switchColor;

function startSwitchColor() {
  startBtn.disabled = true;

   switchColor = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

function stopSwitchColor() {
  clearInterval(switchColor);
  startBtn.disabled = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};