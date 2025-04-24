const http=require('http');
const PORT=2021;
const server=http.createServer((req,res)=>{

    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2>Hi,Greetings of the day!<h2>");
    }

    if(req.url=="/msg" && req.method=="POST")
    {
        res.setHeader("content-type","application/json");
        res.end(JSON.stringify({
            msg:"Sucessfully hit the api"
        }));
    }

    if(req.url=="/" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2 style=color:green>Welcome to the abes engineering college<h2>");
    }

    if(req.url=="/msg" && req.method=="DELETE"){
        res.setHeader('Content-Type','text/html')
        res.end(JSON.stringify({
            msg:"deleted sucessfully"
        }));
    }
})
server.listen(PORT,()=>{
    console.log("s is running"+PORT);
})