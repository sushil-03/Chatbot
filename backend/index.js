const express = require("express");
const authRoute = require("./routes/auth");
const registerRouter = require("./routes/register");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());

const PORT = 5001;
require("dotenv").config();
require("./database/data");
app.use(express.json());

app.use("/api/", registerRouter);
app.use("/api/", authRoute);
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log("listening to the port " + PORT);
});
