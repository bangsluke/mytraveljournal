import React from "react";

const MarkdownList = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <strong>{item.filename}</strong>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </li>
      ))}
    </ul>
  );
};

export default MarkdownList;
