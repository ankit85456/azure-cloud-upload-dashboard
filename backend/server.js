const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const authRoutes =
  require("./routes/authRoutes");

const uploadRoutes =
  require("./routes/uploadRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// MongoDB Connect
mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});


// Auth Routes
app.use(
  "/api/auth",
  authRoutes
);


// Upload Routes
app.use(
  "/api",
  uploadRoutes
);


const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});