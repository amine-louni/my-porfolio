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
