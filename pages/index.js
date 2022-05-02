// https://www.youtube.com/watch?v=MrjeefD8sac&ab_channel=TraversyMedia
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../packages/components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <>
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              {post.frontmatter.title}
              <Post post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // get files
  const files = fs.readdirSync(path.join("posts"));

  // get slug & front-matter
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: { posts: posts.sort(sortByDate) },
  };
}
