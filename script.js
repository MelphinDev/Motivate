const quote = document.getElementById("quote");
const clock = document.getElementById("clock");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const navigate = document.getElementByID("navigate");

const quotes = [];
const birth = new Date(yearInput.value, monthInput.value - 1, dayInput.value);

function visible(elem) {}
function randInt(n) {
  return Math.floor(n * Math.random());
}
function randomQuote() {
  return quotes[randInt(quotes.length)];
}
// https://www.tutorialspoint.com/converting-seconds-in-years-days-hours-and-minutes-in-javascript
const findTime = (num) => {
   if(num < 1){
      return '0'
   };
   const qualifier = num => (num > 1 ? 's' : '')
   const numToStr = (num, unit) => num > 0 ? ` ${num}
   ${unit}${qualifier(num)}` : ''
   const oneMinute = 60;
   const oneHour = oneMinute * 60;
   const oneDay = oneHour * 24;
   const oneYear = oneDay * 365;
   const times = {
      year: ~~(num / oneYear),
      day: ~~((num % oneYear) / oneDay),
      hour: ~~((num % oneDay) / oneHour),
      minute: ~~((num % oneHour) / oneMinute),
      second: num % oneMinute,
   };
   let str = '';
   for (let [key, value] of Object.entries(times)) {
      str += numToStr(times[key], key)
   }
   const arr = str.trim().split(' ')
   const res = []
   arr.forEach((x, i) => {
      if (i % 2 === 0 && i !== 0) res.push(i === arr.length - 2 ? 'and' : ',')
      res.push(x)
   })
   return res.join(' ').replace(/\s,/g, ',')
}
function timeCalc(birthDate) {
  return findTime(Date.now() - birthDate);
}

setInterval(function() {
  clock.innerText = timeCalc(birth);
}, 1000);
