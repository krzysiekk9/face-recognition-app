import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="black f3">{`${name}, your currnt entry count is ...`}</div>
      <div className="black f2">{entries}</div>
    </div>
  );
};

export default Rank;
