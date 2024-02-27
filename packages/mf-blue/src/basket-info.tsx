import "./style/basket-info.css";
import React from "react";
import ReactDOM from "react-dom";

const BasketInfo = ({ sku = "porsche" }) => {
  const [items, setItems] = React.useState([]);
  const count = items.length;

  React.useEffect(() => {
    const handler = () => {
      setItems((items) => [...items, sku]);
    };
    window.addEventListener("add-item", handler);
    return () => window.removeEventListener("add-item", handler);
  }, [sku]);

  return (
    <div className={count === 0 ? "empty" : "filled"}>basket: {count} item(s)</div>
  );
};

export default BasketInfo;

export function renderBasketInfo(container: HTMLElement) {
  ReactDOM.render(<BasketInfo />, container);
}
