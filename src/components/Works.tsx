import React from "react";
import { Heading, Container, Flex } from "@chakra-ui/layout";

import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Work from "./Work";

interface IWorks {
  worksData: [Iwork];
}
interface Iwork {
  url: string;
  thumbnail: [{ url: string }];
}

function Works({ worksData }: IWorks) {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent front end Works 🎨{" "}
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" justify="space-between">
          {worksData.map((work, i) => (
            <Work key={i} url={work.url} thumbnail={work.thumbnail[0].url} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default Works;
