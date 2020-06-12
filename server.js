const express = require("express");
const app = express();

app.get('/iframe', (req, res) => {
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self' https://www.w3schools.com");
    res.send("You win");    
})

app.use("/", express.static("public"));

app.listen(2000);