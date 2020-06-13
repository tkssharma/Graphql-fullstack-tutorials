'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'Order',
      'customerId', 
      {
        type: Sequelize.UUID,
        references: {
          model: 'Customer', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }).then(() => {
        return queryInterface.addColumn(
          'Order',
          'paymentId', 
          {
            type: Sequelize.UUID,
            references: {
              model: 'Payment', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          })
      }).then(() => {
        return queryInterface.addColumn(
          'Product',
          'orderId', 
          {
            type: Sequelize.UUID,
            references: {
              model: 'Order', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          })
      }).catch( err => {
        console.log(err);
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Order', 'customerId')
    .then(() => {
      return queryInterface.removeColumn('Order', 'paymentId')
    })
    .then(() => {
      return queryInterface.removeColumn('Product', 'orderId')
    }).catch(err => {
      console.log(err);
    })

  }
};
