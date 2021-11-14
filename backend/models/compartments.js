const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compartments', {
    workerId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    animalId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'animals',
        key: 'entityId'
      }
    },
    compartmentId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    NumberOfAnimals: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'compartments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workerId" },
          { name: "animalId" },
          { name: "compartmentId" },
        ]
      },
      {
        name: "animalId",
        using: "BTREE",
        fields: [
          { name: "animalId" },
        ]
      },
    ]
  });
};
