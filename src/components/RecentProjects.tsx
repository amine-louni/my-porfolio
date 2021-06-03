import React from "react";
import {
  Heading,
  Container,
  LinkBox,
  Box,
  LinkOverlay,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/layout";
import RecentProject from "./RenectProject";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function RecentProjects() {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent projects{" "}
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" gridGap="1.5">
          <RecentProject />
          <RecentProject />
          <RecentProject />
        </Flex>
      </Container>
    </section>
  );
}

export default RecentProjects;
