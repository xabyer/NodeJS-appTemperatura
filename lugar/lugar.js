const axios = require('axios');

let getLugarLatLng = (direccion) => {

    let ciudad = encodeURI(direccion);
    let latitud = 0;
    let longitud = 0;
    console.log(ciudad);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ciudad}?json=1`
    });

    instance.get()
        .then(resp => {
            console.log(resp.data);
            latitud = res.data.latt;
            longitud = resp.data.longt;
        })
        .catch(err => {
            console.log(err);
        });

    return {
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}