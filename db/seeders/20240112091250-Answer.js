/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        questionId: 1, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 2, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 3, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 4, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 5, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 6, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 7, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 8, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 9, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 10, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 11, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 12, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 13, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 14, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 15, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 16, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 17, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 18, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 19, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 20, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 21, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 22, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 23, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 24, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 25, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 26, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 27, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 28, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 29, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        questionId: 30, response: false, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
