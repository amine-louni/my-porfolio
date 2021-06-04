import React from "react";
import {
  Heading,
  Container,
  LinkBox,
  Box,
  LinkOverlay,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/layout";
import RecentProject from "./RenectProject";
import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface IRecentProjects {
  reposData: [];
}

function RecentProjects({ reposData }: IRecentProjects) {
  return (
    <section style={{ paddingTop: 50 }}>
      <Container maxW="container.xl">
        <Heading as="h2" marginBottom="5">
          Recent projects{" "}
          <Button size="sm" rightIcon={<ArrowForwardIcon />}>
            Show all
          </Button>
        </Heading>
        <Flex flexWrap="wrap" gridGap="1.5">
          {reposData
            .filter((repo) => !repo.fork)
            .filter((repo) => repo.name !== "amine-louni")
            .filter((repo) => repo.name !== "djaw")
            .filter((repo) => repo.name !== "my_portfolio")
            .filter((repo) => repo.name !== "omac_workshop")
            .sort((a, b) => {
              if (a.stargazers_count > b.stargazers_count) return -1;
              else if (a.stargazers_count < b.stargazers_count) return 1;
              return 0;
            })
            .map((name) => (
              <RecentProject
                key={name.id}
                repoName={name.name}
                repoDescription={name.description}
                starNumber={name.stargazers_count}
                language={name.language}
                htmlUrl={name.html_url}
              />
            ))
            .slice(0, 6)}
        </Flex>
      </Container>
    </section>
  );
}

export default RecentProjects;
