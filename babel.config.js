module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./packages"],
          alias: {
            "@core": "./packages/core",
            "@modules": "./packages/modules",
          },
        },
      ],
    ],
  };
};
