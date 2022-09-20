import axios from "axios";
import React from "react";
import {useDispatch} from "react-redux";

export const GetData = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      dispatch({
        type: "POSTS",
        data: res.data
      })
    );
  };
  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
    </div>
  );
};
