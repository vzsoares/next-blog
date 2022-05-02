// https://www.youtube.com/watch?v=MrjeefD8sac&ab_channel=TraversyMedia
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../packages/components/Post";
import { sortByDate } from "../utils";
import { Grid, Box } from "@chakra-ui/react";

export default function Home({ posts }) {
  return (
    <Grid
      // columns={{ base: 1, sm: 2, md: 3 }}
      templateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      maxWidth='998px'
      p='5px'
      gap='5px'
      justifyItems='center'
      margin='0 auto'
    >
      {posts.map((post, index) => {
        return (
          <>
            <Post post={post} />
          </>
        );
      })}
    </Grid>
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
