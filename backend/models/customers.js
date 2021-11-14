const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    entityId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'entityId'
      }
    },
    personalEmail: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entityId" },
        ]
      },
    ]
  });
};
