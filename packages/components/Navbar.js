import Link from "next/link";
import { Divider, Heading } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <>
      <nav style={{ marginLeft: "0.5rem" }}>
        <Link href='/'>
          <Heading>Next Blog</Heading>
        </Link>
      </nav>
      <Divider />
    </>
  );
}
