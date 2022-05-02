import React from "react";
import Link from "next/link";
import { Image, Text, Heading, Button, Box } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <Box borderWidth='1px' maxWidth='sm' overflow='hidden'>
      <Image
        src={post.frontmatter.cover_image}
        alt='img'
        boxSize='200px'
        margin='0 auto'
      />
      <Box p='2'>
        <Heading margin='0 auto' textAlign='center' size='5xl'>
          {post.frontmatter.title}
        </Heading>
        <Text>{post.frontmatter.excerpt}</Text>
        <Text fontSize='sm'>{post.frontmatter.date}</Text>
        <Link href={`/blog/${post.slug}`}>
          <Button>read more</Button>
        </Link>
      </Box>
    </Box>
  );
}
