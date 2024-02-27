import { setup } from "@shared/loader";

(async () => {
  await setup({
    green: "http://localhost:2003/remoteEntry.json",
    blue: "http://localhost:2002/remoteEntry.json",
  });
  await import("./bootstrap");
})();
