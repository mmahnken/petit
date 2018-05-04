'use strict';
module.exports = (sequelize, DataTypes) => {
  var Term = sequelize.define('Term', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    typical_duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    classMethods: {
      associate: function(models) {
          Term.hasMany(models.Step, {
            foreignKey: 'termId',
            as: 'steps',
          });
      }
    }
  });
  return Term;
};
