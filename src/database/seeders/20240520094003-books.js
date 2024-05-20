'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'Harry Potter y la piedra filosofal',
          gender: 'Fastasía',
          id_author: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'El Señor de los Anillos',
          gender: 'Fastasía',
          id_author: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
    await queryInterface.bulkDelete('Books', null, {});
  }
};
