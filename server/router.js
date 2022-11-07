import {
  insertTodo,
  getAll,
  updateTodo,
  deleteAll,
  deleteTodo,
  deleteDone,
} from "../Database/db.js";
import { Router } from "express";
const router = Router();

router.get("/all", async (req, res) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTodo(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateTodo(id, req.body.field, req.body.value);
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    await deleteAll();
    res.json("flushed DB");
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:key", async (req, res) => {
  try {
    const { key } = req.params;
    await deleteTodo(key);
    res.json(key);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/status", async (req, res) => {
  try {
    await deleteDone(req.body);
    console.log(req.body);
    res.json(req.body);
  } catch (err) {
    console.error(err);
  }
});
export default router;
