const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {

    try {

        const coord = await lugar.getLugarLatLng(dir);

        const temp = await clima.getClima(coord.latitud, coord.longitud);
        return `La temperatura de ${coord.lugar} es de ${temp}.`

    } catch (e) {

        return `No se pudo determinar el clima de ${dir}`;

    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);