import React from "react";
import Job from "./subComponent/Job";
import jobApi from "../api/jobs.json";
import "../css/jobs.css";
import "../css/job.css";

function Jobs() {
  const Datas = jobApi;
  return (
    <main>
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
        />
      ))}
    </main>
  );
}

export default Jobs;
