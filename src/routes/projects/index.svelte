<script>
  const ps = [
    {
      lang: "js",
      name: "this website",
      size: "7306 LOC",
      // 			in project root:
      // 			git ls-files | xargs wc -l *
      demo: "https://tbmreza.github.io/",
      code: "https://github.com/tbmreza/tbmreza.github.io",
      blog: "#"
    }
  ];
</script>

<style>
  .ps {
    margin: 1em;
  }
  .project {
    background-color: #edebdd;
    border-radius: 5px;
    width: 300px;
    margin-bottom: 1em;
  }
  .top,
  .bottom {
    display: flex;
    padding: 1em;
  }
  .top {
    font-weight: bold;
    align-items: center;
  }
  .top svg {
    transform: translateY(5px);
  }
  .top .name {
    font-size: 24px;
    margin: 0 8px;
  }
  .top .size {
    font-size: 12px;
    color: #858585;
  }
  .bottom a {
    color: rgb(0, 172, 91);
    text-decoration: none;
  }
  .bottom a:hover {
    color: #007940;
  }
  .bottom #mid {
    margin: 0 1em;
  }
</style>

<div class="ps">
  {#each ps as p}
    <div class="project">
      <div class="top">
        <div class="lang">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            class="_crate-icon_87huyj">
            <path
              d="M16 32.107c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16
              7.163-16 16c0 8.836 7.163 16 16 16z"
              fill={p.lang === 'rust' ? '#FFF' : '#B13B89'} />
            <path
              d="M20.247 12.548L16 10l-4.224 2.535 4.247 2.452 4.224-2.439zM21
              14.423l-4 2.31V21.4l4-2.4v-4.577zm-10-.027V19l4
              2.4v-4.695l-4-2.309zM16 8l7 4v8l-7 4-7-4v-8l7-4z"
              fill={p.lang === 'rust' ? '#B13B89' : '#FFF'} />
          </svg>

        </div>
        <div class="name">{p.name}</div>
        <div class="size">{p.size}</div>
      </div>
      <div class="bottom">
        <div class="demo">
          <a href={p.demo}>Demo</a>
        </div>
        <div class="code" id="mid">
          <a href={p.code}>Code</a>
        </div>
        <div class="blog">
          <a href={p.blog}>Blog</a>
        </div>
      </div>
    </div>
  {/each}
</div>
