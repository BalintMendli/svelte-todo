<script>
  import { page } from "./stores.js";
  import {fetchUsers} from './fetch'
  import User from "./User.svelte";
  import Pagination from "./Pagination.svelte";

  const userPerPage = 5;

  $: userList = fetchUsers($page, userPerPage);
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }
  .header-row {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid rgba(145, 145, 145, 0.15);
    cursor: pointer;
    font-weight: bold;
  }
  .header-name {
    flex: 1;
  }
  .header-email {
    flex: 1;
  }
  .header-phone {
    flex: 1;
  }
</style>

<h1>Users</h1>
{#await userList}
  <div>Loading...</div>
{:then [users, total]}
  <div class="container">
    <div class="header-row">
      <div class="header-name">Name</div>
      <div class="header-email">Email</div>
      <div class="header-phone">Phone</div>
    </div>
    {#each users as user (user.id)}
      <User {user} />
    {/each}
  </div>
  <Pagination {total} {userPerPage}/>
{:catch error}
  <div>Ooops, something went wrong...</div>
{/await}
