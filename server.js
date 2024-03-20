require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./database/db")
const  routes = require("./Auth/route")
const passwordReset = require("./Auth/passwordReset")


connectDB();

app.use(express.json());

app.use("/api/auth", require("./Auth/route"))

app.use("/api/routes", routes);
app.use("/api/passwordReset", passwordReset);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })