require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const tutorRoutes = require("./routes/tutorRoutes");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes")
const http = require("http").Server(app);
const puppeteer = require("puppeteer");
const PuppeteerMassScreenshots = require("./screen.shooter");

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4000"
    }
});

let channelList = [];

socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user just connected!`);
    socket.on("browse", async ({ url }) => {
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
        socket.on("mouseMove", async ({x, y}) => {
            try {
                await page.mouse.move(x, y);
                const cur = await page.evaluate(
                    (p) => {
                        const elementFromPoint = document.elementFromPoint(p.x, p.y);
                        return window
                            .getComputedStyle(elementFromPoint, null)
                            .getPropertyValue("cursor");
                    },
                    {x, y}
                );
                socket.emit("cursor", cur);
            } catch (err) {}
        });

        socket.on("scroll", ({ position}) => {
            page.evaluate((top) => {
                window.scrollTo({ top });
            }, position)
        });

        socket.on("mouseClick", async ({ x, y }) => {
            try {
                await page.mouse.click(x, y);
            } catch (err) {}
        });
    });

    socket.on('disconnect', () => {
        socket.disconnect();
        console.log('Disconnected');
    });
});

// Connect to database
connectDB();


// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", tutorRoutes);
app.use("/api", authRoutes);
app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });