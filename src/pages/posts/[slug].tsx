import { Box, Container, Heading, HStack } from "@chakra-ui/layout";
import { fetchOnePost } from "lib/stripeFetch";
import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import PostPreview from "components/PostPreview";

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
      <HStack>
        <Image src={postData.logo[0].url} height="80" width="80" />
        <Heading as="h1">{postData.title}</Heading>
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
      <Container maxW="container.lg">
        <PostPreview markdown={postData.text} />
      </Container>
      <div>{postData.logo[0].url}</div>
      <div>{postData.tags}</div>
      <div>{postData.thumbnail[0].url}</div>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  // you also have access to the param postId from the context
  const { slug } = context.query;

  const post = await fetchOnePost(slug);

  return {
    props: { postData: post[0] },
  };
};
export default Post;
