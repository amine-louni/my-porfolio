import React from "react";
import { Heading, Container, Flex } from "@chakra-ui/layout";
import RecentArticle from "./RenectArticle";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IPost } from "../types/merge";

interface IRecentArticles {
  postsData: [];
}

function RecentArticles({ postsData }: IRecentArticles) {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent Posts
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" gridGap="1.5">
          {postsData.map((post: IPost) => (
            <RecentArticle
              imgUrl={post.logo[0].url}
              title={post.title}
              slug={post.slug}
              createdAt={post.updatedAt}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default RecentArticles;
