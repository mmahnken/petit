'use strict';
module.exports = (sequelize, DataTypes) => {
  var Combination = sequelize.define('Combination', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    date: DataTypes.DATE,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Combination.hasMany(models.Step, {
          foreignKey: 'combinationId',
          as: 'steps',
        });
      }
    }
  });
  return Combination;
};
