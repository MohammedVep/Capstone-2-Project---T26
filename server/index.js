const express = require('express');
const app = express();
const PORT = 4000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user just connected!`);
    socketIO.on('disconnect', () => {
        console.log('Disconnected');
    });
});

app.get("/api", (req, res) => {
    request.json({
        message: "Hello world",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})