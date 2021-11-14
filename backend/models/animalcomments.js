const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animalcomments', {
    sentimentId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sentimentanalysis',
        key: 'sentimentId'
      }
    },
    animalId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'animals',
        key: 'entityId'
      }
    }
  }, {
    sequelize,
    tableName: 'animalcomments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sentimentId" },
          { name: "animalId" },
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
