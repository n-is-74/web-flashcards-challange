import express from 'express';

const statRouter = express.Router();

statRouter.get('/', async (req, res) => res.render('statPage'));

export default statRouter;
