'use strict';

const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {
   const data = JSON.parse(fs.readFileSync('./data/seller.json'))
   data.forEach(el => {
     el.createdAt = new Date()
     el.updatedAt = new Date()
   })

   return queryInterface.bulkInsert('Sellers', data, {})
  },

  down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Sellers', null, {})
  }
};