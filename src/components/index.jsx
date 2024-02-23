import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import components from './components';

// определение контейнера где будет монтироваться React приложение
const container = document.getElementById('root');

const Component = components[window.initState.componentName];

// применение гидратации в указанный контейнер
ReactDOMClient.hydrateRoot(
  container,
  <App>
    <Component {...window.initState} />
  </App>,
);
