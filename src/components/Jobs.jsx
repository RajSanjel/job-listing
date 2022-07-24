import React from "react";
import Job from "./subComponent/Job";
import jobApi from "../api/jobs.json";
import Filter from "./Filter";
import "../css/jobs.css";
import "../css/job.css";
import { useDispatch, useSelector } from "react-redux";

function Jobs() {
  const Datas = jobApi;
  console.log(Datas);
  let filterData = Datas.filter((data) => data.name !== "Frontend");
  console.log(filterData);
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.addFilter.list;
  });
  return (
    <main>
      <Filter filters={list} />
      {Datas.map((name, index) => (
        <Job
          logo={name.logo}
          key={index}
          company={name.company}
          isFeatured={name.featured}
          isNew={name.new}
          postedAt={name.postedAt}
          contract={name.contract}
          location={name.location}
          position={name.position}
          role={name.role}
          level={name.level}
          tools={name.tools}
          languages={name.languages}
          click={dispatch}
        />
      ))}
    </main>
  );
}

export default Jobs;
