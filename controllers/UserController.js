const { User, UserProfile } = require('../models');

class UserController {
   static showProfile(req, res) {
      User.findAll({
         include: [UserProfile],
         where: {
            id: req.session.userId
         }
      })

         .then(data => {
            let userDetail = {
               data: data,
               title: "User Detail"
            }
            res.render('userProfile', userDetail)
         })
         .catch(err => {
            console.log(err);
            res.send(err)
         }
         )
   }

   static addProfile(req, res) {
      let title = {
         title: "Add Profile"
      }
      res.render("addProfileUser", title);
   }

   static postProfile(req, res) {
      let UserId = req.session.userId
      const { name, email, contact, img, address, born } = req.body;
      UserProfile.create({
         name,
         email,
         contact,
         img,
         address,
         born,
         UserId
      })
         .then(() => {
            res.redirect('/users')
         })
         .catch(err => {
            res.send(err)
         })
   }

   static formProfile(req, res) {
      User.findAll({
         include: [UserProfile],
         where: {
            id: req.session.userId
         }
      })

         .then(data => {
            let userDetail = {
               data: data,
               title: "User Detail"
            }
            res.render('editProfile', userDetail)
         })
         .catch(err => {
            console.log(err);
            res.send(err)
         }
         )
   }
   static postEditProfile(req, res) {
      let UserId = req.session.userId
      const { name, email, contact, img, address, born } = req.body;
      UserProfile.update({
         name,
         email,
         contact,
         img,
         address,
         born,
         UserId
      }, {
            where: {
               id: req.params.id
            }
         })
         .then(() => {
            res.redirect('/users')
         })
         .catch(err => {
            res.send(err)
         })
   }

   static deleteProfile(req, res) {
      UserProfile.destroy({
         where: {
            id: req.params.id
         }
      })
         .then(() => {
            res.redirect('/users')
         })
         .catch(err => {
            res.send(err)
         })
   }

}
module.exports = UserController;