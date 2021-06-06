import React from "react";
import { Button, IconButton } from "@chakra-ui/button";

import {
  Box,
  Flex,
  Heading,
  Container,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/layout";

import { EmailIcon } from "@chakra-ui/icons";

import { Avatar } from "@chakra-ui/avatar";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { Tooltip } from "@chakra-ui/tooltip";
import { useColorMode } from "@chakra-ui/color-mode";

function Hero() {
  const { colorMode } = useColorMode();
  return (
    <header className="hero">
      <Container maxW="container.xl" height="100%">
        <Flex
          flexWrap="wrap"
          align="center"
          justifyContent="space-between"
          height="100%"
          my="20"
          textAlign={["center", "center", "left"]}
        >
          <Avatar
            size="lg"
            marginEnd="5"
            margin={[
              "0 auto 35px auto",
              "0 auto 35px auto",
              "0 auto 35px auto",
              "0",
            ]}
            width={["25%", "25%", "25%", "25%"]}
            height={["25%", "25%", "25%", "25%"]}
            name="Dan Abrahmov"
            src="/me.jpeg"
          />
          <VStack
            width={["100%", "100%", "100%", "70%"]}
            height="100%"
            justifyContent="center"
            align="start"
          >
            <Box>
              <Text>HI THERE! I'M</Text>
              <Heading as="h1">
                <Text
                  display="inline"
                  color={colorMode === "light" ? "purple.500" : "purple.200"}
                >
                  AMINE
                </Text>{" "}
                LOUNI
              </Heading>
              <Box borderRadius={4} marginY="8">
                <Text fontSize={["xl", "2xl", "3xl", "3xl"]}>
                  A developer from Algeria . I create bespoke websites &amp;
                  mobile apps to help people go further online 🚀.
                </Text>
              </Box>

              <HStack
                gridGap="1"
                marginLeft="auto"
                justify={["center", "center", "start", "start"]}
                marginRight="auto"
              >
                <Tooltip hasArrow label="Download my resume">
                  <Button
                    as="a"
                    download
                    href="/resume.pdf"
                    colorScheme="purple"
                    size="lg"
                  >
                    Resume
                  </Button>
                </Tooltip>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/amine-louni/"
                >
                  <IconButton
                    aria-label="Call Sage"
                    size="lg"
                    fontSize="18px"
                    icon={<RiLinkedinBoxFill />}
                  />
                </a>

                <a target="_blank" href="https://github.com/amine-louni/">
                  <IconButton
                    aria-label="Call Sage"
                    size="lg"
                    fontSize="18px"
                    icon={<RiGithubFill />}
                  />
                </a>

                <a href="mailto: amine.louni.dev@gmail.com">
                  <IconButton
                    aria-label="Call Sage"
                    size="lg"
                    fontSize="18px"
                    icon={<EmailIcon />}
                  />
                </a>
              </HStack>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </header>
  );
}

export default Hero;
