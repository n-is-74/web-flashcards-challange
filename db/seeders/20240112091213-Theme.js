/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Столицы мира', img: 'https://cdn.playbuzz.com/cdn/0c7999c6-ef96-48ae-ad7b-81865646b760/bee1a745-9627-466e-9e9c-2ff7ea4353c8_560_420.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Животные мира', img: 'https://old.bigenc.ru/media/2017/12/06/1239040168/6V_tab.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наука и технологии', img: 'https://globalcentre.hse.ru/data/2017/04/22/1168825416/22.jpg', createdAt: new Date(), updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
