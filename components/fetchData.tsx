import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataByKey } from "../redux-handler/reducers/dataReducer";
import { getRequestParallel, ParallelApiCalling } from "../services/request";

const FetchData = ({ children }: any) => {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res: any = await ParallelApiCalling([
      getRequestParallel("https://jsonplaceholder.typicode.com/posts"),
      getRequestParallel("https://jsonplaceholder.typicode.com/users"),
      getRequestParallel("https://jsonplaceholder.typicode.com/comments"),
    ]);
    if (res && res.length > 0) {
      const posts = res[0]?.data;
      const users = res[1]?.data;
      const comments = res[2]?.data;

      if (posts.length > 0) {
        dispatch(
          setDataByKey({
            key: "posts",
            data: posts,
          })
        );
      }
      if (users.length > 0) {
        dispatch(
          setDataByKey({
            key: "users",
            data: users,
          })
        );
      }
      if (comments.length > 0) {
        dispatch(
          setDataByKey({
            key: "comments",
            data: comments,
          })
        );
      }

      setLoading(false);
    }
  };
  if (isLoading) return <div>Loading.....</div>;
  return <>{children}</>;
};

export default FetchData;
