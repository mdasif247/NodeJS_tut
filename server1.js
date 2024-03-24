//sending dummy.html to server

const http=require('node:http');
const fs=require('node:fs');

// req callback will read request info node will handle req we just respond
// res callback will respond to req
const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{"content-type":"text/html"});  // will return status success
    // const html=fs.readFileSync('./dummy.html'); // not good for huge data
    // res.end(html);

    fs.createReadStream('./dummy.html').pipe(res); 

})


// will read request
server.listen(3000,()=>{
    console.log('server is running on localhost 3000');
})