let urlBase = "https://api.openweathermap.org/data/2.5/weather"
let api_key = "244fead2c89de08ce4ac1bb34bc6f64c";
let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value;

    if (ciudad) {
        fetchDatosClima(ciudad);
    }
})


const fetchDatosClima = (ciudad) => {
    fetch (`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then (data => data.json())
    .then (data => mostrarDatosClima(data))
}


const mostrarDatosClima = (data) => {
    const divDatosClima = document.getElementById("datosClima");
    divDatosClima.innerHTML = ""

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement("h2");
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`;

    const temperaturaInfo = document.createElement("p");
    temperaturaInfo.textContent = `La temperatura es de ${Math.floor(temperatura - difKelvin)}°C`;

    const humedadInfo = document.createElement("p");
    humedadInfo.textContent = `La humedad es de ${humedad}%`;

    const descripcionInfo = document.createElement("p");
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

    const iconoInfo = document.createElement("img");
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(descripcionInfo);

}




