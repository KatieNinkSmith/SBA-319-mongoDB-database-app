const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Global configureation
const mongoURI = process.env.MONGO_URI;

const db = mongoose.connection;

// connect to mongo
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("Come on MAN...GO");
});

module.exports = db;
