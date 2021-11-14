const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    sentimentId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sentimentanalysis',
        key: 'sentimentId'
      }
    },
    customerId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'entityId'
      }
    },
    comment: {
      type: DataTypes.STRING(860),
      allowNull: true
    },
    fileLoc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sentimentId" },
          { name: "customerId" },
        ]
      },
      {
        name: "customerId",
        using: "BTREE",
        fields: [
          { name: "customerId" },
        ]
      },
    ]
  });
};
