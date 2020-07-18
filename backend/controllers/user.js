const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    console.log("req::: ", req.body)
    User.findOne({ email: req.body.email })
      .then(user => {
        console.log("fetcheduser ", user);
        if (!user) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser.email
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      });
  }
