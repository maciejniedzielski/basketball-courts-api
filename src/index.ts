import * as express from "express";
import routes from "./routes";
import { logger, notFound } from "./middlewares";

const app = express();
app.set("port", process.env.PORT || 3000);

// Register routing
routes(app);

// Register middlewares
app.use([express.json(), logger, notFound]);

const PORT = process.env.PORT || 3000;
const ENV = app.get("env");

app.listen(PORT, () => {
  console.log(
    `🚀 Server is running in http://localhost:${PORT} in ${ENV} mode`
  );
});
