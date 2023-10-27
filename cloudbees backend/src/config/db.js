const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://b2vtechnology:QidO69qXKZdYCYuh@cluster0.cv4hyu6.mongodb.net/", {
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

// mongodb+srv://b2vtechnology:QidO69qXKZdYCYuh@cluster0.cv4hyu6.mongodb.net/
// mongodb://0.0.0.0:27017/
