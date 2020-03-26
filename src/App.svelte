<script>
  import { loc } from "./stores.js";
  import Users from "./Users.svelte";
  import Todos from "./Todos.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<main>
  {#if $loc === '/'}
    <Users />
  {:else if $loc === 'todos'}
    <Todos />
  {:else}
    <div>404 - Not found</div>
  {/if}
</main>
