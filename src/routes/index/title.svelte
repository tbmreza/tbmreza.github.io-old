<script>
  let up = false;
  function click() {
    up = !up;
  }
</script>

<style>
  .title {
    font-weight: 900;
    font-style: italic;
    font-size: xx-large;
    padding: 1em 0;
    display: inline-block;
  }
  .title:hover {
    cursor: pointer;
  }
  .title div,
  .title span {
    font-style: normal;
  }
  .title div {
    line-height: 16px;
  }
  .up {
    /* padding: 1em 0; */
    padding: 0 0 2em 0;
  }
</style>

<div class="title" class:up on:click={click}>
  Reza Handzalah<span>'s</span>
  <div>personal website</div>
</div>
