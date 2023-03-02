module.exports = {
  apps: [
    {
      name: "jm-castle-warehouse",
      script: "./castle-warehouse/build/start.mjs",
      env: {
        NODE_ENV: "production",
        CONFIG: "c:/castle-live/castle-warehouse-config/cw-config.json",
      },
    },
  ],
};
