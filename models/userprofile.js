'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    
    get newBorn() {
      return this.born.toISOString().substring(0, 10);
    }

    static associate(models) {
      UserProfile.belongsTo(models.User, { foreignKey: "UserId" })

    }
  }
  UserProfile.init({
    name: DataTypes.STRING,
    born: DataTypes.DATE,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    img: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};