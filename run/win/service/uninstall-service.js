/* eslint-disable */
var Service = require("node-windows").Service;

var svc = new Service({
  name: "castle-warehouse",
  description: "A simple warehouse",
  script: "C:\\castle-live\\castle-warehouse\\build\\start.mjs",
});

svc.on("uninstall", () => {
  console.log("castle-warehouse uninstall complete");
  console.log("Service exists: ", svc.exists);
});

svc.uninstall();
