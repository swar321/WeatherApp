const api = {
    key: "292d0bff64469da57f8facf92573c2be",
    base: "https://api.openweathermap.org/data/2.5/",
    worldtimeapi: "worldtimeapi.org/api/timezone/Etc/UTC",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
//searchbox.addEventListener('keypress', forecastCheck);


function forecastCheck(evt) {
    if (evt.keyCode == 13) {
       getResults2(searchbox.value);
     }
}

function setQuery(evt) {
    if (evt.keyCode == 13) {
       getResults(searchbox.value);
    }
}


function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}






function displayResults(weather, list) {
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now)

    let temp = document.querySelector('.current .temp');
    let feelslike = document.querySelector('.feelslike')
    temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}<span>°F</span>`;
    feelslike.innerHTML = `${Math.round(weather.main.feels_like)}<span>°F</span>`;
    
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = `${weather.weather[0].main}, Humidity: ${weather.main.humidity}%`;

    let hilow = document.querySelector('.actual-hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_max)}°F / ${Math.round(weather.main.temp_min)}°F`

    let image = document.querySelector(".image1");
    insertImage();

    let wind = document.querySelector('.windspeed')
    wind.innerHTML = `${weather.wind.speed}`;

    function insertImage(){
     if (`${weather.weather[0].main}` == "Clear"){
        image.src="sunny1.gif";
     } else if (`${weather.weather[0].main}` == "Clouds"){
        image.src="cloudy1.gif";
     } else if (`${weather.weather[0].main}` == "Rain"){
        image.src="rainy1.gif";
     } else if (`${weather.weather[0].main}` == "Snow"){
        image.src="snowy1.gif";
     } else if (`${weather.weather[0].main}` == "Mist" || `${weather.weather[0].main}` == "Haze"){
         image.src="haze.gif";
     }  else{
           image.src="base.png";
       }
    }

}

function dateBuilder (d) {
    
    let months =["January", "February", "March", 
    "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];
    
    let days = ["Sunday","Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
}



searchbox.addEventListener('keypress', setQuery2);

function setQuery2(evt) {
    if (evt.keyCode == 13) {
       getResults2(searchbox.value);
    }
}



function getResults2(query) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=292d0bff64469da57f8facf92573c2be`)
        .then(forecast => {
            return forecast.json();
        }).then(displayResults2);
}

function displayResults2(forecast) {
    console.log(forecast);

    let temp1 = document.querySelector('.nexttemp1');
    temp1.innerHTML =`${Math.round(forecast.list[0].main.temp).toFixed(0)}<span>°F</span>`;

    let temp2 = document.querySelector('.nexttemp2');
    temp2.innerHTML =`${Math.round(forecast.list[1].main.temp).toFixed(0)}<span>°F</span>`;

    let temp3 = document.querySelector('.nexttemp3');
    temp3.innerHTML =`${Math.round(forecast.list[2].main.temp).toFixed(0)}<span>°F</span>`;

    let temp4 = document.querySelector('.nexttemp4');
    temp4.innerHTML =`${Math.round(forecast.list[3].main.temp).toFixed(0)}<span>°F</span>`;

    let temp5 = document.querySelector('.nexttemp5');
    temp5.innerHTML =`${Math.round(forecast.list[4].main.temp).toFixed(0)}<span>°F</span>`;

    let temp6 = document.querySelector('.nexttemp6');
    temp6.innerHTML =`${Math.round(forecast.list[5].main.temp).toFixed(0)}<span>°F</span>`;

    let temp7 = document.querySelector('.nexttemp7');
    temp7.innerHTML =`${Math.round(forecast.list[6].main.temp).toFixed(0)}<span>°F</span>`;

    let temp8 = document.querySelector('.nexttemp8');
    temp8.innerHTML =`${Math.round(forecast.list[7].main.temp).toFixed(0)}<span>°F</span>`;

    let nextfeels1 = document.querySelector('.nextfeels1');
    nextfeels1.innerHTML = `Feels Like: ${Math.round(forecast.list[0].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels2 = document.querySelector('.nextfeels2');
    nextfeels2.innerHTML = `Feels Like: ${Math.round(forecast.list[1].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels3 = document.querySelector('.nextfeels3');
    nextfeels3.innerHTML = `Feels Like: ${Math.round(forecast.list[2].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels4 = document.querySelector('.nextfeels4');
    nextfeels4.innerHTML = `Feels Like: ${Math.round(forecast.list[3].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels5 = document.querySelector('.nextfeels5');
    nextfeels5.innerHTML = `Feels Like: ${Math.round(forecast.list[4].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels6 = document.querySelector('.nextfeels6');
    nextfeels1.innerHTML = `Feels Like: ${Math.round(forecast.list[5].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels7 = document.querySelector('.nextfeels7');
    nextfeels7.innerHTML = `Feels Like: ${Math.round(forecast.list[6].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextfeels8 = document.querySelector('.nextfeels8');
    nextfeels8.innerHTML = `Feels Like: ${Math.round(forecast.list[7].main.feels_like).toFixed(0)}<span>°F</span>`;

    let nextwind1 = document.querySelector('.nextwind1');
    nextwind1.innerHTML = `Wind: ${forecast.list[0].wind.speed} MPH`;

    let nextwind2 = document.querySelector('.nextwind2');
    nextwind2.innerHTML = `Wind: ${forecast.list[1].wind.speed} MPH`;

    let nextwind3 = document.querySelector('.nextwind3');
    nextwind3.innerHTML = `Wind: ${forecast.list[2].wind.speed} MPH`;

    let nextwind4 = document.querySelector('.nextwind4');
    nextwind4.innerHTML = `Wind: ${forecast.list[3].wind.speed} MPH`;

    let nextwind5 = document.querySelector('.nextwind5');
    nextwind5.innerHTML = `Wind: ${forecast.list[4].wind.speed} MPH`;

    let nextwind6 = document.querySelector('.nextwind6');
    nextwind6.innerHTML = `Wind: ${forecast.list[5].wind.speed} MPH`;

    let nextwind7 = document.querySelector('.nextwind7');
    nextwind7.innerHTML = `Wind: ${forecast.list[6].wind.speed} MPH`;

    let nextwind8 = document.querySelector('.nextwind8');
    nextwind8.innerHTML = `Wind: ${forecast.list[7].wind.speed} MPH`;

    let nexttype1 = document.querySelector('.nexttype1');
    nexttype1.innerHTML = `${forecast.list[0].weather[0].main}`;

    let nexttype2 = document.querySelector('.nexttype2');
    nexttype2.innerHTML = `${forecast.list[1].weather[0].main}`;

    let nexttype3 = document.querySelector('.nexttype3');
    nexttype3.innerHTML = `${forecast.list[2].weather[0].main}`;

    let nexttype4 = document.querySelector('.nexttype4');
    nexttype4.innerHTML = `${forecast.list[3].weather[0].main}`;

    let nexttype5 = document.querySelector('.nexttype5');
    nexttype5.innerHTML = `${forecast.list[4].weather[0].main}`;

    let nexttype6 = document.querySelector('.nexttype6');
    nexttype6.innerHTML = `${forecast.list[5].weather[0].main}`;

    let nexttype7 = document.querySelector('.nexttype7');
    nexttype7.innerHTML = `${forecast.list[6].weather[0].main}`;

    let nexttype8 = document.querySelector('.nexttype8');
    nexttype8.innerHTML = `${forecast.list[7].weather[0].main}`;
}
