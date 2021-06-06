import { Container, Heading, Link, Text } from "@chakra-ui/layout";

import React from "react";

export default function About() {
  return (
    <Container maxW="container.xl">
      <Heading mb="5">About</Heading>

      <Text fontSize="2xl">
        My name is Amine louni, I'm a web developer based in Algeria . I
        describe myself as a passionate developer who loves coding, open source,
        and the web platform ❤️. Aside from my job, I like to create and
        contribute to open source projects. That helps me to learn a ton of new
        stuff, grow as a developer and support other open source projects. Also
        I enjoy writing technical things ✍️ at my blog.
        <br /> I'm currently working as a Mobile developer at Goldencorp, You
        can check my previous work history on{" "}
        <Link target="_blank" href="#" fontWeight="600" color="purple">
          LinkedIn{" "}
        </Link>
        , i'm specialize in JavaScript I also have experience working on MERN
        stack and building SEO friendly universal websites with React(Next.js) +
        Strapi / Express.js
      </Text>
    </Container>
  );
}
