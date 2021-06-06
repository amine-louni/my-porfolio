import { Button } from "@chakra-ui/button";
import { Container, Heading } from "@chakra-ui/layout";
import RecentArticles from "components/RecentArticles";
import RecentArticle from "components/RenectArticle";
import { fetchAllPosts } from "lib/apiFetch";
import React from "react";
import { IPost } from "types/merge";

interface IIndex {
  postsData: [];
}

const Index = ({ postsData }: IIndex) => {
  return (
    <Container maxW="container.xl" minHeight="70vh">
      <Heading marginTop="20" marginBottom="10">
        All posts
      </Heading>
      {postsData.map((post: IPost) => {
        return (
          <RecentArticle
            createdAt={post.updatedAt}
            imgUrl={post.logo[0].url}
            slug={post.slug}
            title={post.title}
          />
        );
      })}
    </Container>
  );
};

export const getStaticProps = async () => {
  const postsData = await fetchAllPosts();
  return {
    props: {
      postsData,
    },
  };
};

export default Index;
