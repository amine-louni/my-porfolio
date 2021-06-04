import axios from "axios";

export const fetchAllWorks = async () => {
  const res = await axios.get("https://portfolio-al.herokuapp.com/works");
  const works = res.data;
  return works;
};

export const fetchAllRepos = async () => {
  const res = await axios.get(
    "https://api.github.com/users/amine-louni/repos?type=sources",
    {
      headers: {
        "Content-Type": "application/vnd.github.v3+json",
      },
    }
  );
  const works = res.data;
  return works;
};
export const fetchAllPosts = async () => {
  const res = await axios.get("https://portfolio-al.herokuapp.com/articles");
  const works = res.data;
  return works;
};

export const fetchOnePost = async (slug: string | string[] | undefined) => {
  try {
    const res = await axios.get(
      `https://portfolio-al.herokuapp.com/articles?slug=${slug}`
    );

    const post = res.data;
    return post;
  } catch {
    (err: Error) => console.log(err);
  }
};
