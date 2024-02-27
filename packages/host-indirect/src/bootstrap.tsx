import { loadRemoteModule } from "@softarc/native-federation";

//TODO 

loadRemoteModule({
  remoteName: "mf-red",
  exposedModule: "./productPage",
}).then(({ renderProductPage }) => {
  const root = document.querySelector("#app");
  renderProductPage(root);
});
