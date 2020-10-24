<script>
  import Title from "./about/Title.svelte";
  import MoreAbout from "./about/MoreAbout.svelte";
</script>

<style>
  .section {
    margin-bottom: 1em;
  }
  .section summary h2 {
    display: inline;
  }
  .section summary:hover {
    cursor: pointer;
  }
  .more-about {
    min-height: 200px;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    top: 100%;
    left: 50%;
    width: 180px;
    margin-left: -90px;

    background-color: #444;
    color: #eee;
    font-size: small;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .footer {
    margin-top: 5em;
    text-align: right;
    background-color: darkslategray;
    color: #dee;
  }

  .footer span {
    color: white;
  }
  ul {
    padding-left: 1em;
  }
  #hide-bullets {
    padding-left: 0;
    list-style-type: none;
  }
  code {
    color: black;
  }
</style>

<svelte:head>
  <title>Reza Handzalah online: About</title>
</svelte:head>

<div class="main">
  <div id="title">
    <Title />
  </div>
  <div class="section">
    <h2>About me</h2>
    <p>
      I am currently employed by IDEMIA. I am assigned to a team that work on
      Card Personalization System.
    </p>
    Before breaking into software engineering in smart card industry, I had had
    some experience in
    <div class="tooltip">
      optical comm. research
      <span class="tooltiptext" style="width: 100px; margin-left: -50px;">
        undergraduate
      </span>
    </div>
    and
    <div class="tooltip">
      data science
      <span class="tooltiptext" style="width: 80px; margin-left: -40px;">
        internship
      </span>
    </div>
    . The telecommunication engineering program that I took included Optical
    Communication System, Computer Vision, and Mobile Applications elective
    courses. I am fortunate enough to early gain practical knowledge in each of
    them, though briefly.
    <p>
      In the short to medium term, I am focused on building my portfolio as a
      programmer. I always look to collaborate, so feel free to contact me.
    </p>
  </div>
  <div class="section">

    <h2>Social media profiles</h2>
    <ul>
      <li>https://www.linkedin.com/in/reza-handzalah</li>
      <li>
        <a href="https://twitter.com/rezahandzalah">
          https://twitter.com/rezahandzalah
        </a>
      </li>
      <li>
        <code>tbmreza</code>
        on pretty much everywhere else (like github or discord).
      </li>
    </ul>
  </div>
  <div class="section">

    <h2>More about me</h2>
    <ul id="hide-bullets">
      <li>
        <details>
          <summary>My name is Tb M Reza Handzalah in legal documents.</summary>
          <p>
            The firstname-lastname format in forms is not inclusive! I am also a
            proponent to the idea that computer programmers shouldn't limit
            themselves to ASCII.
          </p>
        </details>
      </li>
      <li>
        <details>
          <summary>I'm a moderate Liverpool FC fan.</summary>
          <p>
            I follow the news, occasionally engage in the football twitter
            discussion, watch match highlights from YouTube, but that's about
            it. I even rarely watch them live. But before anyone jumps at me for
            being a glory hunter, I have been doing that since highschool. Do
            talk about it when we meet! I'll definitely have football opinion to
            share and it will make me happy.
          </p>
        </details>
      </li>
    </ul>
  </div>
  <div class="section">

    <details>
      <summary>
        <h2>
          <span style="font-style: italic">More</span>
          about me
        </h2>
      </summary>
      <div class="more-about">
        <MoreAbout />
      </div>

    </details>
  </div>
</div>
<div class="footer">
  <details open onclick="return false" style="padding: 2em;">
    <summary>Best way to reach me:</summary>
    Send email to
    <span>rezahandzalah@protonmail.com</span>
  </details>
</div>
