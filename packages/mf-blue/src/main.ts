import { setup } from "@shared/loader";

(async () => {
  await setup();
  await import("./bootstrap");
})();
