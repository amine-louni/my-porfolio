import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/layout";
import React from "react";

function RenectProject({
  repoName,
  repoDescription,
  starNumber,
  language,
  htmlUrl,
}) {
  return (
    <LinkBox
      width={["100%", "100%", "49%", "49%"]}
      as="a"
      p="5"
      href={htmlUrl}
      borderWidth="1px"
      rounded="md"
    >
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
        <Badge>{language}</Badge>
      </Box>
      <Heading size="md" my="2">
        <LinkOverlay isExternal href={htmlUrl}>
          {repoName}
        </LinkOverlay>
      </Heading>
      <Text>{repoDescription}</Text>
      <HStack align="center">
        <span> {starNumber} </span>
        <StarIcon />
      </HStack>
    </LinkBox>
  );
}

export default RenectProject;
