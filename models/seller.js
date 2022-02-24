'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {

    static associate(models) {
      Seller.hasOne(models.Shop, {foreignKey: 'SellerId'})
    }
  }
  Seller.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};