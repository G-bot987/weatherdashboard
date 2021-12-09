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


function populateData2(weeklyWeatherData) {
    console.log('test', weeklyWeatherData)
    var weeklyWeatherData = weeklyWeatherData
    for(var i=0; i <6; i++){
        if (i === 0){
            var uvTag = document.getElementById('UV');
            uvTag.innerText = weeklyWeatherData.daily[i].uvi
            if(weeklyWeatherData.daily[i].uvi <2){
                document.getElementById("UV").style.color = "green";
            } else {
                document.getElementById("UV").style.color = "red";
            }
        } if (i === 1){
            // console.log("date data", weeklyWeatherData.daily[i].dt)
            var date = document.getElementById("date1");
            var date1 = moment.unix(weeklyWeatherData.daily[i].dt).format("DD/MM/YY");
            console.log('moment', date1)
            date.innerHTML = date1
            var day1Temp = document.getElementById("weatherTemp1");
            day1Temp.innerText = weeklyWeatherData.daily[i].temp.day
            var day1Wind = document.getElementById("windspeed1");
            day1Wind.innerText = weeklyWeatherData.daily[i].wind_speed
            var day1Humidity = document.getElementById("humidity1");
            day1Humidity.innerText = weeklyWeatherData.daily[i].humidity
            var day1WeatherIcon = document.getElementById('weatherIcon1');

            var weatherIconCode = weeklyWeatherData.daily[i].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            // console.log('icon', weatherIconCode)
            var iconMainUrl = "http://openweathermap.org/img/w/" + weatherIconCode + ".png"; //we then make a url using the icon code that we get from the previous variable
            day1WeatherIcon.src = iconMainUrl //finally we assign the url to the src of our weather icon html element 

        } if ( i ===2 ){
            var date = document.getElementById("date2");
            var date2 = moment.unix(weeklyWeatherData.daily[i].dt).format("DD/MM/YY");
            console.log('moment', date2)
            date.innerHTML = date2
            var day2Temp = document.getElementById("weatherTemp2");
            day2Temp.innerText = weeklyWeatherData.daily[i].temp.day
            var day2Wind = document.getElementById("windspeed2");
            day2Wind.innerText = weeklyWeatherData.daily[i].wind_speed
            var day2Humidity = document.getElementById("humidity2");
            day2Humidity.innerText = weeklyWeatherData.daily[i].humidity
            var day2WeatherIcon = document.getElementById('weatherIcon2');

            var weatherIconCode2 = weeklyWeatherData.daily[i].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            // console.log('icon', weatherIconCode)
            var iconMainUrl2 = "http://openweathermap.org/img/w/" + weatherIconCode2 + ".png"; //we then make a url using the icon code that we get from the previous variable
            day2WeatherIcon.src = iconMainUrl2 //f
            

        } if (i ===3 ) {
            var date = document.getElementById("date3");
            var date3 = moment.unix(weeklyWeatherData.daily[i].dt).format("DD/MM/YY");
            console.log('moment', date3)
            date.innerHTML = date3
            var day3Temp = document.getElementById("weatherTemp3");
            day3Temp.innerText = weeklyWeatherData.daily[i].temp.day
            var day3Wind = document.getElementById("windspeed3");
            day3Wind.innerText = weeklyWeatherData.daily[i].wind_speed
            var day3Humidity = document.getElementById("humidity3");
            day3Humidity.innerText = weeklyWeatherData.daily[i].humidity
            var day3WeatherIcon = document.getElementById('weatherIcon3');

            var weatherIconCode3 = weeklyWeatherData.daily[i].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            // console.log('icon', weatherIconCode)
            var iconMainUrl3 = "http://openweathermap.org/img/w/" + weatherIconCode3 + ".png"; //we then make a url using the icon code that we get from the previous variable
            day3WeatherIcon.src = iconMainUrl3 //f

        } if ( i ===4 ) {
            var date = document.getElementById("date4");
            var date4 = moment.unix(weeklyWeatherData.daily[i].dt).format("DD/MM/YY");
            console.log('moment', date4)
            date.innerHTML = date4
            var day4Temp = document.getElementById("weatherTemp4");
            day4Temp.innerText = weeklyWeatherData.daily[i].temp.day
            var day4Wind = document.getElementById("windspeed4");
            day4Wind.innerText = weeklyWeatherData.daily[i].wind_speed
            var day4Humidity = document.getElementById("humidity4");
            day4Humidity.innerText = weeklyWeatherData.daily[i].humidity
            var day4WeatherIcon = document.getElementById('weatherIcon4');

            var weatherIconCode4 = weeklyWeatherData.daily[i].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            // console.log('icon', weatherIconCode)
            var iconMainUrl4 = "http://openweathermap.org/img/w/" + weatherIconCode4 + ".png"; //we then make a url using the icon code that we get from the previous variable
            day4WeatherIcon.src = iconMainUrl4 //f

        } if ( i ===5 ) {
            var date = document.getElementById("date5");
            var date5 = moment.unix(weeklyWeatherData.daily[i].dt).format("DD/MM/YY");
            console.log('moment', date5)
            date.innerHTML = date5
            var day5Temp = document.getElementById("weatherTemp5");
            day5Temp.innerText = weeklyWeatherData.daily[i].temp.day
            var day5Wind = document.getElementById("windspeed5");
            day5Wind.innerText = weeklyWeatherData.daily[i].wind_speed
            var day5Humidity = document.getElementById("humidity5");
            day5Humidity.innerText = weeklyWeatherData.daily[i].humidity
            var day5WeatherIcon = document.getElementById('weatherIcon5');

            var weatherIconCode5 = weeklyWeatherData.daily[i].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            // console.log('icon', weatherIconCode)
            var iconMainUrl5 = "http://openweathermap.org/img/w/" + weatherIconCode5 + ".png"; //we then make a url using the icon code that we get from the previous variable
            day5WeatherIcon.src = iconMainUrl5 //f

        }

    }
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
                                    populateData2(weeklyWeatherData);

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