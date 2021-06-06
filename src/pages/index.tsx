import About from "components/About";
import Contact from "components/Contact";
import Hero from "components/Hero";

import RecentArticles from "components/RecentArticles";
import Tools from "components/Tools";
import Works from "components/Works";
import { fetchAllPosts, fetchAllRepos, fetchAllWorks } from "lib/apiFetch";
import { useRef } from "react";
import { Element } from "react-scroll";

interface Iwork {
  url: string;
  thumbnail: [{ url: string }];
}

interface IHome {
  worksData: [Iwork];
  postsData: [];
}

const Home = ({ worksData, postsData }: IHome) => {
  const myRef = useRef(null);

  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="tools">
        <Tools />
      </Element>
      <Element name="posts">
        <RecentArticles postsData={postsData} />
      </Element>

      <Element name="works">
        <Works worksData={worksData} />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export const getStaticProps = async () => {
  const worksData = await fetchAllWorks();
  const postsData = await fetchAllPosts();
  return {
    props: {
      worksData,
      postsData,
    },
  };
};

export default Home;
