import React from "react";
import { Heading, Container, Box, Stack, Grid, Text } from "@chakra-ui/layout";
import { Image, useColorMode } from "@chakra-ui/react";

function Tools() {
  const { colorMode } = useColorMode();
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5" textAlign="center">
          What i mostly use 🛠️
        </Heading>

        <Stack direction="row" wrap="wrap" justify="center" gridGap="3">
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/html.svg"
                alt="HTML5"
              />
            </Box>
            <Text mt="1.5">HTML5</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/css.svg"
                alt="CSS3"
              />
            </Box>
            <Text mt="1.5">HTML5</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/sass.svg"
                alt="sass"
              />
            </Box>
            <Text mt="1.5">SASS</Text>
          </Box>

          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/typescript.svg"
                alt="typescript"
              />
            </Box>
            <Text mt="1.5">Typescript 🚀</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/javascript.svg"
                alt="javascript"
              />
            </Box>
            <Text mt="1.5">Javascript</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/react.svg"
                alt="react"
              />
            </Box>
            <Text mt="1.5">React</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/vue.png"
                alt="react"
              />
            </Box>
            <Text mt="1.5">Vue</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/jquery.svg"
                alt="react"
              />
            </Box>
            <Text mt="1.5">Jquery</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/git.svg"
                alt="react"
              />
            </Box>
            <Text mt="1.5">GIT</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/api.svg"
                alt="react"
              />
            </Box>
            <Text mt="1.5">Rest API</Text>
          </Box>

          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/firebase.svg"
                alt="firebase"
              />
            </Box>
            <Text mt="1.5">Firebase ️‍🔥</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/node.svg"
                alt="Node"
              />
            </Box>
            <Text mt="1.5">Node js</Text>
          </Box>

          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/mongo.svg"
                alt="Mongo db"
              />
            </Box>
            <Text mt="1.5">Mongo db</Text>
          </Box>
          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/wordpress.png"
                alt="firebase"
              />
            </Box>
            <Text mt="1.5">Wordpress</Text>
          </Box>

          <Box textAlign="center">
            <Box
              boxShadow="lg"
              padding="25"
              margin="4"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.400"}
              rounded="md"
            >
              <Image
                rounded="lg"
                boxSize="50px"
                objectFit="contain"
                src="/vscode.svg"
                alt="firebase"
              />
            </Box>
            <Text mt="1.5">Vs code</Text>
          </Box>
        </Stack>
      </Container>
    </section>
  );
}

export default Tools;
