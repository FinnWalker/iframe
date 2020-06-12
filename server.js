const express = require("express");
const app = express();

app.get('/iframe', (req, res) => {
    res.setHeader("Content-Security-Policy", "default-src 'none' ");
    res.send("You win");    
})

app.use("/", express.static("public"));

app.listen(2000);