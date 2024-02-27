const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "mf-blue",
  exposes: {
    "./basketInfo": "./src/basket-info.tsx",
    "./buyButton": "./src/buy-button.tsx",
  },
  remotes: {},
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },
});
