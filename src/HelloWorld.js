// src/HelloWorld.js
import React from "react";

const HelloWorld = ({ name = "World" }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <img src="logo192.png" alt="Logo"></img>
    </>
  );
};
export default HelloWorld;
