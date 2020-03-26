<script>
  import { currentUser, userTodos } from "./stores.js";

  export let todo;

  function toggleCompleted(e, todoId) {
    userTodos.toggleCompleted($currentUser.id, todoId, e.target.checked);
  }

  function deleteTodo(todoId) {
    userTodos.delete($currentUser.id, todoId);
  }
</script>

<style>
  .todo-row {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid rgba(145, 145, 145, 0.15);
  }
  .todo-title {
    flex: 14;
    text-align: left;
  }
  .todo-completed {
    flex: 1;
  }
  .todo-delete {
    flex: 1;
  }
  .todo-delete {
    cursor: pointer;
    font-size: 1.2rem;
  }
</style>

<svelte:options immutable />

<div class="todo-row">
  <input
    class="todo-completed"
    type="checkbox"
    checked={todo.completed}
    on:click={e => toggleCompleted(e, todo.id)} />
  <div class="todo-title">{todo.title}</div>
  <div
    class="todo-delete"
    title="Delete Todo"
    on:click={() => deleteTodo(todo.id)}>
    ×
  </div>
</div>
