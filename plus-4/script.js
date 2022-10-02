let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let timeNow = document.querySelector('.time-now');
let dayNow = document.querySelector('.day-now');

let searchBtn = document.querySelector(".btn-search");
let cityNow = document.querySelector('.city'); 

let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = now.getDay();
let dayFull = days[day];

if(minutes <10) {
  minutes ="0"+minutes;
}
if(hours < 10) {
  hours ="0"+hours;
}

timeNow.innerHTML = `${hours} : ${minutes}`;
dayNow.innerHTML = dayFull;

let inputCity = document.querySelector('.input-city');

searchBtn.addEventListener("click",() => {
  let inputCityValue = inputCity.value;
  cityNow.innerHTML = inputCityValue;
})

inputCity.addEventListener("keypress",(e) => {
  if (e.key === "Enter") {
    let inputCityValue = inputCity.value;
    cityNow.innerHTML = inputCityValue;
  };
  
})

let tempCelsNow = 19;
let tempIcon = document.querySelectorAll(".temp-icon");

let iconCels = document.querySelector(".temp-cels");
let iconFareng = document.querySelector(".temp-fareng");
let tempNow = document.querySelector(".temp");
tempIcon.forEach(icon => {
icon.addEventListener('click',(e) => {
  if (e.target === iconCels) {
    tempNow.innerHTML = tempCelsNow;
  }
  if (e.target ===iconFareng) {
    tempNow.innerHTML = Math.round(tempCelsNow*1.8+32);
  }
})
})