const express = require("express");
const authRoute = require("./routes/auth");
const registerRouter = require("./routes/register");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 5001;
require("dotenv").config();
require("./database/data");
app.use(express.json());

// app.use("/api/auth", authRoute);
app.use("/api/", registerRouter);
app.use("/api/", authRoute);

app.listen(PORT, () => {
  console.log("listening to the port " + PORT);
});
