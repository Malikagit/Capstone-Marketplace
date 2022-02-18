"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable("CategoryProducts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            categoryId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Categories",
                    key: 'id'
                },
            },
            productId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Products",
                    key: 'id'
                },
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("CategoryProducts");
    },
};
