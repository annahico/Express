'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loan_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      return_date: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.STRING,
      },
      book_id: {
        type: Sequelize.STRING,
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};