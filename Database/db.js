import { createRedisKey } from "create-redis-key";
import client from "./Rclient.js";

async function insertTodo(item) {
  const fields = Object.keys(item);
  const values = Object.values(item);
  let key;
  key = createRedisKey(parseInt(Math.random() * 100));
  fields.forEach(async (field, i) => {
    await client.HSET(key, field, `${values[i]}`);
  });
  await client.HSET(key, "key", key);
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
  const edit = await client.HSET(key, field, value);
  return edit;
}

async function deleteAll() {
  await client.flushDb();
}

async function deleteTodo(key) {
  await client.del(key);
  await client.lRem("task-id", 1, key);
}

async function deleteDone(keys) {
  keys.forEach(async (key) => {
    await client.DEL(key);
    await client.lRem("task-id", 1, key);
  });
}

export { insertTodo, getAll, updateTodo, deleteAll, deleteTodo, deleteDone };
