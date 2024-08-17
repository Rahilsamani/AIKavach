const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const contactUsRoute = require("./routes/Contact");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/reach", contactUsRoute);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
