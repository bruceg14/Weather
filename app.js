// const apiKey = '7fa43d40918cc212ef1f34b51d535005'
// const city = "London"
// const testUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7fa43d40918cc212ef1f34b51d535005";

const apiKey = '7fa43d40918cc212ef1f34b51d535005';


function getLonAlt() {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7fa43d40918cc212ef1f34b51d535005`; 

   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherLatLon = document.getElementById('weatherLatLon');
        weatherLatLon.innerHTML = `Temperature: ${data.main.temp} &deg;C<br>
        Humidity: ${data.main.humidity} %<br>
        Wind Speed: ${data.wind.speed} m/s`;
    }).catch(error => console.log(error));
};

function getWeather() {
    const city = document.getElementById('city').value;

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=7fa43d40918cc212ef1f34b51d535005`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.getElementById('weather');
        weather.innerHTML = `Temperature: ${data.main.temp} &deg;C<br>
                              Humidity: ${data.main.humidity} %<br>
                              Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch(error => console.log(error));
};




function tmp2(){
    document.getElementById("test").innerHTML = "bbb";
}

function tmp(){
    document.getElementById("test").innerHTML = "success";
}
