'use strict';
const { Op } = require('sequelize')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Seller, { foreignKey: 'ShopId' })
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId' })
    }

    static sortBy(filter, search) {
      let option = {}

      if (filter) {
        option.where = {
          CategoryId: filter
        }
      }

      if (search) {
        option.where = {
          name: {
            [Op.iLike]: `%${search}%`
          }
        }
      }

      return option
    }
  }

  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    ShopId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};