import React from "react";

function GetComments({ data }) {
  return (
    data &&
    data.map((item, index) => (
      <div key={item + index}>
        <p>{item.user}</p>
        <p>{item.comment}</p>
        <p>{item.date}</p>
      </div>
    ))
  );
}

export default GetComments;
