'use strict'

const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer(function(req,res)
{
	res.end('hola iojs')
})

server.listen(port,function(){
	console.log('servidor esta escuchando en el puerto 8080')
})
