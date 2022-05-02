import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { Image, Text, Heading, Button, Box, Divider } from "@chakra-ui/react";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  content,
}) {
  return (
    <Box p='5px'>
      <Heading className=''>{title}</Heading>

      <Text fontSize='sm' className=''>
        {date}
      </Text>

      <Image src={cover_image} alt='cover_image' maxW='500px' w='70%' />

      <Divider mt='5px' />

      <div
        className=''
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
      ></div>

      <Button>
        <Link href='/'>go back</Link>
      </Button>
    </Box>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return { props: { frontmatter, slug, content } };
}
