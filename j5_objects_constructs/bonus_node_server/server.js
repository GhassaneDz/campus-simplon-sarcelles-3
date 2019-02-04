const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

function writeToFile(data) {
//   return new Promise((resolve, reject) => {
    fs.appendFile("./test.json", data + "\n", err => {
      if (err) {
        // reject(err);
      } else {
        // resolve("The file has been saved!");
      }
    });
//   });
}

app.post("/data", (req, res) => {
  console.log("corps de la req http", req.body);
  writeToFile(JSON.stringify(req.body))
    // .then(res => {
    //   res.status(200).send("ok");
    // })
    // .catch(err => {
    //   res.status(500).send(err);
    // });
});

app.listen(9999);
