import React from "react";

export default function User({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  contract,
  postedAt,
  location,
  role,
  level,
  tools,
  languages,
}) {
  const rolesLevel = [role, level];

  return (
    <section className={` ${isFeatured ? "featured" : "company"}`}>
      <div className="logo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="desktop_wrapper">
        <div className="company-wrapper">
          <h2 className="company__name">{company}</h2>

          {isNew ? <p className="isNew">NEW!</p> : ""}
          {isFeatured ? <p className="isFeatured">FEATURED</p> : ""}
        </div>
        <p className="company__post">{position}</p>
        <div className="infos">
          <p className="posted">{postedAt} •</p>
          <p className="work_time">{contract} •</p>
          <p className="job_place">{location}</p>
        </div>
      </div>
      <hr />
      <div className="skills">
        {rolesLevel.map((display, index) => (
          <button key={index}>{display}</button>
        ))}
        {languages.map((display, index) => (
          <button key={index}>{display}</button>
        ))}
        {tools.map((display, index) => (
          <button key={index}>{display}</button>
        ))}
      </div>
    </section>
  );
}
