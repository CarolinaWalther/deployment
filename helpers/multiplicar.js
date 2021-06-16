const fs = require('fs');

const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} X ${i} = ${base * i}\n`;
        consola += `${base} ${'X'.cyan} ${i} ${'='.cyan} ${base * i}\n`;

    }
    if (listar) {
        console.log("===================".blue);
        console.log(' Tabla del '.green, colors.red( base));
        console.log("===================".blue);
        console.log(consola);

    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;



}

module.exports = {
    crearArchivo
}