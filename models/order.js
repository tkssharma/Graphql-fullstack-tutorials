module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: DataTypes.STRING,
      invoiceNumber: DataTypes.STRING,
    });
  
    Order.associate = models => {
      Order.belongsTo(models.Customer);
      Order.hasMany(models.Product);
    };
  
    return Order;
  };