import express from 'express';
import { Question, Answer } from '../../db/models';

const gameRouter = express.Router();

gameRouter.get('/', async (req, res) => res.render('gamePage'));

gameRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await Question.findAll({ where: { themeId: id } });
    console.log(questions);
    const initState = { question: questions };
    res.render('gamePage', initState);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

gameRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body; // Предполагается, что ответ находится в поле 'answer'
    const question = await Question.findByPk(id);

    // Проверяем правильность ответа
    const isCorrect = question.answer === answer;

    // Отправляем ответ клиенту о правильности
    res.json({ correct: isCorrect });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default gameRouter;
