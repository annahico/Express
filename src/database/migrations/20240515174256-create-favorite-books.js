'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorite_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: 'id'
        }
      },
      id_book: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "books",
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('favourite_books', {
      fields: ['id_user', 'id_book'],
      type: 'unique',
      name: 'user_book_unique'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorite_books');
  }
};