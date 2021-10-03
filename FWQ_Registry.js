
const WebSocketServer = require('ws').Server


const puerto = 8080

wss = new WebSocketServer({port:puerto});
console.log("Listening port: "+puerto+" Registring...")

//Aqui controlamos lo que pasa cuando se conecta el socket 
//desde el cliente
wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        var info = JSON.parse(message);
        
        console.log("received:"+info.nombre);
        ws.send("Recibidos los parametros de inicio de sesion")
    })
    ws.on('close', ()=>{
        console.log("Comunicación finalizada")
    })

    ws.send("Conectado")
})



