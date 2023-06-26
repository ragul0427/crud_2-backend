var express = require("express")
var app=express()
var bodyParser = require("body-parser")
var cors = require("cors")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(cors())
const todo = require("./routes/todoRoutes")
app.use('/api/todos',todo)


const mongoUri = "mongodb+srv://ragul8523947145:ragulhp2704@todo.xgarceo.mongodb.net/todoApp?retryWrites=true&w=majority"
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("mongodb connected") }).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send({"hello"})
})

const port = 4000

app.listen(port, () => {
    console.log("server started")
})