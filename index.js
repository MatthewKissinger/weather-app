// get a location from the user and display the weather, toggle between Celsius and Fahrenheight

// open weather API key: befd87c0ecdf2bcb8020b97c9012c6d5

// global variables

let Fahrenheight = 'imperial';
let Celsius = 'metric';

// DOM cache
let cityName = document.querySelector('.city-name');

let cityTemp = document.querySelector('.city-temp');

let userCityInput = document.querySelector('#city-name');

let cityInput = document.querySelector('.city-input-form');

let weatherImg = document.querySelector('.weather-img');


// initial render on page load
getData('London', Celsius);
cityName.innerText = 'London';

cityInput.addEventListener('submit', (e) => {
    e.preventDefault();
    let userCity = userCityInput.value;

    getData(userCity, Celsius);
    cityName.innerText = `${userCity}`;
})

// gets all of the json data for a given city 
async function getData(city, uom) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=befd87c0ecdf2bcb8020b97c9012c6d5&units=${uom}`);
    let dataJson = await data.json();

    cityTemp.innerText = `${dataJson.main.temp}°C`;
    weatherImg.src = `http://openweathermap.org/img/wn/${dataJson.weather[0].icon}@2x.png`
}









