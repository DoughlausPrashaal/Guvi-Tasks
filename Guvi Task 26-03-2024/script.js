document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".main-container");

    fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
    })
    .then((res) => res.json())
    .then((data) => renderAllCards(data))
    .catch((err) => console.log("[ERROR]", err));

    function renderAllCards(data) {
        console.log(data);
        data.forEach((val) => {
            createCard(val);
        });
    }

    function createCard(con) {
        const cardHTML = `
            <div class="col-lg-4 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">${con.name.common}</h5>
                    </div>
                    <div class="card-body">
                        <img class="card-img-top" src="${con.flags.png}" alt="Country Flag" />
                        <p class="card-text"><span>Capital: </span>${con.capital}</p>
                        <p class="card-text"><span>Region: </span>${con.region}</p>
                        <p class="card-text"><span>Country Codes: </span>${con.cca2} , ${con.cca3}</p>
                        <p class="card-text"><span>Latitude: </span>${con.latlng[0]}</p>
                        <p class="card-text"><span>Longitude: </span>${con.latlng[1]}</p>
                        <button class="btn btn-primary weather-button">Check Weather</button>
                    </div>
                </div>
            </div>
        `;
        
        cardContainer.innerHTML += cardHTML; 
    }

    cardContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('weather-button')) {
            const card = event.target.closest('.card'); 
            if (card) {
                const countryName = card.querySelector('.card-title').textContent; 
                console.log('Button clicked in card:', countryName);
                fetchWeather(countryName, card);
            }
        }
    });

    function fetchWeather(countryName, card) {
        // Use country name to fetch weather data
        const apiKey = 'b40b990ce98e402b88d94035255f43c2'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
        
        fetch(apiUrl)
            .then(res => res.json())
            .then(weatherdata => {
                console.log(weatherdata)
                const weatherInfo = `
                    <h5 class = Weather-Heading>Weather Report</h5>
                    <p class="card-text"><span>Weather: </span>${weatherdata.weather[0].description}</p>
                    <p class="card-text"><span>Temperature: </span>${(weatherdata.main.temp).toFixed(2)}°F</p>
                    <p class="card-text"><span>Humidity: </span>${weatherdata.main.humidity}%</p>
                `;
                const weatherInfoContainer = document.createElement('div');
                weatherInfoContainer.innerHTML = weatherInfo;

                card.querySelector('.card-body').appendChild(weatherInfoContainer);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
            });
    }
});
