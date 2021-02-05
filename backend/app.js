const express = require('express')
const app = express()
const path = require("path");
const bloggyRoutes = require("./routes/posts");
const cors = require('cors')

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(cors())

app.use("/api/posts", bloggyRoutes);

app.listen(5000, () => console.log("It's running birch"))
