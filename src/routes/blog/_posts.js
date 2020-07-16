// TODO: if after many posts this becomes unmaintainable:
// https://github.com/Charca/sapper-blog-template/blob/master/src/routes/blog/_posts.js

import { post2 } from "./stories/Gojek_Clone";
import { post1 } from "./stories/New_Blog";

// fs to read all in folder
let posts = [post2, post1];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
