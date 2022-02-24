'use strict';
module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull : false,
        type: Sequelize.STRING
      },
      price: {
        allowNull : false,
        type: Sequelize.INTEGER
      },
      img: {
        allowNull : false,
        type: Sequelize.STRING
      },
      stock: {
        allowNull : false,
        type: Sequelize.INTEGER
      },
      ShopId: {
        allowNull : false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Shops',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      CategoryId: {
        allowNull : false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};