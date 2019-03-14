const connection = require("./connection");

const addUser = function addUser(data) {
  return new Promise((resolve, reject) => {
    const q =
      "INSERT INTO user (name, lastname, password, email) VALUES (?, ?, ?, ?)";

    const res = connection.query(
      q,
      [data.name, data.lastname, data.password, data.email],
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
        console.log("err= >", err, "res =>", res);
      }
    );
    console.log(res.sql);
  });
};

const getUsers = function getUsers() {
  return new Promise((resolve, reject) => {
    const q = "SELECT id, name, lastname, email FROM user";

    const res = connection.query(q, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });

    console.log(res.sql);
  });
};

const deleteUsers = function deleteUsers(ids) {
  return new Promise((resolve, reject) => {
    ids.forEach(id => {
      const q = "DELETE FROM user WHERE id = ?";
      const res = connection.query(q, id, (err, res) => {
        if (err) reject({ err, id });
        else resolve(res);
      });
      console.log(res.sql);
    });
  });
};

module.exports = {
  addUser,
  getUsers,
  deleteUsers
};
