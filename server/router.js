import { insertTodo } from "../Database/db.js";
import { Router } from "express";
const todoRouter = Router();

todoRouter.post("/", async (req, res) => {
  try {
    const result = await insertTodo(req.body); // 1. create hashmap. 2. get its key. 3. push its key to a list 4. save it to local todo data
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

export default todoRouter;
