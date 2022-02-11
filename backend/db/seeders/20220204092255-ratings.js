"use strict";

const casual = require("casual");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    async up(queryInterface, Sequelize) {
        let reviewers = [];
        for (let i = 0; i < 100; i++) {
            const products = await queryInterface.sequelize.query(
                'SELECT * FROM "Products" WHERE "id" = :idReplacement;',
                {
                    replacements: { idReplacement: i + 1 },
                    type: queryInterface.sequelize.QueryTypes.SELECT,
                }
            );
            let reviewAmount = getRandomInt(10) + 1;
            for (let j = 0; j < reviewAmount; j++) {
                let randomReviewer = getRandomInt(100) + 1;
                while (products[0].seller === randomReviewer) {
                    randomReviewer = getRandomInt(100) + 1;
                }
                reviewers.push({
                    rating: getRandomInt(6),
                    comment: casual.text,
                    productId:i+1,
                    author:randomReviewer,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
        }
        return queryInterface.bulkInsert("Ratings", reviewers, {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Ratings", null, {});
    },
};
