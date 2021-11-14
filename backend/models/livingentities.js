const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livingentities', {
    entityId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    first_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middle_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'livingentities',
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
