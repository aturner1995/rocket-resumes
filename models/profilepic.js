const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profilepic extends Model { }

Profilepic.init({

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  }, filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'profilepic',
    underscored: true,
  });

module.exports =Profilepic;
