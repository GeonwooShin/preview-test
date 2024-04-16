import ReactDOM from 'react-dom/client';
import App from './App';
import store from '@features/store';
import { Provider } from 'react-redux';
import GlobalStyles from '@styles/GlobalStyles';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
);
