import { writable } from 'svelte/store';
import { genId } from './utils';

export const loc = writable('/');
export const currentUser = writable(null);
export const page = writable(1);

function createUserTodos() {
  const { subscribe, update } = writable({});

  return {
    subscribe,
    addAll: (userId, todos) => update(uts => ({ ...uts, [userId]: todos })),
    add: (userId, todo) =>
      update(uts => ({
        ...uts,
        [userId]: [
          ...uts[userId],
          { userId, id: genId(), title: todo, completed: false },
        ],
      })),
    toggleCompleted: (userId, todoId, completed) =>
      update(uts => ({
        ...uts,
        [userId]: uts[userId].map(t => {
          if (t.id === todoId) {
            return { ...t, completed };
          }
          return t;
        }),
      })),
    delete: (userId, todoId) =>
      update(uts => ({
        ...uts,
        [userId]: uts[userId].filter(t => t.id !== todoId),
      })),
  };
}

export const userTodos = createUserTodos();
