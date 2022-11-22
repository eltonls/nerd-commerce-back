import { Model } from "sequelize";
import DataTypes from "@sequelize/core";

module.exports = (sequelize) => {

  class Product extends Model { }

  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, { sequelize, modelName: "Product" })

}

