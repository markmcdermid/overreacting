import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './App';
import configureStore from './redux/configureStore';
import getRoutes from './routes';

const store = configureStore(browserHistory);

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App history={browserHistory} routes={getRoutes(store)} store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
