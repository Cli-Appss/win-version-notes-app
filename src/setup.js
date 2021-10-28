var exec = require('child_process').exec;

export async function setup (){
    console.log('')
    console.log('Setting up the files... For the notes app')
    console.log('')
    exec('mkdir notes',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}
