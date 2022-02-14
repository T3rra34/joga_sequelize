'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  article.init({
    id: {
    data: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
    name: {
     data: DataTypes.STRING,
     allowNull: false
  },
    slug: {
    data: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
    image: {
    data: DataTypes.STRING,
    allowNull: false
  }
    body: {
    data: DataTypes.TEXT,
    allowNull: false
  }
    published: {
    data: DataTypes.DATE,
    allowNull: false
  }
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};