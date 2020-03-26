<script>
  import { loc, currentUser } from "./stores.js";

  export let user;

  function handleClick() {
    $currentUser = user;
    $loc = "todos";
  }
</script>

<style>
  .user-row {
    display: flex;
    padding: 15px 0;
    border-top: 1px solid rgba(145, 145, 145, 0.15);
    cursor: pointer;
  }
  .name {
    flex: 1;
    text-align: left;
  }
  .email {
    flex: 1;
    text-align: left;
  }
  .phone {
    flex: 1;
    text-align: right;
  }
</style>

<div class="user-row" on:click={handleClick}>
  <div class="name">{user.name}</div>
  <div class="email">{user.email}</div>
  <div class="phone">{user.phone}</div>
</div>
