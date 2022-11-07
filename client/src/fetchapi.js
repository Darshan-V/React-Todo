let url = "http://localhost:8000";

async function getAll() {
  const result = await (
    await fetch(`${url}/all`, {
      method: "GET",
    })
  ).json();
  return result;
}

async function addTodo(todo) {
  const key = await (
    await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "content-type": "application/json",
      },
    })
  ).json();
  return key;
}

async function updateTodo(key, field, value) {
  const result = await (
    await fetch(`${url}/${key}`, {
      method: "PUT",
      body: JSON.stringify({ field, value }),
      headers: {
        "content-type": "application/json",
      },
    })
  ).json();

  return result;
}
async function deleteTodo(key) {
  console.log(key);
  const result = await (
    await fetch(`${url}/${key}`, {
      method: "DELETE",
    })
  ).json();

  return result;
}

async function deleteAll() {
  const result = await (
    await fetch(`${url}`, {
      method: "DELETE",
    })
  ).json();

  return result;
}

async function deleteDone(keys) {
  await fetch(`http://localhost:8000/todo/done`, {
    method: "DELETE",
    body: JSON.stringify(keys),
    headers: {
      "content-type": "application/json",
    },
  });
}

export { getAll, addTodo, updateTodo, deleteAll, deleteDone, deleteTodo };
