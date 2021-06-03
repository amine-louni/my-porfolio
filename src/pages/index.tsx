import { Box } from "@chakra-ui/layout";

import SomeText from "components/SomeText";
import SomeImage from "components/SomeImage";
import CTASection from "components/CTASection";
import Hero from "components/Hero";
import RecentProjects from "components/RecentProjects";
import RecentArticles from "components/RecentArticles";
import Tools from "components/Tools";

const Home = () => {
  return (
    <>
      <Hero />
      <RecentProjects />
      <RecentArticles />
      <Tools />
    </>
  );
};

export default Home;
