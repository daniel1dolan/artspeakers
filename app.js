const express = require("express");
const app = express();

app.use(express.static("public"));
//public folder- css

app.set("view engine", "ejs");
//view folder -index.ejs, speakers.ejs

app.use(require("./controllers/index"));
app.use(require("./controllers/speakers"));
//routes- index.js, speakers

app.listen(3000, () => {
  console.log("listening on port 3000");
});
