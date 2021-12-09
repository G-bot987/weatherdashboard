var searchFormEl = document.querySelector("form")
var citySearchEl = document.querySelector("#searchBox")
var apiKey = '36d99a174e74311a981b59e36fa298f7'
var weatherConditionEL = document.getElementById('weatherCondition'); //we get the span element that lists our weather conditions in our html
var weatherIconEL = document.getElementById('weatherIcon'); //we get the element that lists the weather icon in our html
var weatherTempDivEL = document.getElementById('weatherTempDiv'); //This element contains the span of the temp element 
var weatherConditionDivEL = document.getElementById('weatherConditionDiv');

// url endpoint for city

function getApiWeatherdata (city) {
    
    
    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    return endpoint;
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
                var weatherTempEL = document.getElementById('weatherTemp'); //We get the span element that lists our weather temperature in our html
                var humidityTempEl = document.getElementById('humidity');
               

                // dummy weather data {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":7.53,"feels_like":4.05,"temp_min":6.42,"temp_max":8.96,"pressure":1002,"humidity":72},"visibility":10000,"wind":{"speed":6.17,"deg":250},"clouds":{"all":92},"dt":1639054835,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1639036450,"sunset":1639065114},"timezone":0,"id":2643743,"name":"London","cod":200}
            //    desired data an icon representation of weather conditions, DONE 
            // the temperature, DONE 
            // the humidity, DONE
            //  the wind speed, DONE 
            // and the UV index

            //this code adds weather data from the API to the the elements in our html
            // weatherConditionEL.innerText = weatherData.list[0].weather[0].main
            // temp from main

            console.log('weatherdata', weatherData.main.humidity)
            
            weatherTempEL.innerText = weatherData.main.temp

            humidityTempEl.innerText = weatherData.main.humidity
                windspeedEl.innerText = weatherData.list[0].wind.speed

// 2nd api call needed to get uv and rest of week data https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=minutely,hourly,alerts&units=metric&appid=36d99a174e74311a981b59e36fa298f7
// uvEl.innerText = weatherData.list[0].


            // this for icon 
            var weatherIconCode = weatherData.list[0].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            var iconMainUrl = "http://openweathermap.org/img/w/" + weatherIconCode + ".png"; //we then make a url using the icon code that we get from the previous variable
            weatherIconEL.src = iconMainUrl //finally we assign the url to the src of our weather icon html element 
        
            //finally we unhide the weather elements so that the user can see them
            // weatherTempDivEL.classList.remove('invisible') 
            // weatherConditionDivEL.classList.remove('invisible')
            // weatherIconEL.classList.remove('hidden')

            //this code takes the city name of our weather data and assigns it to the inner text of yourCity. This means in the weather div it will show the user the location they are viewing for
            yourCity.innerText = weatherData.city.name
           
            })
      
            .then(function (res) {
        
                return res.json(); //the URL gets turned into an object
            })
        
           
        } else { //this runs only if the api response returns and invalid response. It hides the weather data and returns an error message
            alert("Please Enter A Valid Location")

            //hide our weather data.
            weatherTempDivEL.classList.add('invisible')
            weatherConditionDivEL.classList.add('invisible')
            weatherIconEL.classList.add('hidden')
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