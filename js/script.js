var searchFormEl = document.querySelector("form")
var citySearchEl = document.querySelector("#searchBox")


// url endpoint for city

function getApiWeatherdata (city) {
    var apiKey = '36d99a174e74311a981b59e36fa298f7'
    

    var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    return endpoint;
}


// make request

function MakeRequest (weatherUrl) {

    fetch(weatherUrl)

    .then(function(res) {


        if(res.ok){   //if the response of the api server is fine then it continues as normal. If not it returns an error asking for a valid location
            res.json()
            .then(function(weatherData) {
               
            //this code adds weather data from the API to the the elements in our html
            weatherConditionEL.innerText = weatherData.list[0].weather[0].main
            weatherTempEL.innerText = weatherData.list[0].main.temp
            var weatherIconCode = weatherData.list[0].weather[0].icon //here we make a variable and set it to have the icon code of the current weather
            var iconMainUrl = "http://openweathermap.org/img/w/" + weatherIconCode + ".png"; //we then make a url using the icon code that we get from the previous variable
            weatherIconEL.src = iconMainUrl //finally we assign the url to the src of our weather icon html element 
        
            //finally we unhide the weather elements so that the user can see them
            weatherTempDivEL.classList.remove('invisible') 
            weatherConditionDivEL.classList.remove('invisible')
            weatherIconEL.classList.remove('hidden')

            //this code takes the city name of our weather data and assigns it to the inner text of yourCity. This means in the weather div it will show the user the location they are viewing for
            yourCity.innerText = weatherData.city.name
           
            })
      
            .then(function (res) {
        
                return res.json(); //the URL gets turned into an object
            })
        
           
        } else { //this runs only if the api response returns and invalid response. It hides the weather data and returns an error message
            errorBoxEl.textContent = "Please Enter A Valid Location"

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

    var searchedCity = citySearchEl.value;

  

    
    //handles any blank input
    if(searchedCity === ""){
        errorBoxEl.textContent = "You have not entered a location!"
        return;
    }
    errorBoxEl.textContent = "";

    var weatherURL = generateEndpointWeather(searchedCity);
    getApiWeatherdata(weatherURL);
    

}

searchFormEl.addEventListener('submit', clickSearchButton);