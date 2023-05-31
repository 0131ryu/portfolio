import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import axios from "axios";

const useOctokit = async () => {
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_API_KEY,
      });

      const result = await octokit.request("/user");
      const data = result.data;
      const repos_url = data.repos_url;

      try {
        const response = await axios.get(repos_url);
        const portfolioData = response.data[8];
        const issue_url = portfolioData.issues_url;
        const img_url = issue_url.replace("{/number}", "/2");
        setImgURL(img_url);

        console.log(imgURL);
      } catch (error) {
        console.log("error broke out:  ", error);
      }
    };
    fetchData();
  }, []);
  return imgURL;
};

export default useOctokit;
