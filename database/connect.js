const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect("mongodb://localhost:27017/challenges", options)
  .then((connect) => {
    console.log("=> Connect to database successfully!");
  })
  .catch((error) => {
    console.log("=> Connect to database with errors!");
    console.log(error);
  });
