import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLinkElement = document.querySelector('.skip-to-content');
skipLinkElement.addEventListener('click', (e) => {
  e.preventDefault();
  const mainContent = document.querySelector('#mainContent');
  mainContent.setAttribute('tabindex', '-1');
  document.querySelector('#mainContent').focus();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});



window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});