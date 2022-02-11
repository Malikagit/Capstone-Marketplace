"use strict";

const casual = require("casual");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    async up(queryInterface, Sequelize) {
        let userproducts = [];
        for (let i = 0; i < 100; i++) {
            let reviewAmount = getRandomInt(10) + 1;
            let userRandomProd = [];
            for (let j = 0; j < reviewAmount; j++) {
                let fav = false;
                let randomProduct = getRandomInt(100) + 1;
                while (userRandomProd.includes(randomProduct)) {
                    randomProduct = getRandomInt(100) + 1;
                }
                if (getRandomInt(10)==4)
                {
                    fav = true;
                }
                userproducts.push({
                    userId: i + 1,
                    productId: randomProduct,
                    favorited: fav,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                userRandomProd.push(randomProduct);
            }
        }
        return queryInterface.bulkInsert("UserProducts", userproducts, {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("UserProducts", null, {});
    },
};
