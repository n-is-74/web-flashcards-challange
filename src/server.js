import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import gameRouter from './routes/gameRouter';
import statRouter from './routes/statRouter';

const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/stat', statRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
