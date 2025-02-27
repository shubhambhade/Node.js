
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname,'data');
//we can create folder
if(!fs.existsSync(dataFolder))
{
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}
//we can create file
const filePath = path.join(dataFolder,'example.txt');
//sync way of creating files
fs.writeFileSync(filePath,'hello from node js');
console.log('file created successfully');

const readContentFromFile = fs.readFileSync(filePath,'utf8');
console.log('File Content : ',readContentFromFile);

fs.appendFileSync(filePath,'\nthis is new line added to that file');
console.log('new content added in existing file');

//async way to creating the file
const asyncFilePath = path.join(dataFolder,'async-example.txt');
    fs.writeFile(asyncFilePath,"Hello async-node js",(err)=>{
        if(err) throw err;
        console.log("async file created successfully");
        fs.readFile(asyncFilePath,'utf8',(err,data)=>{
            if(err) throw err;
            console.log('Async file content :  ',data);
        })
    }
);