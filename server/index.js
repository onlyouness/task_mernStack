const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser")
const {port,mongoURI} = require("./config/config")
const connection = require("./config/db")
const tasks = require("./routes/tasks")
const auth = require("./routes/auth")
const notFound = require("./middleware/not-found")
const errorHandler = require('./middleware/error-handler')

//Middleware to parse the body
app.use(express.json())

app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,
  };
  
app.use(cors(corsOptions));

//Routes
app.use("/api/v1/tasks",tasks)
app.use("/api/v1",auth)

//Not Found Middleware
app.use(notFound)
app.use(errorHandler)
const start = async()=>{
    try {
        await connection(mongoURI);
        app.listen(port, console.log(`The Server Is Running on port ${port}`))
    } catch (error) {
        console.error("error",error)
    }
}

start();

