const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middlewareWrapper
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server site successfully run");
});
app.listen(port, () => {
  console.log(`server is run on port : ${port}`);
});
