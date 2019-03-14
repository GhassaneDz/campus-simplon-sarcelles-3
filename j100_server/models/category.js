const connection = require("./connection");


const addCategory = function addCategory(cat) {
  return new Promise((resolve, reject) => {
    const q = "INSERT INTO category (name) VALUES (?)";

    const res = connection.query(q, [cat.name], (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });

    // console.log(res.sql);
  });
};

const getCategories = function getCategories() {
  return new Promise((resolve, reject) => {
    const q = "SELECT * FROM category";

    const res = connection.query(q, (err, res) => {
      // console.log("err ? =>", err, "db result ? =>", res);
      if (err) reject(err);
      else resolve(res);
    });

    console.log(res.sql);
  });
};

const getCategory = function getCategory(id) {
  return new Promise((resolve, reject) => {
    const q = "SELECT * FROM category WHERE id = ?";

    const res = connection.query(q, id, (err, res) => {
      // console.log("err ? =>", err, "db result ? =>", res);
      if (err) reject(err);
      else resolve(res[0]);
    });
    console.log(res.sql);
  });
};

const deleteCategories = function deleteCategories(ids) {
  return new Promise((resolve, reject) => {
    ids.forEach(id => {
      const q = "DELETE FROM category WHERE id = ?";
      const res = connection.query(q, id, (err, res) => {
        // console.log("err ? =>", err, "db result ? =>", res);
        if (err) reject({ err, id });
        else resolve(res);
      });
      console.log(res.sql);
    });
  });
};

const updateCategory = function updateCategory(cat) {
  return new Promise((resolve, reject) => {
      const q = "UPDATE category SET name = ? WHERE id = ?";
      const res = connection.query(q, [cat.name, cat.id], (err, res) => {
        // console.log("err ? =>", err, "db result ? =>", res);
        if (err) reject(err);
        else resolve(res);
      });
      // console.log(res.sql);
  });
};

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  deleteCategories,
  updateCategory
};
