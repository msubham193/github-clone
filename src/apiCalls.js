import axios from "axios";

const fetchData = async (username = "", per_page = "2", page = "1") => {
  //Users Data Fetching....
  const { data } = await axios.get(`https://api.github.com/users/${username}`);

  //Repository Fetching
  const res = await axios.get(
    `${data.repos_url}?q=addClass+user:mozilla&per_page=${per_page}&page=${page}`
  );

  console.log(res.data);
  return { data, res };
};

export default fetchData;
