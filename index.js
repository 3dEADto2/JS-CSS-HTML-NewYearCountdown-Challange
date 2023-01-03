const yearEl = document.querySelector('h1');
const countdownCon = document.querySelector('.countdown-container');
const numberElArr = countdownCon.querySelectorAll('.number');

setInterval(() => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();

    const daysLeft = getDaysLeft(currMonth, currYear);
    const timeLeftArr = [daysLeft].concat(getTimeLeft());

    for (const [index, el] of numberElArr.entries()) {
        el.innerText = timeLeftArr[index]
    }

    yearEl.innerText = currYear + 1;
}, 1000);

function amountOfDays (year) {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365;
}

function getDaysLeft (month, year) {
    let daysCount = 0;
    for (let i = 0; i < month; i++) {
        const daysAmount = new Date(year, month, 0).getDate();
        daysCount += daysAmount;
    }
    daysCount += new Date().getDate();

    return amountOfDays(year) - daysCount;
}

function getTimeLeft () {
    const maxSeconds = 86400;
    const currDate = new Date();
    const hours = currDate.getHours() * 60 * 60;
    const minutes = currDate.getMinutes() * 60;
    const seconds = currDate.getSeconds();

    let secondsLeft = maxSeconds - hours - minutes- seconds;
    const hoursLeft = Math.floor(secondsLeft / 3600);
    secondsLeft -= hoursLeft * 3600;
    const minutesLeft = Math.floor(secondsLeft / 60);
    secondsLeft -= minutesLeft * 60;
    return [hoursLeft, minutesLeft, secondsLeft];
}