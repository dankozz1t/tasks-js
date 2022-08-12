const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пятниця',
  'Субота',
];

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const dayOfWeekEl = document.querySelector('.date-day');
const dayOfMonthEl = document.querySelector('.date');
const monthEl = document.querySelector('.date-month');
const yearEl = document.querySelector('.date-year');
const currentTime = document.querySelector('.digital-clock');

const secondsArrow = document.querySelector('.clock-seconds__arrow');
const minutesArrow = document.querySelector('.clock-minutes__arrow');
const hoursArrow = document.querySelector('.clock-hours__arrow');

const timerId = setInterval(() => {
  const date = new Date();

  const dayOfWeek = namesOfDay[date.getDay()];
  dayOfWeekEl.textContent = dayOfWeek;

  const dayOfMonth = date.getDate();
  dayOfMonthEl.textContent = dayOfMonth;

  const month = namesOfMonth[date.getMonth()];
  monthEl.textContent = month;

  const year = date.getFullYear();
  yearEl.textContent = year;

  const hours = date.getHours().toString().padStart(2, '0');

  const min = date.getMinutes().toString().padStart(2, '0');

  const sec = date.getSeconds().toString().padStart(2, '0');

  const currentTimeTabel = `Поточний час: ${hours}:${min}:${sec}`;
  currentTime.textContent = currentTimeTabel;

  // move arrows

  secondsArrow.style.transform = `rotate(${sec * 6}deg)`;
  minutesArrow.style.transform = `rotate(${min * 6}deg)`;
  hoursArrow.style.transform = `rotate(${hours * 30 + min * 0.33}deg)`;
}, 1000);
