import express from "express";
import cors from "cors";
import router from "./router.js";
const app = express();

const port = 8000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// hyper log log
