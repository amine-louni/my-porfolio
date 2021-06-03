import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, LinkBox, Text, VStack } from "@chakra-ui/layout";

import Link from "next/link";

import React from "react";

interface IRenectArticle {
  slug: string;
  imgUrl: string;
  title: string;
  createdAt: string;
}

function RenectArticle({ slug, imgUrl, title, createdAt }: IRenectArticle) {
  return (
    <LinkBox width={"100%"} mb="1">
      <Link href={`/article/${slug}`} as="article">
        <HStack p="1">
          <Image src={imgUrl} width="6" height="6" />

          <Button variant="ghost" fontWeight="500" size="lg">
            <Box textAlign="left">
              <Text fontSize="sm">{createdAt}</Text>
              {title}
            </Box>
          </Button>
        </HStack>
      </Link>
    </LinkBox>
  );
}

export default RenectArticle;
