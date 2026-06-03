let nowDay =document.getElementById("nowDay");
let secDay =document.getElementById("secDay");
let thiDay =document.getElementById("thiDay");
let search = document.getElementById("search");

let days = ['Sunday','Monday','Thuesday','Wednesday','Thursday','Friday','Saterday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let api;
let res;
let countery ;

async function getWeather(countery){
    api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20c08f7e5d01411d9d804019241212&q=${countery}&days=3`);
    res = await api.json();
    // console.log(res);
    nowday();
    secday();
    thiday();
}
function searchCountery(value) {
    countery = value;
    if (value.length>=3) {
        // console.log(countery);
        getWeather(countery);
    }
}
getWeather("cairo");
let date =new Date();
function nowday() {
    nowDay.innerHTML = `
     <div class="nawDay ">
                            <div class="head1 pb-1 pt-2 ps-2 pe-2 d-flex justify-content-between">
                                <p>${days[date.getDay()]}</p>
                                <p><span>${date.getDate()}</span> ${months[date.getMonth()]}</p>
                            </div>
                            <div class="contentDay pt-4 ps-4 pe-0">
                                <div>
                                    <h4>${res.location.name}</h4>
                                </div>
                                <p class="degree">${res.current.temp_c} <sup>o</sup> C</p>
                                <div class="ps-2">
                                    <img src="https://${res.current.condition.icon}" alt="">
                                </div>
                                <p class="text-primary mt-3">${res.current.condition.text}</p>
                                <div>
                                    <i class="fa-solid fa-umbrella me-2"><span class="ps-2">${res.current.humidity} %</span></i>
                                    <i class="fa-solid fa-wind me-2"><span class="ps-2">${res.current.wind_kph} Km/h</span></i>
                                    <i class="fa-regular fa-compass"><span class="ps-2">${res.current.wind_dir}</span></i>
                                </div>
                            </div>
                        </div>`
}
function secday() {
    secDay.innerHTML = `
    <div class="contentSec text-center">
                            <div class="head2 pb-1 pt-2 ">
                                <p>${days[date.getDay() + 1]}</p>
                            </div>
                            <div class="contentDay2 pt-5">
                                <div>
                                    <img src="https://${res.forecast.forecastday[1].day.condition.icon}" alt="">
                                </div>
                                <p class="fs-4 pb-0 mb-0 fw-bold text-white pt-5">${res.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup> C</p>
                                <small class="fs-6">${res.forecast.forecastday[1].day.mintemp_c} <sup>o</sup></small>
                                <p class="text-primary mt-3">${res.forecast.forecastday[1].day.condition.text}</p>
                            </div>`
}
function thiday() {
    thiDay.innerHTML = `
     <div class="contentThi text-center">
                            <div class="head3 pb-1 pt-2 ">
                                <p>${days[date.getDay() + 2]}</p>
                            </div>
                            <div class="contentDay3 pt-5">
                                <div>
                                    <img src="https://${res.forecast.forecastday[2].day.condition.icon}" alt="">
                                </div>
                                <p class="fs-4 pb-0 mb-0 fw-bold text-white pt-5">${res.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup> C</p>
                                <small class="fs-6">${res.forecast.forecastday[2].day.mintemp_c} <sup>o</sup></small>
                                <p class="text-primary mt-3">${res.forecast.forecastday[2].day.condition.text}</p>
                            </div>
                        </div>`
}