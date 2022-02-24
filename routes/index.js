const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");
const usersRouter = require("./user");
const sikomersRouter = require("./sikomers");


router.get("/", Controller.landingPage);
router.get("/register", Controller.registerPage);
router.post("/register", Controller.postRegisterPage);
router.get("/login", Controller.loginPage);
router.post("/login", Controller.postLoginPage);

router.use((req, res, next) => {
   if (!req.session.userId) {
      const error = "You must login first";
      return res.redirect(`/login?error=${error}`);
   } else {
      next();
   }
})

router.get("/logout", (req, res) => {
   req.session.destroy(err => {
      if (err) {
         console.log(err);
      } else {
         res.redirect("/login");
      }
   });
});

router.use("/sikomers", sikomersRouter);
router.use("/users", usersRouter);


module.exports = router;