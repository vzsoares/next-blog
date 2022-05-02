import React from "react";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div>
      <img
        style={{ width: "60px" }}
        src={post.frontmatter.cover_image}
        alt=''
      />
      <p>{post.frontmatter.date}</p>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a>read more</a>
      </Link>
    </div>
  );
}
