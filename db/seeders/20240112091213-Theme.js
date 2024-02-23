/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Столицы мира', img: 'https://avatars.dzeninfra.ru/get-zen_doc/5364733/pub_63964a8600871d31c5bb5571_63964d17a03e46668dbdfc3d/scale_1200', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Животные мира', img: 'https://www.toyway.ru/upload/iblock/9cb/2.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наука и технологии', img: 'https://lh3.googleusercontent.com/proxy/8iFHWo2Naad-L4mpL3-udXVcGtTcORFxqIuW53a807HKceJ_IkSO9sRn1BG1yDIpv8mCcBz7IgmNmYahZvenGeLd5wAYdlJS_fyM7qNQdgKTN7Q4Y61m7K8qzzueSAQWzBTk', createdAt: new Date(), updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
