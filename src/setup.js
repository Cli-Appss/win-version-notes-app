export async function setup (){
    console.log('Setting up the files... For the notes app')
    const exec = require('child_process').exec;  
        exec('my.bat', (err, stdout, stderr) => {  
        if (err) {  
            console.error(err);  
            return;  
        }  
        console.log(stdout);  
    });  
}