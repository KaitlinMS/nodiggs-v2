'use strict';
const {
  Model
} = require('sequelize');
const {Votes} = require("../db-objects");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vote.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      Vote.belongsTo(models.Proposal, {
        foreignKey: 'proposalId',
        onDelete: 'CASCADE'
      })
    }
  }
  Vote.init({
    removed: DataTypes.BOOLEAN,
    isVeto: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vote',
  });
  return Vote;
};