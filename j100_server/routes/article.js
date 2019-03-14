const express = require("express");
const router = express.Router();
const model = require("./../models/article");

router.get("/article", (req, res) => {
  model
    .getArticles()
    .then(articles => res.status(200).send(articles))
    .catch(err => res.status(500).send({ appMessage: { text: "error getting all articles", level: "error" }}));
});

router.get("/article/:id", (req, res) => {
  //  return console.log(req.body);
  model
    .getArticle(req.params.id)
    .then(article => res.status(200).send(article))
    .catch(err =>
      res.status(500).send({ appMessage: { text: "error getting one article", level: "error" } })
    );
});

router.post("/article", (req, res) => {
  // return console.log(req.body);
  model
    .addArticle(req.body)
    .then(dbRes => res.status(200).send({ appMessage: { text: "article creation success", level: "success" }}))
    .catch(err => res.status(500).send({ err, appMessage: { text: "error when creating article", level: "error" }}));
});

router.delete("/article", (req, res) => {
  // return console.log("@delete articles...", req.query.ids);
  model
    .deleteArticles(req.query.ids)
    .then(dbRes =>
      res
        .status(200)
        .send({
          appMessage: { text: "article deletion success", level: "success" }
        })
    )
    .catch(err =>
      res
        .status(500)
        .send({
          err,
          appMessage: { text: "error when deleting article", level: "error" }
        })
    );
});

router.patch("/article/:id", (req, res) => {
  // return console.log("PAAATCH", req.body);
  model
    .updateArticle(req.body)
    .then(() => {
      res
        .status(200)
        .send({ appMessage: { text: "update article ok", level: "success" } });
    })
    .catch(err => {
      res.status(500).send({
        appMessage: { text: "update article not ok", level: "error" }
      });
    });
});

module.exports = router;
