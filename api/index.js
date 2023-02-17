const express = require('express');
const app = express();
const dotenv = require('dotev');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require("multer");

dotenv.config()
app.use(express.json());

mongoose.connect(process.eventNames.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images")
    },filename:(req,file,cb) =>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"),(req, res) => {
    res.status(200).json("file uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);


app.listen("3000", () => {
    console.log("Backend running");
});