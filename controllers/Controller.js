const { User } = require('../models');
const bcrypt = require('bcryptjs');

class Controller {
   static landingPage(req, res) {
      let data = {
         title: "Home",
      }
      res.render("landingPage", data);
   }

   static loginPage(req, res) {
      const error = req.query.error;
      let data = {
         error : error,
         title: "Login"
      }
      res.render("login", data);
   }

   static postLoginPage(req, res) {
      const { username, password } = req.body;
      User.findOne({ where: { username } })
         .then((user) => {
            if (user) {
               const isValid = bcrypt.compareSync(password, user.password);
               if (isValid) {
                  req.session.userId = user.id;
                  return res.redirect("/sikomers");
               } else {
                  const error = "Wrong username/password";
                  return res.redirect(`/login?error=${error}`);
               }
            } else {
               const error = "Wrong username/password";
               return res.redirect(`/login?error=${error}`);
            }
         }).catch((err) => {
            res.send(err);
         }
         );
   }

   static registerPage(req, res) {
      let data = {
         title: "Register"
      }
      res.render("register", data);
   }

   static postRegisterPage(req, res) {
      const { username, password } = req.body;
      User.create({
         username,
         password,
      })
         .then(() => {
            res.redirect("/login");
         }).catch((err) => {
            res.send(err);
         });
   }

}
module.exports = Controller;