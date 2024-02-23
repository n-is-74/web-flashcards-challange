/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        question: 'Какая столица Швеции?', answer: 'Стокгольм', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица ЮАР?', answer: 'Претория', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Испании?', answer: 'Мадрид', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Австрии?', answer: 'Вена', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Норвегии?', answer: 'Осло', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Швейцарии?', answer: 'Берн', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Южной Африки?', answer: 'Кейптаун', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Новой Зеландии?', answer: 'Веллингтон', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Саудовской Аравии?', answer: 'Эр-Рияд', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какая столица Ирландии?', answer: 'Дублин', themeId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое животное считается самым большим на Земле?', answer: 'Синий кит', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое животное является символом Австралии и имеет сумчатый мешок?', answer: 'Кенгуру', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самое быстрое сухопутное животное на планете?', answer: 'Гепард', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое животное обладает самым большим мозгом среди всех млекопитающих?', answer: 'Кит', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самое ядовитое животное на Земле?', answer: 'Краб-конгбе', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой вид животных образует колонии и строит огромные муравейники?', answer: 'Муравьи', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самое большое пресноводное млекопитающее в мире?', answer: 'Гиппопотам', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется самая ядовитая змея в мире, обитающая в Австралии?', answer: 'Инланд-тайпан', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется единственный вид медведя, обитающий на материке Азия?', answer: 'Бурый медведь', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое животное обладает самым длинным шеей среди всех существующих видов?', answer: 'Жираф', themeId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое слово используется для обозначения единицы измерения силы тока?', answer: 'Ампер', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется явление изменения цвета света при прохождении через призму?', answer: 'Разложение', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое слово используется для обозначения единицы измерения электрического сопротивления?', answer: 'Ом', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется элемент с атомным номером 92?', answer: 'Уран', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какое слово используется для обозначения процесса превращения жидкости в газ?', answer: 'Испарение', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется процесс преобразования света в электрический ток в фотоэлементе?', answer: 'Фотоэффект', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется единица измерения частоты звука?', answer: 'Герц', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется теория, описывающая движение небесных тел вокруг Солнца?', answer: 'Гелиоцентризм', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как называется наука, изучающая процессы и явления в земной атмосфере?', answer: 'Метеорология', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой элемент периодической таблицы имеет символ "Ne"?', answer: 'Неон', themeId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
