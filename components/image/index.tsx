import React, { useEffect, useState } from "react";
import { getQueryRequest } from "../../services/request";

const Avatar = ({ id, className }: any) => {
  const [thumb, setThumb] = useState<any>({});
  useEffect(() => {
    getThumb();
  }, [id]);

  const getThumb = async () => {
    let res = await getQueryRequest(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    setThumb(res);
  };

  return (
    <>
      <img
        src={(thumb && thumb.thumbnailUrl) || ""}
        alt="Image"
        className={`mb-2 ${className} `}
      />
    </>
  );
};

export default Avatar;
