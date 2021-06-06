import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Container maxW="container.xl" paddingY="20px">
      <Flex
        as="footer"
        justify="space-between"
        width="full"
        mt="15"
        align="center"
      >
        <Text>
          {new Date().getFullYear()} - <Link isExternal>Amine Louni</Link>
        </Text>
        <HStack gridGap="3">
          <Link
            aria-label="Deploy to Netlify"
            isExternal
            href="https://app.netlify.com/"
          >
            <Image height="7" src="/vercel.png" alt="Netlify deploy button" />
          </Link>
          <Link
            aria-label="Deploy to strapi"
            isExternal
            href="https://app.netlify.com/"
          >
            <Image height="7" src="/strapi.svg" alt="Netlify strapi button" />
          </Link>{" "}
          <Link
            aria-label="Deploy to strapi"
            isExternal
            href="https://app.netlify.com/"
          >
            <Image height="7" src="/next.png" alt="Netlify strapi button" />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Footer;
