'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Customer', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      });
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Customer');
  }
};
