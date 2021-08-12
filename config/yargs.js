const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base de la multiplicacion'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta donde quieres la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ' La base debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;