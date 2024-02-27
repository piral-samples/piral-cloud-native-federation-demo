import "./style.css";
import { setup } from "@shared/loader";

(async () => {
  await setup({
    "mf-red": "http://localhost:2001/remoteEntry.json",
    "mf-blue": "http://localhost:2002/remoteEntry.json",
    "mf-green": "http://localhost:2003/remoteEntry.json",
  });
  await import("./bootstrap");
})();
