'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Product', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL,
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Product');
  }
};
