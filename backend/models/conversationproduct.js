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
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Messages",
                    key: 'id'
                },
            });
            this.belongsTo(models.Product, {
                uniqueKey: 'productId'
            });
            this.belongsTo(models.User, {
                name: 'author',
                uniqueKey: 'author'
            });
            this.belongsTo(models.User, {
                name: 'userId',
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
