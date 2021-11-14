const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    entityId: {
      type: DataTypes.STRING(48),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'entityId'
      }
    },
    employeeEmail: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    workerRole: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    salary: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
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
