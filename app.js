import colors from "colors";
import { inquirerMenu, pausa } from "./helper/inquirer.js";

const main = async() => {

    
    let opt = '';
    opt = await inquirerMenu();
    do {
      
       console.log({opt});

       await pausa();

    } while(opt !== '0');
    
    
    
}





main();
