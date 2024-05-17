'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'roles',
      [
        {
          id: 1,
          name: 'Anna',
          nationality: 'Español',
          createAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Juan Pablo',
          nationality: 'Uruguayo',
          createAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('authors', null, {});
  }
};
