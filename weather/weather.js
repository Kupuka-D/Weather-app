//Importamos axios para hacer las peticiones
const axios = require('axios');

//Api key creado por default en el sitio
const apikey = 'aad2f91488bf8bd435cb2aa119e26d7b';

const getWeather = async(lat, lon) => {
    //Usamos la url que nos pide en "openweathermap" y nuestra apikey que nos dan por defecto en el sitio
    //El parametro appid lo enviamos manualmente para que nos retorne los valores del clima en nuestras unidades
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);


    return res.data.main.temp;
}


module.exports = {
    getWeather
}