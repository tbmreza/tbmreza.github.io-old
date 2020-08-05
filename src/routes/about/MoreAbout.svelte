<script>
  let ans = [
    [
      "I want to be expert in my field.",
      "I think experts can teach, design, or hack things most effectively.",
      "I want to be a principal engineer with a PhD!",
      "By setting such goal, I hope I can prolifically contribute to society on my way getting there. #"
    ],
    [
      "Watching Pewdiepie.",
      "Cleaning my gadgets and other personal belongings.",
      "Well, if you know me, you know I do not clean constantly.",
      "But I do enjoy the activity as recreation! #"
    ],
    [
      "I don't have a pet, at the moment.",
      "Maybe sometime in the future I will get myself one.",
      "It will be a cat, most likely. #"
    ],
    [
      "I follow football news, especially English Premier League.",
      "I am also a daily visitor of Hacker News.",
      "I think that the site has a simple but effective concept.",
      "Anyone can post a 'new' link that they found interesting.",
      "The community will decide if it's worthy of being on 'top' by up- or downvoting.",
      "Posts on 'top' or front page will be seen by more people. More viewers, more commenters.",
      "Discussions in the comment section are always quality.",
      "I like open source, programming languages, and math posts more than the other. #"
    ]
  ];

  let i = 0;
  let j = 0;

  let play = false;

  function next() {
    if (ans[i][j + 1] !== undefined) j++;
  }

  $: currentText = ans[i][j];
</script>

<style>
  .card {
    height: 120px;
    width: 330px;
    position: absolute;
    color: white;
    border-radius: 2px;
  }
  .card--front {
    user-select: none;
    background-color: gray;
    background: rgb(90, 76, 47);
    background: linear-gradient(
      90deg,
      rgba(90, 76, 47, 1) 0%,
      rgba(147, 125, 81, 1) 50%,
      rgba(90, 76, 47, 1) 100%
    );
    z-index: 2;
  }
  .card--front:hover {
    cursor: pointer;
  }
  .card--mid {
    background: rgb(255, 175, 22);
    background: linear-gradient(
      90deg,
      rgba(255, 175, 22, 1) 0%,
      rgba(255, 132, 5, 1) 50%,
      rgba(255, 132, 5, 1) 100%
    );
    z-index: 1;
    transform: rotate(3deg) translate(3px, -8px);
  }
  .card--back {
    background-color: #fef425;
    z-index: 0;
    transform: rotate(5deg) translate(21px, -13px);
    width: 315px;
  }

  .card--mid img {
    width: 120px;
    overflow: hidden;
    transform: rotate(-3deg) translate(215px, -128px);
  }
  .card--mid img:hover {
    cursor: crosshair;
  }
  .reza {
    font-size: 0.8em;
    color: #222;
    transform: translate(8px, -20px);
    display: inline-block;
    cursor: default;
  }
  .options {
    margin-bottom: 3em;
    min-height: 140px;
  }
  .options button:hover {
    cursor: pointer;
  }
  .options button {
    display: block;
    max-width: 290px;
    background-color: #222;
    color: white;
    margin: 5px 0;
    text-align: left;
  }
  .clicked {
    font-weight: bold;
  }
  .caption {
    padding: 0 1em;
  }
  button {
    border: none;
    padding: 1ch 2ch;
  }
</style>

<div class="options">
  <button
    class:clicked={i === 0 && play}
    on:click={() => {
      play = true;
      i = 0;
      j = 0;
    }}>
    What is your long term goal?
  </button>
  <button
    class:clicked={i === 1}
    on:click={() => {
      play = true;
      i = 1;
      j = 0;
    }}>
    What is your favorite leisure activity?
  </button>
  <button
    class:clicked={i === 2}
    on:click={() => {
      play = true;
      i = 2;
      j = 0;
    }}>
    Do you have a pet?
  </button>
  <button
    class:clicked={i === 3}
    on:click={() => {
      play = true;
      i = 3;
      j = 0;
    }}>
    What kind of news do you follow?
  </button>
</div>

<div class="cards">
  <div class="card card--front" on:click={next}>
    <div class="reza">Reza</div>
    <div class="caption">
      {play ? currentText : 'Hi. I am sorry you found my site. #'}
    </div>
  </div>
  <div class="card card--mid">
    <img
      src="./me.webp"
      alt="me"
      on:click={() => {
        play = false;
        i = 0;
      }} />
  </div>
  <div class="card card--back" />
</div>
