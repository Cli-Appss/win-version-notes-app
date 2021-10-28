const chalk = require('chalk');

const { spawn } = require('child_process');


export async function help(){
    var intro = "Hello! and Welcome to Notes app for windows.";

    var Helpcommand = "Usage: command[-h]/-help Shows you the defination of the Command";

    var noteCommand1 = "Note: [-v]/version Shows version of the of the app";

    var noteCommand2 = "Note: [add]/-a adds a new note automatically opens note_pad for editing Other parameters: [notes -add <text-editor>]";

    var noteCommand3 = "Note: [-l/list shows all the files in the notes/ folder]"

    var SetupCommand = "Note [-s/setup set's up the program creates all the requires files]"

    


// running system Commands




    console.log(chalk.bold.green(intro))
    console.log("")
    console.log(chalk.bold.blue(Helpcommand))
    console.log("")
    console.log(chalk.bold.blue(noteCommand1))
    console.log("")
    console.log(chalk.bold.blue(noteCommand2))
    console.log("")
    console.log(chalk.bold.blue(noteCommand3))
    console.log("")
    console.log(chalk.bold.red(SetupCommand))

}
