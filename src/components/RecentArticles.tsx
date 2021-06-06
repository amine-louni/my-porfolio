import React from "react";
import { Heading, Container, Flex } from "@chakra-ui/layout";

import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IPost } from "../types/merge";
import BlogPost from "./BlogPost";
import Link from "next/link";

interface IRecentArticles {
  postsData: [];
}

function RecentArticles({ postsData }: IRecentArticles) {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent Posts {"  "}
          <Link href="/posts">
            <Button
              as="a"
              colorScheme="purple"
              size="sm"
              rightIcon={<ArrowForwardIcon />}
            >
              Show all
            </Button>
          </Link>
        </Heading>
        <Flex flexWrap="wrap" gridGap="1.5">
          {postsData.map((post: IPost) => (
            <BlogPost
              imgUrl={post.thumbnail[0].url}
              title={post.title}
              slug={post.slug}
              createdAt={post.updatedAt}
              keywords={post.keywords}
              summary={post.summary}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default RecentArticles;
