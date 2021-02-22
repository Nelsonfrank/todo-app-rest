const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const todosRoutes = require("./routes/todos/Todos");

// excute express
const app = express();

// third-party middleware
app.use(bodyParser.json());
// ROUTES
app.use("/", todosRoutes);

// Connect to DB
mongoose.connect(
	process.env.DATABASE_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connect to DB");
	}
);

// Listen to the server
app.listen(3000);
