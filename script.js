const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")


const apikey = "7d2ae65b69d32ac8c0efee3ced855911";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function cheackweather (city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    
    }
    else{
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "New folder/pngegg.png";
            weathericon.style.height = "255px";
            weathericon.style.margintop = " 10px";
        }
        else if(data.weather[0].main = "Clear"){
            weathericon.src = "New folder/clear-sky.png";
        }
        else if (data.weather[0].main == "Rain"){
             weathericon.src = "New folder/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weathericon.src = "New folder/rain.png";
        }
        else if (data.weather[0].main =="Mist"){
            weathericon.src = "New folder/download(1).png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display ="none";
      
    }
   


}

searchbtn.addEventListener("click", ()=>{
    cheackweather(searchbox.value);
})


