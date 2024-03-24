// creating  a web server in nodejs using http

const http=require('node:http');

// req callback will read request info node will handle req we just respond
// res callback will respond to req
const server=http.createServer((req,res)=>{
    //json data
    const superhero={
        firstname:'bruce',
        lastname:'lee'
    }
    res.writeHead(200,{"content-type":"application/json"});  // will return status success
    res.end(JSON.stringify(superhero));  // will end response process and send data to client
})

// will read request
server.listen(3000,()=>{
    console.log('server is running on localhost 3000');
})

//Note check for HTML response