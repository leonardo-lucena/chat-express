import express from 'express';
import http from 'http';

const app = express();
const server = http.Server(app);

app.get('/', (req, res) => {
    res.send('Hello wolrd');
})

server.listen(60000, () => {
    console.log("Servidor ON em", 60000)
})