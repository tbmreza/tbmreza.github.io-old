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
    <p>I am currently employed by IDEMIA as Software Engineer (Validation).</p>
    I have diverse experience:
    <div class="tooltip">
      optical comm. research
      <span class="tooltiptext" style="width: 100px; margin-left: -50px;">
        undergraduate
      </span>
    </div>
    ,
    <div class="tooltip">
      data science
      <span class="tooltiptext" style="width: 80px; margin-left: -40px;">
        internship
      </span>
    </div>
    , and now software engineering in smart card industry. Telkom University's
    telecommunication engineering program that I took included Optical
    Communication System, Computer Vision, and Mobile Applications elective
    courses. I am fortunate enough to early gain experience in each of them,
    though briefly.
    <p>
      In the short to medium term, I am focused on building my portfolio as a
      programmer. I code primarily in JavaScript and Rust. I always look to
      collaborate, so feel free to contact me.
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
      <li>https://github.com/tbmreza/</li>
    </ul>
  </div>
  <div class="section">

    <h2>Facts about me</h2>
    <ul>
      <li>Tb M Reza Handzalah in legal documents.</li>
      <li>Acer Swift 3 (2018) owner.</li>
      <li>Liverpool FC football twitter follower.</li>
    </ul>
  </div>
  <div class="section">

    <details>
      <summary>
        <h2>More about me</h2>
      </summary>
      <div class="more-about">
        <MoreAbout />
      </div>

    </details>
  </div>
</div>
<div class="footer">
  <details open onclick="return false" style="padding: 2em;">
    <summary>Work with me:</summary>
    Send email to
    <span>rezahandzalah@protonmail.com</span>
  </details>
</div>
