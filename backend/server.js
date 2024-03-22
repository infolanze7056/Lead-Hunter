require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./database/db");
const cors = require('cors');
const routes = require("./Auth/route");
const passwordReset = require("./Auth/passwordReset");
const{ adminAuth, userAuth} = require("./middleware/auth")

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:3000' }));

// Authentication routes
app.use("/api/auth", require("./Auth/route"));

// Additional routes with authentication middleware
app.use("/api/routes", routes);
app.use("/api/passwordReset", passwordReset);

// Adding admin and basic routes with their respective middleware
app.get("/api/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/api/basic", userAuth, (req, res) => res.send("User Route"));

app.use('/api/leads', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});
