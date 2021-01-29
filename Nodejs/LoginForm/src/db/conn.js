const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected succesfully");
  })
  .catch((e) => {
    console.log(e);
  });
