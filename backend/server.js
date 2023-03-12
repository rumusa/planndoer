require("dotenv").config();
const express = require("express");

const app = express();

//Middleware to activate request logging
//next() method used to forward request to proper method
app.use((req, res, next) => {
    console.log(`Request path: ${req.path}\nRequest method: ${req.method}`);
    next();
});

app.get("/", (req, res) => {
    res.json({ msg: "Planndoer welcome message"});
});

app.listen(process.env.SERVERPORT, () => {
    console.log(`Server is listening on port: ${process.env.SERVERPORT}`);
});