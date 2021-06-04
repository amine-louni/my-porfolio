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
import RecentArticle from "./RenectArticle";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Work from "./Work";
import { fetchAllWorks } from "lib/stripeFetch";
interface IWorks {
  worksData: [];
}

function Works({ worksData }: IWorks) {
  console.log(worksData, "data================in");
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent front end Works 🎨{" "}
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" justify="space-between">
          {worksData.map((work, i) => (
            <Work key={i} url={work.url} thumbnail={work.thumbnail[0].url} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default Works;
