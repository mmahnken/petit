'use strict';
module.exports = (sequelize, DataTypes) => {
  var Step = sequelize.define('Step', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    counts: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    order: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        Step.belongsTo(models.Combination, {
          foreignKey: 'combinationId',
          onDelete: 'CASCADE',
        });
        Step.belongsTo(models.Term, {
          foreignKey: 'termId',
          onDelete: 'CASCADE',
        })
      }
    }
  });
  return Step;
};
