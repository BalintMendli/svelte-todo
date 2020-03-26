import { userTodos } from './stores.js';

export async function fetchUsers(page, userPerPage) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${userPerPage}`,
  );
  if (!res.ok) throw new Error(res.status);
  const users = await res.json();
  const total = parseInt(res.headers.get('x-total-count'));
  return [users, total];
}

export async function fetchTodos(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
  );
  if (!res.ok) throw new Error(res.status);
  const todos = await res.json();
  userTodos.addAll(userId, todos);
}
