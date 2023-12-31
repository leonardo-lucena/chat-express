import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.Server(app);

app.use(express.static(__dirname + '/public'))

const io = socketio(server);

io.on('connect', (socket) => {
    socket.on('chat', (res) => {
        socket.broadcast.emit('chat', res);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(60000, () => {
    console.log("Servidor ON - porta ", 60000)
});
