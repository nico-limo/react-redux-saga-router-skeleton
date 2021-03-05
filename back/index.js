const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
//Import Routes
const authRoute = require("./routes/auth");

dotenv.config();
app.use(cors());

//Connect to DB
mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((e) => console.log("DB not connected:", e));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes Middlewares
app.use("/api", authRoute);

app.listen(8000, () => console.log("Server Up and running at port 8000"));
