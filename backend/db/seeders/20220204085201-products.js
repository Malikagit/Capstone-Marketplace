'use strict';
const casual = require('casual');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const products = [...Array(100)].map((user) => (
  {
    name: casual.title,
    picturePath: 'https://picsum.photos/300/300',
    description: casual.description,
    seller: getRandomInt(100)+1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', products, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
