import { Box, Container, Heading, HStack, Text } from "@chakra-ui/layout";
import { fetchAllPosts, fetchOnePost } from "lib/apiFetch";
import { GetStaticPropsContext, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import PostPreview from "components/PostPreview";
import { IPost } from "types/merge";
import { Tag } from "@chakra-ui/tag";
import dayjs from "dayjs";

function Post({ postData }: any) {
  return (
    <>
      <Head>
        {/* <!--  Essential META Tags --> */}
        <meta name="description" content={postData.title} />
        <meta name="keywords" content={postData.keywords} />
        <meta name="author" content="Amine louni" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.summary} />
        <meta property="og:image" content={postData.logo[0].url} />
        {/* <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        /> */}
        <meta name="twitter:card" content={postData.logo[0].url} />

        {/* <!--  Non-Essential, But Recommended --> */}

        <meta property="og:site_name" content={postData.title} />
        <meta name="twitter:image:alt" content={postData.logo[0].url} />

        {/* <!--  Non-Essential, But Required for Analytics --> */}

        {/* <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username" /> */}
      </Head>
      <Container maxW="container.xl">
        <HStack align="start">
          <Image src={postData.logo[0].url} height="80" width="80" />
          <Box marginLeft="30px">
            <Heading as="h1" marginBottom="3">
              {postData.title}
            </Heading>
            <Text marginBottom="3">
              {dayjs(postData.createdAt).format("DD MMM YYYY")}
            </Text>
            <Text>
              {postData.keywords.split(",").map((keyword: string) => {
                return <Tag mr="1">{keyword}</Tag>;
              })}
            </Text>
          </Box>
        </HStack>

        <Box
          backgroundPosition="center"
          backgroundAttachment="fixed"
          backgroundImage={`url(${postData.thumbnail[0].url})`}
          rounded="md"
          my="5"
          height="300"
          overflow="hidden"
        >
          {/* <img
          src={postData.thumbnail[0].url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        /> */}
        </Box>
      </Container>
      <Container maxW="container.xl">
        <PostPreview markdown={postData.text} />
      </Container>
    </>
  );
}
export const getStaticPaths = async () => {
  const data: [IPost] = await fetchAllPosts();

  const paths = data.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  // you also have access to the param postId from the context
  const { slug } = context.params!;

  const post = await fetchOnePost(slug);

  return {
    props: { postData: post[0] },
  };
};
export default Post;
