require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./database/db")
const cors = require('cors');
const  routes = require("./Auth/route")
const passwordReset = require("./Auth/passwordReset")


connectDB();

app.use(express.json());


app.use(cors({ origin: 'http://localhost:3000' }));
app.use("/api/auth", require("./Auth/route"))

app.use("/api/routes", routes);
app.use("/api/passwordReset", passwordReset);

app.use('/api/leads', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })