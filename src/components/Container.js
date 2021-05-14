import React from "react";
import API from "/utils/API";

const apiDATA = API.getUsers().then((res) => {
  console.log(res.data.results);
});

const Container = () => {
  return;
  <div className="body">Directory Info will go here</div>;
};

export default Container;
