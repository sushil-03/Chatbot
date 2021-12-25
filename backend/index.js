const express = require("express");
const authRoute = require("./routes/auth");
const registerRouter = require("./routes/register");
const app = express();
const PORT = 5001;
require("dotenv").config();
require("./database/data");
app.use(express.json());

// app.use("/api/auth", authRoute);
app.use("/api/", registerRouter);
app.use("/api/", authRoute);

app.get("/", (req, res) => {
  console.log("Running");
  res.send("Testing");
});

app.listen(PORT, () => {
  console.log("listening to the port " + PORT);
});
