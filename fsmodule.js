//fs module allow us to manage file system 

const fs=require('node:fs');

const content=fs.readFileSync('./sample.txt','utf-8');  // read file synchronously utf8 for encoding
console.log(content);

// read file asyncronously utf8 for encoding
fs.readFile('./sample.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

// write file synchronously utf8 for encoding
fs.writeFileSync('./greet.txt','Hello baccho!!');  


// write file asynchronously utf8 for encoding
// add {flag:'a'} to append not override
fs.writeFile('./greet.txt','Hello asif!!',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file written");
    }
});  


///Note : check for fs Promise module

