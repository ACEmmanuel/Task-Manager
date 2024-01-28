const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")

// Middleware
app.use(express.static("./public"))
app.use(express.json())

// Routes
app.use("/api/v1/tasks", tasks)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log("Server has started"))
  } catch (error) {
    console.log(error)
  }
}

start()
