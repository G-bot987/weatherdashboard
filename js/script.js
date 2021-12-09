var searchFormEl = document.querySelector("form")
var citySearchEl = document.querySelector("#searchBox")
var apiKey = '36d99a174e74311a981b59e36fa298f7'


// url endpoint for city

function getApiWeatherdata (city) {
    
    
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    return endpoint;
}





function populateData(weatherData) {
    var weatherTempEL = document.getElementById('weatherTemp'); //We get the span element that lists our weather temperature in our html
    var humidityTempEl = document.getElementById('humidity');
    var windTempEl = document.getElementById('wind'); 
    var weatherIconEL = document.getElementById('weatherIcon');
    var cityEl = document.getElementById('city');


    weatherTempEL.innerText = weatherData.main.temp
    humidityTempEl.innerText = weatherData.main.humidity
    
    windTempEl.innerText = weatherData.wind.speed
    
    // uvEl.innerText = weatherData.list[0].
    
    
    // this for icon 
    var weatherIconCode = weatherData.weather[0].icon //here we make a variable and set it to have the icon code of the current weather
    var iconMainUrl = "http://openweathermap.org/img/w/" + weatherIconCode + ".png"; //we then make a url using the icon code that we get from the previous variable
    weatherIconEL.src = iconMainUrl //finally we assign the url to the src of our weather icon html element 
    
    
    
    //this code takes the city name of our weather data and assigns it to the inner text of yourCity. This means in the weather div it will show the user the location they are viewing for
    cityEl.innerText = citySearchEl.value
}

// make request
function MakeRequest (endpoint) {
    console.log('endpoint', endpoint)
    fetch(endpoint)
    .then(function(res) {
        // console.log('fetch', fetch(endpoint))
        
        
        if(res.ok){   //if the response of the api server is fine then it continues as normal. If not it returns an error asking for a valid location
            res.json()
            // console.log('json', json)
            .then(function(weatherData) {
            populateData(weatherData)
                
                    var lat = weatherData.coord.lat;
                    var lon = weatherData.coord.lon;
                    
                    
                    function getApiweekweatherdata () {
        
                         var endpoint2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;
                        console.log('endpoint2', endpoint2)
                        fetch(endpoint2)
                        .then(function(res){
                            if(res.ok){
                                res.json()
                                .then(function(weeklyWeatherData) {
                                    console.log('weekly weather data', weeklyWeatherData)
                                })
                            }
                        })
                    }
                   getApiweekweatherdata()
                    
                    
            
        })
        
       
        
        
    } else { //this runs only if the api response returns and invalid response. It hides the weather data and returns an error message
        alert("Please Enter A Valid Location")
        
      
    }
}) 
}


function restofweekweather(){
    
    // 2nd api call needed to get uv and rest of week data https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=minutely,hourly,alerts&units=metric&appid=36d99a174e74311a981b59e36fa298f7
    
}


// on click
function clickSearchButton(event) {
    event.preventDefault(); //stops page refreshing  
// link to html city search 
    var searchedCity = citySearchEl.value;

  
console.log('searched city', searchedCity)
    
    //handles any blank input
    if(searchedCity === ""){
        alert("You have not entered a location!")
        return;
    }
    
// feed city search value to weather api to populate the city perameter 
    var weatherURL = getApiWeatherdata(searchedCity);
    
    MakeRequest(weatherURL);
   
    

}

searchFormEl.addEventListener('submit', clickSearchButton);