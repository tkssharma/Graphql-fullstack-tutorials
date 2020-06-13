module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
    });
  
    Payment.associate = models => {
      Payment.hasOne(models.Order);
    };
  
    return Payment;
}