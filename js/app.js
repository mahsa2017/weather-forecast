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
        datex = tmp.slice(0, 15);               //changed data transform
        dateTime[i].textContent = datex
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
            for(var i=0;i<8;i++)
            console.log(data.list[i]);
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
                arrayDate.push(data.list[i].dt);
            };
            //// new calculation for min and max Temp depends from data shift
            var minTempDay = [];
            var maxTempDay = [];
            var n = 0;
            for (i = 0; i < 5; i++) {
                for (j = n; j < data.list.length; j++) {
                    var tmp = unixToUtc(data.list[n].dt);
                    dateStart = tmp.slice(0, 15);
                    var tmp1 = unixToUtc(data.list[j].dt);
                    dateTemp = tmp1.slice(0, 15);
                    if (dateTemp === dateStart) {
                        minTempDay.push(Math.round(data.list[j].main.temp_min))
                        maxTempDay.push(Math.round(data.list[j].main.temp_max))
                    } else {
                        var n = j;
                        break
                    };
                };
                min_temp_first_day = Math.min(...minTempDay);
                arrayTempMin.push(min_temp_first_day);
                minTempDay.length = 0;
                max_temp_first_day = Math.max(...maxTempDay);
                arrayTempMax.push(max_temp_first_day);
                maxTempDay.length = 0;
            };
            ////////////////////////////////////////////////////////////////
            update(weather);
        };
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
function unixToUtc(t) {
    return new Date(t * 1000).toString()
};
