<script>
  let up = true;
  function click() {
    up = !up;
  }
</script>

<style>
  .title {
    font-weight: 900;
    font-style: italic;
    font-size: large;
    padding: 1em 0;
    display: inline-block;
  }

  @media only screen and (min-width: 375px) {
  .title {
      font-size: x-large;
    }
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
  <h2>
    Reza Handzalah<span>'s</span>
    <div>personal website</div>
  </h2>
</div>
