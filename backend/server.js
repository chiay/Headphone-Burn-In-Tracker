require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => {
   console.error(error);
});

db.once("open", () => {
   console.log("Database Connected");
})

app.use(express.json());

const headphonesRouter = require("./routes/headphones");

app.use('/headphones', headphonesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server listening on port " + PORT));