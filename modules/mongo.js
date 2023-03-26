const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

async function client() {
  // return await mongoose.connect("localhost:127.0.0.0.1:27017/orgo-mall", {
  return await mongoose.connect("mongodb+srv://offism:sma01022002@cluster0.iwyiykd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  });
}

module.exports = { client };
