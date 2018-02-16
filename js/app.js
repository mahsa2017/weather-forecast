var APPID = "33fb7454eb75c6a062a86f7f0ee2695a";
var temp;
var loc;
var icon;
var humidity;
var wind;
var minTemp;
var maxTemp;
var dateTime;
var arrayTempMin = [];
var arrayTempMax = [];
var arrayWind = [];
var arrayHumid = [];
var arrayCode = [];
var arrayDate = [];


function update(weather) {

    loc[0].textContent = weather.location;
    for (i = 0; i < arrayCode.length; i++) {
        icon[i].src = "imgs/codes/" + arrayCode[i] + ".png"
    };
    for (i = 0; i < arrayTempMin.length; i++) {
        minTemp[i].textContent = "Min Temp: " + arrayTempMin[i];
    };
    for (i = 0; i < arrayTempMax.length; i++) {
        maxTemp[i].textContent = "Max Temp: " + arrayTempMax[i];
    };
    for (i = 0; i < arrayWind.length; i++) {
        wind[i].textContent = arrayWind[i];
    };
    for (i = 0; i < arrayHumid.length; i++) {
        humidity[i].textContent = arrayHumid[i];
    };
    for (i = 0; i < arrayDate.length; i++) {
        var tmp = unixToUtc(arrayDate[i]);
        tmpdate = new Date(tmp);
        datex = tmpdate.toDateString();
        dateTime[i].textContent = datex;
    };
};

window.onload = function () {
    minTemp = document.getElementsByClassName("temp-min");
    maxTemp = document.getElementsByClassName("temp-max");
    loc = document.getElementsByClassName("location");
    icon = document.getElementsByClassName("icon");
    humidity = document.getElementsByClassName("humidity");
    wind = document.getElementsByClassName("wind")
    dateTime = document.getElementsByClassName("date");
    var name = window.prompt(" Enter the city name: ");
    updateByName(name);
};

function updateByName(name) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + name + "&units=metric" +
        "&APPID=" + APPID;
    //add &units=metric
    sendRequest(url);
};

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            console.log(data);
            for (var i = 0; i < data.list.length; i += 8) {
                arrayCode.push(data.list[i].weather[0].id);
            };
            for (var i = 0; i < data.list.length; i += 8) {
                arrayHumid.push(data.list[i].main.humidity);
            };
            for (var i = 0; i < data.list.length; i += 8) {
                arrayWind.push(data.list[i].wind.speed);
            };
            weather.location = data.city.name; // Location is always the same
            for (var i = 0; i < data.list.length; i += 8) {
                arrayTempMax.push(Math.round(data.list[i].main.temp_max));
            };
            for (var i = 0; i < data.list.length; i += 8) {
                arrayTempMin.push(Math.round(data.list[i].main.temp_min));
            };
            for (var i = 0; i < data.list.length; i += 8) {
                arrayDate.push(data.list[i].dt);
            };
            update(weather);
        };
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
function unixToUtc(t) {
    return new Date(t * 1000).toString()
};
