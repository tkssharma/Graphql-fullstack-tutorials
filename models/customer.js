module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    });
  
    Customer.associate = models => {
        Customer.hasMany(models.Order);
    };
    return Customer;
  };