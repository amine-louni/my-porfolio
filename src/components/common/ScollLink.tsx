import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { IconType } from "react-icons/lib";
import { Link } from "react-scroll";

interface IScrollLink {
  text: string;
  to: string;
  icon: IconType;
  offset?: number;
}

export default function ScollLink({ icon, to, offset = 0, text }: IScrollLink) {
  const { colorMode } = useColorMode();
  return (
    <Link
      to={to}
      spy={true}
      containerId="main"
      offset={offset}
      smooth={true}
      duration={500}
    >
      <Tooltip
        placement="right-start"
        hasArrow
        label={text.toLocaleUpperCase()}
        aria-label="A tooltip"
      >
        <Flex
          rounded="lg"
          transition="all 200ms ease-in-out"
          padding="17px 12px"
          _hover={{
            cursor: "pointer",
            backgroundColor: "purple.500",
            boxShadow: "lg",
          }}
          align="center"
          justify="center"
        >
          <Icon
            color={colorMode === "light" ? "#FFF" : "#000"}
            as={icon}
            w={30}
            h={30}
          />
        </Flex>
      </Tooltip>
    </Link>
  );
}
