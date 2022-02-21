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
            this.belongsTo(models.User, { as: 'vendeur', foreignKey: "seller", targetKey: 'id' });
            this.hasMany(models.Rating, { as: 'ratings', foreignKey: "productId" });
            //belongs
            this.belongsToMany(models.User, { as: 'favorisItems', through: 'UserProducts', foreignKey: "productId" });
            this.belongsToMany(models.Category, {
                through: "CategoryProducts",
                foreignKey: "productId",
                constraints: false
            });
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            picturePath: DataTypes.STRING,
            description: DataTypes.TEXT,
            seller: DataTypes.INTEGER,
            //vendu: DataTypes.BOOLEAN
        },
        {
            sequelize,
            modelName: "Product"
        }
    );
    return Product;
};
