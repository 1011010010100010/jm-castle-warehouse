import { config } from "dotenv";
import { startCw } from "./start-cw.mjs";

config({ path: "./dev.env" });

await startCw();

const exitHandler: NodeJS.ExitListener = (exitCode) => {
  console.log(`exit with code: ${exitCode}`);
};
//do something when app is closing
process.on("exit", exitHandler);

//catches ctrl+c event
// process.on("SIGINT", exitHandler);

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler);
process.on("SIGUSR2", exitHandler);

//catches uncaught exceptions
process.on("uncaughtException", exitHandler);
