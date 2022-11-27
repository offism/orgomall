const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

async function client() {
  return await mongoose.connect("mongodb://127.0.0.1/orgo-mall", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { client };
