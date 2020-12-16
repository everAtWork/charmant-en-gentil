// The New Year Countdown JS part 

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');

const year = document.querySelector('#year');
const loading = document.querySelector('#loading');

// Set background year
const currentYear = new Date().getFullYear();
year.innerText = currentYear + 1;
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Времени обновлятор
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // добавить значения в DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h; // дабы отображался нулик перед значением меньше 10
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// отображать спинор перед появлением счётчика :)
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';

}, 1000);

// Запускается ежесекундно 
setInterval(updateCountdown, 1000);

