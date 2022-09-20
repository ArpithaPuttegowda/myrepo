import React from "react";
import {useSelector} from "react-redux";

export const RenderPosts = () => {
  const posts = useSelector((state) => state?.nameLocReducer?.data);
  return (
    <div>
      <h1>Render Posts</h1>
      {posts?.map((obj) => {
        return <h1>{obj?.title}</h1>;
      })}
    </div>
  );
};
