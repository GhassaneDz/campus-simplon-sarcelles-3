const connection = require("./connection");

const addArticle = function addArticle(data) {
  return new Promise((resolve, reject) => {
    const q = "INSERT INTO article (title, content, id_cat) VALUES (?, ?, ?)";

    const res = connection.query(q, [data.title, data.content, data.id_cat], (err, res) => {
      if (err) reject(err);
      else resolve(res);
      console.log("err= >", err, "res =>", res);
    });
    // console.log(res.sql);
  });
};

const getArticles = function getArticles() {
  return new Promise((resolve, reject) => {
    const q = "SELECT * FROM article";

    const res = connection.query(q, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });

    console.log(res.sql);
  });
};

const getArticle = function getArticle(id) {
  return new Promise((resolve, reject) => {
    const q = "SELECT * FROM article WHERE id = ?";

    const res = connection.query(q, Number(id), (err, res) => {
      if (err) reject(err);
      else resolve(res[0]);
    });

    console.log(res.sql);
  });
};

const deleteArticles = function deleteArticles(ids) {
  return new Promise((resolve, reject) => {
    ids.forEach(id => {
      const q = "DELETE FROM article WHERE id = ?";
      const res = connection.query(q, id, (err, res) => {
        if (err) reject({ err, id });
        else resolve(res);
      });
      console.log(res.sql);
    });
  });
};

const updateArticle = function updateArticle(article) {
  return new Promise((resolve, reject) => {
    const q = "UPDATE article SET title = ?, content = ?, id_cat = ? WHERE id = ?";
    const res = connection.query(
      q,
      [article.title, article.content, article.id_cat, article.id],
      (err, res) => {
        // console.log("err ? =>", err, "db result ? =>", res);
        if (err) reject(err);
        else resolve(res);
      }
    );
    console.log(res.sql);
  });
};

module.exports = {
  addArticle,
  getArticle,
  getArticles,
  deleteArticles,
  updateArticle
};
