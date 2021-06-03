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

function RecentArticles() {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent Posts{" "}
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" gridGap="1.5">
          <RecentArticle
            imgUrl="/vue.png"
            title="how to use Vue context"
            slug="how-to-use-vue-context"
            createdAt="20, Jun 2020"
          />
          <RecentArticle
            imgUrl="/react.png"
            title="When to use use memo "
            slug="how-to-use-vue-context"
            createdAt="05, May 2020"
          />
          <RecentArticle
            imgUrl="/firebase.png"
            title="Build a real chat app with firbase only"
            slug="how-to-use-vue-context"
            createdAt="19, August 2021"
          />
        </Flex>
      </Container>
    </section>
  );
}

export default RecentArticles;
