const colors = require('colors');
const { resolve } = require('path');



const mostrarMenu = () => {
    return new Promise(resolve => {
    console.clear();
    console.log('============================'.green);
    console.log('    Selecione una opcion'.green);
    console.log('============================\n'.green);
    console.log(`${'1.'.green} Crear una tarea`);
    console.log(`${'2.'.green} Lista general de tareas`);
    console.log(`${'3.'.green} Lista de tareas completadas`);
    console.log(`${'4.'.green} Lista de tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question(`Selecione una opcion: `, (opt) =>{
        readline.close();
        resolve(opt)
    });
})
}
const pause = () =>{
    return new Promise(resolve =>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>{
        readline.close()
        resolve();
    })
})
}

module.exports = {mostrarMenu, pause}