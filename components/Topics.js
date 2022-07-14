import React from "react";
import Topic from "./Topic";
const Topics = () => {
  return (
    <div className="flex mt-4">
      <Topic />
      <div className="ml-12">
        <Topic />
      </div>
      <div className="ml-12">
        <Topic />
      </div>
      <div className="ml-12">
        <Topic />
      </div>
      <div className="ml-12">
        <Topic />
      </div>
    </div>
  );
};

export default Topics;
