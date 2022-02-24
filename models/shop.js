'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {

    static associate(models) {
      Shop.belongsTo(models.Shop, {foreignKey: 'SellerId'})
      Shop.hasMany(models.Product, {foreignKey: 'ShopId'})
    }
  }
  Shop.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    img: DataTypes.STRING,
    SellerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};