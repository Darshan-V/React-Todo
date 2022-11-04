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
  return key;
}

export { insertTodo };
