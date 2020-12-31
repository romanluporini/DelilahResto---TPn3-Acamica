const sequelize = require("../dbConnection");

sequelize.authenticate().then(async()=>{
  const user="CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER UNSIGNED AUTO_INCREMENT,`user` VARCHAR(60) NOT NULL,`password` VARCHAR(16) NOT NULL,`full_name` VARCHAR(60),`email` VARCHAR(60) NOT NULL UNIQUE,`phone` VARCHAR(10),`address` VARCHAR(60) NOT NULL, `role` VARCHAR(1) NOT NULL DEFAULT '0', PRIMARY KEY (`id`));"

  const [resultados] = await sequelize.query(user, {raw:true});

  console.log(resultados);
});

