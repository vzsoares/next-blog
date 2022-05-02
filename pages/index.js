// https://www.youtube.com/watch?v=MrjeefD8sac&ab_channel=TraversyMedia
export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <p>main page</p>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: "the posts" },
  };
}
