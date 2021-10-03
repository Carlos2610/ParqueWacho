const wsRegister = "ws://localhost:8080"

var websocket = new WebSocket(wsRegister);


/*
const init = () => { //esto es lo mismo que poner function init()
    connectWebSocket()
}

const connectWebSocket = () => {
    
    websocket.onopen = onOpen
    websocket.onclose = onClose
    websocket.onerror = onErr
    websocket.onmessage = onMessage

    
}*/



function recogerDatos(){
    
   
    websocket.onmessage = onMessage;
    websocket.onclose = onClose;
    
    let name = document.getElementById("nombre").value;
    let pass = document.getElementById("password").value;

    let data = {
        nombre: name,
        password: pass
    }
    
    document.writeln("Creando cliente " + data.nombre + " con constraseña: " + data.password)
    
    websocket.send(JSON.stringify(data));
    
    
}

/**Hay que tener en cuenta lo que haremos para cada funcion
 * 
 * Por ejemplo, onOpen es cuando se abre, tendremos que mandar
 * algo al servidor para que meta a este usuario en la base de datos,
 * cuando se ciera en onClose, avisar que hay libre una plaza, etc
 */

const onOpen = (event) =>{
    console.log("Conectado websocket")
}
websocket.onopen = onOpen;

const onClose = (event) =>{
    console.log("Cerrado webSocket")
}

const onMessage = (event) =>{
    console.log("Mensaje; "+event.data);
    websocket.close()
}
/*
const onErr = (event) =>{
    console.log("Error; "+event.data);
}*/

//Asi hemos añadido un controlador al boton que al hacer click inicia el socket
document.getElementById("but").addEventListener("click",recogerDatos,false)


