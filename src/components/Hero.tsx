import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Container, VStack, Text } from "@chakra-ui/layout";
import { useTheme } from "@emotion/react";

import Image from "next/image";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SomeImage from "./SomeImage";
import { ArrowForwardIcon } from "@chakra-ui/icons";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,

  autoplaySpeed: 2000,
};
function Hero() {
  const { breakpoints, colors } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <header className="hero">
      <Container maxW="container.xl">
        <Flex flexWrap="wrap" height="400px">
          <VStack
            width={["100%", "70%"]}
            height="100%"
            justifyContent="center"
            align="start"
          >
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
          <Flex
            height="100%"
            justify="center"
            align="center"
            width={["100%", "30%"]}
          >
            <SomeImage />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

export default Hero;
