const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    sentimentId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sentimentanalysis',
        key: 'sentimentId'
      }
    },
    employeeId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    messageBody: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'messages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sentimentId" },
          { name: "customerId" },
          { name: "employeeId" },
        ]
      },
    ]
  });
};
