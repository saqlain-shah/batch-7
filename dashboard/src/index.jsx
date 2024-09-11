import { createRoot } from 'react-dom/client';

// ==============================|| FONTS ||============================== //
import 'assets/fonts/inter/inter.css';

// ==============================|| SCROLL BAR ||============================== //
import 'simplebar/dist/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ==============================|| THIRD-PARTY CSS ||============================== //
import 'assets/third-party/apex-chart.css';

// Redux provider for global state management
import { Provider as ReduxProvider } from 'react-redux';

// ==============================|| PROJECT IMPORTS ||============================== //
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'; // Make sure the path to the store is correct

// Get the root element to attach React app
const container = document.getElementById('root');
const root = createRoot(container);

// ==============================|| MAIN - REACT DOM RENDER ||============================== //
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

// ==============================|| REPORT WEB VITALS ||============================== //
// If you want to start measuring performance in your app, pass a function to log results
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
