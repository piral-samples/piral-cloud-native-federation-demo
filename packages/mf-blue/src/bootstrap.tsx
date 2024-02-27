import { renderBasketInfo } from "./basket-info";
import { renderBuyButton } from "./buy-button";

const app = document.querySelector('#app');
const basketInfo = app.appendChild(document.createElement('div'));
const buyButton = app.appendChild(document.createElement('div'));

renderBasketInfo(basketInfo);
renderBuyButton(buyButton);
