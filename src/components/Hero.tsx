import React from "react";
import { Button } from "@chakra-ui/button";

import { Box, Flex, Heading, Container, VStack, Text } from "@chakra-ui/layout";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowForwardIcon } from "@chakra-ui/icons";

function Hero() {
  return (
    <header className="hero">
      <Container maxW="container.xl">
        <Flex flexWrap="wrap" my="20">
          <VStack height="100%" justifyContent="center" align="start">
            <Box>
              <Heading as="h1">Hy i'm Amine </Heading>
              <Box padding={4} borderRadius={4} marginY="8">
                <Text fontSize="2xl">
                  💡 A developer from Algeria . I create bespoke websites &amp;
                  mobile apps to help people go further online 🚀.
                </Text>
                <Text marginTop="5" fontSize="lg">
                  I'm currently working as a Mobile developer at Goldencorp, You
                  can check my previous work history on LinkedIn , i'm
                  specialize in JavaScript I also have experience working on
                  MERN stack and building SEO friendly universal websites with
                  React(Next.js) + Strapi / Express.js
                </Text>
              </Box>
              <Button size="lg" rightIcon={<ArrowForwardIcon />}>
                Contact me
              </Button>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </header>
  );
}

export default Hero;
