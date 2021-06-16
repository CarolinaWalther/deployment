
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();
//const base = 4;
console.log( argv );


crearArchivo( argv.b, argv.l, argv.h )
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err));
        