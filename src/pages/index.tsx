import Hero from "components/Hero";
import RecentProjects from "components/RecentProjects";
import RecentArticles from "components/RecentArticles";
import Tools from "components/Tools";
import Works from "components/Works";
import { fetchAllPosts, fetchAllRepos, fetchAllWorks } from "lib/apiFetch";

interface Iwork {
  url: string;
  thumbnail: [{ url: string }];
}
interface IRepo {
  id: string;
  stargazers_count: string;
  name: string;
  fork: boolean;
  description: string;
  language: string;
  html_url: string;
  starNumber: string;
}

interface IHome {
  worksData: [Iwork];
  reposData: [IRepo];
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

export const getStaticProps = async () => {
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
