unit="C"
place="jamshedpur";
if(document.querySelector(".searchbar").value == ""){
    place="jamshedpur";
}
else{
    place=document.querySelector(".searchbar").value;
}


function getweather(place,unit){
    const api="2f4c30e33ee845dd83975703212212";
    fetch("https://api.weatherapi.com/v1/current.json?key="+api+"&q="+place).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.querySelector('.city').innerText = "❝ Weather in " + data.location.name+" ❞";
        document.querySelector('.condition').innerText = data.current.condition.text;
        document.querySelector('.humidity').innerText = "Humidity: " + data.current.humidity + "%";
        document.querySelector('.windspeed').innerText = "Windspeed: " + data.current.wind_kph + " Km/h";
        document.querySelector('.icon').src = data.current.condition.icon;
        if(unit=="C"){
            document.querySelector('.temp').innerText = data.current.temp_c + "°C";
        }
        else{
            document.querySelector('.temp').innerText = data.current.temp_f + "°F";
        }
    })
}

getweather("jamshedpur",unit);

searchbutton.addEventListener('click',()=>{
    if(document.querySelector(".searchbar").value == ""){
        place="jamshedpur";
    }
    else{
        place=document.querySelector(".searchbar").value;
    }
    getweather(place,unit);
})

document.onkeydown=function(e){
    if(e.keyCode==13){
        if(document.querySelector(".searchbar").value == ""){
            place="jamshedpur";
        }
        else{
            place=document.querySelector(".searchbar").value;
        }
       getweather(place,unit);
    }
}

tempunit.addEventListener('click',()=>{
    if(document.querySelector("#tempunit").innerText == "F"){
        document.querySelector("#tempunit").innerText="C";
        unit="F";
        getweather(place,unit);
    }
    else if(document.querySelector("#tempunit").innerText == "C"){
        document.querySelector("#tempunit").innerText="F";
        unit="C";
        getweather(place,unit);
    }
})