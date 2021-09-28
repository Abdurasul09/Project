// let url = 'http://api.weatherapi.com/v1/current.json?key=76e6991ac1a744ee934130657210209&q=Bishkek'
// let url2 = 'http://api.weatherapi.com/v1/forecast.json?key=76e6991ac1a744ee934130657210209&q=Bishkek&days=14'
// fetch (url2)
// .then(function(response){
//     return response.json()
//     document.querySelector('.City-name').innerHTML=data.name
//     console.log(data.main.temp);
// })
// .then(function(data){
//     console.log(data)
// })



// fetch('http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=92a15606bc7d58b88c98d94c731a3e53')
//     .then(function (response) {
//         return response.json()

//     })
//     .then(function (data) {
//         document.querySelectorAll('.City-name').textContent = data.name;
//         document.querySelectorAll('.Degree').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
//         document.querySelectorAll('.Clouds').innerHTML = data.weather[0]['description'];
//         //http://openweathermap.org/img/wn/01n@2x.png
//         document.querySelector('.Feature').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//         console.log(data)
//     })

let Bishkek = 'http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=92a15606bc7d58b88c98d94c731a3e53'

fetch(Bishkek)

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name').textContent = data.name;
        document.querySelector('.Degree').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let Chuy = 'http://api.openweathermap.org/data/2.5/weather?q=Chui&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(Chuy)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name2').textContent = data.name;
        document.querySelector('.Degree2').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds2').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature2').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let Osh = 'http://api.openweathermap.org/data/2.5/weather?q=Osh&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(Osh)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name3').textContent = data.name;
        document.querySelector('.Degree3').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds3').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature3').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })


let Batken = 'http://api.openweathermap.org/data/2.5/weather?q=Batken&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(Batken)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name4').textContent = data.name;
        document.querySelector('.Degree4').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds4').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature4').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let jalalAbad = 'http://api.openweathermap.org/data/2.5/weather?q=Jalal-Abad&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(jalalAbad)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name5').textContent = data.name;
        document.querySelector('.Degree5').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds5').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature5').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let talas = 'http://api.openweathermap.org/data/2.5/weather?q=Talas&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(talas)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name6').textContent = data.name;
        document.querySelector('.Degree6').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds6').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature6').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let naryn = 'http://api.openweathermap.org/data/2.5/weather?q=Naryn&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(naryn)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name7').textContent = data.name;
        document.querySelector('.Degree7').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds7').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature7').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })
let kol = 'http://api.openweathermap.org/data/2.5/weather?q=Karakol&appid=92a15606bc7d58b88c98d94c731a3e53'
fetch(kol)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.City-name8').textContent = data.name;
        document.querySelector('.Degree8').innerHTML = Math.round(data.main.temp - 273) + `&deg`;
        document.querySelector('.Clouds8').innerHTML = data.weather[0]['description'];
        //http://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.Feature8').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        console.log(data);
    })

let btn = document.querySelectorAll('.btn')
btn.addEventListener('click', function () {
    location.reload();
    return false;
    console.log(btn);
})