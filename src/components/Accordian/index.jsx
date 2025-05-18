// single selection first
import React, { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple=[...multiple]; // clone the current state
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);// check if id already selected

    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId); // if not selected add it
    else cpyMultiple.splice(findIndexOfCurrentId, 1); // if already selected then remove it

    setMultiple(cpyMultiple) // update state
  }

  console.log(selected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="Accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && 
                <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
