const express = require("express")
const cors = require("cors")

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors());

app.get('/' , (req,res) => {
    res.send("hello world")
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})