import React from "react";
import { Heading, Container, Box, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

function Tools() {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5" textAlign="center">
          What i mostly use 🛠️
        </Heading>
        <Stack direction="row" wrap="wrap" justify="center" gridGap="3">
          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/firebase.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/react.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/reactnative.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/node.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/vue.png"
              alt="Segun Adebayo"
            />
          </Box>

          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/wordpress.png"
              alt="Segun Adebayo"
            />
          </Box>

          <Box padding="25" background="gray.100" rounded="md">
            <Image
              boxSize="70px"
              objectFit="contain"
              src="/next.png"
              alt="Segun Adebayo"
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
}

export default Tools;
