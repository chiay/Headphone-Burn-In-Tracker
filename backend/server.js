const express = require('express');
const app = express();

app.use(express.json());

const headphonesRouter = require("./routes/headphones");

app.use('/headphones', headphonesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server listening on port " + PORT));