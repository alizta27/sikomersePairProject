'use strict'

const { Product, Seller, Shop, User, Category } = require('../models')
const formatter = require('../helpers/convertMoney')

class Sikomers {
   static showProductList(req, res) {
      const { filter, search } = req.query
      const option = Product.sortBy(filter, search)

      Product.findAll(option)
         .then(allProduct => {
            let data = {
               allProduct: allProduct,
               formatter: formatter,
               title: "Sikomers"
            }
            res.render('sikomers', data)
         })
         .catch(err => {
            res.send(err)
         })
   }

   static showShop(req, res) {
      Shop.findAll()
         .then(data => {
            let shopList = {
               data: data,
               title: "Shop List"
            }
            console.log(data)
            res.render('shopList', shopList)
         })
   }

   static shopById(req, res) {
      const id = req.params.shopId

      Shop.findByPk(id, {
         include: [Product]
      })
         .then(data => {
            let shopDetail = {
               data: data,
               formatter: formatter,
               title: "Shop Detail"
            }
            res.render('shopById', shopDetail)
         })
         .catch(err => {
            res.send(err)
         })
   }

   static showProductById(req, res) {
      const id = req.params.productId

      Product.findByPk(id)
         .then(data => {
            let productDetail = {
               data: data,
               formatter: formatter,
               title: "Product Detail"
            }
            res.render('productDetail', productDetail)
         })
         .catch(err => {
            res.send(err)
         })
   }
}
module.exports = Sikomers;