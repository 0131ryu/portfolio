import { useState, useEffect } from "react";
import axios from "axios";

const useLoadImg = (imgURL) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(imgURL);
        const data = response.data.body;
        const regexURL = /\(([^)]+)\)/;
        const splitImgData = data.split(regexURL);

        const result = splitImgData.filter((str) => str.startsWith("https"));
        setImages(result);
      } catch (error) {
        console.log("error broke out: ", error);
      }
    };
    fetchData();
  }, [imgURL]);

  return images;
};

export default useLoadImg;
