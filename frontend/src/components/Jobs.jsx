import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const ja = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FilterCard />
        {ja.map((item, index) => (
          <Job key={index} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
