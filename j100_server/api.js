const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 9999;

//  allow CORS requests
app.use(cors());

// parse application/json
app.use(bodyParser.json())

/* ROUTING */
const user = require("./routes/user");
const article = require("./routes/article");
const category = require("./routes/category");

app.use("/api", user);
app.use("/api", article);
app.use("/api", category);

app.get("/", (req, res) => {
    res.status(200).json("hello world !!!");
})

app.listen(port, () => {
    console.log("node app is listening on port => " + port);
});