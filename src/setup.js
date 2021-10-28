var exec = require('child_process').exec;

export async function setup (){
    console.log('Setting up the files... For the notes app')
    exec('my.bat',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}
