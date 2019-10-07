import React from "react";

const Loading = props => {
  return props.data === {} && <h1>Wait,please</h1>;
};

export default Loading;
