var APPID = "33fb7454eb75c6a062a86f7f0ee2695a";
var temp;
var loc;
var icon;
var humidity;
var wind;
//var description;
var minTemp;
var maxTemp;
var dateTime;


function update(weather) {
    icon.src = "imgs/codes/" + weather.code + ".png"
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind
    //description.innerHTML = weather.description
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
    dateTime.innerHTML = weather.dateTime;
    minTemp.innerHTML = weather.minTemp;
    maxTemp.innerHtml = weather.maxTemp;
};

window.onload = function () {
    minTemp = document.getElementsByClassName("temp-min");
    maxTemp = document.getElementsByClassName("temp-max");
    loc = document.getElementsByClassName("location");
    icon = document.getElementsByClassName("icon");
    humidity = document.getElementsByClassName("humidity");
    wind = document.getElementsByClassName("wind")
    // description = document.getElementById("description");
    dateTime = document.getElementsByClassName("date");
        console.log("dddddddddddateeeee",dateTime);// HTMLCollection(5) ,arrayDate needs to be assigned to this class
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
            console.log(data);
            // console.log(data.list.length);//40 
            // console.log(data.list[0].main.temp_min)//7.49
            for (i = 0; i < data.list.length; i += 8) {
                console.log(data.list[i].main.temp_min)//7.49
            }
            // weather.code = data.weather[0].id;
            // weather.humidity = data.main.humidity;
            // weather.wind = data.wind.speed;
            // weather.description = data.weather[0].description;
            // /* NEW */
            // weather.location = data.name;
            // /* NEW */
            // weather.temp = Math.round(data.main.temp);
            // weather.dateTime = unixToUtc(data.dt);
            // update(weather);
=======
                      console.log("whole ",data);
                      console.log("only list",data.list);

            /* weather.code = data.list[0].weather[0].id;
                    console.log("code for first interval first day ",weather.code); */
                    var arrayCode=[];
                    for(var i=0; i < data.list.length; i+=8){
                            arrayCode.push(data.list[i].weather[0].id); 
                    }
                    //next for : debagging 
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
                    //next for : debagging 
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
                    //next for : debagging 
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
                    //next for : debagging 
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
                    //next for : debagging 
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
                    //next for : debagging 
                    console.log(arrayDate) //5 item array
                    for (var j=0;j<arrayDate.length; j++){
                        console.log("Date & Time for day " + j + " is " , arrayDate[j]);
                    } 
            
             //weather.temp = Math.round(data.main.temp);
            //weather.description = data.weather[0].description;
            update(weather);
>>>>>>> 880fe1d6afe8d12025fed0209716ee8e78b4ae5a
        };
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

// function K2C(k) {
//     return Math.round(k - 273.15);
// };
function unixToUtc(t) {
    return new Date(t * 1000).toString()
};
