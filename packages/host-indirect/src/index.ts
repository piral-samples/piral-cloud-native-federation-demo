import './style.css';
import { setup } from "@shared/loader";

(async () => {
  await setup('https://native-federation-demo.my.piral.cloud/api/v1/native-federation');
  await import("./bootstrap");
})();
