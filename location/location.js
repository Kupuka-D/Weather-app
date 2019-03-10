//Importamos axios después de instalarlo (npm i axios 'No hace falta el --save')
const axios = require('axios');


const getLocationLatLong = async(dir) => {


    //Necesitamos escapar la direccion por los caracteres especiales como los espacios en blanco
    const encodedUrl = encodeURI(dir)

    //Configuramos axios con el header: valor correspondiente y url que recibe las peticiones
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl}`,
        //timeout: 1000,
        //El header es la clave header de la página y el valor es el identificador de nuestra máquina para la respuesta
        headers: { 'X-RapidAPI-Key': '54704efdacmshf52609ae16a2763p1816e2jsn5f39f9a31ab0' }
    });



    const resp = await instance.get();

    if (resp.data.Results === 0) {
        throw new Error(`No se encontraron resulatados para ${dir}`)
    }

    data = resp.data.Results[0];
    direccion = data.name;
    lon = data.lon;
    lat = data.lat;

    return {
        direccion,
        lon,
        lat
    }


}


module.exports = {
    getLocationLatLong
}