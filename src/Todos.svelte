<script>
  import { loc, currentUser, userTodos } from "./stores.js";
  import { fetchTodos } from "./fetch";
  import Todo from "./Todo.svelte";

  let todos;
  let error;

  $: {
    todos = $userTodos[$currentUser.id];
    if (!todos) fetchTodos($currentUser.id).catch(e => (error = e));
  }

  function handleBack() {
    $loc = "/";
  }

  function addNewTodo(e) {
    e.preventDefault();
    userTodos.add($currentUser.id, e.target["new-todo"].value);
    e.target.reset();
  }
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }
  .add-todo-row {
    display: flex;
    justify-content: center;
    margin-top: 22px;
  }
  .back-button {
    margin-top: 30px;
    padding: 10px 30px;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: rgb(255, 64, 0);
    font-weight: bold;
    cursor: pointer;
  }
</style>

<div>
  <h1>Todos</h1>
  <h3>{$currentUser.name}</h3>
  {#if todos}
    {#each todos as todo (todo.id)}
      <Todo {todo} />
    {/each}
    <form class="add-todo-row" on:submit={addNewTodo}>
      <input
        type="text"
        name="new-todo"
        placeholder="Add new todo..."
        required />
      <input type="submit" value="Add" />
    </form>
  {:else if error}
    <div>Ooops, something went wrong...</div>
  {:else}
    <div>Loading...</div>
  {/if}
  <div class="back-button" on:click={handleBack}>Back</div>
</div>
