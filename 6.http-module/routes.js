const  http = require('http');

const server = http.createServer((req,res)=>
{
    const url = req.url;
    if(url =='/')
    {
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('home page');
    }
    else if(url =='/projects'){
    
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Projects page');
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('this page cannot found');
    }
});


const port = 5000;
server.listen(port,()=>{
    console.log(`Server is now listeining port ${port}`);

});