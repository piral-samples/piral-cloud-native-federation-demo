import { renderRecommendations } from "./product-recommendations";

const app = document.querySelector('#app');
const recommendations = app.appendChild(document.createElement('div'));

renderRecommendations(recommendations);
