const net = require('net');

const server = net.createServer()

server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        console.log("Cliente registrado")
        socket.write("Registro completado")
    })

    socket.on('close',()=>{
        console.log('Server closed')
    })

    socket.on('error',(err)=>{
        console.log(err.message)
    })
})


server.listen(4000, ()=>{
    console.log("Atendiendo registros de usuarios...")
})

