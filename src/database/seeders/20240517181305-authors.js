'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Authors',
      [
        {
          id: 1,
          name: 'Anna',
          nationality: 'Español',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Juan Pablo',
          nationality: 'Uruguayo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
