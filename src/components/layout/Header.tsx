import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { EmailIcon, Icon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/layout";

import AccessibleLink from "components/AccessibleLink";
import { AiFillGithub } from "react-icons/ai";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import NextLink from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Flex align="center">
          <Avatar marginEnd="5" name="Dan Abrahmov" src="/me.jpeg" />
          <Heading as="h1" size="md">
            Amine Louni
          </Heading>
        </Flex>
      </AccessibleLink>

      <HStack gridGap="1" marginLeft="auto">
        <a target="_blank" href="https://www.linkedin.com/in/amine-louni/">
          <IconButton
            aria-label="Call Sage"
            fontSize="20px"
            icon={<RiLinkedinBoxFill />}
          />
        </a>

        <a target="_blank" href="https://github.com/amine-louni/">
          <IconButton
            aria-label="Call Sage"
            fontSize="20px"
            icon={<RiGithubFill />}
          />
        </a>

        <a href="mailto: amine.louni.dev@gmail.com">
          <IconButton
            aria-label="Call Sage"
            fontSize="20px"
            icon={<EmailIcon />}
          />
        </a>
        <a href="tel:  +213661354595">
          <Button aria-label="Call Sage" leftIcon={<PhoneIcon />}>
            +213661354595
          </Button>
        </a>
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};

export default Header;
