<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    background-color: rgb(255, 252, 241);
    display: flex;
    justify-content: end;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    background-color: lightgray;
    color: rgb(30 30 30);
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'works' ? 'page' : undefined}
        href="works">
        works
      </a>
    </li> -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li> -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'resume' ? 'page' : undefined}
        href="resume">
        résumé
      </a>
    </li>
  </ul>
</nav>
