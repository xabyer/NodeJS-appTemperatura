//const lugar = require('./lugar/lugar');
const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

let ciudad = encodeURI(argv.direccion);
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