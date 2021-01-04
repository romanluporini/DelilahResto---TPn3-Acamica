require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Database models definition and connection
require("./database/models/item");
require("./database/models/user");
require("./database/models/order");

//Settings
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on port ", port);
});

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
const menuRouter = require("./routes/menu");
const signUpRouter = require("./routes/sign-up");
const logInRouter = require("./routes/log-in");
const ordersRouter = require("./routes/orders/orders");

const sequelize = require("./database/dbConnection");

//Routes
app.use("/menu", menuRouter);
app.use("/sign-up", signUpRouter);
app.use("/log-in", logInRouter);
app.use("/orders", ordersRouter);

(async () => {
  await sequelize.authenticate().then(async () => {
    const product = [
      "Bagel de salmón",
      "Hamburguesa Clásica",
      "Sandwich veggie",
      "Ensalada veggie",
      "Focaccia",
      "Sandwich focaccia",
      "Pollo al verdeo",
      "Ensalada rusa",
      "Sushi",
      "Papas con cheddar",
    ];
    const price = [145, 446, 765, 234, 542, 345, 654, 434, 221, 321];
    for (i = 0; i < product.length; i++) {
      const query =
        "INSERT INTO `items`(`description`,`price`,`photo`) VALUES " +
        `('${product[i]}', ${price[i]}, 'photo')`;
      await sequelize.query(query, { raw: true });
    }
  });
})();
