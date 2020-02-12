const form = document.forms[0]
const submit = form.elements[0]

const = buscarClimaPorCiudad =(ciudad) => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=6b86fcbc675250acc2b5024ba1ac9487`)
.then(res => res.json())
.then(info => {   
    const contenedor = document.getElementById("contenedor")
    
    contenedor.innerHTML = `
    <div class="card">
            <div class="cityDetails"></div>
            <h3 class="city">${info.name}</h3>
            <p class="general_weather">${info.weather[0].description}</p>

            <div class="weatherDetails"></div>
            <img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="">
            <p>${info.main.temp}</p><span>ºC</span>
            <p>Precipitación ${info.clouds.all}</p>
            <p>Humedad ${info.main.humidity}</p>
            <p>Viento ${info.wind.speed}</p>
        </div>
    </div>
    `
})
}

form.onsubmit = e => {
    e.preventDefault();
    buscarClimaPorCiudad(submit.value);
}


