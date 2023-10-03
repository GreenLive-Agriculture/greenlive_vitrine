import React from "react";

const ScrollView = (id) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
};

export default ScrollView;

