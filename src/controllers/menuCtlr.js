const sequelize = require("../dbConnection");

menuCtlr = {};

menuCtlr.readMany = (req, res) => {
  try {
    sequelize.authenticate().then(async () => {
      const query = "SELECT * FROM `items`;";
      const [resultados] = await sequelize.query(query, { raw: true });
      res.json(resultados);
    });
  } catch (err) {
    res.json(err);
  }
};

menuCtlr.read = (req, res) => {
  try {
    sequelize.authenticate().then(async () => {
      const query = "SELECT * FROM `items` WHERE `id`=" + `${req.params.id};`;
      const [resultados] = await sequelize.query(query, { raw: true });
      res.json(resultados);
    });
  } catch (err) {
    res.json(err);
  }
};

menuCtlr.create = (req, res) => {
  try {
    sequelize.authenticate().then(async () => {
      const query =
        "INSERT INTO `items` (description, price, photo) VALUES " +
        `('${req.body.description}', '${req.body.price}', '${req.body.photo}');`;
      const [resultados] = await sequelize.query(query, { raw: true });
      res.json(resultados);
    });
  } catch (err) {
    res.json(err);
  }
};

menuCtlr.update = (req, res) => {
  try {
    sequelize.authenticate().then(async () => {
      const query =
        "UPDATE `items` SET `description`=" +
        `'${req.body.description}',` +
        "`price`=" +
        `'${req.body.price}',` +
        "`photo`=" +
        `'${req.body.photo}'` +
        " WHERE `id`=" +
        `'${req.params.id}';`;
      const [resultados] = await sequelize.query(query, { raw: true });
      res.json(resultados);
    });
  } catch (err) {
    res.json(err);
  }
};

menuCtlr.delete = (req, res) => {
  try {
    sequelize.authenticate().then(async () => {
      const query = "DELETE FROM `items` WHERE `id`=" + `${req.params.id};`;
      const [resultados] = await sequelize.query(query, { raw: true });
      res.json(resultados);
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = menuCtlr;
