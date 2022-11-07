import client from "./Rclient.js";
import { v4 as uuidv4 } from "uuid";

async function insertTodo(item) {
  const fields = Object.keys(item);
  const values = Object.values(item);
  let key;
  key = uuidv4();
  fields.forEach(async (field, i) => {
    await client.HSET(key, field, `${values[i]}`);
  });
  await client.HSET(key, "key", key);
  await client.HSET(key, "id", key);
  await client.RPUSH("task-id", key);
  return key;
}

async function getAll() {
  const todoList = [];
  const idList = await client.lRange("task-id", 0, -1);
  for (let i = 0; i < idList.length; i++) {
    const todos = await client.HGETALL(idList[i]); // map fn, promise.all
    todoList.push(todos);
  }
  return todoList;
}

async function updateTodo(key, field, value) {
  const edit = await client.HSET(key, field, `${value}`);
  return edit;
}

async function deleteAll() {
  await client.flushDb();
}

async function deleteTodo(id) {
  await client.del(id);
  await client.lRem("task-id", 1, id);
}

async function deleteDone(keys) {
  keys.forEach(async (key) => {
    await client.DEL(keys);
    await client.lRem("task-id", 1, key);
  });
}

export { insertTodo, getAll, updateTodo, deleteAll, deleteTodo, deleteDone };
