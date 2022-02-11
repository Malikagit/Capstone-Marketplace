"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: "seller", targetKey: 'id' });
            this.hasMany(models.Rating, { uniqueKey: "productId" });
            this.hasMany(models.UserProduct, { uniqueKey: "productId" });
            this.belongsToMany(models.Category, {
                through: "CategoryProduct",
                uniqueKey: "productId",
            });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            picturePath: DataTypes.STRING,
            description: DataTypes.TEXT,
            seller: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product"
        }
    );
    return Product;
};
