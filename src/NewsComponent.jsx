import "./NewsComponent.css";
import { useState } from "react";

function NewsComponent({ title, items }) {
  const newsHtml = items.map((item) => {
    return <p key={item}>{item}</p>;
  });

  return (
    <div className="news-component-root">
      <div className="news-container">
        <h1>{title}</h1>
        <div>{newsHtml}</div>
      </div>
    </div>
  );
}

export default NewsComponent;
