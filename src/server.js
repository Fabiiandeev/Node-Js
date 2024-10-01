import http from 'node:http'

// Criando um Servidor HTTP com Node.js

const users =[]

const server =http.createServer((req, res) =>{
    const {method, url}= req

    if(method == "GET" && url == "/users"){
        return res.end(JSON.stringify(users))
    }

    if(method == "POST" && url == "/users"){
        users.push({
            id:1,
            nome:"John doe",
            email:"johndoe@example.com",
        })

        return res.writeHead(201).end()
    }

    return res.end("Criação de usuários")
})
server.listen(3333)
// Porta Localhost