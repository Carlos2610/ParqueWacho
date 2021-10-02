const WebSocketServer = require('ws').Server

const puerto = 8080

wss = new WebSocketServer({port:puerto});
console.log("Listening port: "+puerto+" Registring...")

//Aqui controlamos lo que pasa cuando se conecta el socket 
//desde el cliente
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log("received:"+message);
        ws.send(message)
    })

    ws.send("Conectado")
})



