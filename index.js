const express = require("express")
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3030;

app.use("/public", express.static(path.join(__dirname, "assets")))
app.set("views", path.join(__dirname, "views/v1"))

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/webcam", (req, res) => {
    res.render("webcam2");
})

app.get("/recog", (req, res) => {
    res.render("webcam");
})
app.get("/canvas", (req, res) => {
    res.render("canvas");
})
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
