'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proposal.belongsTo(models.Movies, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
      });

      Proposal.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      Proposal.hasMany(models.Votes, {
        foreignKey: 'voteId',
        onDelete: 'CASCADE'
      })
    }
  }
  Proposal.init({
    removed: DataTypes.BOOLEAN,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Proposal',
  });
  return Proposal;
};