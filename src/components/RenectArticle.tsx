import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, LinkBox, Text, VStack } from "@chakra-ui/layout";
import dayjs from "dayjs";
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
          <Image src={imgUrl} width="10" height="10" />

          <Button
            variant="ghost"
            justifyContent="start"
            style={{ padding: "20px", flexGrow: 1, textAlign: "left" }}
            fontWeight="500"
            size="lg"
          >
            <Box textAlign="left">
              <Heading as="h3" size="lg" fontWeight="500">
                {title}
              </Heading>
              <Text mt="0.5" fontWeight="300" fontSize="small">
                {dayjs(createdAt).format("DD MM YYYY")}
              </Text>
            </Box>
          </Button>
        </HStack>
      </Link>
    </LinkBox>
  );
}

export default RenectArticle;
