const express = require("express");
const router = express.Router();
const model = require("./../models/user");


router.get("/user", (req, res) => {
  model.getUsers()
  .then(users => {
    res
      .status(200)
      .send({ users });
  })
  .catch(err => {
    res
      .status(500)
      .send({ err, appMessage: { text: "failed to get users", level: "error" } });
  });
});

router.post("/user", (req, res) => {

  const { name, lastname, password, email} = req.body;

  model.addUser({
    name,
    lastname,
    password,
    email
  }).then(response => {

    res.status(200).send(
      { appMessage: { text: "ok", level: "success" } }
    );
  }).catch(err => {

    res.status(500).send(
      { appMessage: { text: "not ok", level: "error", err} }
    );
  });
});

router.delete("/user", (req, res) => {
  console.log("ici", req.query.ids);
  model
    .deleteUsers(req.query.ids)
    .then(response => res.status(200).send({ appMessage: { text: "ok", level: "success" } }))
    .catch(err => res.status(500).send({ appMessage: { text: "not ok", level: "error", err }}));

});

module.exports = router;
