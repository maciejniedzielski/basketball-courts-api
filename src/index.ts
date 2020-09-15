import * as express from "express";
import * as mongoose from "mongoose";
import routes from "./routes";
import { logger, notFound } from "./middlewares";

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = app.get("env");

app.set("port", process.env.PORT || 3000);

// Register routing
routes(app);

// Register middlewares
app.use([express.json(), logger, notFound]);

mongoose
  .connect("mongodb://localhost:27017/basketball-courts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `🚀 Server is running in http://localhost:${PORT} in ${ENV} mode`
      );
    });
  })
  .catch(() => console.log("Unable to connect to the database."));
