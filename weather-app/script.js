const domManip = (() => {
    const searchButton = document.querySelector(".search-button");
    const clearButton = document.querySelector(".reset-button");
    searchButton.addEventListener("click", fetchCurrentWeather);
    clearButton.addEventListener("click", clearSearch);
    document.addEventListener("DOMContentLoaded", function hideBrokenImg() {
        let firstLoadImg = document.querySelector('img');
        firstLoadImg.style.display = 'none';
    })
})();

// async function to fetch current weather data from user input on form
async function fetchCurrentWeather(searchCity, searchState, searchCountry) {
    try {
        const searchCity = document.getElementById("search-city").value;
        const searchState = document.getElementById("search-state").value;
        const searchCountry = document.getElementById("search-country").value;

        // check to make sure all fields have values
        if (searchCity == "" || searchCountry == "") {
            alert ("City and state fields are required, try again");
            return;
        }

        console.log(searchCity);
        console.log(searchState);
        console.log(searchCountry);

        // run fetch and wait for response from json
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "," + searchState + "," + searchCountry + "&units=imperial&APPID=e81953213cb484436b734b9d128e0701", { mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current weather data", currentData);

        // construct object for my weather app from API JSON data

        const currentWeather = {
            mainWeather: currentData.weather[0].main,   //takes the JSON output, weather tab and the first object of array
            place: currentData.name + ", " + searchState.toUpperCase() + " " + currentData.sys.country,
            temp: Math.round(currentData.main.temp),
            humidity: currentData.main.humidity + "%",
            wind: Math.round(currentData.wind.speed) + " mph"
        };

        console.log(currentWeather);

        displayWeather(currentWeather);

        getGiphy(currentWeather.mainWeather);
    }


    catch (err) {
        console.log("something went wrong with weather data", err);
        alert("Something has gone wrong with fetching weather data...");
    }
}

function clearSearch() {
    document.getElementById("search-city").value = "";
    document.getElementById("search-state").value = "";
    document.getElementById("search-country").value = "";
    const img = document.querySelector("img");
    img.style.display = "none";
    clearDOM();
}

// function to display JSON to DOM
function displayWeather(currentWeather) {
    const displayDiv = document.querySelector(".display-div");

    // call function to clear any DOM elements that might be present from previous search
    clearDOM();

    //create the elements in the DOM
    const city = document.createElement("p");
    city.textContent = currentWeather.place;
    displayDiv.appendChild(city);
    const status = document.createElement("p");
    status.textContent = currentWeather.mainWeather;
    displayDiv.appendChild(status);
    const cityTemp = document.createElement("p");
    cityTemp.textContent = currentWeather.temp + " Degrees";
    displayDiv.appendChild(cityTemp);
    const cityHumidity = document.createElement("p");
    cityHumidity.textContent = currentWeather.humidity + " Humidity";
    displayDiv.appendChild(cityHumidity);
    const cityWind = document.createElement("p");
    cityWind.textContent = currentWeather.wind + " Wind";
    displayDiv.appendChild(cityWind);
}

async function getGiphy(mainWeather) {
    try {
        const img = document.querySelector("img");
        let keyWord = mainWeather;
        if (keyWord == "Clear") {
            keyWord = "Clear sky";
        }
        const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=9ZGXhPVsnBcjrPWiOori0mIxiMSyyqS8&weirdness=0&s=" + keyWord, { mode: "cors"});
        const giphyResponse = await response.json();
        console.log(giphyResponse);
        img.style.display = "";
        img.src = giphyResponse.data.images.original.url;
    }
        catch(err) {
            console.log("Something went wrong fetching the giphy", err);
        }
}

function clearDOM() {
    //clears the DOM
    const nodeList = document.querySelectorAll("p");
    if (nodeList !== null) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].remove();
        }
    }
}