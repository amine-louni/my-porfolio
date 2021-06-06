import { useColorMode } from "@chakra-ui/color-mode";

import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

import ScrollLink from "../common/ScollLink";
import {
  AiOutlineContacts,
  AiOutlineControl,
  AiOutlineFolder,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Navigation = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="nav"
      zIndex="5"
      background={colorMode === "light" ? "purple.300" : "#D6B6FA"}
      display={["none", "flex", "flex", "flex"]}
      height="100vh"
      transition="all 300ms ease-in-out"
      width="90px"
      justifyContent="center"
    >
      <Flex flexDirection="column" minHeight="min-content" height="100%">
        <Flex flexGrow={1} flexDirection="column" justifyContent="center">
          <Flex height="100%" flexDirection="column" justify="space-evenly">
            <ScrollLink
              icon={AiOutlineHome}
              text="home"
              to="home"
              offset={-600}
            />
            <ScrollLink icon={AiOutlineUser} text="about" to="about" />
            <ScrollLink icon={AiOutlineFolder} text="posts" to="posts" />
            <ScrollLink icon={AiOutlineControl} text="tools" to="tools" />
            <ScrollLink icon={AiOutlineContacts} text="contact" to="contact" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
