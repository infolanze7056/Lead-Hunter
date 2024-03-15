require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./database/db")


connectDB();

app.use(express.json());

app.use("/api/auth", require("./Auth/route"))
// app.use("/api/aut")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })