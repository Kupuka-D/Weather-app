'use strict'

const weather = require('./weather/weather')
const location = require('./location/location')
    //Con option en lugar de comands podemos setear un parametro para que yo lo podamos
    //pasar sin necesidad de llamar una función
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// location.getLocationLatLong(argv.direccion)
//     .then(console.log);

// weather.getWeather(35, 139)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(dir) => {


    try {
        //Llamo a la funcion para obtener latitud y longitud en base a su nombre
        const loc = await location.getLocationLatLong(dir); //Me devuelve un objeto con dir, lon y lat

        //Con la latitud y la longitud llamo a la funcion para obtener la temperatura
        const cli = await weather.getWeather(loc.lat, loc.lon); //Devuelve temp
        return `La temperatura en la ciudad ${dir} es: ${cli}`;
    } catch (error) {
        return `No se pudo obtener la temperatura para la ciudad ${dir}`;
    }

}

//Llamo  a la funcion 
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);