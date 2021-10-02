const wsRegister = "ws://localhost:8080"
var websocket

const init = () => { //esto es lo mismo que poner function init()
    connectWebSocket()
}

const connectWebSocket = () => {
    websocket = new WebSocket(wsRegister);
    
    websocket.onopen = onOpen
    websocket.onclose = onClose
    websocket.onerror = onErr
    websocket.onmessage = onMessage
    
    
}

/**Hay que tener en cuenta lo que haremos para cada funcion
 * 
 * Por ejemplo, onOpen es cuando se abre, tendremos que mandar
 * algo al servidor para que meta a este usuario en la base de datos,
 * cuando se ciera en onClose, avisar que hay libre una plaza, etc
 */
const onOpen = (event) =>{
    console.log("Conectado websocket")
    websocket.send("Cliente activo")
}

const onClose = (event) =>{
    console.log("Cerrado webSocket")
}

const onMessage = (event) =>{
    console.log("Mensaje; "+event.data);
    websocket.close()
}

const onErr = (event) =>{
    console.log("Error; "+event.data);
}

//Asi hemos añadido un controlador al boton que al hacer click inicia el socket
document.getElementById("but").addEventListener("click",init,false)

