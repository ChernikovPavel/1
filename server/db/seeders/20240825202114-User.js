'use strict';
const bcrypt = require('bcrypt');
require('dotenv').config();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push({
        email: i + '@gmail.ru',
        password: bcrypt.hashSync(JSON.stringify(i), 10),
      });
    }
    await queryInterface.bulkInsert('Users', arr)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
