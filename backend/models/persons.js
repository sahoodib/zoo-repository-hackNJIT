const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persons', {
    entityId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'livingentities',
        key: 'entityId'
      }
    },
    Address: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    contactNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons',
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
