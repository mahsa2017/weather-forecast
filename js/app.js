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
            //FirstDaymin
            var minTempFirstDay=[];
            for (var i = 0; i < 8; i ++) {
               minTempFirstDay.push(Math.round(data.list[i].main.temp_min));
            };
            console.log(minTempFirstDay)
            min_temp_first_day=Math.min(...minTempFirstDay);
            console.log(min_temp_first_day);
            arrayTempMin.push(min_temp_first_day);
            console.log(arrayTempMin); //original array

            //secondDaymin
            var minTempSecDay=[];
            for (var i = 8; i < 16; i ++) {
               minTempSecDay.push(Math.round(data.list[i].main.temp_min));
            };
            console.log(minTempSecDay)
            min_temp_Sec_day=Math.min(...minTempSecDay);
            console.log(min_temp_Sec_day);
            arrayTempMin.push(min_temp_Sec_day);
            console.log(arrayTempMin); //original array

            //thirdDay
            var minTempThirdDay=[];
            for (var i = 16; i < 24; i ++) {
               minTempThirdDay.push(Math.round(data.list[i].main.temp_min));
            };
            console.log(minTempThirdDay)
            min_temp_Third_day=Math.min(...minTempThirdDay);
            console.log(min_temp_Third_day);
            arrayTempMin.push(min_temp_Third_day);
            console.log(arrayTempMin); //original array

            //fourthDay
            var minTempFourthDay=[];
            for (var i = 24; i < 32; i ++) {
               minTempFourthDay.push(Math.round(data.list[i].main.temp_min));
            };
            console.log(minTempFourthDay)
            min_temp_Fourth_day=Math.min(...minTempFourthDay);
            console.log(min_temp_Fourth_day);
            arrayTempMin.push(min_temp_Fourth_day);
            console.log(arrayTempMin); //original array

            //FifthDay
            var minTempFifthDay=[];
            for (var i = 32; i < 40; i ++) {
               minTempFifthDay.push(Math.round(data.list[i].main.temp_min));
            };
            console.log(minTempFifthDay)
            min_temp_Fifth_day=Math.min(...minTempFifthDay);
            console.log(min_temp_Fifth_day);
            arrayTempMin.push(min_temp_Fifth_day);
            console.log(arrayTempMin); //original array

           /* //old version  
           for (var i = 0; i < data.list.length; i += 8) {
                arrayTempMin.push(Math.round(data.list[i].main.temp_min));
            }; */

             //FirstDaymax
             var maxTempFirstDay=[];
             for (var i = 0; i < 8; i ++) {
                maxTempFirstDay.push(Math.round(data.list[i].main.temp_max));
             };
             console.log(maxTempFirstDay)
             max_temp_first_day=Math.max(...maxTempFirstDay);
             console.log(max_temp_first_day);
             arrayTempMax.push(max_temp_first_day);
             console.log(arrayTempMax); //original array
 
             //secondDaymax
             var maxTempSecDay=[];
             for (var i = 8; i < 16; i ++) {
                maxTempSecDay.push(Math.round(data.list[i].main.temp_max));
             };
             console.log(maxTempSecDay)
             max_temp_Sec_day=Math.max(...maxTempSecDay);
             console.log(max_temp_Sec_day);
             arrayTempMax.push(max_temp_Sec_day);
             console.log(arrayTempMax); //original array
 
             //thirdDaymax
             var maxTempThirdDay=[];
             for (var i = 16; i < 24; i ++) {
                maxTempThirdDay.push(Math.round(data.list[i].main.temp_max));
             };
             console.log(maxTempThirdDay)
             max_temp_Third_day=Math.max(...maxTempThirdDay);
             console.log(max_temp_Third_day);
             arrayTempMax.push(max_temp_Third_day);
             console.log(arrayTempMax); //original array
 
             //fourthDaymax
             var maxTempFourthDay=[];
             for (var i = 24; i < 32; i ++) {
                maxTempFourthDay.push(Math.round(data.list[i].main.temp_max));
             };
             console.log(maxTempFourthDay)
             max_temp_Fourth_day=Math.max(...maxTempFourthDay);
             console.log(max_temp_Fourth_day);
             arrayTempMax.push(max_temp_Fourth_day);
             console.log(arrayTempMax); //original array
 
             //FifthDaymax
             var maxTempFifthDay=[];
             for (var i = 32; i < 40; i ++) {
                maxTempFifthDay.push(Math.round(data.list[i].main.temp_max));
             };
             console.log(maxTempFifthDay)
             max_temp_Fifth_day=Math.max(...maxTempFifthDay);
             console.log(max_temp_Fifth_day);
             arrayTempMax.push(max_temp_Fifth_day);
             console.log(arrayTempMax); //original array 

            /* //old version 
              for (var i = 0; i < data.list.length; i += 8) {
                arrayTempMax.push(Math.round(data.list[i].main.temp_max));
            }; */

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
