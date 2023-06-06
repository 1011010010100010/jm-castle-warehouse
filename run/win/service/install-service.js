/* eslint-disable */
var Service = require("node-windows").Service;

var conf = process.env.CONFIG;

var svc = new Service({
  name: "castle-warehouse",
  description: "A simple warehouse",
  script: "C:\\castle-live\\castle-warehouse\\build\\start.mjs",
  env: [
    { name: "NODE_ENV", value: "production" },
    { name: "CONFIG", value: conf },
  ],
});

svc.on("install", () => {
  console.log("service installed");
  svc.start();
  console.log("service started");
});

svc.install();
