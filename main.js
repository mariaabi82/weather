const form = document.forms[0]
const submit = form.elements[0]

const buscarClimaPorCiudad = (ciudad) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=6b86fcbc675250acc2b5024ba1ac9487`)
        .then(res => res.json())
        .then(info => {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&appid=6b86fcbc675250acc2b5024ba1ac9487`)
                .then(data => data.json())
                .then(extendido => {
                    console.log(extendido)
                    const contenedor = document.getElementById("contenedor")
                    const contenedorExtendido = document.getElementById('contenedor-extendido')

                    contenedor.innerHTML = `
                 <div class="card">
                 <div class="cityDetails">
                 <h3 class="city">${info.name}</h3>
                 <p class="general_weather">${info.weather[0].description}</p>
                 </div>
                 <div class="weatherDetails">
                 <div class="icon-details">
                 <img src="https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png" alt="icono del clima">
                 <p>${info.main.temp}</p><span>ºC</span>
                 </div>
                 <div class="details">
                 <p>Precipitación ${info.clouds.all}%</p>
                 <p>Humedad ${info.main.humidity}%</p>
                 <p>Viento ${info.wind.speed}km\h</p>
                 </div>
                 </div>
                 </div>
                 </div>
                 `
                    let accDias = ''
                    extendido.list.forEach(dia => {
                        accDias += `
                    <div class="card-extendido">
                    <div class="details-extendido">
                    <p>${dia.dt_txt}</p>
                    <img class="icon-extendido"src="https://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png" alt="icono del clima">
                    <p>${dia.main.temp}</p><span>ºC</span>
                    </div>
                    <div class="details">
                    <p>Precipitación ${dia.clouds.all}%</p>
                    </div>
                    </div>
                    </div>
                    `
                    });

                    contenedorExtendido.innerHTML = accDias
                })
        })
}

form.onsubmit = e => {
    e.preventDefault();
    buscarClimaPorCiudad(submit.value);
}


