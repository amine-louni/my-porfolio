import { Box } from "@chakra-ui/layout";

import SomeText from "components/SomeText";
import SomeImage from "components/SomeImage";
import CTASection from "components/CTASection";
import Hero from "components/Hero";
import RecentProjects from "components/RecentProjects";
import RecentArticles from "components/RecentArticles";
import Tools from "components/Tools";
import Works from "components/Works";
import { fetchAllPosts, fetchAllRepos, fetchAllWorks } from "lib/stripeFetch";

interface IHome {
  worksData: [];
  reposData: [];
  postsData: [];
}

const Home = ({ worksData, reposData, postsData }: IHome) => {
  return (
    <>
      <Hero />
      <RecentProjects reposData={reposData} />
      <RecentArticles postsData={postsData} />
      <Tools />
      <Works worksData={worksData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const worksData = await fetchAllWorks();
  const reposData = await fetchAllRepos();
  const postsData = await fetchAllPosts();
  return {
    props: {
      worksData,
      reposData,
      postsData,
    },
  };
};

export default Home;
