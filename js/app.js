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
<<<<<<< HEAD
                      console.log("whole ",data);
                      console.log("only list",data.list);

            /* weather.code = data.list[0].weather[0].id;
                    console.log("code for first interval first day ",weather.code); */
                    var arrayCode=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayCode.push(data.list[i].weather[0].id); 
                    }
                    //next for : debugging 
                    console.log(arrayCode) //5 item array
                    for (var i=0;i<arrayCode.length; i++){
                        console.log("code for day " + i + " is " , arrayCode[i]);
                    } 
          /*   weather.humidity = data.list[0].main.humidity;
                    console.log("humi for first interval first day ",weather.humidity); */
                    var arrayHumid=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayHumid.push( data.list[i].main.humidity); 
                    }
                    //next for : debugging 
                    console.log(arrayHumid) //5 item array
                    for (var i=0;i<arrayHumid.length; i++){
                        console.log("humidity for day " + i + " is " , arrayHumid[i]);
                    } 
        /*     weather.wind = data.list[0].wind.speed;
                    console.log("wind for first interval first day ",weather.wind); */
                    var arrayWind=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayWind.push(data.list[i].wind.speed); 
                    }
                    //next for : debugging 
                    console.log(arrayWind) //5 item array
                    for (var i=0;i<arrayWind.length; i++){
                        console.log("Wind for day " + i + " is " , arrayWind[i]);
                    } 

            weather.location = data.city.name; // Location is always the same
                    console.log("location for first interval first day ",weather.location);
            /*         
            weather.maxTemp = data.list[0].main.temp_max
                    console.log("max-temp for first interval first day ",weather.maxTemp); */
                    var arrayTempMax=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayTempMax.push(data.list[i].main.temp_max); 
                    }
                    //next for : debugging 
                    console.log(arrayTempMax) //5 item array
                    for (var i=0;i<arrayWind.length; i++){
                        console.log("Temp_max for day " + i + " is " , arrayTempMax[i]);
                    } 
            /* weather.minTemp = data.list[0].main.temp_min;
                    console.log("min temp first interval first day",weather.minTemp);   */
                    var arrayTempMin=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayTempMin.push(data.list[i].main.temp_min); 
                    }
                    //next for : debugging 
                    console.log(arrayTempMin) //5 item array
                    for (var i=0;i<arrayWind.length; i++){
                        console.log("Temp_max for day " + i + " is " , arrayTempMin[i]);
                    } 

            //weather.dateTime = data.list[0].dt_txt
                    //console.log("first day first interval date ",weather.dateTime)
                    var arrayDate=[];
                    for(var i=0; i < data.list.length; i+=8){
                        arrayDate.push(data.list[i].dt_txt); 
                    }
                    //next for : debugging 
                    console.log(arrayDate) //5 item array
                    for (var j=0;j<arrayDate.length; j++){
                        console.log("Date & Time for day " + j + " is " , arrayDate[j]);
                    } 
            
             //weather.temp = Math.round(data.main.temp);
            //weather.description = data.weather[0].description;
=======
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
>>>>>>> upstream/master
            update(weather);
        };
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
function unixToUtc(t) {
    return new Date(t * 1000).toString()
};
