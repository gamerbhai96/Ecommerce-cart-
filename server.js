const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/authRoutes");
const cartrouter = require("./routes/cartRoutes");

// Connect to the database
connectDB();

const app = express();

// Allowed origins for CORS
const allowedOrigins = ["http://localhost:3000", "https://your-frontend-domain.com"]; // Add your frontend domains here

// CORS Configuration
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true, // Allows cookies and authentication headers
    })
);

// Middleware
app.use(express.json());
app.use("/auth", router);
app.use("/cart", cartrouter);

// Default route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});