import { renderProductPage } from "./product-page";

const app = document.querySelector('#app');
const page = app.appendChild(document.createElement('div'));

renderProductPage(page);
