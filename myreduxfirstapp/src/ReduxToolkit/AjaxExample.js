import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {geData, setData} from "./ajaxSlice";

export const AjaxExample = () => {
  const data = useSelector(geData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      dispatch(setData(res.data));
    });
  }, []);
  return (
    <div>
      {data?.map((obj) => {
        return <h1>{obj.title}</h1>;
      })}
    </div>
  );
};
