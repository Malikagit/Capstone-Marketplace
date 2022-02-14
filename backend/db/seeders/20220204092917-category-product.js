"use strict";

const casual = require("casual");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    async up(queryInterface, Sequelize) {
        let categoryproducts = [];
        for (let i = 0; i < 100; i++) {
          let categoryRandomProd = [];
            let categoryAmount = getRandomInt(4) + 1;
            for (let j = 0; j < categoryAmount; j++) {
                let randomCategory = getRandomInt(100) + 1;
                while (categoryRandomProd.includes(randomCategory)) {
                    randomCategory = getRandomInt(100) + 1;
                }
                categoryproducts.push({
                    productId: i + 1,
                    categoryId: randomCategory,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                categoryRandomProd.push(randomCategory);
            }
        }
        return queryInterface.bulkInsert(
            "CategoryProducts",
            categoryproducts,
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("CategoryProducts", null, {});
    },
};
