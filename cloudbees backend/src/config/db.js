const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect("mongodb://0.0.0.0:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

module.exports = mongoose.connection;

//  `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.cv4hyu6.mongodb.net/`,
