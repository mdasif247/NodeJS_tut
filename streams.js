//here will transfer data from sample to greet file

const fs=require('node:fs');

// read data in chunks from sample
const readablestream=fs.createReadStream('./sample.txt',{
    encoding:'utf-8',
    highWaterMark:2 // read 2 bytes of data
});

// write data in chunks to greet
const writeablestream=fs.createWriteStream('./greet.txt');
//one way to write
// readablestream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeablestream.write(chunk);
// })

readablestream.pipe(writeablestream); // pipes will transfer data from readable stream to writeable stream