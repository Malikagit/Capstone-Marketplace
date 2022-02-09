"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ConversationProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Message, {
                uniqueKey: 'messageId',
                onUpdate: 'cascade',
                onDelete: 'cascade'
            });
            this.belongsTo(models.Product, {
                uniqueKey: 'productId'
            });
            this.belongsTo(models.User, {
                as: 'author',
                uniqueKey: 'author'
            });
            this.belongsTo(models.User, {
                as: 'userId',
                uniqueKey: 'userId'
            });
            // define association here
        }
    }
    ConversationProduct.init({
        messageId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        author: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ConversationProduct',
    });
    return ConversationProduct;
};
