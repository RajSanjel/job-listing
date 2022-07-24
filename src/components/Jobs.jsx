import React from "react";
import Job from "./subComponent/Job";
import jobApi from "../api/jobs.json";
import Filter from "./Filter";
import "../css/jobs.css";
import "../css/job.css";
import { useDispatch, useSelector } from "react-redux";

function Jobs() {
  const Datas = jobApi;
  const list = useSelector((state) => {
    return state.addFilter.list;
  });
  let a = [];
  let filterData = [];
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    a.push(element.data.innerHTML);
    for (let j = 0; j < a.length; j++) {
      const element = a[j];
      filterData = Datas.filter(
        (data) =>
          data.role === element ||
          data.level === element ||
          data.languages[0] === element ||
          data.languages[1] === element ||
          data.languages[2] === element ||
          data.languages[3] === element ||
          data.tools[0] === element ||
          data.tools[1] === element ||
          data.tools[2] === element
      );
    }
  }
  if (filterData.length === 0 && a.length === 0) {
    filterData = jobApi;
  }
  const dispatch = useDispatch();

  return (
    <main>
      <Filter filters={list} />
      {filterData.map((name, index) => (
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
