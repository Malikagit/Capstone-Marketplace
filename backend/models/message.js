"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                uniqueKey: 'author'
            });
            // define association here
        }
    }
    Message.init({
        contenu: DataTypes.TEXT,
        author: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};
