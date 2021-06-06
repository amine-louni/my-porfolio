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
          <Image height="7" src="/vercel.png" alt="Netlify deploy button" />

          <Image height="7" src="/strapi.svg" alt="Netlify strapi button" />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Footer;
