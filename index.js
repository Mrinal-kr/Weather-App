const apkid="7784426564266affb68cd30d907c51b8";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function weatherCheck(city){
    const response= await fetch(url + `&appid=${apkid}`+ `&q=${city}`);
    const data = await response.json();
    // return data;
    console.log(data);

    // to add temp city humidity and wind in respective sections

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+("°C");
    document.querySelector(".city").innerHTML=(data.name);
    document.querySelector(".humidity-text").innerHTML=(data.main.humidity)+("% ");
    document.querySelector(".wind-text").innerHTML=(data.wind.speed)+("Km/h ");

    //Finally adding images related to weather
    // var newImage=document.querySelector(".image img");
    // // var imageURL;
    // var description=data.weather[0].main;
    if (data.weather[0].main=="Clouds") {
        weatherIcon.src="icons/animated/cloudy.svg";
    }
    else if (data.weather[0].main=="Mist") {
        weatherIcon.src="icons/animated/night.svg";
    }
    else if (data.weather[0].main=="Clear") {
        weatherIcon.src="icons/animated/day.svg";
    }
    else if (data.weather[0].main=="Rain") {
        weatherIcon.src="icons/animated/rainy-4.svg";
    }
    else if (data.weather[0].main=="Drizzle") {
        weatherIcon.src="icons/animated/rainy-1.svg";
    }

};

document.addEventListener("keydown",function(event){
    if (event.key==="Enter") {
        weatherCheck(searchBox.value);
    }
    
});
searchBtn.addEventListener('click',function(){
    weatherCheck(searchBox.value);
})

weatherCheck();

// .weather.main=Clouds
// .querySelector(".searchButton")