module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'ProductTags',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        ProductId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        TagId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('ProductTags');
  },
};