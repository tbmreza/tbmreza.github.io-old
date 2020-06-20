export const post2 = {
  title: "2 Tiny Improvement Ideas for gojek.com Website",
  slug: "2020-06-02-tiny-improvement-ideas-for-gojek",
  html: `
  <style>
    h3 { margin-top: 2em; };
  </style>
  <p>
    <em>This story is first published in <a href="https://rezahandzalah.hashnode.dev/2-tiny-improvement-ideas-for-gojekcom-website-ckaxl8lyu00txeds1m1alpg99">my Hashnode blog</a>.</em>
  </p>
  <p>
    I spent last weekend rewriting a better part of gojek.com -- <a href="https://gojek-com-clone.now.sh">my clone</a>. The initial idea was to replicate the original by assembling image and font file assets. I wanted to exercise layouting without designing first. It has added hours of HTML/CSS/JS work to me.
  </p>
  <p>
    Without necessarily saying that the original is bad, I found myself coming up with better ideas on some details. I am writing this blog to share some of them.
  </p>
  <p>
    So hear me out, my tiny visual modification that I think will improve gojek.com:
  </p>
  <h3>Horizontal Scroll: Mobile experience has spoiled us</h3>
  <p>
    Points:
    <ul>
      <li>We swipe in mobile to interact with components like this. Naturally, I also tried to scroll in desktop. I wasn't surprised, but still disappointed.</li>
      <li>CSS provides convenient property overflow-x: scroll. It's free.</li>
    </ul>
  </p>
  <h3>Underline Animation: Simpler implementation</h3>
  <p>
    Points:
    <ul>
      <li>"Underline ends where link text ends" is easy to code. </li>
      <li>"Using :after pseudo-class, insert underline as content", not so easy.</li>
      <li>Ending at tip of arrow is easier to reason than at somewhere between text and arrow.</li>
    </ul>
  </p>
  <p>
    A few notes in defense of original website. Software development takes up whatever time you give them, there is always something to improve! Gojek design is a very good standard by all means, which is why improving their website is worth attempting at all. Also, I haven't considered browsers other than my phone/laptop's, which means the properties (overflow-x, etc) may not behave, look, or perform as expected. Basically I have skipped testing, the most important requirement of shipping software.
  </p>
  `,
};
