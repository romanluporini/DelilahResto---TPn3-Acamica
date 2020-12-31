const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { dbMatch } = require("../helpers");

logInCtlr = {};

logInCtlr.read = (req, res) => {
  res.send(
    "This is the log in page, authenticate yourself with your email and password"
  );
};

logInCtlr.create = async (req, res) => {
  try{
    const [userMatch] = await dbMatch("users", "email", req.body.email)
      if (userMatch.email && await bcrypt.compare(req.body.password, userMatch.password)) {
        const token = jwt.sign({ userMatch }, process.env.TOKEN_JWT);
        console.log(token);
        res.redirect("menu");
      } else {
        res.send("password incorrect, please try again");
      }
  } catch {
    res.send("user not registered, please sign up first");
  }
}


module.exports = logInCtlr;