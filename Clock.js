"use strict";
const hoursH = document.querySelector(".hour-hand");
const minsH = document.querySelector(".min-hand");
const secH = document.querySelector(".second-hand");

const Clock = setInterval(() => {
  const now = new Date();
  const nowHour = now.getHours();
  const nowMin = now.getMinutes();
  const nowSec = now.getSeconds();
  const secondsDegrees = (nowSec / 60) * 360 + 90;
  const minsDegrees = (nowMin / 60) * 360 + (nowSec / 60) * 6 + 90;
  const hourDegrees = (nowHour / 12) * 360 + (nowMin / 60) * 30 + 90;
  hoursH.style.transform = `rotate(${hourDegrees}deg)`;
  minsH.style.transform = `rotate(${minsDegrees}deg)`;
  secH.style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);
