import http from 'node:http'

// Criando um Servidor HTTP com Node.js
const server = http.createServer((req, res) => {
    return res.end('Hello World')
    


})

server.listen(3333)
// Porta Localhost