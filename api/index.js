const express = require('express');
const app = express();
const dotemv = require('dotemv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotemv.config()
app.use(express.json());

mongoose.connect(process.eventNames.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute)

app.use("/", (req,res) =>{
    console.log("Running");
})

app.listen("3000", () => {
    console.log("Backend running");
});