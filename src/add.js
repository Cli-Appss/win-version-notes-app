// CREATING EXCE
var exec = require('child_process').exec;

export async function add(){
    console.log("opening notepad for editing your note")
    exec('C:\\Windows\\notepad.exe', 
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error} the file already exists`);
        }
    });


}