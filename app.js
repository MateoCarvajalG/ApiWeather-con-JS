// let urlDD =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=725c3e54a024870fec08bf0537d47a9c&units=metric`
// Evento para escuchar el boton de busqueda de ciudad
// const getSearchText = () =>{
//     // se obtiene el boton mediante el id del boton
//     const submit = document.querySelector('#submit');
//     submit.addEventListener ('click' , (e)=>{
//         e.preventDefault();
//         const cityName = document.getElementById('cityName').value ? document.getElementById('cityName').value : false
//         // console.log(cityName);
//         apiWeather(cityName);
//     });

// }
// getSearchText();




const apiWeather = async (latitude,longitude)  =>{
    const result =  await fetch ( `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=725c3e54a024870fec08bf0537d47a9c&units=metric`,{
        method :'GET',
    })

    resultJson = await result.json()

    if (result.ok){
     console.log(resultJson);
    // console.log(resultJson.main.temp);
    printOnScreen(resultJson);
    }
}

const printOnScreen =(dataText) =>{
  // console.log(dataText);

  const weatherContainer = document.getElementById('weatherContainer__temperatura')


  const {name,main,weather,wind,sys} = dataText
  console.log(name,main,weather,wind);

  
  let ciudad ='Su ciudad es  '+name +', '+sys.country+'.';
  const city = document.createElement('h2');
  city.textContent = ciudad;

  let temperatura ='La temperatura es: '+ main.temp + ' °C';
  const temp = document.createElement('h3')
  temp.textContent = temperatura;

  
  weatherContainer.appendChild(city);
  weatherContainer.appendChild(temp);


}



function findMe() {
    var output = document.getElementById("clima");
    if (!navigator.geolocation) {
      output.innerHTML = "<p>Tu navegador no soporta geolocalizacion</p>";
    } 
    function localizacion(posicion) {
      const lat = posicion.coords.latitude;
      const lon = posicion.coords.longitude;
        apiWeather(lat,lon);

    }

    
    function error() {
      output.innerHTML = "<p>No se pudo obtener tu ubicacion</p>";
    }
    navigator.geolocation.getCurrentPosition(localizacion, error);
  }
