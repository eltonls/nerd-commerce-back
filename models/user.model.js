import Model from "sequelize";
import DataTypes from "@sequelize/core";

module.exports = (sequelize) => {
  class User extends Model { }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), // Array with productIds
      allowNull: true,
    },
    wishlist: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: "User"
  })

  return User;
}
