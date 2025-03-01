import "dotenv/config";
import express from "express";
import path from "node:path";
import router from "./app/router.js";
import notFoundMiddleware from "./app/middlewares/not-found-middleware.js";
import sessionMiddleware from "./app/middlewares/session-middleware.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "app/views"));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(sessionMiddleware);
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use(router);

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server started at http://localhost:${port}`);});