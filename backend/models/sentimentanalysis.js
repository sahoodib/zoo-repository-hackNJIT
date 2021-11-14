const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sentimentanalysis', {
    sentimentId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true
    },
    classificationValue: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sentimentanalysis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sentimentId" },
        ]
      },
    ]
  });
};
