import  inquirer  from "inquirer";
import colors from "colors";


const preguntas = [
    {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [

        {
            value: '1',
            name: `${'1.'.green} Crear una tarea` 
        },
        {   value: '2',
            name: `${'2.'.green} Lista general de tareas`
        }, 
        {   value: '3',
            name:`${'3.'.green} Lista de tareas completadas`
        },
        {   value: '4',
            name: `${'4.'.green} Lista de tareas pendientes`
        },
        {   value: '5',
            name: `${'5.'.green} Completar tarea(s)`
        },
        {   value: '6',
            name: `${'6.'.green} Borrar tarea`
        },
        {   value: '0',
            name: `${'0.'.green} Salir\n`
        }

        ]
    }
];

export const inquirerMenu = async() => {
    
    console.clear();
    console.log('============================'.green);
    console.log('    Selecione una opcion'.white);
    console.log('============================\n'.green);
    
    const {opcion} = await inquirer.prompt(preguntas);
    
    return opcion;
}


export const pausa = async() =>{
    
    const question = 
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }
    
    console.log('\n');
    await inquirer.prompt(question);
}