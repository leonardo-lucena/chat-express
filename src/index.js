import { Socket } from 'dgram';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.Server(app);

app.use(express.static(__dirname + '/public'))

const io = socketio(server);

io.on('connect', (socket) => {
    io.to(socket.id).emit({
        status: true,
        message: "Conexão estabelecida"
    })

    socket.on('teste', (res) => {
        console.log('Mensagem recebida!', res);

        io.to(socket.id).emit(res);
    })
});

app.get('/', (req, res) => {
    res.render('index.html');
})

server.listen(60000, () => {
    console.log("Servidor ON em", 60000)
})