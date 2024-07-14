const express = require("express");
const app = express();
const {port,mongoURI} = require("./config/config")
const connection = require("./config/db")
const tasks = require("./routes/tasks")

app.use(express.json())
const start = async()=>{
    try {
        await connection(mongoURI);
        app.listen(port, console.log(`The Server Is Running on port ${port}`))
    } catch (error) {
        console.error("error",error)
    }
}

start();

app.use("/api/v1/tasks",tasks)

