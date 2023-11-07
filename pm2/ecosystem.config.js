/* eslint-disable */
module.exports = {
  apps: [
    {
      name: "jm-castle-warehouse",
      script: "/root/castle-live/castle-warehouse/build/start.mjs",
      env: {
        NODE_ENV: "production",
        CONFIG: "/root/castle-live/castle-warehouse-config/cw-config.json",
      },
    },
  ],
};
