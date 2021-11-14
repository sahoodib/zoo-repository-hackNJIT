const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animals', {
    entityId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'livingentities',
        key: 'entityId'
      }
    },
    animalType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    animalDescription: {
      type: DataTypes.STRING(860),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'animals',
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
