require("dotenv").config();

const http = require("http");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      app: APP_NAME,
      database: mongoose.connection.readyState === 1 ? "connected" : "not connected",
      message: "Hello from Docker + MongoDB",
      status: "ok",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
