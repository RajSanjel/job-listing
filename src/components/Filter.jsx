import React from "react";
import { clearAll, removeFilter } from "../redux/actions";
import { useDispatch } from "react-redux";
import "../css/filter.css";
export default function Filter(filters) {
  let datas = filters.filters;
  const dispatch = useDispatch();
  return (
    <>
      {true ? (
        <div className="filter">
          <div className="filters">
            {datas?.map((name, index) => (
              <div key={index}>
                <button className="filter-buttons" key={name.id}>
                  <span> {name.data.innerText}</span>
                  <span
                    className="clear-single"
                    onClick={() => {
                      dispatch(removeFilter(name.id));
                    }}
                  >
                    X
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div
            className="clear"
            onClick={() => {
              dispatch(clearAll());
            }}
          >
            <button>Clear</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
