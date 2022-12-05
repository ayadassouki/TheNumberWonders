const express = require("express");

const app = express();

const host = 'localhost';
const PORT = 8000;

app.get("/", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
        user_guess: "answer"

    })
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})






