// route to respond diff req
const http=require('node:http');

// req callback will read request info node will handle req we just respond
// res callback will respond to req
const server=http.createServer((req,res)=>{
    //json data
    const superhero={
        firstname:'bruce',
        lastname:'lee'
    }
    //res.end(req.url); // to access the url of incoming request
    if(req.url==='/'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end('Home page')
    }
    else if(req.url==='/slow'){
        for(let i=0;i<6000000000;i++){}   //time consuming code
        res.writeHead(200,{"content-type":"text/plain"});
        res.end('slow page')
    }
    
})

// will read request
server.listen(3000,()=>{
    console.log('server is running on localhost 3000');
})

//Note check for HTML response