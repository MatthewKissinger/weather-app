// get a location from the user and display the weather, toggle between Celsius and Fahrenheight

// open weather API key: befd87c0ecdf2bcb8020b97c9012c6d5

// TODO
// Add in a toggle for F to C unit of measurement

// global variables

let Fahrenheight = 'imperial';
let Celsius = 'metric';

let uom = Celsius;

let userCity = 'London';

// DOM cache
let cityName = document.querySelector('.city-name');

let cityTemp = document.querySelector('.city-temp');

let uomToggleBtn = document.querySelector('.uom-toggle--btn');

let userCityInput = document.querySelector('#city-name');

let cityInput = document.querySelector('.city-input-form');

let weatherImg = document.querySelector('.weather-img');


// initial render on page load
getData(userCity, uom);
cityName.innerText = 'London';

cityInput.addEventListener('submit', (e) => {
    e.preventDefault();
    userCity = userCityInput.value;

    getData(userCity, uom);
    cityName.innerText = `${userCity}`;
})

uomToggleBtn.addEventListener('click', () => {
    toggleUom();
})

// gets all of the json data for a given city 
async function getData(city, uom) {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=befd87c0ecdf2bcb8020b97c9012c6d5&units=${uom}`);
        let dataJson = await data.json();
        console.log(dataJson);

        cityTemp.innerText = `${dataJson.main.temp} °${uom === 'metric' ? 'C' : 'F'}`;
        weatherImg.src = `http://openweathermap.org/img/wn/${dataJson.weather[0].icon}@2x.png`;
    } catch (err) {
        alert(err);
    }
}

function toggleUom() {

    if (uom === 'metric') {
        uom = 'imperial';
        uomToggleBtn.style.marginTop = '.8rem';
        uomToggleBtn.style.backgroundColor = 'black';
    } else {
        uom = 'metric';
        uomToggleBtn.style.marginTop = '.25rem';
        uomToggleBtn.style.backgroundColor = '#f1faee';
    }

    getData(userCity, uom);
}









