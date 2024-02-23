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
  const { id } = req.params;
  const answer = await Answer.findByPk(id);
  await answer.save();
  res.sendStatus(201);
});

export default gameRouter;
