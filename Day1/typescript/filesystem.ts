import * as fs from 'fs';

const printCreateSuccess = () =>{
    console.log("Create File success");
    
}
fs.appendFile('newFile2.txt', "Hello file system", printCreateSuccess);

fs.readFile('newFile2.txt', {encoding: 'utf-8'}, (err:Error, data:{})=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(JSON.stringify(data));
         
    }
});
fs.unlinkSync('newFile2.txt');

fs.unlink('newFile.txt', ()=>{
    console.log("delete success");
    
});


