// Import packages
const express = require("express");
const price = require("./routes/prise");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/price", price);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
