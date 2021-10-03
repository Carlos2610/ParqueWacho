const net = require("net");
const WebSocketServer = require('ws').Server
const server = net.createServer()

const puerto = 8080

wss = new WebSocketServer({port:puerto});
console.log("Listening port: "+puerto+" Registring...")

//Aqui controlamos lo que pasa cuando se conecta el socket 
//desde el cliente
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log("received:" + message);
        ws.send(message)
    })
    ws.on('close', ()=>{
        console.log("Comunicación finalizada")
    })

    ws.send("Conectado")
})



