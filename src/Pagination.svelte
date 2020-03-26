<script>
  import { page } from "./stores.js";

  export let total;
  export let userPerPage;

  $: from = ($page - 1) * userPerPage + 1;
  $: to = Math.min($page * userPerPage, total);

  function handlePrevPage() {
    if ($page > 1) $page = $page - 1;
  }

  function handleNextPage() {
    if ($page < total / userPerPage) $page = $page + 1;
  }

  function handleFirstPage() {
    $page = 1;
  }

  function handleLastPage() {
    $page = Math.ceil(total / userPerPage);
  }
</script>

<style>
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .pagination-buttons {
    display: flex;
    font-size: 1.2em;
  }
  .pagination-buttons * {
    margin-right: 20px;
    cursor: pointer;
  }
</style>

<div class="pagination">
  <div>{from} - {to} / {total}</div>
  <div class="pagination-buttons">
    <div on:click={handleFirstPage} title="First page">&laquo;</div>
    <div on:click={handlePrevPage} title="Previous page">&lt;</div>
    <div on:click={handleNextPage} title="Next page">&gt;</div>
    <div on:click={handleLastPage} title="Last page">&raquo;</div>
  </div>
</div>
