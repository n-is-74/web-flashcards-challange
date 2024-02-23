import express from 'express';
import { Theme } from '../../db/models';

const indexRouter = express.Router();

// indexRouter.get('/', async (req, res) => res.render('mainPage', initState));
indexRouter.get('/', async (req, res) => {
  try {
    const allThemes = await Theme.findAll();
    const initState = { themes: allThemes };
    res.render('mainPage', initState);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default indexRouter;
