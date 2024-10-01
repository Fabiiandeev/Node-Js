import http from 'node:http'
const server = http.createServe((req, res) => {
    return res.end('Hello World')
    


})

server.listen(3333)
// Porta Localhost