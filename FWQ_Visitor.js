const net = require('net')

const options = {
    port: 4000,
    host: '127.0.0.1'
}

const visitor = net.createConnection(options)

visitor.on('connect',()=>{
    console.log("conexion satisfactoria")
    visitor.write('Usuario registrado con exito')
})

visitor.on('error',(err)=>{
    console.log(err.message)
})


