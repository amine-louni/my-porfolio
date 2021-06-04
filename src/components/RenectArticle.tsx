import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, LinkBox, Text, VStack } from "@chakra-ui/layout";

import Link from "next/link";

interface IRenectArticle {
  slug: string;
  imgUrl: string;
  title: string;
  createdAt: string;
}

function RenectArticle({ slug, imgUrl, title, createdAt }: IRenectArticle) {
  return (
    <LinkBox width={"100%"} mb="1">
      <Link href={`/posts/${slug}`}>
        <HStack p="1">
          <Image src={imgUrl} width="6" height="6" />

          <Button
            variant="ghost"
            justifyContent="start"
            style={{ padding: "20px", flexGrow: 1, textAlign: "left" }}
            fontWeight="500"
            size="lg"
          >
            <Box textAlign="left">
              <Heading as="h5" size="md" fontWeight="500">
                {title}
              </Heading>
            </Box>
          </Button>
        </HStack>
      </Link>
    </LinkBox>
  );
}

export default RenectArticle;
