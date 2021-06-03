import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, LinkBox } from "@chakra-ui/layout";

import Link from "next/link";

import React from "react";

interface IRenectArticle {
  slug: string;
  imgUrl: string;
  title: string;
}

function RenectArticle({ slug, imgUrl, title }: IRenectArticle) {
  return (
    <LinkBox width={"100%"} mb="1">
      <Link href={`/article/${slug}`} as="article">
        <HStack p="1">
          <Image src={imgUrl} width="6" height="6" />
          <Button variant="ghost" fontWeight="500" size="lg">
            {title}
          </Button>
        </HStack>
      </Link>
    </LinkBox>
  );
}

export default RenectArticle;
