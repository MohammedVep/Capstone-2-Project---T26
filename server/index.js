const express = require('express');
const app = express();
const PORT = 4000;
const puppeteer = require("puppeteer");
const PuppeteerMassScreenshots = require("./screen.shooter");

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
    socketIO.on("browse", async ({ url }) => {
        const browser = await puppeteer.launch({
            headless: true,
        });
        const context = await browser.createIncognitoBrowserContext();
        const page = await context.newPage();
        await page.setViewport({
            width: 1255,
            height: 800,
        });
        await page.goto(url);
        const screenshots = new PuppeteerMassScreenshots();
        await screenshots.init(page, socket);
        await screenshots.start();
    });
    socketIO.on('disconnect', () => {
        socketIO.disconnect();
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