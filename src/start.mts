import { config } from "dotenv";
import { createServer } from "https";
import { Configuration } from "jm-castle-warehouse-types";
import {
  CastleWarehouse,
  configFilePath,
  newExpressApp,
  readJsonFile,
  setCurrentSystem,
} from "jm-castle-warehouse-server";

config();

// load config and create CastleWarehouse
const filePath = configFilePath();
console.log("reading config from file:", filePath);
try {
  const configuration = readJsonFile<Configuration>(filePath);
  const system = new CastleWarehouse(configuration);
  setCurrentSystem(system);
  await system.start();

  const port = system.getOwnPort();

  const app = newExpressApp(port, system);

  const server = createServer(
    {
      key: system.getServerKey(),
      cert: system.getServerCertificate(),
    },
    app
  );

  const onListening = () => {
    const addr = server.address();
    const bind =
      typeof addr === "string"
        ? "pipe " + addr
        : "port " + (addr ? addr.port : "?");
    console.log("Listening on " + bind);
  };

  const onError = (error: any) => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  server.on("error", onError);
  server.on("listening", onListening);

  server.listen(port);
} catch (error) {
  console.error("Fatal error when starting castle-warehouse.", error);
}
