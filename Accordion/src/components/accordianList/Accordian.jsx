import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSelection(getSelectedId) {
    setSelected(getSelectedId);
  }
  return (
    <div>
      {data && data.length ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div className="title" onClick={() => handleSelection(dataItem.id)}>
              <h2>{dataItem.question}</h2>
              <span>+</span>
            </div>

            {selected === dataItem.id ? (
              <div className="answer">{dataItem.answer}</div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}

export default Accordian;
