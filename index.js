const htttp = require('http');
const server = htttp.createServer((req , res)=>{

    if (req.url == "/"){
        res.end('Yes We are here From Home Page');
    }else if (req.url == "/about") {
        res.end('Yes We are here From About us page');
    }else if (req.url == "/contact") {
        res.writeHead(200 , {"contact-type": "text/html"});
        res.end('Yes We are here From  Contact us page');
    }else {
        res.writeHead(404  , {"Contact-type": "text/html"});
        res.end('404 Error Page');
    }


    
});







server.listen('8000','127.0.0.1', ()=>{
    console.log('Live Server in Here');
})