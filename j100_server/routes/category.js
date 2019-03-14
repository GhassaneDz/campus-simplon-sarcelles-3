const express = require("express");
const router = express.Router();
const model = require("./../models/category");

router.get("/category", (req, res) => {
  model
    .getCategories()
    .then(categories => {
      res
        .status(200)
        .send(categories);
    })
    .catch(err => {
      res.status(500).send({ appMessage: { text: "get all categories not ok", level: "error" } });
    });
});


router.get("/category/:id", (req, res) => {
  model
    .getCategory(req.params.id)
    .then(categories => {
      res.status(200).send(categories);
    })
    .catch(err => {
      res
        .status(500)
        .send({ appMessage: { text: "get one category not ok", level: "error" } });
    });
});

router.post("/category", (req, res) => {
  // return console.log("POOOST", req.body.category);
  model
    .addCategory(req.body.category)
    .then(result => {
      res.status(200).send({ appMessage: { text: "create category ok", level: "success" } });
    })
    .catch(err => {
      res.status(500).send({ appMessage: { text: "create category not ok", level: "error" } });
    });
});

router.patch("/category/:id", (req, res) => {
  // return console.log("PAAATCH", req.body);
  model
    .updateCategory(req.body)
    .then(result => {
      res.status(200).send({ appMessage: { text: "update category ok", level: "success" } });
    })
    .catch(err => {
      res
        .status(500)
        .send({
          appMessage: { text: "update category not ok", level: "error" }
        });
    });
});


router.delete("/category", (req, res) => {
  // return console.log("@delete articles...", req.query.ids);
  model
    .deleteCategories(req.query.ids)
    .then(dbRes =>
      res
        .status(200)
        .send({
          appMessage: { text: "categories deletion success", level: "success" }
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


module.exports = router;
