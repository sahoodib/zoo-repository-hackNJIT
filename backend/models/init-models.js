var DataTypes = require("sequelize").DataTypes;
var _animalcomments = require("./animalcomments");
var _animals = require("./animals");
var _comments = require("./comments");
var _compartments = require("./compartments");
var _customers = require("./customers");
var _employees = require("./employees");
var _livingentities = require("./livingentities");
var _messages = require("./messages");
var _persons = require("./persons");
var _sentimentanalysis = require("./sentimentanalysis");

function initModels(sequelize) {
  var animalcomments = _animalcomments(sequelize, DataTypes);
  var animals = _animals(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var compartments = _compartments(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var livingentities = _livingentities(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var persons = _persons(sequelize, DataTypes);
  var sentimentanalysis = _sentimentanalysis(sequelize, DataTypes);

  animals.belongsToMany(sentimentanalysis, { as: 'sentimentId_sentimentanalyses', through: animalcomments, foreignKey: "animalId", otherKey: "sentimentId" });
  customers.belongsToMany(sentimentanalysis, { as: 'sentimentId_sentimentanalysis_comments', through: comments, foreignKey: "customerId", otherKey: "sentimentId" });
  sentimentanalysis.belongsToMany(animals, { as: 'animalId_animals', through: animalcomments, foreignKey: "sentimentId", otherKey: "animalId" });
  sentimentanalysis.belongsToMany(customers, { as: 'customerId_customers', through: comments, foreignKey: "sentimentId", otherKey: "customerId" });
  animalcomments.belongsTo(animals, { as: "animal", foreignKey: "animalId"});
  animals.hasMany(animalcomments, { as: "animalcomments", foreignKey: "animalId"});
  compartments.belongsTo(animals, { as: "animal", foreignKey: "animalId"});
  animals.hasMany(compartments, { as: "compartments", foreignKey: "animalId"});
  comments.belongsTo(customers, { as: "customer", foreignKey: "customerId"});
  customers.hasMany(comments, { as: "comments", foreignKey: "customerId"});
  animals.belongsTo(livingentities, { as: "entity", foreignKey: "entityId"});
  livingentities.hasOne(animals, { as: "animal", foreignKey: "entityId"});
  persons.belongsTo(livingentities, { as: "entity", foreignKey: "entityId"});
  livingentities.hasOne(persons, { as: "person", foreignKey: "entityId"});
  customers.belongsTo(persons, { as: "entity", foreignKey: "entityId"});
  persons.hasOne(customers, { as: "customer", foreignKey: "entityId"});
  employees.belongsTo(persons, { as: "entity", foreignKey: "entityId"});
  persons.hasOne(employees, { as: "employee", foreignKey: "entityId"});
  animalcomments.belongsTo(sentimentanalysis, { as: "sentiment", foreignKey: "sentimentId"});
  sentimentanalysis.hasMany(animalcomments, { as: "animalcomments", foreignKey: "sentimentId"});
  comments.belongsTo(sentimentanalysis, { as: "sentiment", foreignKey: "sentimentId"});
  sentimentanalysis.hasMany(comments, { as: "comments", foreignKey: "sentimentId"});
  messages.belongsTo(sentimentanalysis, { as: "sentiment", foreignKey: "sentimentId"});
  sentimentanalysis.hasMany(messages, { as: "messages", foreignKey: "sentimentId"});

  return {
    animalcomments,
    animals,
    comments,
    compartments,
    customers,
    employees,
    livingentities,
    messages,
    persons,
    sentimentanalysis,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
