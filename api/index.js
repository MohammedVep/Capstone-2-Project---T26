const express = require('express');
const app = express();
const dotemv = require('dotemv');
const mongoose = require('mongoose');

dotemv.config()

mongoose.connect(process.eventNames.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/", (req,res) =>{
    console.log("Running");
})

app.listen("3000", () => {
    console.log("Backend running");
});